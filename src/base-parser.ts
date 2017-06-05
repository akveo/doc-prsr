import {
  Model,
  Class,
  Metadata,
  Example,
  Method,
  Param,
  Platform,
  Prop,
  Language,
  Framework, 
  Generator,
  ClassKind 
} from './model';

export abstract class BaseParser {
  protected json: any;

  // protected saveJSON(json: any) {
  //   this.json = json;
  // }

  parse(json: any): Model {
    return new Model(this.getClasses(this.json));
  }

  getClasses(json: any[]): Class[] {
    const classes: Class[] = [];

    json.forEach(item => {
      if(item.hasOwnProperty('kind')) {
        classes.push(this.parseClass(item));
      }
    });

    return classes;
  }

  parseClass(obj: any) {
    return new Class(this.getKind(obj), this.getPlatform(obj), this.getExamples(obj),
    this.getProps(obj), this.getMethods(obj), this.getName(obj),
    this.getShortDescription(obj), this.getDescription(obj));
  }

  getKind(obj: any): ClassKind {
    if(obj.hasOwnProperty('kind')) {
      return obj['kind'];
    }
  }

  getPlatform(obj: any): Platform {
    if(obj.hasOwnProperty('platform')) {
      return obj['platform'];
    } else {
      return 'ios';
    }
  }

  getExamples(obj: any): Example[] {
    const examples: Example[] = [];
    if(obj.hasOwnProperty('examples')) {
      if(obj['examples'].constructor == Array) {
        examples.push(this.iterArr(this.parseExample(obj['examples'])));
      } else if(obj['examples'].constructor == Object) {
        examples.push(this.parseExample(obj['examples']));
      }
    }

    return examples;
  }



}