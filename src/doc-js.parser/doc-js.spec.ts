import { DocJSParser } from './doc-js.parser';

test('#getClasses', () => {
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

test('#getPropKind', () => {
  const docJSParser = new DocJSParser();
  const objProp = {
    kind: 'input'
  };
  const objNoProp = {
    no_kind: 'some prop' 
  };

  expect(docJSParser.getPropKind(objProp)).toBe('input');
  expect(docJSParser.getPropKind(objNoProp)).toBe('prop');
});

test('#getPropType', () => {
  const docJSParser = new DocJSParser();
  const objType = {
    type: 'some-type'
  };
  const objNoType = {
    no_type: 'some-type' 
  };

  expect(docJSParser.getPropType(objType)).toBe('some-type');
  expect(docJSParser.getPropType(objNoType)).toBe('');
});