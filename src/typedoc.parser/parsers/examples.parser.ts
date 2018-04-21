import { CO } from '../typedoc.parser.options';

export class ExamplesParser {

  getExamples(obj: any): string[] {
    if (obj && this.isHasExamples(obj)) {
      const tags = obj[CO.comment][CO.tags];
      const liveExamples = this.getInline(tags);
      const moreLiveExamples = this.getListed(tags);

      return liveExamples.concat(moreLiveExamples);
    } else {
      return [];
    }
  }

  private getInline(tags: [{ tag: string, text: string }]): string[] {
    const examples = tags.filter(tag => this.isExample(tag))
      .map(tag => tag.tag)
      .map(tag => {
        const example = tag.match(/\((.*)\)/);
        return example ? example[1] : '';
      })
      .filter(example => example);
    return Array.from(new Set(examples));
  }

  private getListed(tags: [{ tag: string, text: string }]): string[] {
    const examples = tags.find(tag => this.isMoreLiveExamples(tag));
    return this.parseMoreExamples(examples);
  }

  private isHasExamples(obj: any) {
    return obj[CO.comment] && obj[CO.comment][CO.tags] && obj[CO.comment][CO.tags].length;
  }

  private isExample(obj: any): boolean {
    return obj[CO.tag].startsWith('live-example') || obj[CO.tag].startsWith('example');
  }

  private isMoreLiveExamples(obj: any): boolean {
    return obj[CO.tag] === 'more-live-examples';
  }

  private parseMoreExamples(liveExamples: any): string[] {
    const parsed = this.parseExamplesText(liveExamples);

    return parsed ? parsed.filter((exampleId: string) => exampleId) : [];
  }

  private parseExamplesText(liveExamples: any): string[] {
    return liveExamples && liveExamples.text && liveExamples.text.split('\n');
  }
}