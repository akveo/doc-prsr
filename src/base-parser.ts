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
    return new Class(this.getKind(obj), this.getPlatform(), this.getExamples(obj),
    this.getProps(obj), this.getMethods(obj), this.getName(obj),
    this.getShortDescription(obj), this.getDescription(obj));
  }


}