import {Param} from '../../model';
import {CommonOptions} from '../typedoc.parser.options';

export class GetParams {

  getParams(obj: any): Param[] {
    if (obj && obj[CommonOptions.signatures] && obj[CommonOptions.signatures][0][CommonOptions.parameters]) {
      return obj[CommonOptions.signatures][0][CommonOptions.parameters]
        .map((item: any) => this.parseParam(item));
    } else {
      return [];
    }
  }

  parseParam(obj: any) {
    return new Param({
      name: obj[CommonOptions.name],
      type: this.getType(obj),
      required: null,
      shortDescription: this.getShortDescription(obj),
      description: this.getDescription(obj)
    });
  }

  getType(obj: any): string {
    if(obj && obj[CommonOptions.type]) {
      return obj[CommonOptions.type][CommonOptions.name]
    } else {
      return '';
    }
  }

  getDescription(obj: any): string {
    if (obj && obj[CommonOptions.comment]) {
      return obj[CommonOptions.comment]['text'];
    } else {
      return '';
    }
  }

  getShortDescription(obj: any): string {
    if (obj && obj[CommonOptions.comment]) {
      return obj[CommonOptions.comment]['shortText'];
    } else {
      return '';
    }
  }
}