import { Example } from './example';

export class OverviewNode {
  type: OverviewNodeType;
  content: string | Example;
}

export enum OverviewNodeType {
  TEXT = 'text',
  LIVE_EXAMPLE = 'live-example',
  INLINE_EXAMPLE = 'inline-example',
  STACKED_EXAMPLE = 'stacked-example',
  ADDITIONAL_EXAMPLE = 'additional-example',
}

