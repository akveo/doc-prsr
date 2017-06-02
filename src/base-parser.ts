import { Metadata, Language, Generator, Framework} from './model/metadata/metadata';
import { Class, ClassKind } from './model/class/class';
import { Platform } from './model/class/platform';
import { Example } from './model/class/example';
import { Prop, PropKind } from './model/class/prop';
import { Method } from './model/class/method';
import { Param } from './model/class/param';
import { Model } from './model/model';

export abstract class BaseParser {    

    createDocument(metadata: Metadata, classes: Class[]) {
        return new Model(metadata, classes);
    }   

    createMetadata(language: Language, generator: Generator, framework: Framework): Metadata {
        return new Metadata(language, generator, framework);        
    }

    createClass(kind: ClassKind, platform: Platform, examples: Example[], props: Prop[], 
    methods: Method[], name: string, shortDescription: string, description: string) {
        return new Class(kind, platform, examples, props, methods, name, shortDescription, description);
    }

    createExample(code: string, description: string) {
        return new Example(code, description);
    }

    createProp(kind: PropKind, platform: Platform, isStatic: boolean, 
    type: string | null, required: boolean, name: string, 
    shortDescription: string, description: string) {
        return new Prop(kind, platform, isStatic, type, required, name, shortDescription, description);
    }

    createMethod(examples: Example[], params: Param[], platform: Platform, name: string,
    type: string, isStatic: boolean, shortDescription: string = '', description: string = '') {
        return new Method(examples, params, platform, name, type, isStatic, shortDescription, description);
    }

    createParam(name: string, type: string | null, required: boolean,
    shortDescription: string = '', description: string = '') {
        return new Param(name, type, required, shortDescription, description);
    }

}