// import { InputOutput } from  './input-output';
// const io = new InputOutput();
// io.createFile();


import { TypedocParser } from './typedoc.parser/typedoc.parser';
import { GetExamples } from './typedoc.parser/getters';
import * as fs from 'fs';


const rdp = new TypedocParser();


// fs.readFile('./right-examples/typedoc/new/docs.json', (err: any, data: any) => {
//   const newdoc = new TypedocParser().parse(JSON.parse(data));
//   const outputObj: any = JSON.stringify(newdoc, null, 2);
//   fs.writeFile('./watchOut.json', outputObj);
// });

const ge = new GetExamples();

const obj1 = {
  "tag": "example",
  "text": "Min sidebar example\n\n```\n<nga-sidebar><nga-sidebar-content>Sidebar content</nga-sidebar-content></nga-sidebar>\n```\n"
};
const obj2 = {
  "tag": "example",
  "text": "Fixed sidebar\n\nExample of fixed sidebar located on the left side, initially collapsed.\n\n```\n<nga-sidebar left fixed state=\"collapsed\">\n <nga-sidebar-header>Header</nga-sidebar-header>\n <nga-sidebar-content>\n   Menu or another component here\n </nga-sidebar-content>\n <nga-sidebar-footer>\n   Footer components here\n </nga-sidebar-footer>\n</nga-sidebar>\n```\n"
};

console.log(ge.getShortDescription(obj2));








