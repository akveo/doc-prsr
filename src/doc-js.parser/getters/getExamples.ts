import { Example } from '../../model';
import {CommonOptions} from '../doc-js.parser.options';

export class GetExamples {
  parseExample(obj: any): Example {
    return new Example({
      code: this.getCode(obj),
      description: this.getDescription(obj),
      shortDescription: this.getShortDescription(obj)
    });
  }


  getCode(obj: any): string {
    const regexp = /```/g;
    if (obj[CommonOptions.description]) {
      return obj[CommonOptions.description].split(regexp)[1];
    } else {
      return '';
    }
  }

  getDescription(obj: any): string { //!!!!!!!
    const regexp = /```/g;
    let outArr: any[] = [];
    const temp = obj[CommonOptions.description].split('\n\n');
    temp.forEach((item: any) => {
      if (!regexp.test(item)) {
        outArr.push(item);
      }
    });
    return outArr[1];
  }

  getShortDescription(obj: any): string {
    const regexp = /```/g;
    let outArr: any[] = [];
    const temp = obj[CommonOptions.description].split('\n\n');
    temp.forEach((item: any) => {
      if (!regexp.test(item)) {
        outArr.push(item);
      }
    });
    return outArr[0];
  }

  getExamples(obj: any): Example[] {
    if (obj[CommonOptions.examples].length) {
      return obj[CommonOptions.examples].map((item: any) => this.parseExample(item));
    } else {
      return [];
    }
  }
}