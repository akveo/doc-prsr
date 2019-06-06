import {
  Class,
  ClassKind,
  Metadata,
  Model,
} from '../model';
import { CO } from './reactNative.parser.options';
import {
  PropsParser,
  ExamplesParser,
  MethodsParser,
  TypesParser,
  HocParamsParser,
} from './parsers';

export class ReactNativeParser {

  protected classes: any[] = [];
  protected propsParser: PropsParser = new PropsParser();
  protected examplesParser: ExamplesParser = new ExamplesParser();
  protected methodParser: MethodsParser = new MethodsParser();
  protected typesParser: TypesParser = new TypesParser();
  protected hocParamsParser: HocParamsParser = new HocParamsParser();
  protected json: any;
  private descriptionIsOddCodeChar: boolean = true;

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
      .filter((component: any) => component[CO.comment])
      .map((component: any) => this.parseClass(component, this.getClassKind(component)));
  }

  private parseClass(component: any, kind: ClassKind): Class {
    return new Class({
      kind: kind,
      platform: null,
      examples: this.examplesParser.getExamples(component[CO.comment]),
      props: this.propsParser.getProps(component[CO.comment]),
      methods: this.methodParser.getMethods(component[CO.comment]),
      types: this.typesParser.getTypes(component[CO.comment]),
      name: component[CO.name].replace('Component', ''),
      description: this.getDescription(component),
      shortDescription: '',
      styles: [],
      liveExamples: [],
      overview: [],
      params: this.hocParamsParser.getParams(component),
    });
  }

  private findAllClasses(obj: any) {
    if (obj && obj[CO.children]) {
      obj[CO.children]
        .forEach((file: any) => {
          file[CO.children]
            .forEach((entity: any) => {
              if (entity[CO.primKind] === 'Class' || entity[CO.primKind] === 'Function') {
                this.classes.push(entity);
              }
            });
        });
    }
  }

  private getDescription(obj: any): string {
    const description: string = obj[CO.comment][CO.shortText] + '\n' + obj[CO.comment][CO.text];
    return description
      .split('')
      .map((char: string, index: number) => {
        if (char === '`' && this.descriptionIsOddCodeChar) {
          char = '<code>';
          this.descriptionIsOddCodeChar = false;
          return char;
        } else if (char === '`' && !this.descriptionIsOddCodeChar) {
          char = '</code>';
          this.descriptionIsOddCodeChar = true;
          return char;
        } else {
          return char;
        }
      })
      .join('')
      .replace(/(?:\r\n|\r|\n)/g, '<br>');
  }

  private getClassKind(obj: any): ClassKind {
    if (obj[CO.name].toLowerCase().includes('service')) {
      return 'service';
    } else if (obj[CO.primKind] === 'Function') {
      return 'HOC';
    } else {
      return 'component';
    }
  }

}
