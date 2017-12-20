import { Method } from '../../model';
import { CO } from '../doc-js.parser.options';
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
      return obj[CO.members][CO.instance]
        .filter((item: any) => this.isFunction(item))
        .map((item: any) => this.parseMethodFromInstance(item));
    } else {
      return [];
    }
  }

  getMethodsStatic(obj: any): Method[] {
    if (this.isHasMethodsFrom(obj, 'static')) {
      return obj[CO.members][CO.static]
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
    if (obj[CO.methodType] && obj[CO.methodType].length) {
      obj[CO.methodType]
        .forEach((item: any) => {
          temp.push(item[CO.type][CO.name]);
        });
      return temp;
    } else {
      return ['void'];
    }
  }

  isFunction(obj: any) {
    return obj[CO.kind] === 'function';
  }

  isHasMethodsFrom(obj: any, from: string) {
    return obj[CO.members] && obj[CO.members][from].length;
  }
}