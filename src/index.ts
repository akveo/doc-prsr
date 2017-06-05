// import { DocumentationJsparser } from './documentationJS.parser';
import * as fs from 'fs';

fs.readFile('./input-examples/docJSInput.json', function (err: any, data: any) {
    // let p1 = new DocumentationJsparser();
    // // let newdoc: any = p1.parse(JSON.parse(data));
    // console.log(p1.parse(JSON.parse(data)));
});


const arr = [
    [1, 2],
    [3, 4]
];

const arr2 = [];
arr2.push(arr);
console.log(arr2);
























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