import { DocJSParser } from './doc-js.parser';

test('getClasses', () => {
  const docJSParser = new DocJSParser();
  const objClass = {
    kind: 'component'
  };
  const objNoKind = {
    no_kind: 'no-class' 
  };
  expect(docJSParser.getKind(objClass)).toBe('component');
  expect(docJSParser.getKind(objNoKind)).toBe('');
});

