import { CO } from '../reactNative.parser.options';
import { Sample } from '../../model/class/example';
import { ExampleType } from './extampleType.enum';

export class ExamplesParser {

  public getExamples(component: any, type: ExampleType): Sample[] {
    if (component[CO.tags] && component[CO.tags].length !== 0) {
      return component[CO.tags]
        .filter((tag: any) => tag[CO.tag] === 'example')
        .map((tag: any) => this.parseExample(tag, type))
        .filter(Boolean);
    } else {
      return [];
    }
  }

  private parseExample(example: any, type: ExampleType): Sample | undefined {
    if (example[CO.text].includes(type)) {
      return new Sample({
        code: this.getCode(example[CO.text]),
        description: this.getDescription(example[CO.text], type),
        shortDescription: ''
      });
    }
  }

  private getCode(example: string): string {
    const cutExample: string = example
      .slice(example.indexOf('`') + 1, example.lastIndexOf('`'));
    return '`' + cutExample + '`';
  }

  protected getDescription(example: string, type: ExampleType): string {
    return example
      .replace(type, '')
      .split('\n')[0];
  }

}
