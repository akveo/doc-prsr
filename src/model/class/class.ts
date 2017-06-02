import { Example } from './example';
import { Prop } from './prop';
import { Method } from './method';
import { Platform } from './platform';

type ClassKind = 'component' | 'class';

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