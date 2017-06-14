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

  getClasses(obj: any) {
    this.findAllClasses(obj);
    let tempClasses: any[] = [];

    tempClasses = this.classes.map((item: any) => {
      if (!item[CommonOptions.decorators]) {
        if (item[CommonOptions.primKind] === 'Class') {
          return this.parseClass(item);
        } else if (item[CommonOptions.primKind] === 'Interface') {
          return this.parseInterface(item);
        }
      } else if (item[CommonOptions.decorators]) {
        if (item[CommonOptions.decorators][0][CommonOptions.name] === 'Component') {
          return this.parseComponent(item);
        } else if (item[CommonOptions.decorators][0][CommonOptions.name] === 'Injectable') {
          return this.parseService(item);
        } else if (item[CommonOptions.decorators][0][CommonOptions.name] === 'Directive') {
          return this.parseDirective(item);
        }
      }
    });
    return JSON.stringify(tempClasses, null, 2);
  }

}