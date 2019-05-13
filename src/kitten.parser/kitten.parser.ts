import {
  Class,
  ClassKind,
  Metadata,
  Model,
} from '../model';
import { CO } from './kitten.parser.options';
import {
  PropsParser,
  ExamplesParser,
  MethodsParser,
  TypesParser,
} from './parsers';

export class KittenParser {

  protected classes: any[] = [];
  protected propsParser: PropsParser = new PropsParser();
  protected examplesParser: ExamplesParser = new ExamplesParser();
  protected methodParser: MethodsParser = new MethodsParser();
  protected typesParser: TypesParser = new TypesParser();
  protected json: any;

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
      .map((component: any) => this.parseClass(component, this.getClassKind(component[CO.name])));
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
      description: component[CO.comment][CO.shortText],
      shortDescription: '',
      styles: [],
      liveExamples: [],
      overview: [],
    });
  }

  private findAllClasses(obj: any) {
    if (obj && obj[CO.children]) {
      obj[CO.children]
        .forEach((file: any) => {
          file[CO.children]
            .forEach((entity: any) => {
              if (entity[CO.primKind] === 'Class') {
                this.classes.push(entity);
              }
            });
        });
    }
  }

  private getClassKind(className: string): ClassKind {
    const isService: boolean = className.toLowerCase().includes('service');
    return isService ? 'service' : 'component';
  }

}
