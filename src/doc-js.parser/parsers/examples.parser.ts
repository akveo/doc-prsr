import { Example } from '../../model';
import { CommonOptions } from '../doc-js.parser.options';

export class ExamplesParser {

  getExamples(obj: any): Example[] {
    if (obj[CommonOptions.examples].length) {
      return obj[CommonOptions.examples].map((item: any) => this.parseExample(item));
    } else {
      return [];
    }
  }

  parseExample(obj: any): Example {
    return new Example({
      code: this.getCode(obj),
      description: this.getDescription(obj),
      shortDescription: this.getShortDescription(obj)
    });
  }


  getCode(example: any) {
    if (example[CommonOptions.description]) {
      return example[CommonOptions.description].split(/```/g)[1];
    } else {
      return '';
    }
  }

  getDescriptionArr(example: any) {
    if (example[CommonOptions.description]) {
      const temp = example[CommonOptions.description].replace(/\r\n\r\n/g, '\n\n').split('\n\n');
      return temp.filter((item: any) => !/```/g.test(item));
    } else {
      return [];
    }
  }

  getDescription(example: any): string {
    return this.getDescriptionArr(example)[1];
  }

  getShortDescription(example: any): string {
    return this.getDescriptionArr(example)[0];
  }

}