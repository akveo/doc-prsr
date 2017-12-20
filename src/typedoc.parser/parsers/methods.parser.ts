import {Method} from '../../model';
import {CO} from '../typedoc.parser.options';
import {ParamsParser, ExamplesParser} from './';

export class MethodsParser {
  protected params: ParamsParser = new ParamsParser();
  protected examples: ExamplesParser = new ExamplesParser();

  getMethods(obj: any): Method[] {
    if (obj && obj[CO.children]) {
      return obj[CO.children]
        .filter((item: any) => this.isMethod(item) || this.isConstructor(item))
        .map((item: any) => this.parseMethod(item));
    } else {
      return [];
    }
  }

  parseMethod(obj: any): Method {
    return new Method({
      examples: this.examples.getExamples(obj),
      params: this.params.getParams(obj),
      platform: null,
      name: obj[CO.name],
      type: this.getType(obj),
      isStatic: this.isStatic(obj),
      shortDescription: this.getShortDescription(obj),
      description: this.getDescription(obj)
    });
  }

  getDescription(obj: any): string {
    if (this.isHasDescription(obj)) {
      return obj[CO.signatures][0][CO.comment]['text'];
    } else {
      return '';
    }
  }

  getShortDescription(obj: any): string {
    if (this.isHasDescription(obj)) {
      return obj[CO.signatures][0][CO.comment]['shortText'];
    } else {
      return '';
    }
  }

  getType(obj: any): string[] {
    const returnsArray = [];
    if (obj[CO.signatures] && obj[CO.signatures][0][CO.type]) {
      if (this.isTypeSimple(obj[CO.signatures][0][CO.type][CO.type])) {
        returnsArray.push(this.parseTypeSimple(obj[CO.signatures][0][CO.type]));
      } else if (this.isTypeReflection(obj[CO.signatures][0][CO.type][CO.type])) {
        returnsArray.push(this.parseTypeFromReflection(obj[CO.signatures][0][CO.type]));
      } else if (this.isTypeArray(obj[CO.signatures][0][CO.type][CO.type])) {
        returnsArray.push(this.parseTypeFromArray(obj[CO.signatures][0][CO.type]));
      }
    }

    return returnsArray;
  }

  parseTypeSimple(obj: any) {
    return obj[CO.name];
  }

  parseTypeFromArray(obj: any): any { //todo simpleType no else if
    if (this.isTypeSimple(obj[CO.elementType][CO.type])) {
      return this.parseTypeSimple(obj[CO.elementType]) + '[]';
    } else if (this.isTypeReflection(obj[CO.elementType][CO.type])) {
      return this.parseTypeFromReflection({obj: obj[CO.elementType], fromArray: true});
    } else if (this.isTypeArray(obj[CO.elementType][CO.type])) {
      return this.parseTypeFromArray(obj[CO.elementType]);
    }
  }

  parseTypeFromReflection(obj: any) {
    return obj.fromArray ? this.parseReflection(obj.obj) : this.parseReflection(obj);
  }

  parseReflection(obj: any) {
    if (obj[CO.declaration][CO.children] && obj[CO.declaration][CO.children].length !== 0) {
      return this.parserReflectionFromChildren(obj);
    } else if (obj[CO.declaration][CO.indexSignature] && obj[CO.declaration][CO.indexSignature].length !== 0) {
      return this.parseReflectionFromIndexSignature(obj);
    }
  }

  parserReflectionFromChildren(obj: any) {
    const childrenObject: any = {};
    const childrenObjectHelper: any = {};

    if (obj[CO.declaration][CO.children].every((item: any) => this.isTypeSimple(item[CO.type][CO.type]))) {
      obj[CO.declaration][CO.children].forEach((item: any) => {
        childrenObject[item[CO.name]] = item[CO.type][CO.name];
      });
      return this.editTypeString(JSON.stringify(childrenObject), true);
    } else {
      obj[CO.declaration][CO.children].forEach((item: any) => {
        if (this.isTypeSimple(item[CO.type][CO.type])) {
          childrenObject[item[CO.name]] = item[CO.type][CO.name];
        } else {
          item[CO.type][CO.declaration][CO.children].forEach((itemsItem: any) => {
            if (this.isTypeArray(itemsItem[CO.type][CO.type])) {
              childrenObjectHelper[itemsItem[CO.name]] = this.parseTypeFromArray(itemsItem[CO.type]);
            } else if (this.isTypeSimple(itemsItem[CO.type][CO.type])) {
              childrenObjectHelper[itemsItem[CO.name]] = this.parseTypeSimple(itemsItem[CO.type]);
            } else if (this.isTypeReflection(itemsItem[CO.type][CO.type])) {
              childrenObjectHelper[itemsItem[CO.name]] = this.parseTypeFromReflection(itemsItem[CO.type]);
            }
            childrenObject[item[CO.name]] = childrenObjectHelper;
          });
        }
      });
      return this.editTypeString(JSON.stringify(childrenObject), true);
    }
  }

  parseReflectionFromIndexSignature(obj: any) {
    const indexSignatureObject: any = {};
    const indexSignatureObjectHelper: any = {};

    obj[CO.declaration][CO.indexSignature].forEach((item: any) => {
      item[CO.parameters].forEach((itemsItem: any) => {
        indexSignatureObjectHelper[itemsItem[CO.name]] = itemsItem[CO.type][CO.name];
        indexSignatureObject['[' + JSON.stringify(indexSignatureObjectHelper)
          .replace(/[{}]+/g, '') + ']'] = item[CO.type][CO.name];
      });
    });
    return this.editTypeString(JSON.stringify(indexSignatureObject), true);
  }

  isStatic(obj: any): boolean {
    if (obj && obj[CO.flags] && obj[CO.flags][CO.isStatic]) {
      return obj[CO.flags][CO.isStatic];
    } else {
      return false;
    }
  }

  isMethod(obj: any) {
    return obj[CO.primKind] === 'Method';
  }

  isConstructor(obj: any) {
    return obj[CO.primKind] === 'Constructor';
  }

  isHasDescription(obj: any) {
    return obj && obj[CO.signatures] && obj[CO.signatures][0][CO.comment];
  }


  isTypeSimple(type: string) {
    return type === 'intrinsic' || type === 'reference';
  }

  isTypeArray(type: string) {
    return type === 'array';
  }

  isTypeReflection(type: string) {
    return type === 'reflection';
  }

  editTypeString(str: string, isFull: boolean) {
    return isFull ? str.replace(/[\\'"]+/g, '')
      .replace(/:/g, ': ') : str.replace(/[\\'"]+/g, '');
  }
}