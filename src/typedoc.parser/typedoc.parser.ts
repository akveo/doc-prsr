import {CO} from './typedoc.parser.options';
import {
  Model,
  Class,
  ClassKind
} from '../model';

import {
  PropertiesParser,
  MethodsParser,
  StylesParser,
  ExamplesParser
} from './parsers';
import {Metadata} from "../model/metadata/metadata";

export class TypedocParser {
  protected examples: ExamplesParser = new ExamplesParser();
  protected styles: StylesParser = new StylesParser();
  protected methods: MethodsParser = new MethodsParser();
  protected props: PropertiesParser = new PropertiesParser();
  protected json: any;
  protected classes: any[] = [];

  saveJSON(json: any) {
    this.json = json;
  }

  parse(json: any, metadata: Metadata): Model {
    this.saveJSON(json);
    return new Model(this.getClasses(this.json), metadata);
  }

  getClasses(obj: any): Class[] {
    this.findAllClasses(obj);

    return this.classes
      .filter((item: any) => this.isClass(item) || this.isInterface(item))
      .filter((item: any) => item[CO.comment])
      .map((item: any) => {
        if (item[CO.decorators]) {
          if (this.isComponent(item)) {
            return this.parseClass(item, 'component');
          } else if (this.isService(item)) {
            return this.parseClass(item, 'service');
          } else if (this.isDirective(item)) {
            return this.parseClass(item, 'directive');
          } else {
            return this.parseClass(item, 'class');
          }
        } else {
          if (this.isInterface(item)) {
            return this.parseClass(item, 'interface');
          } else {
            return this.parseClass(item, 'class');
          }
        }
      });
  }

  findAllClasses(obj: any) {
    if (obj && obj[CO.children]) {
      obj[CO.children].forEach((item: any) => {
        if (this.isClass(item) || this.isInterface(item)) {
          this.classes.push(item);
        } else {
          this.findAllClasses(item);
        }
      })
    }
  }

  parseClass(obj: any, kind: ClassKind): Class {
    return new Class({
      kind: kind,
      platform: null,
      examples: this.examples.getExamples(obj),
      props: this.props.getProps(obj),
      methods: this.methods.getMethods(obj),
      name: obj[CO.name],
      description: this.getDescription(obj),
      shortDescription: this.getShortDescription(obj),
      styles: this.styles.getStyles(obj)
    });
  }

  getDescription(obj: any): string {
    if (obj && obj[CO.comment]) {
      return obj[CO.comment]['text'];
    } else {
      return '';
    }
  }

  getShortDescription(obj: any): string {
    if (obj && obj[CO.comment]) {
      return obj[CO.comment]['shortText'];
    } else {
      return '';
    }
  }

  isClass(obj: any) {
    return obj[CO.primKind] === 'Class';
  }

  isInterface(obj: any) {
    return obj[CO.primKind] === 'Interface';
  }

  isComponent(obj: any) {
    return obj[CO.decorators][0][CO.name] === 'Component';
  }

  isService(obj: any) {
    return obj[CO.decorators][0][CO.name] === 'Injectable';
  }

  isDirective(obj: any) {
    return obj[CO.decorators][0][CO.name] === 'Directive';
  }

  isNgModule(obj: any) {
    return obj[CO.decorators][0][CO.name] === 'NgModule';
  }

}