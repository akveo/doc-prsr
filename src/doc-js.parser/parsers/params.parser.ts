import { Param } from '../../model';
import { CO } from '../doc-js.parser.options';
import { Common } from "./common";

export class ParamsParser {

  protected common: Common = new Common();

  getParams(obj: any): Param[] {
    if (obj[CO.params] && obj[CO.params].length) {
      return obj[CO.params].map((item: any) => this.parseParam(item));
    } else {
      return [];
    }
  }

  parseParam(obj: any): Param {
    return new Param({
      name: this.common.getName(obj),
      type: this.getType(obj),
      required: null,
      shortDescription: this.common.getShortDescription(obj),
      description: this.common.getDescription(obj)
    });
  }

  getType(param: any): string {
    return param[CO.paramType] ? param[CO.paramType][CO.name] : '';
  }

}