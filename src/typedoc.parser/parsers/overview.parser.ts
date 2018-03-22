import { CO } from '../typedoc.parser.options';
import { InlineExample, OverviewNode } from '../../model';

export class OverviewParser {

  getOverview(obj: any): OverviewNode[] {
    const tags = obj[CO.comment][CO.tags];
    const content = tags && tags
      .map((example: any) => {
        if (example.tag.startsWith('inline-example')) {
          return this.parseInlineTag(example);
        }

        if (example.tag.startsWith('live-example')) {
          return this.parseLiveTag(example);
        }
      });

    return [
      this.getShortDescription(obj),
      this.getDescription(obj),
    ].concat(...content)
      .filter(tag => tag && tag.content);
  }

  private parseInlineTag(example: any): OverviewNode[] {
    const tagFinish = example.text.indexOf(')') + 1;
    const tag = example.tag.concat(example.text.substring(0, tagFinish));

    return [{
      type: 'inline-example',
      content: this.parseInlineExample(tag),
    }, {
      type: 'text',
      content: example.text.substring(tagFinish).trim(),
    }];
  }

  private parseLiveTag(example: any): OverviewNode[] {
    return [{
      type: 'live-example',
      content: this.parseLiveExample(example.tag),
    }, {
      type: 'text',
      content: example.text.trim(),
    }];
  }

  /**
   * Parses with the following pattern:
   * inline-example(example-id, lang, row-start, row-end)
   *
   * @example:
   * inline-example(some-example-1, ts, 21, 46)
   * inline-example(some-example-2, scss, 11, 16)
   * */
  private parseInlineExample(raw: string): InlineExample {
    const example = raw.match(/\((.*),(.*),(.*),(.*)\)/);

    if (!example) {
      throw new Error(`Can't parse inline example: ${raw}`);
    }

    return {
      id: example[1],
      lang: example[2],
      firstLine: +example[3],
      lastLine: +example[4],
    };
  }

  private parseLiveExample(raw: string) {
    const example = raw.match(/\((.*)\)/);
    return example ? example[1] : '';
  }

  private getDescription(obj: any): OverviewNode {
    return {
      type: 'text',
      content: obj && obj[CO.comment] && obj[CO.comment]['text'],
    };
  }

  private getShortDescription(obj: any): OverviewNode {
    return {
      type: 'text',
      content: obj && obj[CO.comment] && obj[CO.comment]['shortText'],
    };
  }
}