import {CommonOptions} from './typedoc.parser.options';
import {
  Model,
  Class,
  Example,
  Method,
  Param,
  Style,
  Prop,
  PropKind
} from '../model';

export class TypedocParser {
  protected json: any;
  protected classes: any[] = [];

  saveJSON(json: any) {
    this.json = json;
  }

  findAllClasses(obj: any) {
    if (obj && obj[CommonOptions.children]) {
      obj[CommonOptions.children].forEach((item: any) => {
        if (item[CommonOptions.primKind] === 'Class' || item[CommonOptions.primKind] === 'Interface') {
          this.classes.push(item)
        } else {
          this.findAllClasses(item);
        }
      })
    }
  }




}