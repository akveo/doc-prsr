import { DocJsParser } from './doc-js.parser/doc-js.parser';
import { TypedocParser } from './typedoc.parser/typedoc.parser';
import {
  Metadata,
  Generator,
  Framework
} from './model/metadata/metadata';
import * as fs from 'fs';
import * as Path from 'path';
const program = require('commander');

program
  .version('0.0.1')
  .option('-g, --generator <value>', 'Generator:')
  .option('-f, --framework <value>', 'Framework:')
  .option('-i, --input <value>', 'Path to input file:')
  .option('-o, --output <value>', 'Path to output file: ');

program.on('--help', function () {
  console.log('You have to specify:');
  console.log('- generator (can be 2 types: typedoc, docjs)');
  console.log('- framework (can be 2 types: angular, react)');
  console.log('- pathes to input and output file (output file will be created)');
  console.log('For example: ');
  console.log('prsr -g typedoc -f angular -i input.json -o output.json');
});

program.parse(process.argv);

if (program['generator'] && program['framework'] && program['input'] && program['output']) {
  create(program['generator'], program['framework'], Path.resolve(program['input']), Path.resolve(program['output']));
} else {
  console.log('You entered the wrong data! Use --help for getting information');
}


function create(generator: Generator, framework: Framework, inputPath: string, outputPath: string) {
  if (generator === 'docjs' && framework === 'react') {
    selectedParser('docjs', inputPath, outputPath);
  } else if (generator === 'typedoc' && framework === 'angular') {
    selectedParser('typedoc', inputPath, outputPath);
  } else {
    console.log('You entered the wrong data! Use --help for getting information');
  }
}

function selectedParser(parser: string, inputPath: string, outputPath: string) {
  let newdoc: any = {};

  fs.readFile(inputPath, (err: any, data: any) => {
    if (parser === 'docjs') {
      newdoc = new DocJsParser().parse(JSON.parse(data), new Metadata('javascript', 'docjs', 'react'));
    } else if (parser === 'typedoc') {
      newdoc = new TypedocParser().parse(JSON.parse(data), new Metadata('typescript', 'typedoc', 'angular'));
    }
    const outputObj: string = JSON.stringify(newdoc, null, 2);
    fs.writeFileSync(outputPath, outputObj);
  });
}