import { InputOutput } from  './input-output';
const io = new InputOutput();
io.createFile();


// import { TypedocParser } from './typedoc.parser/typedoc.parser';
// import { GetExamples } from './typedoc.parser/getters';
// import * as fs from 'fs';
//
//
// const rdp = new TypedocParser();
//
//
// fs.readFile('./right-examples/typedoc/new/docs.json', (err: any, data: any) => {
//   const newdoc = new TypedocParser().parse(JSON.parse(data));
//   const outputObj: any = JSON.stringify(newdoc, null, 2);
//   fs.writeFile('./watchOut.json', outputObj);
// });








