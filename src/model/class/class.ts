import { Sample } from './example';
import { Prop } from './prop';
import { Method } from './method';
import { Style } from './style';
import { OverviewNode } from './overview';
import { Type } from './type';
import { Param } from './param';

export type ClassKind = 'component' | 'class' | 'service' | 'directive' | 'interface' | 'ng-module' | 'HOC' | 'type' | 'enumeration';

export class Class {
  /**
   * Type of model: class, component etc.
   */
  kind: ClassKind;
  /**
   * Working platform.
   */
  platform: null;
  /** @deprecated*/
  examples: Sample[];
  overviewExamples?: Sample[];
  props: Prop[];
  methods: Method[];
  name: string;
  /** @deprecated*/
  shortDescription: string;
  /** @deprecated*/
  description: string;
  styles: Style[];
  liveExamples: string[];
  overview: OverviewNode[];
  types?: Type[];
  params?: Param[];

  constructor(options: Class) {
    this.kind = options.kind;
    this.platform = options.platform;
    this.examples = options.examples;
    this.overviewExamples = options.overviewExamples;
    this.props = options.props;
    this.methods = options.methods;
    this.name = options.name;
    this.description = options.description;
    this.shortDescription = options.shortDescription;
    this.styles = options.styles;
    this.liveExamples = options.liveExamples;
    this.overview = options.overview;
    this.types = options.types;
    this.params = options.params;
  }
}
