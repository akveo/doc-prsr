import { CO } from '../typedoc.parser.options';

export class LiveExamplesParser {

  getExamples(obj: any): string[] {
    if (obj && this.isHasExamples(obj)) {
      const liveExamples = obj[CO.comment][CO.tags]
        .find((item: any) => this.isLiveExamples(item));

      return this.parse(liveExamples);
    } else {
      return [];
    }
  }

  private isHasExamples(obj: any) {
    return obj[CO.comment] && obj[CO.comment][CO.tags] && obj[CO.comment][CO.tags].length;
  }

  private isLiveExamples(obj: any): boolean {
    return obj[CO.tag] === 'live-examples';
  }

  private parse(liveExamples: any): string[] {
    const parsed = this.parseExamplesText(liveExamples);

    if (!parsed) {
      return [];
    }

    return parsed.filter((exampleId: string) => exampleId);
  }

  private parseExamplesText(liveExamples: any): string[] {
    return liveExamples && liveExamples.text && liveExamples.text.split('\n');
  }
}