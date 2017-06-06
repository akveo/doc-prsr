import { DocJSParser } from './doc-js.parser';
import { Example, Prop } from '../model';

describe('#DocJSParser', () => {
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

  test('#parseExample', () => {
    const docJSParser = new DocJSParser();
    const exampleInput = {
      description: 'some example',
      code: 'mov	ax,00; initialize to all ASCII zeroes; mov	di,counter; including the counter mov	cx,digits+cntDigits/2	;',
      simba: 0,
      letMeKnow: 'hello'
    };
    const exampleOutput = {
      description: 'some example',
      code: 'mov	ax,00; initialize to all ASCII zeroes; mov	di,counter; including the counter mov	cx,digits+cntDigits/2	;',
    };

    expect(docJSParser.parseExample(exampleInput).toString()).toBe(exampleOutput.toString());
  });

  test('#parseProp', () => {
    const docJSParser = new DocJSParser();
    const propInput = {
      title: 'property'
      kind: 'prop',
      platform: 'ios',
      hello: 'world',
      me: 1,
      isStatic: true,
      type: 'some-type',
      required: false,
      name: 'awesome property',
      isKing: false,
      description: { type: 'some desc'},
      shortDescription: '123'
    };
    const propOutput = {
      kind: 'prop',
      platform: 'ios',
      isStatic: true,
      type: 'some-type',
      required: false,
      name: 'awesome property',
      description: 'some desc',
      shortDescription: '123'
    };

    expect(docJSParser.parseProp(propInput).toString()).toBe(propOutput.toString());
  });

  test('#getClasses', () => {
    const docJSParser = new DocJSParser();
    const input = [
      {
        kind: 'class',
        platform: 'ios',
        examples: [],
        properties: [],
        methods: [],
        name: 'some-class',
        shortDescription: 's-d',
        description: 'description'
      },
      {
        platform: 'ios',
        examples: [],
        properties: [],
        methods: [],
        name: 'some-class',
        shortDescription: 's-d',
        description: 'description'
      },
      {
        kind: 'class',
        platform: 'ios',
        examples: [],
        properties: [],
        methods: [],
        name: 'some-another-class',
        shortDescription: 's-d',
        description: 'description'
      }
    ];
    const output = [
      {
        kind: 'class',
        platform: 'ios',
        examples: [],
        properties: [],
        methods: [],
        name: 'some-class',
        shortDescription: 's-d',
        description: 'description'
      },
      {
        kind: 'class',
        platform: 'ios',
        examples: [],
        properties: [],
        methods: [],
        name: 'some-another-class',
        shortDescription: 's-d',
        description: 'description'
      }
    ];

    expect(docJSParser.getClasses(input).toString()).toBe(output.toString());
  });

  test('#getExamples', () => {
    const docJSParser = new DocJSParser();
    const input = {
     examples: [
      {
        code: 'int main(){ return 0; }',
        description: 'some description',
        prop: 12,
        bebe: true,
        some: null
      },
      {
        code: 'void main(){ cout>>asdasd; }',
        description: 'some description 2',
        prop: 22,
        bebe: true,
        some: null
      }
    ]
  };
    const output = [
      new Example('some description', 'int main(){ return 0; }'),
      new Example('some description 2', 'void main(){ cout>>asdasd; }')
  ];

    expect(docJSParser.getExamples(input).toString()).toBe(output.toString());
  });

  test('#getProps', () => {
    const docJSParser = new DocJSParser();
    const input = {
     properties: [
      {
        title: 'property'
        kind: 'prop',
        platform: 'ios',
        hello: 'world',
        me: 1,
        isStatic: true,
        type: 'some-type',
        required: false,
        name: 'awesome property',
        isKing: false,
        description: { type: 'some desc'},
        shortDescription: '123'
      },
      {
        code: 'void main(){ cout>>asdasd; }',
        description: 'some description 2',
        prop: 22,
        bebe: true,
        some: null
      },
      {
        title: 'property'
        kind: 'prop',
        platform: 'ios',
        hello: 'world',
        me: 1,
        isStatic: true,
        type: 'some-type',
        required: false,
        name: 'awesome property',
        isKing: false,
        description: { type: 'some desc'},
        shortDescription: '123'
      }
    ]
  };
    const output = [
      new Prop({
        title: 'property'
        kind: 'prop',
        platform: 'ios',
        hello: 'world',
        me: 1,
        isStatic: true,
        type: 'some-type',
        required: false,
        name: 'awesome property',
        isKing: false,
        description: { type: 'some desc'},
        shortDescription: '123'
      }),
      null,
      new Prop({
        title: 'property'
        kind: 'prop',
        platform: 'ios',
        hello: 'world',
        me: 1,
        isStatic: true,
        type: 'some-type',
        required: false,
        name: 'awesome property',
        isKing: false,
        description: { type: 'some desc'},
        shortDescription: '123'
      })
  ];

    expect(docJSParser.getProps(input).toString()).toBe(output.toString());
  });

});