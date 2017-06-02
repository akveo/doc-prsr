import { PropKind } from './prop-kind';
import { Platform } from './platform';

export class Prop {
    kind: PropKind;
    platform: Platform;
    static_c: boolean;
    type: string | null;
    required: boolean;
    name: string;
    shortDescription: string;
    description: string;
    defaultValue: any;

    constructor(kind: PropKind, platform: Platform, static_c: boolean, type: string | null, 
    required: boolean, name: string, shortDescription: string = '', description: string = '',
    defaultValue: any = null) {
        this.kind = kind;
        this.platform = platform;
        this.static_c = static_c;
        this.type = type;
        this.required = required;
        this.name = name;
    }
}