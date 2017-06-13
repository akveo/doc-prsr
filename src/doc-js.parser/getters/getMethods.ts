import {Method} from '../../model';
import {CommonOptions} from '../doc-js.parser.options';
import {GetParams} from './getParams';
import {GetExamples} from './getExamples';
import {Common} from './common';

export class GetMethods {
  protected examples: GetExamples = new GetExamples();
  protected params: GetParams = new GetParams();
  protected common: Common = new Common();

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

  getMethodsInstance(obj: any): Method[] {
    if (obj[CommonOptions.members][CommonOptions.instance].length) {
      return obj[CommonOptions.members][CommonOptions.instance]
        .filter((item: any) => item[CommonOptions.kind] === 'function')
        .map((item: any) => this.parseMethodFromInstance(item));
    } else {
      return [];
    }
  }

  getMethodsStatic(obj: any): Method[] {
    if (obj[CommonOptions.members][CommonOptions.static].length) {
      return obj[CommonOptions.members][CommonOptions.static]
        .filter((item: any) => item[CommonOptions.kind] === 'function')
        .map((item: any) => this.parseMethodFromStatic(item));
    } else {
      return [];
    }
  }

  getMethods(obj: any): Method[] {
    return this.getMethodsInstance(obj).concat(this.getMethodsStatic(obj));
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
}