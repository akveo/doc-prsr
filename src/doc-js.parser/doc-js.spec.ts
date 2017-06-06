import { DocJSParser } from './doc-js.parser';

// describe();
test('#getClassKind 1', () => {
  const docJSParser = new DocJSParser();
  const objClass = { kind: 'component' };

  expect(docJSParser.getKind(objClass)).toBe('component');
});

test('#getClassKind 2', () => {
  const docJSParser = new DocJSParser();
  const objNoKind = { no_kind: 'no-class' };

  expect(docJSParser.getKind(objNoKind)).toBe('');
});

test('#getClassKind 3', () => {
  const docJSParser = new DocJSParser();

  expect(docJSParser.getKind(undefined)).toBe('unknown');
  expect(docJSParser.getKind(null)).toBe('unknown');
});

test('#getPropKind 1', () => {
  const docJSParser = new DocJSParser();
  const objProp = { kind: 'input' };

  expect(docJSParser.getPropKind(objProp)).toBe('input');
});

test('#getPropKind 2', () => {
  const docJSParser = new DocJSParser();
  const objNoProp = { no_kind: 'some prop' };

  expect(docJSParser.getPropKind(objNoProp)).toBe('prop');
});

test('#getPropType 1', () => {
  const docJSParser = new DocJSParser();
  const objType = { type: 'some-type' };

  expect(docJSParser.getPropType(objType)).toBe('some-type');
});

test('#getPropType 2', () => {
  const docJSParser = new DocJSParser();
  const objType = { type: 'some-type' };

  expect(docJSParser.getPropType(objType)).toBe('some-type');
});

test('#getShortDescription 1', () => {
  const docJSParser = new DocJSParser();
  const objSDesc = { shortDescription: 'Hello world' };

  expect(docJSParser.getShortDescription(objSDesc)).toBe('Hello world');
});

test('#getShortDescription 2', () => {
  const docJSParser = new DocJSParser();
  const objNoSDesc = { no_type: 'some-type' };

  expect(docJSParser.getShortDescription(objNoSDesc)).toBe('');
});

test('#getDescription 1', () => {
  const docJSParser = new DocJSParser();
  const objSDesc = {
    description: {
      type: 'Hello world'
    }
  };

  expect(docJSParser.getDescription(objSDesc)).toBe('Hello world');
});

test('#getDescription 2', () => {
  const docJSParser = new DocJSParser();
  const objNoSDesc = { no_type: 'some-type' };

  expect(docJSParser.getDescription(objNoSDesc)).toBe('');
});

test('#isStatic 1', () => {
  const docJSParser = new DocJSParser();
  const objStatic = { static: 'true' };

  expect(docJSParser.isStatic(objStatic)).toBe(true);
});

test('#isStatic 2', () => {
  const docJSParser = new DocJSParser();
  const objNoStatic = { no_type: 'some-type' };

  expect(docJSParser.isStatic(objNoStatic)).toBe(false);
});

test('#getName 1', () => {
  const docJSParser = new DocJSParser();
  const objName = { name: 'Button' };

  expect(docJSParser.getName(objName)).toBe('Button');
});

test('#getName 2', () => {
  const docJSParser = new DocJSParser();
  const objNoSname = { no_name: 'some-no-name' };

  expect(docJSParser.getName(objNoSname)).toBe('');
});

test('#isRequired 1', () => {
  const docJSParser = new DocJSParser();
  const objRequired = { required: 'some string' };

  expect(docJSParser.isRequired(objRequired)).toBe(true);
});

test('#isRequired 2', () => {
  const docJSParser = new DocJSParser();
  const objNoRequired = { no_required: 'some-type' };

  expect(docJSParser.isRequired(objNoRequired)).toBe(false);
});