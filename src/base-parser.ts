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

export const ClassOptions: any = { //enum!!!!! import
  classKind: 'kind',
  methods: 'methods'
}

export const CommonOptions: any = {
  platform: 'platform',
  examples: 'examples',
  description: 'description', 
  code: 'code',
  properties: 'properties',
  title: 'title'
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
    return obj
            .filter((item: any) => item[CommonOptions.examples])
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
    return obj
            .filter((item: any) => item[CommonOptions.properties])
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

  getMethods(obj: any): Method[] {
    return obj
            .filter((item: any) => item[ClassOptions.methods])
            .map((item: any) => this.parseMethod(item));
  }

  parseMethod(obj: any): Method { //TODO get parsed when I find example
    const examples: Example[] = [];
    const params: Param[] = [];
    const name: string = '';
    const type: string = '';
    const description: string = '';

    return new Method(examples, params, this.getPlatform(obj), name, type, this.isStatic(obj), '', description);
  }

  getShortDescription(obj: any): string {
    return obj.hasOwnProperty('shortDescription') && obj['shortDescription'];
    else return '';
  }

  getDescription(obj: any) {
    return obj.hasOwnProperty('description') && obj['description'] && obj['description'].type;
    else return '';
  }

  getName(obj: any) {
    if(obj.hasOwnProperty('name')) return obj['name'];
    else return '';
  }

  isStatic(obj: any): boolean {
    if(obj.hasOwnProperty('static')) {
      if(obj['static'] == 'true') return true;
      else return false;
    }
    return false
  }

  isRequired(obj: any): boolean {
    if(obj.hasOwnProperty('boolean')) {
      if(obj['boolean'] == 'true') return true;
      else return false;
    }
    return false;
  }

  getPropKind(obj: any): PropKind {
    if(obj.hasOwnProperty('kind')) {
      return obj['kind'];
    } else return 'prop';
  }

  getPropType(obj: any):string {
    if(obj.hasOwnProperty('type')) {
      return obj['type'].type;
    } else {
      return 'null';
    }
  }

}