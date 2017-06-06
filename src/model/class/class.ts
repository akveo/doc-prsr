import { Example } from './example';
import { Prop } from './prop';
import { Method } from './method';
import { Platform } from './platform';

export type ClassKind = 'component' | 'class' | 'unknown';

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

    constructor(options: Class) {
        this.kind = options.kind;
        this.platform = options.platform;
        this.examples = options.examples;
        this.props = options.props;
        this.methods = options.methods;
        this.name = options.name;
        this.description = options.description;
        this.shortDescription = options.shortDescription;
    }
}