import { Prop, PropKind } from '../../model';
import { CO, TagSearchItems } from '../typedoc.parser.options';

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
      shortDescription: this.getShortDescription(obj),
      isDocsPrivate: this.getIsPrivate(obj),
    });
  }

  getName(obj: any) {
    if (obj[CO.decorators]) {
      if (this.isInput(obj) && obj[CO.decorators][0][CO.arguments][CO.bindingPropertyName]) {
        return obj[CO.decorators][0][CO.arguments][CO.bindingPropertyName].replace(/'/g, '');
      } else {
        return obj[CO.name];
      }
    } else {
      return obj[CO.name];
    }
  }

  getType(prop: any): string {
    if (prop[CO.type] && prop[CO.type][CO.type]) {
      let type = '';
      if (prop[CO.type][CO.type] === 'intrinsic') {
        type = this.getTypeIntrinsicProp(prop);
      } else if (prop[CO.type][CO.type] === 'array') {
        type = this.getTypeArrayProp(prop);
      } else if (prop[CO.type][CO.type] === 'reference') {
        type = this.getTypeReferenceProp(prop);
      }
      return type;
    } else {
      return this.getTypeOther(prop);
    }
  }

  getIsPrivate(obj: any): boolean {
    return obj[CO.comment] && obj[CO.comment][CO.tags] &&
      obj[CO.comment][CO.tags].some((item: any) =>
        item.tag === TagSearchItems.docsPrivate);
  }

  getTypeIntrinsicProp(prop: any) {
    return prop[CO.type][CO.name];
  }

  getTypeArrayProp(prop: any) {
    return prop[CO.type][CO.elementType][CO.name] + '[]';
  }

  getTypeReferenceProp(prop: any) {
    if (prop[CO.type][CO.typeArguments] && prop[CO.type][CO.typeArguments].length !== 0) {
      return prop[CO.type][CO.name] + '<' + prop[CO.type][CO.typeArguments][0][CO.name] + '>';
    } else {
      return prop[CO.type][CO.name];
    }
  }

  getTypeOther(prop: any) {
    if (prop[CO.comment][CO.tags] && prop[CO.comment][CO.tags].length !== 0) {
      return prop[CO.comment][CO.tags][0][CO.text].replace(/[\n{}]+/g, '');
    } else if (prop[CO.setSignature] && prop[CO.setSignature].length !== 0 &&
      prop[CO.setSignature][CO.parameters] && prop[CO.setSignature][CO.parameters].length !== 0) {
      return prop[CO.setSignature][CO.parameters][0][CO.type][CO.name];
    } else if (prop[CO.getSignature] && prop[CO.getSignature].length !== 0) {
      return prop[CO.getSignature][CO.type][CO.name];
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
