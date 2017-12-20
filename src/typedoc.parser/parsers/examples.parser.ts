import { Example } from '../../model';
import { CO } from '../typedoc.parser.options';

export class ExamplesParser {

  getExamples(obj: any): Example[] {
    if (obj && this.isHasExamples(obj)) {
      return obj[CO.comment][CO.tags]
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

  getDescriptionArr(example: any): string[] {
    const outArr: string[] = [];
    if (example && example[CO.text]) {
      const tempArr = example[CO.text].replace(/\r\n\r\n/g, '\n\n').split(/\n\n/g);
      return tempArr.filter((item: any) => !/```/g.test(item))
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
    if (obj && obj[CO.text]) {
      return obj[CO.text].split(/```/g)[1];
    } else {
      return '';
    }
  }

  isHasExamples(obj: any) {
    return obj[CO.comment] && obj[CO.comment][CO.tags] && obj[CO.comment][CO.tags].length;
  }

  isExample(obj: any) {
    return obj[CO.tag] === 'example';
  }

}