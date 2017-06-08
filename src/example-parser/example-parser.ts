import { 
        Model,
        Class,
        ClassKind,
        Metadata,
        Example,
        Method,
        Param,
        Platform,
        Prop,
        PropKind,
        Language,
        Framework,
        Generator
} from '../model';
import { CommonOptions } from './example-parser.options';

export class ExampleParser {
  protected json: any;

  parse(json: any): Model {
    this.saveJSON(json);
    return new Model(this.getClasses(this.json));
  }

  saveJSON(json: any) {
    this.json = json;
  }

  getClasses(json: any[]): Class[] {
    return json
            .filter((item: any) => item[CommonOptions.classKind])
            .map((item: any) => this.parseClass(item));
  }

  parseClass(obj: any): Class {
    return new Class({
      kind: this.getKind(obj),
      platform: this.getPlatform(obj),
      examples: [],//this.getClassExamples(obj),       //TODO how to parse description string?
      props: this.getProps(obj),
      methods: this.getMethods(obj),
      name: this.getName(obj),
      shortDescription: this.getShortDescription(obj),
      description: this.getDescription(obj)
    });
  }

  parseMethod(obj: any): Method {
    return new Method({
      examples: [],                         //TODO how to parse description string?
      params: this.getParams(obj),
      platform: this.getPlatform(obj),
      name: this.getName(obj),
      type: this.getMethodType(obj),        //type of returns value
      isStatic: false,                      //TODO when can i get this property?
      shortDescription: this.getShortDescription(obj),
      description: this.getDescription(obj)
    });
  }

  parseParam(obj: any): Param {
    return new Param({
      name: this.getName(obj),
      type: this.getParamType(obj),
      required: false,
      shortDescription: this.getShortDescription(obj),
      description: this.getDescription(obj)
    });
  }

  parseProp(obj: any): Prop {
    return new Prop({
      kind: 'prop',                         // Always will be a 'prop' ? NO!
      platform: this.getPlatform(obj),
      isStatic: false,                      //TODO when can i get this property?
      type: this.getParamType(obj),
      required: false,                      //TODO when can i get this property??????
      name: this.getName(obj),
      shortDescription: this.getShortDescription(obj),
      description: this.getDescription(obj)
    });
  }

  parseClassExample(obj: any): Example {
    return new Example({
      code: this.getCodeFromClassExample(obj),
      description: '',//this.getDescriptionFromClassExample(obj),
      shortDescription: ''//this.getShortDescriptionFromClassExample(obj)
    });
  }



  getCodeFromClassExample(obj: any): string {
    const regexp = /```/g;
    if (obj[CommonOptions.description]) {
      return obj[CommonOptions.description].split(regexp)[1];
    } else {
      return '';
    }
  }

  // getDescriptionFromClassExample(obj: any): string {
  //   if (obj[CommonOptions.description]) {
  //     return obj[CommonOptions.description].split('\n\n')[1];
  //   } else {
  //     return '';
  //   }
  // }

  getShortDescriptionFromClassExample(obj: any) {
    const regexp = /```/g;
    let outArr: any[] = [];
    const temp = obj[CommonOptions.description].split('\n\n');
    temp.forEach((item: any) => {
      if (!regexp.test(item)) {
        outArr.push(item);
      }
    });
    return outArr;
  }

  getParamType(obj: any) {
    return obj[CommonOptions.paramType] ? obj[CommonOptions.paramType][CommonOptions.paramType] : '';
  }

  getMethodType(obj: any):string {
    return obj[CommonOptions.methodType] ? obj[CommonOptions.methodType] : '';
  }

  getKind(obj: any): ClassKind {
    return obj[CommonOptions.classKind] ? obj[CommonOptions.classKind] : 'class';
  }

  getName(obj: any): string {
    return obj[CommonOptions.name] ? obj[CommonOptions.name] : '';
  }

  getPlatform(obj: any): Platform {
    return obj[CommonOptions.platform] ? obj[CommonOptions.platform] : 'ios'
  }

  getShortDescription(obj: any): string {
    if (obj[CommonOptions.description]) {
      return obj[CommonOptions.description][CommonOptions.children][0][CommonOptions.children][0][CommonOptions.value];
    } else {
      return '';
    }
  }

  getDescription(obj: any): string {
    let str: string = '';
    if (obj[CommonOptions.description]) {
      obj[CommonOptions.description][CommonOptions.children]
        .forEach((item: any) => {
          item[CommonOptions.children]
            .forEach((item: any) => {
              str += item[CommonOptions.value] + ' ';
            });
        });
      return str;
    } else {
      return '';
    }
  }

  getMethods(obj: any): Method[] {
    if (obj[CommonOptions.members][CommonOptions.instance].length) {
      return obj[CommonOptions.members][CommonOptions.instance]
        .filter((item: any) => item[CommonOptions.kind] === 'function')
        .map((item: any) => this.parseMethod(item));
    } else {
      return [];
    }
  }

  getParams(obj: any): Param[] {
    if (obj[CommonOptions.params].length) {
      return obj[CommonOptions.params].map((item: any) => this.parseParam(item));
    } else {
      return [];
    }
  }

  getPropsFromProperties(obj: any): Prop[] {
    if (obj[CommonOptions.properties].length) {
      return obj[CommonOptions.properties].map((item: any) => this.parseProp(item));
    } else {
      return [];
    }
  }

  getPropsFromMembers(obj: any): Prop[] {
    if (obj[CommonOptions.members][CommonOptions.instance].length) {
      return obj[CommonOptions.members][CommonOptions.instance]
        .filter((item: any) => item[CommonOptions.kind] === 'member')
        .map((item: any) => this.parseProp(item));
    } else {
      return [];
    }
  }

  getProps(obj: any): Prop[] {
    return this.getPropsFromProperties(obj).concat(this.getPropsFromMembers(obj));
  }

  getClassExamples(obj: any): Example[] {  
    if (obj[CommonOptions.examples].length) {
      return obj[CommonOptions.examples].map((item: any) => this.parseClassExample(item));
    } else {
      return [];
    }
  }


}