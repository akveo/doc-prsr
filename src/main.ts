import { TypedocParser } from './typedoc.parser/typedoc.parser';
import { ReactNativeParser } from './reactNative.parser/reactNative.parser';
import { DocJsParser } from './doc-js.parser/doc-js.parser';
import {
  Metadata,
  Generator,
  Framework
} from './model';
import * as fs from 'fs';
import * as Path from 'path';

const program = require('commander');
const parsers: string[] = ['typedoc', 'docjs'];
const frameworks: string[] = ['angular', 'react'];

program
  .version('2.2.3')
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
  const generatorValid: boolean = parsers
    .some((parser: string) => parser === generator);
  const frameworkValid: boolean = frameworks
    .some((frameworkItem: string) => frameworkItem === framework);

  if (generatorValid && frameworkValid) {
    selectedParser(generator, framework, inputPath, outputPath);
  } else {
    console.log('You entered the wrong data! Use --help for getting information');
  }
}

function selectedParser(parser: string, framework: string, inputPath: string, outputPath: string) {
  let newdoc: any = {};

  fs.readFile(inputPath, (err: any, data: any) => {
    if (parser === 'typedoc' && framework === 'react') {
      newdoc = new ReactNativeParser().parse(JSON.parse(data), new Metadata('typescript', 'typedoc', 'react'));
    } else if (parser === 'typedoc' && framework === 'angular') {
      newdoc = new TypedocParser().parse(JSON.parse(data), new Metadata('typescript', 'typedoc', 'angular'));
    } else if (parser === 'docjs' && framework === 'react') {
      newdoc = new DocJsParser().parse(JSON.parse(data), new Metadata('javascript', 'docjs', 'react'));
    }
    const outputObj: string = JSON.stringify(newdoc, null, 2);
    fs.writeFileSync(outputPath, outputObj);
  });
}
