import { DocJSParser } from './doc-js.parser/doc-js.parser';
import * as fs from 'fs';
const program = require('commander');

export class InputOutput {
  inputStr: any;
  outputStr: any;

  setInputOutputPathes() {
    program
      .version('0.0.1')
      .option('-i, --input', 'Path to input file:')
      .option('-o, --output', 'Path to output file: ')
      .parse(process.argv);

    this.inputStr = process.argv[process.argv.length - 2];
    this.outputStr = process.argv[process.argv.length - 1];
  }

  createFile() {
    this.setInputOutputPathes();

    fs.readFile(this.inputStr, (err: any, data: any) => {
      const newdoc = new DocJSParser().parse(JSON.parse(data));
      const outputObj: any = JSON.stringify(newdoc, null, 4);
      fs.writeFile(this.outputStr + '/' + 'output.json', outputObj);
    });
  }

}