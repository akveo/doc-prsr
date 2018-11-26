import { Param } from '../../model';
import { CO } from '../typedoc.parser.options';

export class ParamsParser {

  getParams(obj: any): Param[] {
    if (this.isHasParams(obj)) {
      return obj[CO.signatures][0][CO.parameters]
        .map((item: any) => this.parseParam(item));
    } else {
      return [];
    }
  }

  parseParam(param: any) {
    return new Param({
      name: param[CO.name],
      type: this.getType(param),
      required: null,
      shortDescription: this.getShortDescription(param),
      description: this.getDescription(param)
    });
  }

  getType(param: any): string {
    if (param && param[CO.type]) {
      let type = '';
      if (param[CO.type][CO.type] && param[CO.type][CO.type] === 'reference') {
        if (param[CO.comment] && param[CO.comment][CO.text]) {
          type = param[CO.comment][CO.text];
        } else {
          type = param[CO.type][CO.name]
        }
      } else if (param[CO.type][CO.type] && param[CO.type][CO.type] === 'intrinsic') {
        type = param[CO.type][CO.name]
      } else if (param[CO.type][CO.type] && param[CO.type][CO.type] === 'array') {
        type = param[CO.type][CO.elementType][CO.name] + '[]';
      }
      return type;
    } else {
      return '';
    }
  }

  getDescription(param: any): string {
    if (param && param[CO.comment]) {
      return param[CO.comment]['text'];
    } else {
      return '';
    }
  }

  getShortDescription(param: any): string {
    if (param && param[CO.comment]) {
      return param[CO.comment]['shortText'];
    } else {
      return '';
    }
  }

  isHasParams(obj: any) {
    return obj && obj[CO.signatures] && obj[CO.signatures][0][CO.parameters];
  }
}