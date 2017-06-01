import { Example } from './example';
import { Param } from './param';

export class Method {
    name: string;
    platform: string;
    type: string;
    static: boolean;
    shortDescription: string;
    description: string;
    examples: Example[];
    params: Param[];

}