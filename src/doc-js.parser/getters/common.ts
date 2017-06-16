import {CommonOptions} from '../doc-js.parser.options';
import { ClassKind } from '../../model';

export class Common {
  getName(obj: any): string {
    return obj[CommonOptions.name] ? obj[CommonOptions.name] : '';
  }

  getShortDescription(obj: any): string {
    // if (obj[CommonOptions.description]) {
    //   return obj[CommonOptions.description][CommonOptions.children][0][CommonOptions.children][0][CommonOptions.value];
    // } else {
    //   return '';
    // }
    let shortDescription: string = '';
    if (obj[CommonOptions.description] && obj[CommonOptions.description][CommonOptions.children].length) {
      if (obj[CommonOptions.description][CommonOptions.children][0][CommonOptions.children].length) {
        obj[CommonOptions.description][CommonOptions.children][0][CommonOptions.children]
          .forEach((item: any) => {
            shortDescription += item[CommonOptions.value] + ' ';
          });
      }
      return shortDescription;
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

  getKind(obj: any): ClassKind {
    return obj[CommonOptions.classKind] ? obj[CommonOptions.classKind] : 'class';
  }
}