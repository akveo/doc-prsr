export class Param {
    name: string;
    type: string | null;
    required: boolean;
    shortDescription: string;
    description: string;

    constructor(name: string, type: string | null, required: boolean,
    shortDescription: string = '', description: string = '') {
        this.name = name;
        this.type = type;
        this.required = required;
    }
}