import { Example } from './example';
import { Param } from './param';
import { Platform } from './platform';

export class Method {
    name: string;
    platform: Platform;
    type: string;
    static: boolean;
    shortDescription: string;
    description: string;
    examples: Example[];
    params: Param[];
}