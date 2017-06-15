// import { InputOutput } from  './input-output';
// const io = new InputOutput();
// io.createFile();


import { TypedocParser } from './typedoc.parser/typedoc.parser';
import { GetStyles } from './typedoc.parser/getters/getStyles';
import * as fs from 'fs';


const rdp = new TypedocParser();


// fs.readFile('./right-examples/typedoc/new/docs.json', (err: any, data: any) => {
//   const newdoc = new TypedocParser().parse(JSON.parse(data));
//   const outputObj: any = JSON.stringify(newdoc, null, 2);
//   fs.writeFile('./watchOut.json', outputObj);
// });

const gs = new GetStyles();
const obj = {
  "tag": "styles",
  "text": "Available component styles\n\n$nga-sidebar-foreground: $nga-foreground-inverse !default;\n$nga-sidebar-background: $nga-background-inverse !default;\n$nga-sidebar-height: 100vh !default;\n$nga-sidebar-width: 12rem !default;\n$nga-sidebar-width-compact: 4rem !default;\n$nga-sidebar-padding: $nga-padding !default;\n$nga-sidebar-header-height: 3.5rem !default;\n$nga-sidebar-footer-height: 3.5rem !default;\n"
};

console.log(gs.getShortDescription(obj));








