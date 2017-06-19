import { Style } from '../../model';
import { CommonOptions } from '../doc-js.parser.options';

export class StylesParser {

  getStyles(obj: any): Style[] {
    if (obj[CommonOptions.tags] && obj[CommonOptions.tags].length) {
      return obj[CommonOptions.tags]
        .filter((item: any) => this.isStyle(item))
        .map((item: any) => this.parseStyle(item));
    } else
      return [];
  }

  parseStyle(obj: any) {
    return new Style({
      shortDescription: this.getShortDescription(obj),
      styles: this.getStylesOfStyle(obj)
    });
  }

  getShortDescription(style: any): string {
    if (style[CommonOptions.description]) {
      return style[CommonOptions.description].split('\n')[0];
    } else {
      return '';
    }
  }

  getStylesOfStyle(style: any): any[] {
    if (style[CommonOptions.description]) {
      const arr = style[CommonOptions.description].split('\n');
      const arrTemp: any = [];
      arr.splice(0, 1);
      arr.forEach((item: any) => {
        const [key, value] = item.split(':');
        const styleObj: any = {};
        styleObj['name'] = key ? key.replace(/[`-]/g, '').trim() : '';
        styleObj['description'] = value ? value.trim() : '';
        arrTemp.push(styleObj);
      });
      return arrTemp;
    } else {
      return [];
    }
  }

  isStyle(obj: any) {
    return obj[CommonOptions.title] === 'styles';
  }
}