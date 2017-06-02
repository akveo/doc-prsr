export type Framework = 'angular' | 'react';
export type Generator = 'documentationJS' | 'typeDoc';
export type Language = 'typescript' | 'javascript';
 
export class Metadata {
    /**
     * Implementation language.
     */
    language: Language;
    /**
     * Docs generator.
     */
    generator: Generator;
    /**
     * Implementation framework.
     */
    framework: Framework;

    constructor(language: Language, generator: Generator, framework: Framework) {
        this.language = language;
        this.generator = generator;
        this.framework = framework;
    }
}