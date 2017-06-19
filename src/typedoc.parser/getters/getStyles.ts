import {
  Style
} from '../../model';
import {CommonOptions} from '../typedoc.parser.options';

export  class GetStyles {

  getStyles(obj: any): Style[] {
    if (this.isHasTags(obj)){
      return obj[CommonOptions.comment][CommonOptions.tags]
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
    if (style && style[CommonOptions.text]) {
      const workString = style[CommonOptions.text].replace(/\r\n\r\n/g, '/n/n').split(/\n\n/g);
      return workString[0];
    } else {
      return '';
    }
  }

  isHasTags(obj: any) {
    return obj && obj[CommonOptions.comment] && obj[CommonOptions.comment][CommonOptions.tags] &&
      obj[CommonOptions.comment][CommonOptions.tags].length;
  }

  isStyle(obj: any) {
    return obj[CommonOptions.tag] === 'styles';
  }
}