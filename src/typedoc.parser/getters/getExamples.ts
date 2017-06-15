import {
  Example
} from '../../model';
import {CommonOptions} from '../typedoc.parser.options';

export class GetExamples {

  getExamples(obj: any) {

  }

  parseExample(obj: any) {
    return new Example({
      code: this.getCode(obj),
      description: this.getDescription(obj),
      shortDescription: this.getShortDescription(obj)
    });
  }

  getDescription(obj: any) {

  }

  getShortDescription(obj: any) {

  }

  getCode(obj: any) {

  }
}