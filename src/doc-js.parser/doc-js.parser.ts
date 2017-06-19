import {
  Model,
  Class,
  Metadata
} from '../model';
import {CommonOptions} from './doc-js.parser.options';

import {
  GetStyles,
  PropertiesParser,
  ExamplesParser,
  MethodsParser,
  Common
} from './getters';

export class DocJsParser {
  protected json: any;
  protected styles: GetStyles = new GetStyles();
  protected props: PropertiesParser = new PropertiesParser();
  protected examples: ExamplesParser = new ExamplesParser();
  protected methods: MethodsParser = new MethodsParser();
  protected common: Common = new Common();

  parse(json: any, metadata: Metadata): Model {
    this.saveJSON(json);
    return new Model(this.getClasses(this.json), metadata);
  }

  saveJSON(json: any) {
    this.json = json;
  }

  getClasses(json: any[]): Class[] {
    return json
      .filter((item: any) => this.isClass(item))
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

  isClass(obj: any): boolean {
    return obj[CommonOptions.classKind] === 'class';
  }

}