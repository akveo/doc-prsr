import { Style } from '../../model';
import { CO } from '../typedoc.parser.options';

export  class StylesParser {

  getStyles(obj: any): Style[] {
    if (this.isHasTags(obj)){
      return obj[CO.comment][CO.tags]
        .filter((item: any) => this.isStyle(item))
        .map((item: any) => this.parserStyle(item));
    } else {
      return [];
    }
  }

  parserStyle(obj: any): Style {
    return new Style({
      shortDescription: this.getShortDescription(obj),
      styles: this.getStylesOfStyle(obj)
    });
  }

  getStylesOfStyle(obj: any): any[] {
    if (obj && obj[CO.text]) {
      const arr = obj[CO.text].split('\n\n');
      let tempArr: any[] = [];
      const returnArr: any[] = [];
      arr.splice(0, 1);
      tempArr = arr[0].split('\n');
      tempArr.forEach((item: any) => {
        if (item) {
          const [key, value] = item.split(':');
          const styleObj: any = {};
          styleObj['name'] = key ? key.trim() : '';
          styleObj['description'] = value ? value.trim() : '';
          returnArr.push(styleObj);
        }
      });
      return returnArr;
    } else {
      return [];
    }
  }

  getShortDescription(style: any): string {
    if (style && style[CO.text]) {
      const workString = style[CO.text].split(/[\n\r]/g);
      return workString[0];
    } else {
      return '';
    }
  }

  isHasTags(obj: any) {
    return obj && obj[CO.comment] && obj[CO.comment][CO.tags] &&
      obj[CO.comment][CO.tags].length;
  }

  isStyle(obj: any) {
    return obj[CO.tag] === 'styles';
  }
}