import {
  Prop,
  PropKind,
} from '../../model';
import { CO } from '../reactNative.parser.options';


export class PropsParser {

  public getProps(component: any): Prop[] {
    if (component[CO.tags] && component[CO.tags].length !== 0) {
      return component[CO.tags]
        .filter((tag: any) => tag[CO.tag] === 'property')
        .map((tag: any) => this.parseProperty(tag, 'prop'));
    } else {
      return [];
    }
  }

  private parseProperty(property: any, kind: PropKind): Prop {
    return new Prop({
      kind: kind,
      platform: null,
      isStatic: false,
      type: this.getType(property[CO.text]),
      required: null,
      name: this.getName(property[CO.text]),
      description: this.getDescription(property[CO.text]),
      shortDescription: '',
      isDocsPrivate: false,
      inherited: false,
    });
  }

  private getDescription(prop: string): string {
    const descriptionArray: string[] = prop.split('-');
    descriptionArray.shift();
    return descriptionArray.join('-');
  }

  private getType(prop: string): string {
    const type: string = prop.slice(prop.indexOf('{') + 1, prop.lastIndexOf('}'));

    return type ? type : '';
  }

  private getName(prop: string): string {
    const splitted: string[] = prop.split('-');
    if (splitted.length > 1) {
      return splitted[0].split('}')[1].trim();
    } else {
      return splitted[0].replace(/(\r\n|\n|\r)/gm, '');
    }
  }

}
