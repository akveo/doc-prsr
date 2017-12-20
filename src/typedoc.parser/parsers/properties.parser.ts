import { Prop, PropKind } from '../../model';
import { CO } from '../typedoc.parser.options';

export class PropertiesParser {

  getProps(obj: any): Prop[] {
    if (obj && obj[CO.children]) {
      return obj[CO.children]
        .filter((item: any) => this.isProperty(item) || this.isAccessor(item))
        .filter((item: any) => item[CO.comment])
        .map((item: any) => {
          if (item[CO.decorators]) {
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
      name: this.getName(obj),
      description: this.getDescription(obj),
      shortDescription: this.getShortDescription(obj)
    });
  }

  getName(obj: any) {
    if (this.isInput(obj) && obj[CO.decorators][0][CO.arguments][CO.bindingPropertyName]) {
      return obj[CO.decorators][0][CO.arguments][CO.bindingPropertyName].replace(/'/g, '');
    } else {
      return obj[CO.name];
    }
  }

  getType(prop: any): string {
    if (prop && prop[CO.type]) {
      if (prop[CO.type][CO.name]) {
        return prop[CO.type][CO.name];
      } else {
        return prop[CO.type][CO.elementType][CO.name] + '[]';
      }
    } else if(prop && prop[CO.comment][CO.tags]) {
      return prop[CO.comment][CO.tags]
        .filter((item: any) => item[CO.tag] === 'type')[0][CO.text]
        .replace(/[{}\n]/g, '');
    } else if(prop && prop[CO.setSignature][0][CO.parameters] && prop[CO.setSignature][0][CO.parameters].length !== 0) {
      return prop[CO.setSignature][0][CO.parameters][0][CO.type][CO.name];
    } else {
      return '';
    }
  }

  getDescription(prop: any): string {
    if (prop && prop[CO.comment]) {
      return prop[CO.comment]['text'];
    } else {
      return '';
    }
  }

  getShortDescription(prop: any): string {
    if (prop && prop[CO.comment]) {
      return prop[CO.comment]['shortText'];
    } else {
      return '';
    }
  }

  isStatic(prop: any): boolean {
    if (prop && prop[CO.flags] && prop[CO.flags][CO.isStatic]) {
      return prop[CO.flags][CO.isStatic];
    } else {
      return false;
    }
  }

  isProperty(obj: any) {
    return obj[CO.primKind] === 'Property';
  }

  isAccessor(obj: any) {
    return obj[CO.primKind] === 'Accessor';
  }

  isInput(prop: any) {
    return prop[CO.decorators][0][CO.name] === 'Input';
  }

  isOutput(prop: any) {
    return prop[CO.decorators][0][CO.name] === 'Output';
  }
}