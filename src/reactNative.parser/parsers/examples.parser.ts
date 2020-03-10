import { CO } from '../reactNative.parser.options';
import { Sample } from '../../model/class/example';

export class ExamplesParser {

  public getExamples(component: any, targetTag: 'example' | 'overview-example'): Sample[] {
    if (component[CO.tags] && component[CO.tags].length !== 0) {
      return component[CO.tags]
        .filter((tag: any) => tag[CO.tag] === targetTag)
        .map((tag: any) => this.parseExampleText(tag[CO.text]))
        .filter(Boolean);
    } else {
      return [];
    }
  }

  private parseExampleText(text: string): Sample {
    const [name, ...descriptionOrCode] = text.split('\n');
    const description = this.parseDescription(descriptionOrCode.join('\n'));

    return new Sample({ description: name, ...description });
  }

  private parseDescription(example: string): any {
    const code = example.startsWith('```') && example;
    const shortDescription = !example.startsWith('```') && example;

    return { shortDescription, code };
  }

}
