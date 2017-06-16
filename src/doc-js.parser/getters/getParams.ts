import {Param} from '../../model';
import {CommonOptions} from '../doc-js.parser.options';
import {Common} from "./common";

export class GetParams {
  protected common: Common = new Common();
  parseParam(obj: any): Param {
    return new Param({
      name: this.common.getName(obj),
      type: this.getType(obj),
      required: null,
      shortDescription: this.common.getShortDescription(obj),
      description: this.common.getDescription(obj)
    });
  }

  getType(obj: any) {
    return obj[CommonOptions.paramType] ? obj[CommonOptions.paramType][CommonOptions.name] : '';
  }

  getParams(obj: any): Param[] {
    if (obj[CommonOptions.params] && obj[CommonOptions.params].length) {
      return obj[CommonOptions.params].map((item: any) => this.parseParam(item));
    } else {
      return [];
    }
  }
}