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
}