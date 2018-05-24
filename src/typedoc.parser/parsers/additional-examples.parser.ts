import { OverviewNode, OverviewNodeType } from '../../model/class/overview';
import { ExamplesParser } from './examples.parser';
import { CO } from '../typedoc.parser.options';

export class AdditionalExamplesParser {
  private exampleParser = new ExamplesParser();

  getAdditionalExamples(obj: any): string[] {
    const tags = obj[CO.comment][CO.tags];
    const content = tags && tags.map((example: any) => this.exampleParser.getNodes(example))
      .filter((example: any) => example && example[0].type !== OverviewNodeType.INLINE_EXAMPLE)
      .map(([example]: [OverviewNode]) => example);

    return [].concat(...content);
  }
}