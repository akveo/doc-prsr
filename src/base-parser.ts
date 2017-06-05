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
    let isStatic: boolean = false;
    let propType: string | null;
    let required: boolean = false;
    let name: string;
    let description: string;

    if(obj.hasOwnProperty('title') && obj['title'] == 'property') {
      if(obj.hasOwnProperty('kind')) {
        propKind = obj['kind'];
      } else {
        propKind = 'prop';
      }

      if(obj.hasOwnProperty('isStatic')) {
        isStatic = obj['isStatic'];
      }

      if(obj.hasOwnProperty('type')) {
        propType = obj['type'].type;
      } else {
        propType = null;
      }

      if(obj.hasOwnProperty('required')) {
        required = obj['required'];
      }

      if(obj.hasOwnProperty('name')) {
        name = obj['name'];
      }

      if(obj.hasOwnProperty('description')) {
        description = obj['description'].type;
      }
    }
    return new Prop(propKind, this.getPlatform(obj), isStatic, propType, required, name, '', description, '');
  }

  



}