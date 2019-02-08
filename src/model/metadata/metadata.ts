export type Generator = 'docjs' | 'typedoc';
export type Framework = 'react' | 'angular';
export type Language = 'javascript' | 'typescript';

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