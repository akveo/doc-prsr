import { Param } from '../../model';
import { CO } from '../reactNative.parser.options';

export class HocParamsParser {

  public getParams(component: any): Param[] {
    if (this.isHoc(component)) {
      return component[CO.signatures][0][CO.parameters]
        .map((param: any) => this.parseParam(param));
    } else {
      return [];
    }
  }

  private parseParam(param: any): Param {
    const paramObj: any = param[CO.comment];
    return new Param({
      name: param[CO.name],
      type: paramObj ? this.getParamType(paramObj[CO.shortText]) : '',
      required: null,
      shortDescription: '',
      description: paramObj ? this.getParamDescription(paramObj[CO.shortText]) : '',
    });
  }

  private getParamType(param: string): string {
    return param.slice(param.indexOf('{') + 1, param.lastIndexOf('}'));
  }

  private getParamDescription(param: string): string {
    const descriptionArray: string[] = param.split('}.');
    descriptionArray.shift();

    return descriptionArray
      .join()
      .replace(/(\r\n|\n|\r)/gm, '')
      .trim();
  }

  private isHoc(component: any): boolean {
    return component[CO.primKind] === 'Function' &&
      component[CO.signatures] &&
      component[CO.signatures].length !== 0 &&
      component[CO.signatures][0][CO.parameters] &&
      component[CO.signatures][0][CO.parameters].length !== 0;
  }

}
