import {Method} from '../../model';
import {CommonOptions} from '../typedoc.parser.options';

export class GetMethods {

  getMethods(obj: any) {
    if (obj && obj[CommonOptions.children]) {
      return obj[CommonOptions.children]
        .filter((item: any) => item[CommonOptions.primKind] === 'Method')
        .map((item: any) => this.parseMethod(item));
    }
  }

  parseMethod(obj: any): Method {
    return new Method({
      examples: [],
      params: [],
      platform: null,
      name: obj[CommonOptions.name],
      type: [],
      isStatic: false,
      shortDescription: this.getShortDescription(obj),
      description: this.getDescription(obj)
    });
  }
  getDescription(obj: any): string {
    if (obj && obj[CommonOptions.signatures][0][CommonOptions.comment]) {
      return obj[CommonOptions.signatures][0][CommonOptions.comment]['text'];
    } else {
      return '';
    }
  }

  getShortDescription(obj: any): string {
    if (obj && obj[CommonOptions.signatures][0][CommonOptions.comment]) {
      return obj[CommonOptions.signatures][0][CommonOptions.comment]['shortText'];
    } else {
      return '';
    }
  }
}