import { Example } from './example';
import { Prop } from './prop';
import { Method } from './method';
import { Style } from './style';

export type ClassKind = 'component' | 'class' | 'service' | 'directive' | 'interface' | 'ng-module';

export class Class {
  /**
   * Type of model: class, component etc.
   */
  kind: ClassKind;
  /**
   * Working platform.
   */
  platform: null;
  examples: Example[];
  props: Prop[];
  methods: Method[];
  name: string;
  shortDescription: string;
  description: string;
  styles: Style[];

  constructor(options: Class) {
    this.kind = options.kind;
    this.platform = options.platform;
    this.examples = options.examples;
    this.props = options.props;
    this.methods = options.methods;
    this.name = options.name;
    this.description = options.description;
    this.shortDescription = options.shortDescription;
    this.styles = options.styles;
  }
}