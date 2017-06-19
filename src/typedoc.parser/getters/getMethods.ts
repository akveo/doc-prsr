import {
  Method
} from '../../model';
import {CommonOptions} from '../typedoc.parser.options';
import {GetParams, GetExamples} from './';

export class GetMethods {
  protected params: GetParams = new GetParams();
  protected examples: GetExamples = new GetExamples();

  getMethods(obj: any): Method[] {
    if (obj && obj[CommonOptions.children]) {
      return obj[CommonOptions.children]
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
      name: obj[CommonOptions.name],
      type: this.getType(obj),
      isStatic: this.isStatic(obj),
      shortDescription: this.getShortDescription(obj),
      description: this.getDescription(obj)
    });
  }

  getDescription(obj: any): string {
    if (this.isHasDescription(obj)) {
      return obj[CommonOptions.signatures][0][CommonOptions.comment]['text'];
    } else {
      return '';
    }
  }

  getShortDescription(obj: any): string {
    if (this.isHasDescription(obj)) {
      return obj[CommonOptions.signatures][0][CommonOptions.comment]['shortText'];
    } else {
      return '';
    }
  }

  getType(obj: any): string[] {
    const returnsArray: string[] = [];
    if (obj && obj[CommonOptions.signatures] && obj[CommonOptions.signatures][0][CommonOptions.comment]) {
      if (obj[CommonOptions.signatures][0][CommonOptions.comment][CommonOptions.returns]) {
        returnsArray.push(obj[CommonOptions.signatures][0][CommonOptions.comment][CommonOptions.returns].replace(/\n/g, ''));
      } else {
        return ['void'];
      }
      return returnsArray;
    } else if (obj && obj[CommonOptions.signatures] && obj[CommonOptions.signatures][0][CommonOptions.type]) {
      returnsArray.push(obj[CommonOptions.signatures][0][CommonOptions.type][CommonOptions.name]);
      return returnsArray
    } else {
      return ['void'];
    }
  }

  isStatic(obj: any): boolean {
    if (obj && obj[CommonOptions.flags] && obj[CommonOptions.flags][CommonOptions.isStatic]) {
      return obj[CommonOptions.flags][CommonOptions.isStatic];
    } else {
      return false;
    }
  }

  isMethod(obj: any) {
    return obj[CommonOptions.primKind] === 'Method';
  }

  isConstructor(obj: any) {
    return obj[CommonOptions.primKind] === 'Constructor';
  }

  isHasDescription(obj: any) {
    return obj && obj[CommonOptions.signatures] && obj[CommonOptions.signatures][0][CommonOptions.comment];
  }
}