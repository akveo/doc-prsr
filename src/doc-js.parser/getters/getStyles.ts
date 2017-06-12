import { Style } from '../../model';
import {CommonOptions} from '../doc-js.parser.options';

export class GetStyles {

  getStyles(obj: any): Style[] {
    if (obj[CommonOptions.tags].length) {
      return obj[CommonOptions.tags]
        .filter((item: any) => item[CommonOptions.title] === 'styles')
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

  getShortDescription(obj: any): string {
    return obj[CommonOptions.description].split('\n')[0];
  }

  getStylesOfStyle(obj: any): any[] {                               //regExp!!!!!!!!!!!!
    const arr = obj[CommonOptions.description].split('\n');
    const arrTemp: any = [];
    arr.splice(0, 1);
    arr.forEach((item: any) => {
      const [key, value] = item.split(':');
      const styleObj: any = {};
      styleObj[key.replace(/[`-]/g, '').trim()] = value.trim();
      arrTemp.push(styleObj);
    });
    return arrTemp;
  }
}