import { Prop, PropKind } from '../../model';
import { CommonOptions } from '../typedoc.parser.options';

export class PropertiesParser {

  getProps(obj: any): Prop[] {
    if (obj && obj[CommonOptions.children]) {
      return obj[CommonOptions.children]
        .filter((item: any) => this.isProperty(item) || this.isAccessor(item))
        .filter((item: any) => item[CommonOptions.comment])
        .map((item: any) => {
          if (item[CommonOptions.decorators]) {
            if (this.isInput(item)) {
              return this.parseProperty(item, 'input');
            } else if (this.isOutput(item)) {
              return this.parseProperty(item, 'output');
            } else {
              return this.parseProperty(item, 'property');
            }
          } else {
            return this.parseProperty(item, 'property');
          }

        });
    } else {
      return [];
    }
  }

  parseProperty(obj: any, kind: PropKind): Prop {
    return new Prop({
      kind: kind,
      platform: null,
      isStatic: this.isStatic(obj),
      type: this.getType(obj),
      required: null,
      name: obj[CommonOptions.name],
      description: this.getDescription(obj),
      shortDescription: this.getShortDescription(obj)
    });
  }

  getType(prop: any): string {
    if (prop && prop[CommonOptions.type]) {
      return prop[CommonOptions.type][CommonOptions.name];
    } else if(prop && prop[CommonOptions.comment][CommonOptions.tags]) {
      return prop[CommonOptions.comment][CommonOptions.tags]
        .filter((item: any) => item[CommonOptions.tag] === 'type')[0][CommonOptions.text]
        .replace(/[{}\n]/g, '');
    } else {
      return '';
    }
  }

  getDescription(prop: any): string {
    if (prop && prop[CommonOptions.comment]) {
      return prop[CommonOptions.comment]['text'];
    } else {
      return '';
    }
  }

  getShortDescription(prop: any): string {
    if (prop && prop[CommonOptions.comment]) {
      return prop[CommonOptions.comment]['shortText'];
    } else {
      return '';
    }
  }

  isStatic(prop: any): boolean {
    if (prop && prop[CommonOptions.flags] && prop[CommonOptions.flags][CommonOptions.isStatic]) {
      return prop[CommonOptions.flags][CommonOptions.isStatic];
    } else {
      return false;
    }
  }

  isProperty(obj: any) {
    return obj[CommonOptions.primKind] === 'Property';
  }

  isAccessor(obj: any) {
    return obj[CommonOptions.primKind] === 'Accessor';
  }

  isInput(prop: any) {
    return prop[CommonOptions.decorators][0][CommonOptions.name] === 'Input';
  }

  isOutput(prop: any) {
    return prop[CommonOptions.decorators][0][CommonOptions.name] === 'Output';
  }
}