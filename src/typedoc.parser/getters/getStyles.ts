import {
  Style
} from '../../model';
import {CommonOptions} from '../typedoc.parser.options';

export  class GetStyles {

  getStyles(obj: any): Style[] {
    if (obj && obj[CommonOptions.comment] && obj[CommonOptions.comment][CommonOptions.tags].length){
      return obj[CommonOptions.comment][CommonOptions.tags]
        .filter((item: any) => item[CommonOptions.tag] === 'styles')
        .map((item: any) => this.parserStyle(item));
    } else {
      return [];
    }
  }

  parserStyle(obj: any) {

  }

  getStylesOfStyle(obj: any) {

  }

  getShortDescription(obj: any) {

  }
}