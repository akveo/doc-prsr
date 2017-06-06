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

console.log(docJSParser.parseExample(exampleInput));
console.log(exampleOutput);





















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