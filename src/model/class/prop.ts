import { Platform } from './platform';

export type PropKind = 'input' | 'output' | 'prop';

export class Prop {
    /**
     * Kind of the property: input, output, prop
     */
    kind: PropKind;
    /**
     * Working platform.
     */
    platform: Platform;
    isStatic: boolean;
    type: string | null;
    required: boolean;
    name: string;
    shortDescription: string;
    description: string;
    defaultValue: any;

    constructor(kind: PropKind, platform: Platform, isStatic: boolean, type: string | null, 
    required: boolean, name: string, shortDescription: string = '', description: string = '',
    defaultValue: any = null) {
        this.kind = kind;
        this.platform = platform;
        this.isStatic = isStatic;
        this.type = type;
        this.required = required;
        this.name = name;
    }
}