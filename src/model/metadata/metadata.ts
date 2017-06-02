import { Generator } from './generator';
import { Language } from './language';
import { Framework } from './framework';
 
export class Metadata {
    language: Language;
    generator: Generator;
    framework: Framework;

    constructor(language: Language, generator: Generator, framework: Framework) {
        this.language = language;
        this.generator = generator;
        this.framework = framework;
    }
}