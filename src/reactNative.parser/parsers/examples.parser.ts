import { CO } from '../reactNative.parser.options';
import { Sample } from '../../model/class/example';

export class ExamplesParser {

  public getExamples(component: any): Sample[] {
    if (component[CO.tags] && component[CO.tags].length !== 0) {
      return component[CO.tags]
        .filter((tag: any) => tag[CO.tag] === 'example')
        .map((tag: any) => this.parseExample(tag));
    } else {
      return [];
    }
  }

  private parseExample(example: any): Sample {
    return new Sample({
      code: this.getCode(example[CO.text]),
      description: this.getDescription(example[CO.text]),
      shortDescription: ''
    });
  }

  private getCode(example: string): string {
    const cutExample: string = example
      .slice(example.indexOf('`') + 1, example.lastIndexOf('`'));
    return '`' + cutExample + '`';
  }

  protected getDescription(example: string): string {
    return example.split('\n')[0];
  }

}
