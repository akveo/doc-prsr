import {Prop} from '../../model';
import {CommonOptions} from '../typedoc.parser.options';

export class GetProperties {

  getProps(obj: any): Prop[] {
    if (obj && obj[CommonOptions.children]) {
      return obj[CommonOptions.children]
        .filter((item: any) => {
          if (item[CommonOptions.primKind] === 'Property' || item[CommonOptions.primKind] === 'Accessor'
            || item[CommonOptions.primKind] === 'Constructor') {
            return item;
          }
        })
        .map((item: any) => {
          if (item[CommonOptions.primKind] === 'Property') {
            if (item[CommonOptions.decorators] && item[CommonOptions.decorators][CommonOptions.name] === 'Input') {
              return this.parseInput(item);
            } else if (item[CommonOptions.decorators] && item[CommonOptions.decorators][CommonOptions.name] === 'Output') {
              return this.parseOutput(item);
            } else if (item[CommonOptions.decorators]) {
              return this.parseProperty(item)
            } else if (!item[CommonOptions.decorators]) {
              return this.parseProperty(item);
            }
          } else if (item[CommonOptions.primKind] === 'Accessor') {
            if (item[CommonOptions.decorators] && item[CommonOptions.decorators][CommonOptions.name] === 'Input') {
              return this.parseInput(item);
            } else if (item[CommonOptions.decorators] && item[CommonOptions.decorators][CommonOptions.name] === 'Output') {
              return this.parseOutput(item);
            } else if (item[CommonOptions.decorators]) {
              return this.parseProperty(item)
            } else if (!item[CommonOptions.decorators]) {
              return this.parseProperty(item);
            }
          } else if (item[CommonOptions.primKind] === 'Constructor') {
            return this.parseProperty(item);
          }
        });
    } else {
      return [];
    }
  }

  parseConstructor(obj: any): Prop {
    return new Prop({
      kind: 'property',
      platform: null,
      isStatic: false,
      type: this.getType(obj),
      required: null,
      name: obj[CommonOptions.name],
      shortDescription: '',
      description: ''
    });
  }

  parseProperty(obj: any): Prop {
    return new Prop({
      kind: 'property',
      platform: null,
      isStatic: false,
      type: this.getType(obj),
      required: null,
      name: obj[CommonOptions.name],
      shortDescription: '',
      description: ''
    });
  }

  parseInput(obj: any): Prop {
    return new Prop({
      kind: 'input',
      platform: null,
      isStatic: false,
      type: this.getType(obj),
      required: null,
      name: obj[CommonOptions.name],
      shortDescription: '',
      description: ''
    });
  }

  parseOutput(obj: any): Prop {
    return new Prop({
      kind: 'output',
      platform: null,
      isStatic: false,
      type: '',
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
}