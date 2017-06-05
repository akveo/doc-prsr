export class Param {
    name: string;
    type: string | null;
    required: boolean;
    shortDescription: string;
    description: string;

    constructor(options: Param) {
        this.name = options.name;
        this.type = options.type;
        this.required = options.required;
    }
}