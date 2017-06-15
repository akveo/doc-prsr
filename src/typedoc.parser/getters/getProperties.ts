import {Prop} from '../../model';
import {CommonOptions} from '../typedoc.parser.options';

export class GetProperties {

  getProps(obj: any): Prop[] {
    if (obj && obj[CommonOptions.children]) {
      return obj[CommonOptions.children]
        .filter((item: any) => {
          if (item[CommonOptions.primKind] === 'Property' || item[CommonOptions.primKind] === 'Accessor') {
            return item;
          }
        })
        .filter((item: any) => item[CommonOptions.comment])
        .map((item: any) => {
          if (item[CommonOptions.decorators]) {
            if (item[CommonOptions.decorators][0][CommonOptions.name] === 'Input') {
              return this.parseInput(item);
            } else if (item[CommonOptions.decorators][0][CommonOptions.name] === 'Output') {
              return this.parseOutput(item);
            } else {
              return this.parseProperty(item);
            }
          } else if (!item[CommonOptions.decorators]) {
            return this.parseProperty(item);
          }

        });
    } else {
      return [];
    }
  }

  parseProperty(obj: any): Prop {
    return new Prop({
      kind: 'property',
      platform: null,
      isStatic: this.isStatic(obj),
      type: this.getType(obj),
      required: null,
      name: obj[CommonOptions.name],
      description: this.getDescription(obj),
      shortDescription: this.getShortDescription(obj)
    });
  }

  parseInput(obj: any): Prop {
    return new Prop({
      kind: 'input',
      platform: null,
      isStatic: this.isStatic(obj),
      type: this.getType(obj),
      required: null,
      name: obj[CommonOptions.name],
      description: this.getDescription(obj),
      shortDescription: this.getShortDescription(obj)
    });
  }

  parseOutput(obj: any): Prop {
    return new Prop({
      kind: 'output',
      platform: null,
      isStatic: false,
      type: this.getType(obj),
      required: null,
      name: obj[CommonOptions.name],
      shortDescription: '',
      description: ''
    });
  }

  getType(obj: any): string {
    if (obj && obj[CommonOptions.type]) {
      return obj[CommonOptions.type][CommonOptions.name];
    } else {
      return '';
    }
  }

  getDescription(obj: any): string {
    if (obj && obj[CommonOptions.comment]) {
      return obj[CommonOptions.comment]['text'];
    } else {
      return '';
    }
  }

  getShortDescription(obj: any): string {
    if (obj && obj[CommonOptions.comment]) {
      return obj[CommonOptions.comment]['shortText'];
    } else {
      return '';
    }
  }

  isStatic(obj: any): boolean {
    if (obj && obj[CommonOptions.flags] && obj[CommonOptions.flags][CommonOptions.isStatic]) {
      return obj[CommonOptions.flags][CommonOptions.isStatic];
    } else {
      return false;
    }
  }
}