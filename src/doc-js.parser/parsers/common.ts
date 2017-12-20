import { CO } from '../doc-js.parser.options';
import { ClassKind } from '../../model';

export class Common {

  getName(obj: any): string {
    return obj[CO.name] ? obj[CO.name] : '';
  }

  getShortDescription(obj: any): string {
    let shortDescription: string = '';
    if (obj[CO.description] && obj[CO.description][CO.children].length) {
      if (obj[CO.description][CO.children][0][CO.children].length) {
        obj[CO.description][CO.children][0][CO.children]
          .forEach((item: any) => {
            shortDescription += item[CO.value] + ' ';
          });
      }
      return shortDescription;
    } else {
      return '';
    }
  }

  getDescription(obj: any): string {
    let str: string = '';
    if (obj[CO.description]) {
      if (obj[CO.description][CO.children].length > 1)
        obj[CO.description][CO.children]
          .forEach((item: any) => {
            item[CO.children]
              .forEach((item: any) => {
                str += item[CO.value] + ' ';
              });
          });
      return str;

    } else {
      return '';
    }
  }

  getKind(obj: any): ClassKind {
    return obj[CO.classKind] ? obj[CO.classKind] : 'class';
  }
}