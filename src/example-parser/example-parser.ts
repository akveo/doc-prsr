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
  Generator,
  Style
} from '../model';
import {CommonOptions} from './example-parser.options';

export class ExampleParser {
  protected json: any;

  parse(json: any): Model {
    this.saveJSON(json);
    return new Model(this.getClasses(this.json));
  }

  saveJSON(json: any) {
    this.json = json;
  }

//--------------------------------------------------classes-------------------------------------------------------------
  getClasses(json: any[]): Class[] {
    return json
      .filter((item: any) => item[CommonOptions.classKind])
      .map((item: any) => this.parseClass(item));
  }

  parseClass(obj: any): Class {
    return new Class({
      kind: this.getKind(obj),
      platform: null,
      examples: this.getClassExamples(obj),
      props: this.getProps(obj),
      methods: this.getMethods(obj),
      name: this.getName(obj),
      shortDescription: this.getShortDescription(obj),
      description: this.getDescription(obj),
      styles: this.getStyles(obj)
    });
  }

  getClassPlatform(obj: any): Platform {
    if (obj[CommonOptions.tags].length) {
      const arr = obj[CommonOptions.tags]
        .filter((item: any) => item[CommonOptions.title] === 'platform');
      return arr[0][CommonOptions.description];
    } else {
      return 'ios';
    }
  }

  //--------------------------------------------------------------------------------------------------------------------
  //---------------------------------------------property---------------------------------------------------------------

  parsePropFromProperties(obj: any): Prop {
    return new Prop({
      kind: 'prop',
      platform: null,
      isStatic: false,
      type: this.getTypePropertyFromProperties(obj),
      required: null,
      name: this.getName(obj),
      shortDescription: this.getShortDescriptionAndDescriptionOfPropertyFromProperties(obj),
      description: this.getShortDescriptionAndDescriptionOfPropertyFromProperties(obj)
    });
  }

  parsePropFromInstance(obj: any): Prop {
    return new Prop({
      kind: 'property',
      platform: null,
      isStatic: false,
      type: this.getTypeOfPropertyFromInstance(obj),
      required: null,
      name: this.getName(obj),
      shortDescription: this.getDescriptionAndShortDescriptionOfPropFromInstance(obj),
      description: this.getDescriptionAndShortDescriptionOfPropFromInstance(obj)
    });
  }

  parsePropFromStatic(obj: any): Prop {
    return new Prop({
      kind: 'property',
      platform: null,
      isStatic: true,
      type: this.getTypePropFromStatic(obj),
      required: null,
      name: this.getName(obj),
      shortDescription: this.getShortDescriptionAndDescriptionOfPropertyFromStatic(obj),
      description: this.getShortDescriptionAndDescriptionOfPropertyFromStatic(obj)
    });
  }

  getPropsFromProperties(obj: any): Prop[] {
    if (obj[CommonOptions.properties].length) {
      return obj[CommonOptions.properties].map((item: any) => this.parsePropFromProperties(item));
    } else {
      return [];
    }
  }

  getTypePropertyFromProperties(obj: any): string {
    if (obj) {
      return (obj[CommonOptions.type][CommonOptions.name]);
    } else {
      return '';
    }
  }

  getShortDescriptionAndDescriptionOfPropertyFromProperties(obj: any) {
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

  getPropsFromInstance(obj: any): Prop[] {
    if (obj[CommonOptions.members][CommonOptions.instance].length) {
      return obj[CommonOptions.members][CommonOptions.instance]
        .filter((item: any) => item[CommonOptions.kind] === 'member')
        .map((item: any) => this.parsePropFromInstance(item));
    } else {
      return [];
    }
  }

  getDescriptionAndShortDescriptionOfPropFromInstance(obj: any): string {
    let str: string = '';
    if (obj[CommonOptions.description]) {
      obj[CommonOptions.description][CommonOptions.children]
        .forEach((item: any) => {
          item[CommonOptions.children]
            .forEach((item: any) => {
              str += item[CommonOptions.value] + ' ';
            });
        });
      return str.split('}')[1].trim();
    } else {
      return '';
    }
  }

  getTypeOfPropertyFromInstance(obj: any): string {
    if (obj) {
      return obj[CommonOptions.description][CommonOptions.children][0]
        [CommonOptions.children][0][CommonOptions.value]
        .split(' ')[0].replace(/[{}]/g, '');
    } else {
      return '';
    }
  }

  getPropsFromStatic(obj: any): Prop[] {
    if (obj[CommonOptions.members][CommonOptions.static].length) {
      return obj[CommonOptions.members][CommonOptions.static]
        .filter((item: any) => item[CommonOptions.kind] === 'member')
        .map((item: any) => this.parsePropFromStatic(item));
    } else {
      return [];
    }
  }

  getTypePropFromStatic(obj: any): string {
    if (obj) {
      return obj[CommonOptions.properties][0][CommonOptions.type][CommonOptions.name];
    } else {
      return '';
    }
  }

  getShortDescriptionAndDescriptionOfPropertyFromStatic(obj: any) {
    if (obj) {
      return obj[CommonOptions.tags][0][CommonOptions.description];
    } else {
      return '';
    }
  }

  getProps(obj: any): Prop[] {
    return this.getPropsFromProperties(obj).concat(this.getPropsFromInstance(obj).concat(this.getPropsFromStatic(obj)));
  }

  //--------------------------------------------------------------------------------------------------------------------
  //------------------------------------------------method--------------------------------------------------------------
  parseMethodFromInstance(obj: any): Method {
    return new Method({
      examples: this.getClassExamples(obj),
      params: this.getParams(obj),
      platform: null,
      name: this.getName(obj),
      type: this.getMethodType(obj),
      isStatic: false,
      shortDescription: this.getShortDescription(obj),
      description: this.getDescription(obj)
    });
  }

  parseMethodFromStatic(obj: any): Method {
    return new Method({
      examples: this.getClassExamples(obj),
      params: this.getParams(obj),
      platform: null,
      name: this.getName(obj),
      type: this.getMethodType(obj),
      isStatic: true,
      shortDescription: this.getShortDescription(obj),
      description: this.getDescription(obj)
    });
  }

  getMethodsFromInstance(obj: any): Method[] {
    if (obj[CommonOptions.members][CommonOptions.instance].length) {
      return obj[CommonOptions.members][CommonOptions.instance]
        .filter((item: any) => item[CommonOptions.kind] === 'function')
        .map((item: any) => this.parseMethodFromInstance(item));
    } else {
      return [];
    }
  }

  getMethodsFromStatic(obj: any): Method[] {
    if (obj[CommonOptions.members][CommonOptions.static].length) {
      return obj[CommonOptions.members][CommonOptions.static]
        .filter((item: any) => item[CommonOptions.kind] === 'function')
        .map((item: any) => this.parseMethodFromStatic(item));
    } else {
      return [];
    }
  }

  getMethods(obj: any): Method[] {
    return this.getMethodsFromInstance(obj).concat(this.getMethodsFromStatic(obj));
  }


  getMethodType(obj: any) {
    let temp: any[] = [];
    if (obj[CommonOptions.methodType].length) {
      obj[CommonOptions.methodType]
        .forEach((item: any) => {
          temp.push(item[CommonOptions.type][CommonOptions.type]);
        });
      return temp
    } else {
      return ['void'];
    }
  }

  //--------------------------------------------------------------------------------------------------------------------
  //-------------------------------------------------styles-------------------------------------------------------------
  getStyles(obj: any): Style[] {
    if (obj[CommonOptions.tags].length) {
      return obj[CommonOptions.tags]
        .filter((item: any) => item[CommonOptions.title] === 'styles')
        .map((item: any) => this.parseStyle(item));
    } else
      return [];
  }

  parseStyle(obj: any) {
    return new Style({
      shortDescription: this.getShortDescriptionOfStyle(obj),
      styles: this.getStylesOfStyle(obj)
    });
  }

  getShortDescriptionOfStyle(obj: any): string {
    return obj[CommonOptions.description].split('\n')[0];
  }

  getStylesOfStyle(obj: any): any[] {                               //regExp!!!!!!!!!!!!
    const arr = obj[CommonOptions.description].split('\n');
    const arrTemp: any = [];
    arr.splice(0, 1);
    arr.forEach((item: any) => {
      const [key, value] = item.split(':');
      const styleObj: any = {};
      styleObj[key.replace(/[`-]/g, '').trim()] = value.trim();
      arrTemp.push(styleObj);
    });
    return arrTemp;
  }

  //--------------------------------------------------------------------------------------------------------------------
  //-----------------------------------------------examples-------------------------------------------------------------

  parseClassExample(obj: any): Example {
    return new Example({
      code: this.getCodeFromClassExample(obj),
      description: this.getDescriptionFromClassExample(obj),
      shortDescription: this.getShortDescriptionFromClassExample(obj)
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

  getDescriptionFromClassExample(obj: any): string { //!!!!!!!
    const regexp = /```/g;
    let outArr: any[] = [];
    const temp = obj[CommonOptions.description].split('\n\n');
    temp.forEach((item: any) => {
      if (!regexp.test(item)) {
        outArr.push(item);
      }
    });
    return outArr[1];
  }

  getShortDescriptionFromClassExample(obj: any): string {
    const regexp = /```/g;
    let outArr: any[] = [];
    const temp = obj[CommonOptions.description].split('\n\n');
    temp.forEach((item: any) => {
      if (!regexp.test(item)) {
        outArr.push(item);
      }
    });
    return outArr[0];
  }

  getClassExamples(obj: any): Example[] {
    if (obj[CommonOptions.examples].length) {
      return obj[CommonOptions.examples].map((item: any) => this.parseClassExample(item));
    } else {
      return [];
    }
  }

//----------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------params-----------------------------------------------------------
  parseParam(obj: any): Param {
    return new Param({
      name: this.getName(obj),
      type: this.getParamType(obj),
      required: null,
      shortDescription: this.getShortDescription(obj),
      description: this.getDescription(obj)
    });
  }

  getParamType(obj: any) {
    return obj[CommonOptions.paramType] ? obj[CommonOptions.paramType][CommonOptions.paramType] : '';
  }

  getParams(obj: any): Param[] {
    if (obj[CommonOptions.params].length) {
      return obj[CommonOptions.params].map((item: any) => this.parseParam(item));
    } else {
      return [];
    }
  }

//----------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------others---------------------------------------------------------------

  getKind(obj: any): ClassKind {
    return obj[CommonOptions.classKind] ? obj[CommonOptions.classKind] : 'class';
  }

  getName(obj: any): string {
    return obj[CommonOptions.name] ? obj[CommonOptions.name] : '';
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

}