export type PropKind = 'input' | 'output' | 'prop' | 'property';

export class Prop {
  /**
   * Kind of the property: input, output, prop
   */
  kind: PropKind;
  /**
   * Working platform.
   */
  platform: null;
  isStatic: boolean;
  type: string | null;
  required: null;
  name: string;
  shortDescription: string;
  description: string;
  isDocsPrivate?: boolean = false;
  inherited?: boolean = false;

  constructor(options: Prop) {
    this.kind = options.kind;
    this.platform = options.platform;
    this.isStatic = options.isStatic;
    this.type = options.type;
    this.required = options.required;
    this.name = options.name;
    this.shortDescription = options.shortDescription;
    this.description = options.description;
    this.isDocsPrivate = options.isDocsPrivate;
    this.inherited = options.inherited;
  }
}
