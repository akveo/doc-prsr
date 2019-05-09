export class Type {

  name: string;
  type: string;
  description: string;

  constructor(options: Type) {
    this.name = options.name;
    this.type = options.type;
    this.description = options.description;
  }

}
