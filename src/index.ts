import { DocJSParser } from './doc-js.parser/doc-js.parser';
import * as fs from 'fs';
import * as  program from 'commander';


program
  .version('0.0.1')
  .option('-i, --input', 'Path to input file:')
  .option('-o, --output', 'Path to output file: ')
  .parse(process.argv);

console.log('your input path:');
if (program.input) console.log(' - input ' + process.argv[process.argv.length - 2]);
if (program.input) console.log(' - output ' + process.argv[process.argv.length - 1]);



fs.readFile(process.argv[process.argv.length - 2], function (err: any, data: any) {
    let p1 = new DocJSParser();
    let newdoc = p1.parse(JSON.parse(data));
    console.log(newdoc);
    const outputObj = JSON.stringify(newdoc, null, 2);
    fs.writeFile("thing.json", outputObj);
});












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