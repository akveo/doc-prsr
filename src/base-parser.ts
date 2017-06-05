import {
  Model,
  Class,
  Metadata,
  Example,
  Method,
  Param,
  Platform,
  Prop,
  Language,
  Framework, 
  Generator,
  ClassKind 
} from './model';

export abstract class BaseParser {
  protected json: any;

  protected saveJSON(json: any) {
    this.json = json;
  }

}