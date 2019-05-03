import { CO } from '../kitten.parser.options';
import {
  Method,
  Param,
} from '../../model';

export class MethodsParser {

  public getMethods(component: any): Method[] {
    if (component[CO.tags] && component[CO.tags].length !== 0) {
      return component[CO.tags]
        .filter((tag: any) => tag[CO.tag] === 'method')
        .map((tag: any) => this.parseMethod(tag));
    } else {
      return [];
    }
  }

  private parseMethod(method: any): Method {
    return new Method({
      examples: [],
      params: this.getParams(method[CO.text]),
      platform: null,
      name: this.getName(method[CO.text]),
      type: this.getType(method[CO.text]),
      isStatic: false,
      shortDescription: '',
      description: this.getDescription(method[CO.text]),
    });
  }

  private getName(method: string): string {
    return method
      .replace(/(\r\n|\n|\r)/gm, '')
      .split('}')[1]
      .trim()
      .replace(/ .*/,'');
  }

  private getType(method: string): string[] {
    return [method
      .slice(method.indexOf('{') + 1, method.lastIndexOf('}'))
      .replace(/(\r\n|\n|\r)/gm, '')
      .split('=>')[1]
      .trim()];
  }

  private getDescription(method: string): string {
    return method
      .replace(/(\r\n|\n|\r)/gm, ' ')
      .split('-')[1]
      .trim();
  }

  private getParams(method: string): Param[] {
    const type: string = method
      .slice(method.indexOf('{') + 1, method.lastIndexOf('}'))
      .replace(/(\r\n|\n|\r)/gm, '');
    const paramsString: string = type.slice(type.indexOf('(') + 1, type.lastIndexOf(')'));
    const paramsArray: string[] = paramsString.split(',');

    return paramsArray.map(this.parseParam);
  }

  private parseParam(param: string): any {
    return new Param({
      name: getParamName(param),
      type: getParamType(param),
      required: null,
      shortDescription: '',
      description: '',
    });
  }

}

function getParamName(param: string): string {
  return param.split(':')[0];
}

function getParamType(param: string): string {
  const crudeParam: string = param.split(':')[1].trim();
  return crudeParam.split(' ')[0].trim();
}
