import {
  Example
} from '../../model';
import {CommonOptions} from '../typedoc.parser.options';

export class GetExamples {

  getExamples(obj: any) {
    if (obj && obj[CommonOptions.comment] && obj[CommonOptions.comment][CommonOptions.tags] &&
      obj[CommonOptions.comment][CommonOptions.tags].length){
      return obj[CommonOptions.comment][CommonOptions.tags]
        .filter((item: any) => item[CommonOptions.tag] === 'example')
        .map((item: any) => this.parseExample(item));
    } else {
      return [];
    }
  }

  parseExample(obj: any) {
    return new Example({
      code: this.getCode(obj),
      description: this.getDescription(obj),
      shortDescription: this.getShortDescription(obj)
    });
  }

  getDescriptionArr(obj: any) {
    const outArr: string[] = [];
    if (obj && obj[CommonOptions.text]) {
      const tempArr = obj[CommonOptions.text].replace(/\r\n\r\n/g, '\n\n').split(/\n\n/g);
      tempArr.forEach((item: any) => {
        if(!/```/g.test(item)) {
          outArr.push(item);
        }
      });
      return outArr;
    } else {
      return [];
    }
  }

  getDescription(obj: any) {

  }

  getShortDescription(obj: any): string {
    if (obj && this.getDescriptionArr(obj).length && this.getDescriptionArr(obj)[0]) {
      return this.getDescriptionArr(obj)[0];
    } else {
      return '';
    }
  }

  getCode(obj: any): string {
    if (obj && obj[CommonOptions.text]) {
      return obj[CommonOptions.text].split(/```/g)[1];
    } else {
      return '';
    }
  }
}