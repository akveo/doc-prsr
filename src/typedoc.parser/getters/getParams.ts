import {Param} from '../../model';
import {CommonOptions} from '../typedoc.parser.options';

export class GetParams {

  getParams(obj: any) {
    if (obj && obj[CommonOptions.signatures] && obj[CommonOptions.signatures][0][CommonOptions.parameters]) {
      return obj[CommonOptions.signatures][0][CommonOptions.parameters]
        .map((item: any) => this.parseParam(item));
    }
  }

  
}