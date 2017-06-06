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

  abstract getPlatform(obj: any): Platform;

  abstract parseExample(obj: any): Example;

  abstract parseProp(obj: any): Prop | null;

  abstract getShortDescription(obj: any): string;

  abstract getDescription(obj: any): string;

  abstract getName(obj: any): string;

  abstract isStatic(obj: any): boolean;

  abstract isRequired(obj: any): boolean;

  abstract getMethods(obj: any): Method[];

  abstract getProps(obj: any): Prop[];

  abstract getExamples(obj: any): Example[];

  abstract getKind(obj: any): ClassKind;

  abstract getClasses(json: any[]): Class[];

  abstract getPropKind(obj: any): PropKind;

  abstract getPropType(obj: any): string;
}