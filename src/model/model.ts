import { Metadata } from './metadata/metadata';
import { Class } from './class/class';

export class Model {
    /**
     * An information about the project.
     *
     */
    metadata: Metadata;
    /**
     * List of classes present in the project.
     */
    classes: Class[];

    constructor(classes: Class[]/*, metadata: Metadata*/) {
        // this.metadata = metadata;
        this.classes = classes;
    }

}