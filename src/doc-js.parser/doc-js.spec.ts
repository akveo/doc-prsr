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

test('#getShortDescription', () => {
  const docJSParser = new DocJSParser();
  const objSDesc = {
    shortDescription: 'Hello world'
  };
  const objNoSDesc = {
    no_type: 'some-type' 
  };

  expect(docJSParser.getShortDescription(objSDesc)).toBe('Hello world');
  expect(docJSParser.getShortDescription(objNoSDesc)).toBe('');
});

test('#getDescription', () => {
  const docJSParser = new DocJSParser();
  const objSDesc = {
    description: {
      type: 'Hello world'
    }
  };
  const objNoSDesc = {
    no_type: 'some-type' 
  };

  expect(docJSParser.getDescription(objSDesc)).toBe('Hello world');
  expect(docJSParser.getDescription(objNoSDesc)).toBe('');
});

test('#isStatic', () => {
  const docJSParser = new DocJSParser();
  const objStatic = {
    static: 'true'
  };
  const objNoStatic = {
    no_type: 'some-type' 
  };

  expect(docJSParser.isStatic(objStatic)).toBe(true);
  expect(docJSParser.isStatic(objNoStatic)).toBe(false);
});

test('#getName', () => {
  const docJSParser = new DocJSParser();
  const objName = {
    name: 'Button'
  };
  const objNoSname = {
    no_name: 'some-no-name' 
  };

  expect(docJSParser.getName(objName)).toBe('Button');
  expect(docJSParser.getName(objNoSname)).toBe('');
});

test('#isRequired', () => {
  const docJSParser = new DocJSParser();
  const objRequired = {
    required: 'some string'
  };
  const objNoRequired = {
    no_required: 'some-type' 
  };

  expect(docJSParser.isRequired(objRequired)).toBe(true);
  expect(docJSParser.isRequired(objNoRequired)).toBe(false);
});