import { DocJSParser } from './doc-js.parser/doc-js.parser';
import * as fs from 'fs';
import * as  program from 'commander';

export class InputOutput {
  docJsParser: DocJSParser = new DocJSParser();
  inputStr: string;
  outputStr: string;

  setInputOutputPathes() {
    program
      .version('0.0.1')
      .option('-i, --input', 'Path to input file:')
      .option('-o, --output', 'Path to output file: ')
      .parse(process.argv);

    this.inputStr = process.argv[process.argv.length - 2];
    this.outputStr = process.argv[process.argv.length - 1];
  }

}