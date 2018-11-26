import { Method } from '../../model';
import { CO, TagSearchItems } from '../typedoc.parser.options';
import { ExamplesParser, ParamsParser } from './';

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
      examples: [],
      params: this.params.getParams(obj),
      platform: null,
      name: obj[CO.name],
      type: this.getType(obj),
      isStatic: this.isStatic(obj),
      shortDescription: this.getShortDescription(obj),
      description: this.getDescription(obj),
      isDocsPrivate: this.getIsPrivate(obj),
    });
  }

  getDescription(obj: any): string {
    if (this.isHasDescription(obj)) {
      return obj[CO.signatures][0][CO.comment]['text'];
    } else {
      return '';
    }
  }

  getIsPrivate(obj: any): boolean {
    const tagsMatrix: any[] = obj[CO.signatures]
      .map((signature: any) => {
        if (signature[CO.comment]) {
          if (signature[CO.comment][CO.tags] && signature[CO.comment][CO.tags].length !==0 ) {
            return signature[CO.comment][CO.tags];
          } else {
            return [];
          }
        } else {
          return [];
        }
      })
      .map((item: any) => item.map((subItem: any) => subItem[CO.tag] ? subItem[CO.tag] : ''));

    return [].concat(...tagsMatrix).some((item: string) => item.includes(TagSearchItems.docsPrivate));
  }

  getShortDescription(obj: any): string {
    if (this.isHasDescription(obj)) {
      return obj[CO.signatures][0][CO.comment]['shortText'];
    } else {
      return '';
    }
  }

  getType(obj: any): string[] {
    let returnedType = '';
    if (obj[CO.signatures] && obj[CO.signatures][0][CO.type]) {
      returnedType = this.determineType(obj[CO.signatures][0]);
    }
    return [returnedType];
  }

  determineType(obj: any) {
    if (this.isIntrinsic(obj[CO.type])) {
      return this.parseIntrinsic(obj);
    } else if (this.isReflection(obj[CO.type])) {
      return this.parseReflection(obj);
    } else if (this.isReference(obj[CO.type])) {
      return this.parseReference(obj);
    } else if (this.isArray(obj[CO.type])) {
      return this.parseArray(obj);
    } else if (this.isTypeParameter(obj[CO.type])) {
      return this.parseTypeParameter(obj);
    }
  }

  parseIntrinsic(obj: any) {
    return obj[CO.type][CO.name];
  }

  parseReference(obj: any) {
    let returnedType = '';
    if (obj[CO.comment] && obj[CO.comment][CO.returns]) {
      const checkString = obj[CO.comment][CO.returns].replace(/[{}<>]+/g, '');
      if (checkString.length > 1) {
        returnedType = obj[CO.comment][CO.returns];
      } else {
        returnedType = this.parseReferenceFromTypeArguments(obj);
      }
      return returnedType;
    } else {
      return this.parseReferenceFromTypeArguments(obj);
    }
  }

  parseReferenceFromTypeArguments(obj: any) {
    const mainTypeName = obj[CO.type][CO.name];
    let helperType = '';
    if (obj[CO.type] && obj[CO.type][CO.typeArguments] && obj[CO.type][CO.typeArguments].length !== 0) {
      if (obj[CO.type][CO.typeArguments][0][CO.declaration] &&
        obj[CO.type][CO.typeArguments][0][CO.declaration][CO.children].length !== 0) {
        return mainTypeName + this.parseReferenceFromTypeArgumentsChildren(obj);
      } else if (obj[CO.type][CO.typeArguments][0][CO.elementType]) {
        return mainTypeName + this.parseReferenceFromTypeArgumentsElementType(obj);
      } else {
        return mainTypeName + '<' + obj[CO.type][CO.typeArguments][0][CO.name] + '>';
      }
    } else {
      return obj[CO.type][CO.name];
    }
  }

  parseReferenceFromTypeArgumentsChildren(obj: any) {
    let helperType = '';
    let helperItemsArray: any[] = [];
    obj[CO.type][CO.typeArguments][0][CO.declaration][CO.children].forEach((item: any) => {
      helperType = this.determineType(item);
      helperItemsArray.push(item[CO.name] + ': ' + helperType)
    });
    return '<{' + helperItemsArray.toString().replace(',', '; ') + '}>';
  }

  parseReferenceFromTypeArgumentsElementType(obj: any) {
    let helperType = '';
    // todo find another kind of such preparation
    obj[CO.type][CO.typeArguments][0].type = {
      type: obj[CO.type][CO.typeArguments][0][CO.type],
      elementType: obj[CO.type][CO.typeArguments][0][CO.elementType],
    };
    helperType = this.determineType(obj[CO.type][CO.typeArguments][0]);
    return '<' + helperType + '>';
  }

  parseReflection(obj: any) {
    if (obj[CO.type][CO.declaration][CO.children] && obj[CO.type][CO.declaration][CO.children].length !== 0) {
      return this.parseTypeFromReflectionChildren(obj);
    } else if (obj[CO.type][CO.declaration][CO.indexSignature] &&
      obj[CO.type][CO.declaration][CO.indexSignature].length !== 0) {
      return this.parseTypeFromReflectionIndexSignature(obj);
    } else {
      return this.parseTypeFromSignature(obj);
    }
  }

  parseTypeFromReflectionChildren(obj: any) {
    let helperType = '';
    let helperItemsArray: any[] = [];
    obj[CO.type][CO.declaration][CO.children].forEach((item: any) => {
      helperType = this.determineType(item);
      helperItemsArray.push(item[CO.name] + ': ' + helperType);
    });
    return '{' + helperItemsArray.toString().replace(',', ', ') + '}';
  }

  parseTypeFromReflectionIndexSignature(obj: any) {
    const indexSignatureObject: any = {};
    const indexSignatureObjectHelper: any = {};
    const item = obj[CO.type][CO.declaration][CO.indexSignature];
    item[CO.parameters].forEach((itemsItem: any) => {
      indexSignatureObjectHelper[itemsItem[CO.name]] = itemsItem[CO.type][CO.name];
      indexSignatureObject['[' + JSON.stringify(indexSignatureObjectHelper)
        .replace(/[{}]+/g, '') + ']'] = item[CO.type][CO.name];
    });

    return JSON.stringify(indexSignatureObject)
      .replace(/[\\'"]+/g, '')
      .replace(/:/g, ': ');
  }

  parseTypeFromSignature(obj: any) {
    const mainReturnedType: any = this.determineType(obj[CO.type][CO.declaration][CO.signatures][0]);
    let parameters: any[] = [];
    obj[CO.type][CO.declaration][CO.signatures][0][CO.parameters].forEach((item: any) => {
      parameters.push(item[CO.name] + ': ' + this.determineType(item));
    });
    let returnedTypePrepared: string = '';
    parameters.forEach((item: any) => {
      returnedTypePrepared += item.toString() + ', ';
    });

    return ('(' + returnedTypePrepared + ') => ' + mainReturnedType).replace(/, \)/g, ')');
  }

  parseTypeParameter(obj: any) {
    return obj[CO.type][CO.name];
  }

  parseArray(obj: any) {
    return obj[CO.type][CO.elementType][CO.name] + '[]';
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

  isIntrinsic(obj: any) {
    return obj[CO.type] === 'intrinsic';
  }

  isReference(obj: any) {
    return obj[CO.type] === 'reference';
  }

  isReflection(obj: any) {
    return obj[CO.type] === 'reflection';
  }

  isArray(obj: any) {
    return obj[CO.type] === 'array';
  }

  isTypeParameter(obj: any) {
    return obj[CO.type] === 'typeParameter';
  }
}