import { Prop } from '../../model';
import { Common } from './common'
import { CommonOptions } from '../doc-js.parser.options';

export class PropertiesParser {
  protected common: Common = new Common();

  getProps(obj: any): Prop[] {
    return this.getPropsFromProperties(obj).concat(this.getPropsFromInstance(obj).concat(this.getPropsFromStatic(obj)));
  }

  getPropsFromProperties(obj: any): Prop[] {
    if (obj[CommonOptions.properties] && obj[CommonOptions.properties].length) {
      return obj[CommonOptions.properties].map((item: any) => this.parsePropFromProperties(item));
    } else {
      return [];
    }
  }

  getPropsFromInstance(obj: any): Prop[] {
    if (obj[CommonOptions.members] && obj[CommonOptions.members][CommonOptions.instance].length) {
      return obj[CommonOptions.members][CommonOptions.instance]
        .filter((item: any) => item[CommonOptions.kind] === 'member')
        .map((item: any) => this.parsePropFromInstance(item));
    } else {
      return [];
    }
  }

  getPropsFromStatic(obj: any): Prop[] {
    if (obj[CommonOptions.members] && obj[CommonOptions.members][CommonOptions.static].length) {
      return obj[CommonOptions.members][CommonOptions.static]
        .filter((item: any) => item[CommonOptions.kind] === 'member')
        .map((item: any) => this.parsePropFromStatic(item));
    } else {
      return [];
    }
  }

  parsePropFromProperties(obj: any): Prop {
      return new Prop({
        kind: 'prop',
        platform: null,
        isStatic: false,
        type: this.getTypeProperties(obj),
        required: null,
        name: this.common.getName(obj),
        shortDescription: this.isDescriptionsCoincide(obj) ? '' : this.getShortDescriptionProperties(obj),
        description: this.getDescriptionProperties(obj)
      });
  }

  parsePropFromInstance(obj: any): Prop {
    return new Prop({
      kind: 'property',
      platform: null,
      isStatic: false,
      type: this.getTypeInstance(obj),
      required: null,
      name: this.common.getName(obj),
      shortDescription: this.getShortDescriptionInstance(obj),
      description: this.getDescriptionInstance(obj)
    });
  }

  parsePropFromStatic(obj: any): Prop {
    return new Prop({
      kind: 'property',
      platform: null,
      isStatic: true,
      type: this.getTypeStatic(obj),
      required: null,
      name: this.common.getName(obj),
      shortDescription: this.getDescriptionStatic(obj),
      description: this.getDescriptionStatic(obj)
    });
  }

  getDescriptionInstance(obj: any): string {
    let str: string = '';
    if (obj[CommonOptions.description] && obj[CommonOptions.description][CommonOptions.children].length > 1) {
      obj[CommonOptions.description][CommonOptions.children]
        .forEach((item: any) => {
          item[CommonOptions.children]
            .forEach((item: any) => {
              str += item[CommonOptions.value] + ' ';
            });
        });
      return str.split('}')[1].trim();
    } else {
      return '';
    }
  }

  getDescriptionProperties(obj: any): string {
    let description: string = '';

    if (obj && obj[CommonOptions.description] && obj[CommonOptions.description][CommonOptions.children].length) {
      obj[CommonOptions.description][CommonOptions.children][0][CommonOptions.children]
        .forEach((item: any) => {
          description += item[CommonOptions.value] + ' ';
        });
      return description;
    } else {
      return '';
    }
  }

  getDescriptionStatic(obj: any) {
    if (obj && obj[CommonOptions.tags]) {
      return obj[CommonOptions.tags][0][CommonOptions.description];
    } else {
      return '';
    }
  }

  getShortDescriptionProperties(obj: any): string {
    if (obj && obj[CommonOptions.description]) {
      return obj[CommonOptions.description][CommonOptions.children][0][CommonOptions.children][0][CommonOptions.value].trim();
    } else {
      return '';
    }
  }

  getShortDescriptionInstance(obj: any): string {
    if (obj && obj[CommonOptions.description]) {
      return obj[CommonOptions.description][CommonOptions.children][0][CommonOptions.children][0][CommonOptions.value]
        .split('}')[1].trim();
    } else {
      return '';
    }
  }

  getTypeProperties(obj: any): string {
    if (obj && obj[CommonOptions.type]) {
      return (obj[CommonOptions.type][CommonOptions.name]);
    } else {
      return '';
    }
  }

  getTypeStatic(obj: any): string {
    if (obj && obj[CommonOptions.properties]) {
      return obj[CommonOptions.properties][0][CommonOptions.type][CommonOptions.name];
    } else {
      return '';
    }
  }

  getTypeInstance(obj: any): string {
    if (obj && obj[CommonOptions.description]) {
      return obj[CommonOptions.description][CommonOptions.children][0]
        [CommonOptions.children][0][CommonOptions.value]
        .split(' ')[0].replace(/[{}]/g, '');
    } else {
      return '';
    }
  }

  isDescriptionsCoincide(obj: any) {
    return this.getShortDescriptionProperties(obj).trim() === this.getDescriptionProperties(obj).trim() ||
      this.getDescriptionProperties(obj).indexOf(this.getShortDescriptionProperties(obj)) != -1;
  }
}