import { DocJSParser } from './doc-js.parser/doc-js.parser';
import { Example } from './model/class/example';
import { Prop } from './model/class/prop';
import * as fs from 'fs';

fs.readFile('./input-examples/docJSInput.json', function (err: any, data: any) {
    let p1 = new DocJSParser();
    // let newdoc = p1.parse(JSON.parse(data));
    // console.log(p1.parse(JSON.parse(data)));
    // const outputObj = JSON.stringify(p1.parse(JSON.parse(data)));
    // console.log(outputObj);
});

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

    console.log(docJSParser.getProps(input).toString() === output.toString());
    // console.log('---------------------');
    // console.log(output);



















// function iter(obj: any) {
//     for (let property in obj) {
//         if (obj.hasOwnProperty(property) && obj[property] != null) {
//             if (obj[property].constructor == Object) {
//                 iter(obj[property]);
//             } else if (obj[property].constructor == Array) {
//                 for (let i = 0; i < obj[property].length; i++) {
//                     iter(obj[property][i]);
//                 }
//             } else {
//                 console.log(obj[property]);
//             }
//         }
//     }
// }