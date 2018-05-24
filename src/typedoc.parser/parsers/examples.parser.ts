import { OverviewNode, OverviewNodeType } from '../../model/class/overview';
import { Example, InlineExample } from '../../model/class/example';


type Parser = (raw: string) => Example;

export class ExamplesParser {
  getNodes(example: any): OverviewNode[] | undefined {
    if (example.tag.startsWith(OverviewNodeType.INLINE_EXAMPLE)) {
      return this.parseInlineTag(example);
    }

    if (example.tag.startsWith(OverviewNodeType.LIVE_EXAMPLE)) {
      return this.parseLiveTag(example);
    }

    if (example.tag.startsWith(OverviewNodeType.STACKED_EXAMPLE)) {
      return this.parseStackedTag(example);
    }

    if (example.tag.startsWith(OverviewNodeType.ADDITIONAL_EXAMPLE)) {
      return this.parseAdditionalTag(example);
    }
  }

  private parseInlineTag(example: any): OverviewNode[] {
    return this.parse(example, OverviewNodeType.INLINE_EXAMPLE, this.parseInlineExample);
  }

  private parseLiveTag(example: any): OverviewNode[] {
    return this.parse(example, OverviewNodeType.LIVE_EXAMPLE, this.parseExample);
  }

  private parseStackedTag(example: any): OverviewNode[] {
    return this.parse(example, OverviewNodeType.STACKED_EXAMPLE, this.parseExample);
  }

  private parseAdditionalTag(example: any): OverviewNode[] {
    return this.parse(example, OverviewNodeType.ADDITIONAL_EXAMPLE, this.parseExample);
  }

  private parse(example: any, exampleType: OverviewNodeType, parser: Parser): OverviewNode[] {
    const { tag, comment } = this.prepareExample(example);
    return this.createNodes(exampleType, parser.call(this, tag), comment);
  }

  private prepareExample(example: any): { tag: string, comment: string } {
    const [type, name] = example.tag.split('(');
    const tagFinish = example.text.indexOf(')') + 1;
    const tag = `${type}(${this.handleName(name)}${example.text.substring(0, tagFinish)}`;
    const comment = example.text.substring(tagFinish).trim();
    return { tag, comment };
  }

  private createNodes(exampleType: OverviewNodeType, example: Example, comment: string): OverviewNode[] {
    return [
      { type: exampleType, content: example },
      { type: OverviewNodeType.TEXT, content: comment },
    ]
  }

  /**
   * Parses with the following pattern:
   * inline-example(name, example-id, lang, row-start, row-end)
   *
   * @example:
   * inline-example(Super example, some-component/some.component.ts, 21, 46)
   * inline-example(Super example, some-component/some.component)
   * */
  private parseInlineExample(raw: string): InlineExample {
    const [name, id, firstLine, lastLine] = this.parseRaw(raw);

    return {
      name,
      id,
      firstLine: +firstLine,
      lastLine: +lastLine,
    };
  }

  /**
   * Parses with the following pattern:
   * inline-example(name, example-id)
   *
   * @example:
   * inline-example(Super example, some-component/some.component)
   * */
  private parseExample(raw: string): Example {
    const [name, id] = this.parseRaw(raw);
    return {
      name,
      id,
    };
  }

  private parseRaw(raw: string): string[] {
    const example = raw.match(/\((.*)\)/);

    if (!example) {
      throw new Error(`Can't parse example: ${raw}`);
    }

    return example[1]
      .split(',')
      .map(item => item.trim());
  }

  private handleName(str: string): string {
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
    if (!capitalized.endsWith(',')) {
      return capitalized + ' ';
    }

    return capitalized;
  }
}