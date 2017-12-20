import { Prop } from '../../model';
import { Common } from './common'
import { CO } from '../doc-js.parser.options';

export class PropertiesParser {
  protected common: Common = new Common();

  getProps(obj: any): Prop[] {
    return this.getPropsFromProperties(obj).concat(this.getPropsFromInstance(obj).concat(this.getPropsFromStatic(obj)));
  }

  getPropsFromProperties(obj: any): Prop[] {
    if (obj[CO.properties] && obj[CO.properties].length) {
      return obj[CO.properties].map((item: any) => this.parsePropFromProperties(item));
    } else {
      return [];
    }
  }

  getPropsFromInstance(obj: any): Prop[] {
    if (obj[CO.members] && obj[CO.members][CO.instance].length) {
      return obj[CO.members][CO.instance]
        .filter((item: any) => item[CO.kind] === 'member')
        .map((item: any) => this.parsePropFromInstance(item));
    } else {
      return [];
    }
  }

  getPropsFromStatic(obj: any): Prop[] {
    if (obj[CO.members] && obj[CO.members][CO.static].length) {
      return obj[CO.members][CO.static]
        .filter((item: any) => item[CO.kind] === 'member')
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
    if (prop[CO.description] && prop[CO.description][CO.children].length > 1) {
      prop[CO.description][CO.children]
        .forEach((item: any) => {
          item[CO.children]
            .forEach((item: any) => {
              str += item[CO.value] + ' ';
            });
        });
      return str.split('}')[1].trim();
    } else {
      return '';
    }
  }

  getDescriptionProperties(prop: any): string {
    let description: string = '';

    if (prop && prop[CO.description] && prop[CO.description][CO.children].length) {
      prop[CO.description][CO.children][0][CO.children]
        .forEach((item: any) => {
          description += item[CO.value] + ' ';
        });
      return description;
    } else {
      return '';
    }
  }

  getDescriptionStatic(prop: any): string {
    if (prop && prop[CO.tags]) {
      return prop[CO.tags][0][CO.description];
    } else {
      return '';
    }
  }

  getShortDescriptionProperties(prop: any): string {
    if (prop && prop[CO.description]) {
      return prop[CO.description][CO.children][0][CO.children][0][CO.value].trim();
    } else {
      return '';
    }
  }

  getShortDescriptionInstance(prop: any): string {
    if (prop && prop[CO.description]) {
      return prop[CO.description][CO.children][0][CO.children][0][CO.value]
        .split('}')[1].trim();
    } else {
      return '';
    }
  }

  getTypeProperties(prop: any): string {
    if (prop && prop[CO.type]) {
      return (prop[CO.type][CO.name]);
    } else {
      return '';
    }
  }

  getTypeStatic(prop: any): string {
    if (prop && prop[CO.properties]) {
      return prop[CO.properties][0][CO.type][CO.name];
    } else {
      return '';
    }
  }

  getTypeInstance(prop: any): string {
    if (prop && prop[CO.description]) {
      return prop[CO.description][CO.children][0]
        [CO.children][0][CO.value]
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