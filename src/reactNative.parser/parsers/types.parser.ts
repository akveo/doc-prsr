import { Type } from '../../model';
import { CO } from '../reactNative.parser.options';

export class TypesParser {

  public getTypes(component: any): Type[] {
    if (component[CO.tags] && component[CO.tags].length !== 0) {
      return component[CO.tags]
        .filter((tag: any) => tag[CO.tag] && tag[CO.tag] === 'type')
        .map((tag: any) => this.parseType(tag));
    } else {
      return [];
    }
  }

  private parseType(type: any): Type {
    return new Type({
      name: this.getName(type[CO.text]),
      type: this.getType(type[CO.text]),
      description: this.getDescription(type[CO.text]),
    });
  }

  private getType(type: string): string {
    return type.slice(type.indexOf('{') + 1, type.lastIndexOf('}'));
  }

  private getName(type: string): string {
    return type
      .slice(type.lastIndexOf('}') + 1)
      .trim()
      .split(' ')[0];
  }

  private getDescription(type: string): string {
    const split: string[] = type.split('-');
    if (split.length > 1 && split[1]) {
      return split[1]
        .trim()
        .replace(/(\r\n|\n|\r)/gm, ' ');
    } else {
      return '';
    }
  }

}
