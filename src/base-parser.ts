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

  protected saveJSON(json: any) {
    this.json = json;
  }

  parse(json: any): Model {
    this.saveJSON(json);
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
        obj['examples'].forEach(item => { examples.push(this.parseExample(item))});
      } else if(obj['examples'].constructor == Object) {
        examples.push(this.parseExample(obj['examples']));
      }
    }

    return examples;
  }

  parseExample(obj: any): Example {
    if(obj.hasOwnProperty('description') || obj.hasOwnProperty('code')) {
      return new Example(obj['description'], obj['code']);
    } else {
      return new Example();
    }
  }

  getProps(obj: any): Prop[] {
    const props: Prop[] = [];
    if(obj.hasOwnProperty('properties')) {
      if(obj['properties'].constructor == Array) {
        obj['properties'].forEach(item => { props.push(this.parseProp(item))});
      } else if(obj['properties'].constructor == Object) {
        props.push(this.parseProp(obj['properties']));
      }
    }
    
    return props;
  }

  parseProp(obj: any): Prop {
    let propKind: PropKind;
    let propType: string | null;
    let name: string;
    let description: string;

    if(obj.hasOwnProperty('title') && obj['title'] == 'property') {
      if(obj.hasOwnProperty('kind')) {
        propKind = obj['kind'];
      } else {
        propKind = 'prop';
      }

      if(obj.hasOwnProperty('type')) {
        propType = obj['type'].type;
      } else {
        propType = null;
      }

      if(obj.hasOwnProperty('name')) {
        name = obj['name'];
      }

      if(obj.hasOwnProperty('description')) {
        description = obj['description'].type;
      }
    }
    return new Prop(propKind, this.getPlatform(obj), this.isStatic(obj), propType, this.isRequired(obj), name, '', description, '');
  }

  getMethods(obj: any): Method[] {
    const methods: Method[] = []
    if(obj.hasOwnProperty('methods')) {
      if(obj['methods'].constructor == Array) {
        obj['methods'].forEach(item => { methods.push(this.parseMethod(item))});
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

  getShortDescription(obj): string {
    if(obj.hasOwnProperty('shortDescription')) return obj['shortDescription'];
    else return '';
  }

  getDescription(obj: any) {
    if(obj.hasOwnProperty('description')) return obj['description'].type;
    else return '';
  }

  getName(obj: any) {
    if(obj.hasOwnProperty('name')) return obj['name'];
    else return '';
  }

  isStatic(obj: any): boolean {
    if(obj.hasOwnProperty('static')) {
      if(obj['static'] = 'true') return true;
      else return false;
    }
  }

  isRequired(obj: any): boolean {
    if(obj.hasOwnProperty('boolean')) {
      if(obj['boolean'] = 'true') return true;
      else return false;
    }
  }
  



}