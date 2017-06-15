import {
  Model,
  Class
} from '../model';
import {CommonOptions} from './doc-js.parser.options';

import {
  GetStyles,
  GetProperties,
  GetExamples,
  GetMethods,
  Common
} from './getters';

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
      .filter((item: any) => item[CommonOptions.classKind] === 'class')
      .map((item: any) => this.parseClass(item));
  }

  parseClass(obj: any): Class {
    return new Class({
      kind: this.common.getKind(obj),
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

}