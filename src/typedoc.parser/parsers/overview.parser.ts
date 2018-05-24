import { CO } from '../typedoc.parser.options';
import { OverviewNode } from '../../model';
import { OverviewNodeType } from '../../model/class/overview';
import { ExamplesParser } from './examples.parser';

export class OverviewParser {
  private exampleParser = new ExamplesParser();

  getOverview(obj: any): OverviewNode[] {
    const tags = obj[CO.comment][CO.tags];
    const content = tags && tags.map((example: any) => this.exampleParser.getNodes(example))
      .filter((example: any) => example && example[0].type !== OverviewNodeType.ADDITIONAL_EXAMPLE);

    return [
      this.getShortDescription(obj),
      this.getDescription(obj),
    ].concat(...content)
      .filter(tag => tag && tag.content);
  }

  private getDescription(obj: any): OverviewNode {
    return {
      type: OverviewNodeType.TEXT,
      content: obj && obj[CO.comment] && obj[CO.comment]['text'],
    };
  }

  private getShortDescription(obj: any): OverviewNode {
    return {
      type: OverviewNodeType.TEXT,
      content: obj && obj[CO.comment] && obj[CO.comment]['shortText'],
    };
  }
}