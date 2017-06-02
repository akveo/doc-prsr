import { Example } from './example';
import { Prop } from './prop';
import { Method } from './method';
import { ClassKind } from './class-kind';
import { Platform } from './platform';

export class Class {
    name: string;
    kind: ClassKind;
    shortDescription: string;
    description: string;
    platform: Platform;
    examples: Example[];
    props: Prop[];
    methods: Method[];
}