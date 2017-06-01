import { SomeComponent } from './some-component';
import { SomeClass } from './some-class';
import { Example } from './example';
import { Property } from './property';
import { Method } from './method';


export class Classes {
    name: string;
    kind: SomeComponent | SomeClass;
    shortDescription: string;
    description: string;
    platform: string;
    examples: Example[];
    props: Property[];
    methods: Method[];
}