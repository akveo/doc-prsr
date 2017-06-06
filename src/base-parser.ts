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

  parse(json: any): Model {
    this.saveJSON(json);
    return new Model(this.getClasses(this.json));
  }

  protected saveJSON(json: any) {
    this.json = json;
  }

  protected parseClass(obj: any) {
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

  protected getPlatform(obj: any): Platform {
    return obj[CommonOptions.platform] ? obj[CommonOptions.platform] : 'ios';
  }

  protected parseExample(obj: any): Example {
    if(obj[CommonOptions.description] || obj[CommonOptions.code]) {
      return new Example(obj[CommonOptions.description], obj[CommonOptions.code]);
    } else {
      return new Example();
    }
  }

  protected parseProp(obj: any): Prop | null {
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

  protected parseMethod(obj: any): Method { //TODO get parsed when I find example
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

  protected getShortDescription(obj: any): string {
    return obj[CommonOptions.shortDescription] ? obj[CommonOptions.shortDescription] : '';
  }

  protected getDescription(obj: any) {
    return obj[CommonOptions.description] ? obj[CommonOptions.description].type : '';
  }

  protected getName(obj: any) {
    return obj[CommonOptions.name] ? obj[CommonOptions.name] : '';
  }

  protected isStatic(obj: any): boolean {
    return obj[CommonOptions.static];
  }

  protected isRequired(obj: any): boolean {
    return obj[CommonOptions.required];
  }

  abstract getMethods(obj: any): Method[];

  abstract getProps(obj: any): Prop[];

  abstract getExamples(obj: any): Example[];

  abstract getKind(obj: any): ClassKind;

  abstract getClasses(json: any[]): Class[];

  abstract getPropKind(obj: any): PropKind;

  abstract getPropType(obj: any): string;
}