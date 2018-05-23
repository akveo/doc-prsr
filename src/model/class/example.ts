/** @deprecated */
export class Sample {
  code: string;
  description: string;
  shortDescription: string;

  constructor(options: any) {
    this.shortDescription = options.shortDescription;
    this.description = options.description;
    this.code = options.code;
  }
}

export class Example {
  name: string;
  id: string;
}

export class InlineExample extends Example {
  firstLine: number;
  lastLine: number;
}
