import { Metadata } from './metadata/metadata';
import { Class } from './class/class';

export class Model {
    metadata: Metadata;
    classes: Class[];

    constructor( metadata: Metadata, classes: Class[]) {
        this.metadata = metadata;
        this.classes = classes;
    }
}