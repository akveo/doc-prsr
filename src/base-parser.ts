
import { Model, Class, Metadata, Example, Method, Param, Platform, Prop, Language, Framework, Generator } from './model/index';

export abstract class BaseParser {    
    // TODO: different metadata for different parsers
    abstract getMetadata(language: Language, generator: Generator, framework: Framework): Metadata;
    // abstract getClasses(): Class[];

}