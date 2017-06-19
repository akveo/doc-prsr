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

  getDescriptionInstance(prop: any): string {
    let str: string = '';
    if (prop[CommonOptions.description] && prop[CommonOptions.description][CommonOptions.children].length > 1) {
      prop[CommonOptions.description][CommonOptions.children]
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

  getDescriptionProperties(prop: any): string {
    let description: string = '';

    if (prop && prop[CommonOptions.description] && prop[CommonOptions.description][CommonOptions.children].length) {
      prop[CommonOptions.description][CommonOptions.children][0][CommonOptions.children]
        .forEach((item: any) => {
          description += item[CommonOptions.value] + ' ';
        });
      return description;
    } else {
      return '';
    }
  }

  getDescriptionStatic(prop: any): string {
    if (prop && prop[CommonOptions.tags]) {
      return prop[CommonOptions.tags][0][CommonOptions.description];
    } else {
      return '';
    }
  }

  getShortDescriptionProperties(prop: any): string {
    if (prop && prop[CommonOptions.description]) {
      return prop[CommonOptions.description][CommonOptions.children][0][CommonOptions.children][0][CommonOptions.value].trim();
    } else {
      return '';
    }
  }

  getShortDescriptionInstance(prop: any): string {
    if (prop && prop[CommonOptions.description]) {
      return prop[CommonOptions.description][CommonOptions.children][0][CommonOptions.children][0][CommonOptions.value]
        .split('}')[1].trim();
    } else {
      return '';
    }
  }

  getTypeProperties(prop: any): string {
    if (prop && prop[CommonOptions.type]) {
      return (prop[CommonOptions.type][CommonOptions.name]);
    } else {
      return '';
    }
  }

  getTypeStatic(prop: any): string {
    if (prop && prop[CommonOptions.properties]) {
      return prop[CommonOptions.properties][0][CommonOptions.type][CommonOptions.name];
    } else {
      return '';
    }
  }

  getTypeInstance(prop: any): string {
    if (prop && prop[CommonOptions.description]) {
      return prop[CommonOptions.description][CommonOptions.children][0]
        [CommonOptions.children][0][CommonOptions.value]
        .split(' ')[0].replace(/[{}]/g, '');
    } else {
      return '';
    }
  }

  isDescriptionsCoincide(obj: any): boolean {
    return this.getShortDescriptionProperties(obj).trim() === this.getDescriptionProperties(obj).trim() ||
      this.getDescriptionProperties(obj).indexOf(this.getShortDescriptionProperties(obj)) != -1;
  }
}