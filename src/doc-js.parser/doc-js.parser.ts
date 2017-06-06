import { BaseParser } from '../base-parser';
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

export class DocJSParser extends BaseParser {

  getClasses(json: any[]): Class[] {
    return json
        .filter(item => item[ClassOptions.classKind])
        .map(item => this.parseClass(item));
    }

  getKind(obj: any): ClassKind {//names
    return obj[ClassOptions.classKind] ? obj[ClassOptions.classKind] : 'class';
  }

  getExamples(obj: any): Example[] {
    return obj[CommonOptions.examples]
            .map((item: any) => this.parseExample(item));
  }

  getProps(obj: any): Prop[] {
    return obj[CommonOptions.properties]
            .map((item: any) => this.parseProp(item));
  }

  getMethods(obj: any): Method[] {// where are methods??
    return obj[ClassOptions.methods] ? obj[ClassOptions.methods].map((item: any) => this.parseMethod(item)) : [];
  }

  getPropKind(obj: any): PropKind {
    return obj[CommonOptions.kind] ? obj[CommonOptions.kind] : 'prop';
  }

  getPropType(obj: any):string {
    return obj[CommonOptions.type] ? obj[CommonOptions.type] : '';
  }

}