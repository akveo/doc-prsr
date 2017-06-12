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
import {CommonOptions} from './doc-js.parser.options';
import {GetStyles} from './getters/getStyles';
import {GetProperties} from './getters/getProperties';
import {GetExamples} from './getters/getExamples';

export class DocJsParser {
  protected json: any;
  protected styles: GetStyles = new GetStyles();
  protected props: GetProperties = new GetProperties();
  protected examples: GetExamples = new GetExamples();

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
      examples: this.examples.getExamples(obj),
      props: this.props.getProps(obj),
      methods: this.getMethods(obj),
      name: this.getName(obj),
      shortDescription: this.getShortDescription(obj),
      description: this.getDescription(obj),
      styles: this.styles.getStyles(obj)
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



  //--------------------------------------------------------------------------------------------------------------------
  //------------------------------------------------method--------------------------------------------------------------
  parseMethodFromInstance(obj: any): Method {
    return new Method({
      examples: this.examples.getExamples(obj),
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
      examples: this.examples.getExamples(obj),
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


  //--------------------------------------------------------------------------------------------------------------------
  //-----------------------------------------------examples-------------------------------------------------------------



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
      if (obj[CommonOptions.description][CommonOptions.children].length > 1)
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