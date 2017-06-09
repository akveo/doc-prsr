import { Example } from './example';
import { Param } from './param';
import { Platform } from './platform';

export class Method {
    examples: Example[];
    params: Param[];
    /**
     * Working platform.
     */
    platform: null;
    name: string;
    type: string[];
    isStatic: boolean;
    shortDescription: string;
    description: string;

    constructor(options: Method) {
        this.examples = options.examples;
        this.params = options.params;
        this.platform = options.platform;
        this.name = options.name;
        this.type = options.type;
        this.isStatic = options.isStatic;
        this.shortDescription = options.shortDescription;
        this.description = options.description;
    }
}