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

  splitExample(example: any) {
    if (example[CommonOptions.description]) {
      return example[CommonOptions.description].split(/```/g);
    } else {
      return [];
    }
  }

  getCode(example: any) {
    const splittedExample = this.splitExample(example);
    if (splittedExample.length !== 0) {
      return splittedExample[1];
    } else {
      return ''
    }
  }

  getDescription(example: any) {
    const splittedExample = this.splitExample(example);
    const shortDescription = splittedExample[0].split('\r\n')[0];
    if (splittedExample.length !== 0) {
      return splittedExample[0].replace(shortDescription, '');
    } else {
      return ''
    }
  }

  getShortDescription(example: any) {
    const splittedExample = this.splitExample(example);
    if (splittedExample.length !== 0) {
      return splittedExample[0].split('\r\n')[0];
    } else {
      return ''
    }
  }
}