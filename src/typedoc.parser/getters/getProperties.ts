import { Prop } from '../../model';
import {CommonOptions} from '../typedoc.parser.options';

export class GetProperties {
  getProps(obj: any) {
    if (obj && obj[CommonOptions.children]) {
      obj[CommonOptions.children].map((item: any) => {
        if (item[CommonOptions.decorators]) {
          if(item[CommonOptions.primKind] === 'Property' && item[CommonOptions.decorators][CommonOptions.name] === 'Input') {
            return this.parseInput(item);
          } else if (item[CommonOptions.primKind] === 'Property' && item[CommonOptions.decorators][CommonOptions.name] === 'Output') {
            return this.parseOutput(item);
          }
        } else {
          if (item[CommonOptions.primKind] === 'Constructor') {
            return this.parseConstructor(item);
          } else if (item[CommonOptions.primKind] === 'Property') {
            return this.parseProperty(item);
          }
        }
      })
    }
  }


}