import { InlineExample } from './example';

export class OverviewNode {
  type: 'text' | 'live-example' | 'inline-example' | 'example';
  content: string | InlineExample;
}
