import { Method } from '../../model';
import { CommonOptions } from '../doc-js.parser.options';
import { ParamsParser, ExamplesParser } from './';
import { Common } from './common';

export class MethodsParser {
  protected examples: ExamplesParser = new ExamplesParser();
  protected params: ParamsParser = new ParamsParser();
  protected common: Common = new Common();

  getMethods(obj: any): Method[] {
    return this.getMethodsInstance(obj).concat(this.getMethodsStatic(obj));
  }

  getMethodsInstance(obj: any): Method[] {
    if (this.isHasMethodsFrom(obj, 'instance')) {
      return obj[CommonOptions.members][CommonOptions.instance]
        .filter((item: any) => this.isFunction(item))
        .map((item: any) => this.parseMethodFromInstance(item));
    } else {
      return [];
    }
  }

  getMethodsStatic(obj: any): Method[] {
    if (this.isHasMethodsFrom(obj, 'static')) {
      return obj[CommonOptions.members][CommonOptions.static]
        .filter((item: any) => this.isFunction(item))
        .map((item: any) => this.parseMethodFromStatic(item));
    } else {
      return [];
    }
  }

  parseMethodFromInstance(obj: any): Method {
    return new Method({
      examples: this.examples.getExamples(obj),
      params: this.params.getParams(obj),
      platform: null,
      name: this.common.getName(obj),
      type: this.getType(obj),
      isStatic: false,
      shortDescription: this.common.getShortDescription(obj),
      description: this.common.getDescription(obj)
    });
  }

  parseMethodFromStatic(obj: any): Method {
    return new Method({
      examples: this.examples.getExamples(obj),
      params: this.params.getParams(obj),
      platform: null,
      name: this.common.getName(obj),
      type: this.getType(obj),
      isStatic: true,
      shortDescription: this.common.getShortDescription(obj),
      description: this.common.getDescription(obj)
    });
  }

  getType(obj: any) {
    let temp: any[] = [];
    if (obj[CommonOptions.methodType] && obj[CommonOptions.methodType].length) {
      obj[CommonOptions.methodType]
        .forEach((item: any) => {
          temp.push(item[CommonOptions.type][CommonOptions.type]);
        });
      return temp
    } else {
      return ['void'];
    }
  }

  isFunction(obj: any) {
    return obj[CommonOptions.kind] === 'function';
  }

  isHasMethodsFrom(obj: any, from: string) {
    return obj[CommonOptions.members] && obj[CommonOptions.members][from].length;
  }
}