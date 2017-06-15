import {
  Style
} from '../../model';
import {CommonOptions} from '../typedoc.parser.options';

export  class GetStyles {

  getStyles(obj: any): Style[] {
    if (obj && obj[CommonOptions.comment] && obj[CommonOptions.comment][CommonOptions.tags] &&
      obj[CommonOptions.comment][CommonOptions.tags].length){
      return obj[CommonOptions.comment][CommonOptions.tags]
        .filter((item: any) => item[CommonOptions.tag] === 'styles')
        .map((item: any) => this.parserStyle(item));
    } else {
      return [];
    }
  }

  parserStyle(obj: any) {
    return new Style({
      shortDescription: this.getShortDescription(obj),
      styles: this.getStylesOfStyle(obj)
    });
  }

  getStylesOfStyle(obj: any): any[] {
    if (obj && obj[CommonOptions.text]) {
      const arr = obj[CommonOptions.text].split('\n\n');
      let tempArr: any[] = [];
      const returnArr: any[] = [];
      arr.splice(0, 1);
      tempArr = arr[0].split('\n');
      tempArr.forEach((item: any) => {
        if (item) {
          const [key, value] = item.split(':');
          const styleObj: any = {};
          if (key) {
            styleObj['name'] = key.trim();
          } else {
            styleObj['name'] = '';
          }
          if (value) {
            styleObj['description'] = value.trim();
          } else {
            styleObj['description'] = '';
          }
          returnArr.push(styleObj);
        }
      });
      return returnArr;
    } else {
      return [];
    }
  }

  getShortDescription(obj: any): string {
    if (obj && obj[CommonOptions.text]) {
      const workString = obj[CommonOptions.text].replace(/\r\n\r\n/g, '/n/n').split(/\n\n/g);
      return workString[0];
    } else {
      return '';
    }
  }
}