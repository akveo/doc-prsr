export class Param {
  name: string;
  type: string;
  required: null;
  shortDescription: string;
  description: string;

  constructor(options: Param) {
    this.name = options.name;
    this.type = options.type;
    this.required = options.required;
    this.shortDescription = options.shortDescription;
    this.description = options.description;
  }
}