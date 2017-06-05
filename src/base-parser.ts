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
  classKind: 'kind'
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
    return obj[CommonOptions.examples]
              .filter((item: any) => item[CommonOptions.examples])
              .map((item: any) => this.parseExample(item));
  }

  parseExample(obj: any): Example {
    if(obj.hasOwnProperty(CommonOptions.description) || obj.hasOwnProperty(CommonOptions.code)) {
      return new Example(obj[CommonOptions.description], obj[CommonOptions.code]);
    } else {
      return new Example();
    }
  }

  getProps(obj: any): Prop[] {
    const props: Prop[] = [];
    if(obj.hasOwnProperty(CommonOptions.properties)) {
      if(obj[CommonOptions.properties] instanceof Array) {
        obj[CommonOptions.properties].forEach((item: any) => { props.push(this.parseProp(item))});
      } else if(obj[CommonOptions.properties] instanceof Object) {
        props.push(this.parseProp(obj[CommonOptions.properties]));
      }
    }
    
    return props;
  }

  parseProp(obj: any): Prop {
    if(obj.hasOwnProperty(CommonOptions.title) && obj[CommonOptions.title] == 'property') {
      return new Prop(this.getPropKind(obj), this.getPlatform(obj), this.isStatic(obj),
      this.getPropType(obj), this.isRequired(obj), this.getName(obj), '', this.getDescription(obj), '');
    } 
  }

  getMethods(obj: any): Method[] {
    const methods: Method[] = [];

    if(obj.hasOwnProperty('methods')) {
      if(obj['methods'] instanceof Array) {
        obj['methods'].forEach((item: any) => { methods.push(this.parseMethod(item))});
      } else if(obj['methods'].constructor == Object) {
        methods.push(this.parseMethod(obj['methods']));
      }
    }

    return methods;
  }

  parseMethod(obj: any): Method { //TODO gett parsed when I find example
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