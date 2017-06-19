import { Example } from '../../model';
import { CommonOptions } from '../typedoc.parser.options';

export class ExamplesParser {

  getExamples(obj: any): Example[] {
    if (obj && this.isHasExamples(obj)) {
      return obj[CommonOptions.comment][CommonOptions.tags]
        .filter((item: any) => this.isExample(item))
        .map((item: any) => this.parseExample(item));
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

  getDescriptionArr(example: any): string[] {                                            //TODO issue about return
    const outArr: string[] = [];
    if (example && example[CommonOptions.text]) {
      const tempArr = example[CommonOptions.text].replace(/\r\n\r\n/g, '\n\n').split(/\n\n/g);
      tempArr.forEach((item: any) => {
        if (!/```/g.test(item)) {
          outArr.push(item);
        }
      });
      return outArr;
      // return tempArr.filter((item: any) => !/```/g.test(item))
    } else {
      return [];
    }
  }

  getDescription(example: any): string {
    if (example && this.getDescriptionArr(example).length && this.getDescriptionArr(example)[1]) {
      return this.getDescriptionArr(example)[1];
     } else {
      return '';
    }
  }

  getShortDescription(example: any): string {
    if (example && this.getDescriptionArr(example).length && this.getDescriptionArr(example)[0]) {
      return this.getDescriptionArr(example)[0];
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

  isHasExamples(obj: any) {
    return obj[CommonOptions.comment] && obj[CommonOptions.comment][CommonOptions.tags] && obj[CommonOptions.comment][CommonOptions.tags].length;
  }

  isExample(obj: any) {
    return obj[CommonOptions.tag] === 'example';
  }

}