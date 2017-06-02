import { BaseParser } from './base-parser';
import { Metadata, Language, Generator, Framework} from './model/metadata/metadata';
import { Class, ClassKind } from './model/class/class';
import { Platform } from './model/class/platform';
import { Example } from './model/class/example';
import { Prop, PropKind } from './model/class/prop';
import { Method } from './model/class/method';
import { Param } from './model/class/param';
import { Model } from './model/model';

export class TypeDocParser extends BaseParser {
    createMetadata(language: Language = 'typescript', generator: Generator = 'typeDoc', 
    framework: Framework = 'angular'): Metadata {
        return new Metadata(language, generator, framework);        
    }
}