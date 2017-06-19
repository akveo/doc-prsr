import {Param} from '../../model';
import {CommonOptions} from '../typedoc.parser.options';

export class GetParams {

  getParams(obj: any): Param[] {
    if (this.isHasParams(obj)) {
      return obj[CommonOptions.signatures][0][CommonOptions.parameters]
        .map((item: any) => this.parseParam(item));
    } else {
      return [];
    }
  }

  parseParam(param: any) {
    return new Param({
      name: param[CommonOptions.name],
      type: this.getType(param),
      required: null,
      shortDescription: this.getShortDescription(param),
      description: this.getDescription(param)
    });
  }

  getType(param: any): string {
    if(param && param[CommonOptions.type]) {
      return param[CommonOptions.type][CommonOptions.name]
    } else {
      return '';
    }
  }

  getDescription(param: any): string {
    if (param && param[CommonOptions.comment]) {
      return param[CommonOptions.comment]['text'];
    } else {
      return '';
    }
  }

  getShortDescription(param: any): string {
    if (param && param[CommonOptions.comment]) {
      return param[CommonOptions.comment]['shortText'];
    } else {
      return '';
    }
  }

  isHasParams(obj: any) {
    return obj && obj[CommonOptions.signatures] && obj[CommonOptions.signatures][0][CommonOptions.parameters];
  }
}