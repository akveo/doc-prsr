import { DocJsParser } from './doc-js.parser/doc-js.parser';
import { TypedocParser } from './typedoc.parser/typedoc.parser';
import { Metadata } from './model/metadata/metadata';
import * as fs from 'fs';
import * as Path from 'path';
const program = require('commander');

export class InputOutput {
  inputStr: any = '';
  outputStr: any = '';
  generator: any = '';
  framework: any = '';

  setParams(): boolean {
    program
      .version('0.0.1')
      .option('-g, --generator <value>', 'Generator:')
      .option('-f, --framework <value>', 'Framework:')
      .option('-i, --input <value>', 'Path to input file:')
      .option('-o, --output <value>', 'Path to output file: ');

    program.on('--help', function(){
      console.log('You have to specify:');
      console.log('- generator (can be 2 types: typedoc, docjs)');
      console.log('- framework (can be 2 types: angular, react)');
      console.log('- pathes to input and output file (output file will be created)');
      console.log('For example: ');
      console.log('prsr -g typedoc -f angular -i input.json -o output.json');
    });

    program.parse(process.argv);

    if (program['generator'] && program['framework'] && program['input'] && program['output']) {
      this.inputStr = Path.resolve(program['input']);
      this.outputStr = Path.resolve(program['output']);
      this.generator = program['generator'];
      this.framework = program['framework'];
      return true;
    } else {
      console.log('You entered the wrong data! Use --help for getting information');
      return false;
    }
  }

  createFile(): void {
    if (this.setParams() && this.generator === 'docjs' && this.framework === 'react') {
      fs.readFile(this.inputStr, (err: any, data: any) => {
        const metadata = new Metadata('javascript', 'documentationJS', 'react');
        const newdoc = new DocJsParser().parse(JSON.parse(data), metadata);
        const outputObj: any = JSON.stringify(newdoc, null, 2);
        fs.writeFile(this.outputStr, outputObj);
      });
      console.log('You have successfully created a file.');
    } else if (this.setParams() && this.generator === 'typedoc' && this.framework === 'angular') {
      fs.readFile(this.inputStr, (err: any, data: any) => {
        const metadata = new Metadata('typescript', 'typeDoc', 'angular');
        const newdoc = new TypedocParser().parse(JSON.parse(data), metadata);
        const outputObj: any = JSON.stringify(newdoc, null, 2);
        fs.writeFile(this.outputStr, outputObj);
      });
      console.log('You have successfully created a file.');
    } else {
      console.log('You may have entered incorrect data.');
    }
  }

}