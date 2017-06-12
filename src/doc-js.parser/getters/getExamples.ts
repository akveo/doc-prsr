import {Example} from '../../model';
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

  getDescriptionArr(obj: any) {
    let outArr: any[] = [];
    if (obj[CommonOptions.description]) {
      const temp = obj[CommonOptions.description].replace(/\r\n\r\n/g, '\n\n').split('\n\n');
      temp.forEach((item: any) => {
        if(!/```/g.test(item)) {
          outArr.push(item);
        }
      });
      return outArr;
    } else {
      return [];
    }
  }

  getDescription(obj: any): string {
    return this.getDescriptionArr(obj)[1];
  }

  getShortDescription(obj: any): string {
    return this.getDescriptionArr(obj)[0];
  }

  getExamples(obj: any): Example[] {
    if (obj[CommonOptions.examples].length) {
      return obj[CommonOptions.examples].map((item: any) => this.parseExample(item));
    } else {
      return [];
    }
  }
}