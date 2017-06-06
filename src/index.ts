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

    console.log(docJSParser.getClasses(input).toString() === output.toString());



















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