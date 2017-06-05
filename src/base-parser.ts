import {
  Model,
  Class,
  Metadata,
  Example,
  Method,
  Param,
  Platform,
  Prop,
  PropKind,
  Language,
  Framework, 
  Generator,
  ClassKind 
} from './model';

export const ClassOptions: any = {
  classKind: 'kind',
  methods: 'methods'
}

export const CommonOptions: any = {
  platform: 'platform',
  examples: 'examples',
  description: 'description', 
  code: 'code',
  properties: 'properties',
  title: 'title',
  shortDescription: 'shortDescription',
  static: 'static',
  required: 'required',
  type: 'type',
  name: 'name'
}

export abstract class BaseParser {
  protected json: any;

  protected saveJSON(json: any) {
    this.json = json;
  }

  parse(json: any): Model {
    this.saveJSON(json);
    return new Model(this.getClasses(this.json));
  }

  getClasses(json: any[]): Class[] {
    return json
      .filter(item => item[ClassOptions.classKind])
      .map(item => this.parseClass(item));
  }

  parseClass(obj: any) {
    return new Class({
      kind: this.getKind(obj),
      platform: this.getPlatform(obj),
      examples: this.getExamples(obj),
      props: this.getProps(obj),
      methods: this.getMethods(obj),
      name: this.getName(obj),
      description: this.getDescription(obj),
      shortDescription: this.getShortDescription(obj)
    });
  }

  getKind(obj: any): ClassKind {//names
    return obj.hasOwnProperty(ClassOptions.classKind) ? obj[ClassOptions.classKind] : 'class';
  }

  getPlatform(obj: any): Platform {
    return obj[CommonOptions.platform] ? obj[CommonOptions.platform] : 'ios';
  }

  getExamples(obj: any): Example[] {
    return obj[CommonOptions.examples]
            .map((item: any) => this.parseExample(item));
  }

  parseExample(obj: any): Example {
    if(obj[CommonOptions.description] || obj[CommonOptions.code]) {
      return new Example(obj[CommonOptions.description], obj[CommonOptions.code]);
    } else {
      return new Example();
    }
  }

  getProps(obj: any): Prop[] {
    return obj[CommonOptions.properties]
            .map((item: any) => this.parseProp(item));
  }

  parseProp(obj: any): Prop | null {
    if(obj[CommonOptions.title] && obj[CommonOptions.title] === 'property') {
      return new Prop({
        kind: this.getPropKind(obj),
        platform: this.getPlatform(obj),
        isStatic: this.isStatic(obj),
        type: this.getPropType(obj),
        required: this.isRequired(obj),
        name: this.getName(obj),
        description: this.getDescription(obj),
        shortDescription: this.getShortDescription(obj)
      });
    } else {
      return null;
    }
  }

  getMethods(obj: any): Method[] {// where are methods??
    return obj[ClassOptions.methods] ? obj[ClassOptions.methods].map((item: any) => this.parseMethod(item)) : [];
  }

  parseMethod(obj: any): Method { //TODO get parsed when I find example
    return new Method({
      examples: this.getExamples(obj),
      params: [],
      platform: this.getPlatform(obj),
      name: this.getName(obj),
      type: '',
      isStatic: this.isStatic(obj),
      shortDescription: this.getShortDescription(obj),
      description: this.getDescription(obj)
    });
  }

  getShortDescription(obj: any): string {
    return obj[CommonOptions.shortDescription] ? obj[CommonOptions.shortDescription] : '';
  }

  getDescription(obj: any) {
    return obj[CommonOptions.description] ? obj[CommonOptions.description].type : '';
  }

  getName(obj: any) {
    return obj[CommonOptions.name] ? obj[CommonOptions.name] : '';
  }

  isStatic(obj: any): boolean {
    return obj[CommonOptions.static];
  }

  isRequired(obj: any): boolean {
    return obj[CommonOptions.required];
  }

  getPropKind(obj: any): PropKind {
    return obj[CommonOptions.kind] ? obj[CommonOptions.kind] : 'prop';
  }

  getPropType(obj: any):string {
    return obj[CommonOptions.type] ? obj[CommonOptions.type] : '';
  }

}