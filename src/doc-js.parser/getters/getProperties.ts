import { Prop } from '../../model';
import {CommonOptions} from '../doc-js.parser.options';

export class GetProperties {

  getName(obj: any): string {
    return obj[CommonOptions.name] ? obj[CommonOptions.name] : '';
  }

  parsePropFromProperties(obj: any): Prop {
    return new Prop({
      kind: 'prop',
      platform: null,
      isStatic: false,
      type: this.getTypePropertyFromProperties(obj),
      required: null,
      name: this.getName(obj),
      shortDescription: this.getShortDescriptionProperties(obj),
      description: this.getDescription(obj)
    });
  }

  parsePropFromInstance(obj: any): Prop {
    return new Prop({
      kind: 'property',
      platform: null,
      isStatic: false,
      type: this.getTypeOfPropertyFromInstance(obj),
      required: null,
      name: this.getName(obj),
      shortDescription: this.getShortDescriptionInstance(obj),
      description: this.getDescription(obj)
    });
  }

  parsePropFromStatic(obj: any): Prop {
    return new Prop({
      kind: 'property',
      platform: null,
      isStatic: true,
      type: this.getTypePropFromStatic(obj),
      required: null,
      name: this.getName(obj),
      shortDescription: this.getDescriptionStatic(obj),
      description: this.getDescriptionStatic(obj)
    });
  }

  getPropsFromProperties(obj: any): Prop[] {
    if (obj[CommonOptions.properties].length) {
      return obj[CommonOptions.properties].map((item: any) => this.parsePropFromProperties(item));
    } else {
      return [];
    }
  }

  getPropsFromInstance(obj: any): Prop[] {
    if (obj[CommonOptions.members][CommonOptions.instance].length) {
      return obj[CommonOptions.members][CommonOptions.instance]
        .filter((item: any) => item[CommonOptions.kind] === 'member')
        .map((item: any) => this.parsePropFromInstance(item));
    } else {
      return [];
    }
  }

  getPropsFromStatic(obj: any): Prop[] {
    if (obj[CommonOptions.members][CommonOptions.static].length) {
      return obj[CommonOptions.members][CommonOptions.static]
        .filter((item: any) => item[CommonOptions.kind] === 'member')
        .map((item: any) => this.parsePropFromStatic(item));
    } else {
      return [];
    }
  }

  getProps(obj: any): Prop[] {
    return this.getPropsFromProperties(obj).concat(this.getPropsFromInstance(obj).concat(this.getPropsFromStatic(obj)));
  }

  getShortDescriptionProperties(obj: any) {
    if (obj[CommonOptions.description]) {
      return obj[CommonOptions.description][CommonOptions.children][0][CommonOptions.children][0][CommonOptions.value];
    } else {
      return '';
    }
  }

  getShortDescriptionInstance(obj: any): string {

    if (obj[CommonOptions.description]) {
      return obj[CommonOptions.description][CommonOptions.children][0][CommonOptions.children][0][CommonOptions.value]
        .split('}')[1].trim();
    } else {
      return '';
    }
  }

  getDescription(obj: any): string {
    let str: string = '';
    if (obj[CommonOptions.description][CommonOptions.children].length > 1) {
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

  getDescriptionStatic(obj: any) { //??????????
    if (obj) {
      return obj[CommonOptions.tags][0][CommonOptions.description];
    } else {
      return '';
    }
  }

  getTypePropertyFromProperties(obj: any): string {
    if (obj) {
      return (obj[CommonOptions.type][CommonOptions.name]);
    } else {
      return '';
    }
  }

  getTypePropFromStatic(obj: any): string {
    if (obj) {
      return obj[CommonOptions.properties][0][CommonOptions.type][CommonOptions.name];
    } else {
      return '';
    }
  }

  getTypeOfPropertyFromInstance(obj: any): string {
    if (obj) {
      return obj[CommonOptions.description][CommonOptions.children][0]
        [CommonOptions.children][0][CommonOptions.value]
        .split(' ')[0].replace(/[{}]/g, '');
    } else {
      return '';
    }
  }
}