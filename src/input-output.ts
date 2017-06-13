import {DocJsParser} from './doc-js.parser/doc-js.parser';
import * as fs from 'fs';
import * as Path from 'path';
const program = require('commander');

export class InputOutput {
  inputStr: any = '';
  outputStr: any = '';

  setInputOutputPathes(): boolean {
    program
      .version('0.0.1')
      .option('-i, --input <value>', 'Path to input file:')
      .option('-o, --output <value>', 'Path to output file: ')
      .parse(process.argv);

    if (program['input'] && program['output']) {
      this.inputStr = Path.resolve(program['input']);
      this.outputStr = Path.resolve(program['output']);
      return true;
    } else {
      console.log('U don\'t enter inp and/or out str');
      return false;
    }
  }

  createFile(): void {
    if (this.setInputOutputPathes()) {
      fs.readFile(this.inputStr, (err: any, data: any) => {
        const newdoc = new DocJsParser().parse(JSON.parse(data));
        const outputObj: any = JSON.stringify(newdoc, null, 2);
        fs.writeFile(this.outputStr, outputObj);
      });
    }
  }

}