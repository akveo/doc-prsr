import {
  Method
} from '../../model';
import { CommonOptions } from '../typedoc.parser.options';
import { GetParams, GetExamples} from './';

export class GetMethods {                                         //TODO ask about examples and its templates
  protected params: GetParams = new GetParams();
  protected examples: GetExamples = new GetExamples();

  getMethods(obj: any) {
    if (obj && obj[CommonOptions.children]) {
      return obj[CommonOptions.children]
        .filter((item: any) => {
          if (item[CommonOptions.primKind] === 'Method' || item[CommonOptions.primKind] === 'Constructor') {
            return item;
          }
        })
        // .filter((item: any) => item[CommonOptions.signatures][0][CommonOptions.comment])
        .map((item: any) => this.parseMethod(item));
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
    if (obj && obj[CommonOptions.signatures][0][CommonOptions.comment]) {
      return obj[CommonOptions.signatures][0][CommonOptions.comment]['text'];
    } else {
      return '';
    }
  }

  getShortDescription(obj: any): string {
    if (obj && obj[CommonOptions.signatures][0][CommonOptions.comment]) {
      return obj[CommonOptions.signatures][0][CommonOptions.comment]['shortText'];
    } else {
      return '';
    }
  }

  getType(obj: any): string[] {
    const returnsArray: string[] = [];
    if (obj && obj[CommonOptions.signatures] && obj[CommonOptions.signatures][0][CommonOptions.type]) {
      returnsArray.push(obj[CommonOptions.signatures][0][CommonOptions.type][CommonOptions.name]);
      return returnsArray;
    } else {
      return ['void'];
    }
  }

  isStatic(obj: any):boolean {
    if (obj && obj[CommonOptions.flags] && obj[CommonOptions.flags][CommonOptions.isStatic]) {
      return obj[CommonOptions.flags][CommonOptions.isStatic];
    } else {
      return false;
    }
  }
}