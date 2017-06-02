import { Example } from '../example';
import { Prop } from '../prop/prop';
import { Method } from '../method';
import { ClassKind } from './class-kind';
import { Platform } from '../platform';

export class Class {
    /**
     * Type of model: class, component etc.
     */
    kind: ClassKind;
    /**
     * Working platform.
     */
    platform: Platform;
    examples: Example[];
    props: Prop[];
    methods: Method[];
    name: string;
    shortDescription: string;
    description: string;

    constructor(kind: ClassKind, platform: Platform, examples: Example[], props: Prop[], methods: Method[],
    name: string, shortDescription: string = '', description: string = '') {
        this.kind = kind;
        this.platform = platform;
        this.examples = examples;
        this.props = props;
        this.methods = methods;
    }
}