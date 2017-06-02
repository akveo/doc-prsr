import { PropKind } from './prop-kind';
import { Platform } from './platform';

export class Prop {
    kind: PropKind;
    name: string;
    defaultValue: any;
    static: boolean;
    type: string | null;
    required: boolean;
    platform: Platform;
    shortDescription: string;
    description: string;
}