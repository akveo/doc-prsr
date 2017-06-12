import {Param} from '../../model';
import {CommonOptions} from '../doc-js.parser.options';

export class GetParams {
  parseParam(obj: any): Param {
    return new Param({
      name: this.getName(obj),
      type: this.getType(obj),
      required: null,
      shortDescription: this.getShortDescription(obj),
      description: this.getDescription(obj)
    });
  }

  getType(obj: any) {
    return obj[CommonOptions.paramType] ? obj[CommonOptions.paramType][CommonOptions.paramType] : '';
  }

  getParams(obj: any): Param[] {
    if (obj[CommonOptions.params].length) {
      return obj[CommonOptions.params].map((item: any) => this.parseParam(item));
    } else {
      return [];
    }
  }

  getName(obj: any): string {
    return obj[CommonOptions.name] ? obj[CommonOptions.name] : '';
  }

  getShortDescription(obj: any): string {
    if (obj[CommonOptions.description]) {
      return obj[CommonOptions.description][CommonOptions.children][0][CommonOptions.children][0][CommonOptions.value];
    } else {
      return '';
    }
  }

  getDescription(obj: any): string {
    let str: string = '';
    if (obj[CommonOptions.description]) {
      if (obj[CommonOptions.description][CommonOptions.children].length > 1)
        obj[CommonOptions.description][CommonOptions.children]
          .forEach((item: any) => {
            item[CommonOptions.children]
              .forEach((item: any) => {
                str += item[CommonOptions.value] + ' ';
              });
          });
      return str;

    } else {
      return '';
    }
  }
}