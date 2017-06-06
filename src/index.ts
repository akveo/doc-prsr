import { DocJSParser } from './doc-js.parser/doc-js.parser';
import * as fs from 'fs';

fs.readFile('./input-examples/docJSInput.json', function (err: any, data: any) {
    let p1 = new DocJSParser();
    // let newdoc = p1.parse(JSON.parse(data));
    // console.log(p1.parse(JSON.parse(data)));
    // const outputObj = JSON.stringify(p1.parse(JSON.parse(data)));
    // console.log(outputObj);
});

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

console.log(docJSParser.parseProp(propInput).toString() === propOutput.toString());
console.log(propOutput);





















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