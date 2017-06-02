import { Generator } from './generator';
import { Language } from './language';
import { Framework } from './framework';
 
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