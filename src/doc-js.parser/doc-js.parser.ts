import {
  Model,
  Class,
  ClassKind,
  Platform
} from '../model';
import {CommonOptions} from './doc-js.parser.options';
import {GetStyles} from './getters/getStyles';
import {GetProperties} from './getters/getProperties';
import {GetExamples} from './getters/getExamples';
import {GetMethods} from "./getters/getMethods";
import {Common} from './getters/common';

export class DocJsParser {
  protected json: any;
  protected styles: GetStyles = new GetStyles();
  protected props: GetProperties = new GetProperties();
  protected examples: GetExamples = new GetExamples();
  protected methods: GetMethods = new GetMethods();
  protected common: Common = new Common();

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
      platform: null,
      examples: this.examples.getExamples(obj),
      props: this.props.getProps(obj),
      methods: this.methods.getMethods(obj),
      name: this.common.getName(obj),
      shortDescription: this.common.getShortDescription(obj),
      description: this.common.getDescription(obj),
      styles: this.styles.getStyles(obj)
    });
  }

  getKind(obj: any): ClassKind {
    return obj[CommonOptions.classKind] ? obj[CommonOptions.classKind] : 'class';
  }
}