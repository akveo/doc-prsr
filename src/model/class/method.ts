import { Example } from './example';
import { Param } from './param';
import { Platform } from './platform';

export class Method {
    examples: Example[];
    params: Param[];
    /**
     * Working platform.
     */
    platform: Platform;
    name: string;
    type: string;
    isStatic: boolean;
    shortDescription: string;
    description: string;

    constructor(examples: Example[], params: Param[], platform: Platform, name: string,
    type: string, isStatic: boolean, shortDescription: string = '', description: string = '') {
        this.examples = examples;
        this.params = params;
        this.platform = platform;
        this.name = name;
        this.type = type;
        this.isStatic = isStatic;
    }
}