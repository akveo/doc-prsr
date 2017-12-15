import {DocJsParser} from './doc-js.parser/doc-js.parser';
import {TypedocParser} from './typedoc.parser/typedoc.parser';
import {
  Metadata,
  Generator,
  Framework
} from './model/metadata/metadata';
import * as fs from 'fs';
import * as Path from 'path';
// const program = require('commander');
//
// program
//   .version('0.0.1')
//   .option('-g, --generator <value>', 'Generator:')
//   .option('-f, --framework <value>', 'Framework:')
//   .option('-i, --input <value>', 'Path to input file:')
//   .option('-o, --output <value>', 'Path to output file: ');
//
// program.on('--help', function () {
//   console.log('You have to specify:');
//   console.log('- generator (can be 2 types: typedoc, docjs)');
//   console.log('- framework (can be 2 types: angular, react)');
//   console.log('- pathes to input and output file (output file will be created)');
//   console.log('For example: ');
//   console.log('prsr -g typedoc -f angular -i input.json -o output.json');
// });
//
// program.parse(process.argv);
//
// if (program['generator'] && program['framework'] && program['input'] && program['output']) {
//   create(program['generator'], program['framework'], Path.resolve(program['input']), Path.resolve(program['output']));
// } else {
//   console.log('You entered the wrong data! Use --help for getting information');
// }
//
//
// function create(generator: Generator, framework: Framework, inputPath: string, outputPath: string) {
//   if (generator === 'docjs' && framework === 'react') {
//     selectedParser('docjs', inputPath, outputPath);
//   } else if (generator === 'typedoc' && framework === 'angular') {
//     selectedParser('typedoc', inputPath, outputPath);
//   } else {
//     console.log('You entered the wrong data! Use --help for getting information');
//   }
// }
//
// function selectedParser(parser: string, inputPath: string, outputPath: string) {
//   let newdoc: any = {};
//
//   fs.readFile(inputPath, (err: any, data: any) => {
//     if (parser === 'docjs') {
//       newdoc = new DocJsParser().parse(JSON.parse(data), new Metadata('javascript', 'docjs', 'react'));
//     } else if (parser === 'typedoc') {
//       newdoc = new TypedocParser().parse(JSON.parse(data), new Metadata('typescript', 'typedoc', 'angular'));
//     }
//     const outputObj: string = JSON.stringify(newdoc, null, 2);
//     fs.writeFile(outputPath, outputObj);
//   });
// }

import { PropertiesParser } from './typedoc.parser/parsers/properties.parser';

const propertiesParser = new PropertiesParser();

const example = {
  "id": 627,
  "name": "NbMediaBreakpointsService",
  "kind": 128,
  "kindString": "Class",
  "flags": {
    "isExported": true
  },
  "comment": {
    "shortText": "Manages media breakpoints",
    "text": "Provides access to available media breakpoints to convert window width to a configured breakpoint,\ne.g. 200px - *xs* breakpoint\n"
  },
  "decorators": [
    {
      "name": "Injectable",
      "type": {
        "type": "reference",
        "name": "Injectable"
      },
      "arguments": {}
    }
  ],
  "children": [
    {
      "id": 632,
      "name": "constructor",
      "kind": 512,
      "kindString": "Constructor",
      "flags": {
        "isExported": true
      },
      "signatures": [
        {
          "id": 634,
          "name": "new NbMediaBreakpointsService",
          "kind": 16384,
          "kindString": "Constructor signature",
          "flags": {},
          "parameters": [
            {
              "id": 635,
              "name": "breakpoints",
              "kind": 32768,
              "kindString": "Parameter",
              "flags": {},
              "decorators": [
                {
                  "name": "Inject",
                  "type": {
                    "type": "reference",
                    "name": "Inject"
                  },
                  "arguments": {
                    "token": "nbMediaBreakpointsToken"
                  }
                }
              ],
              "type": {
                "type": "intrinsic",
                "name": "any"
              }
            }
          ],
          "type": {
            "type": "reference",
            "name": "NbMediaBreakpointsService",
            "id": 627
          }
        }
      ],
      "sources": [
        {
          "fileName": "theme/services/breakpoints.service.ts",
          "line": 64,
          "character": 59
        }
      ]
    },
    {
      "id": 633,
      "name": "breakpoints",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isPrivate": true,
        "isConstructorProperty": true,
        "isExported": true
      },
      "decorators": [
        {
          "name": "Inject",
          "type": {
            "type": "reference",
            "name": "Inject"
          },
          "arguments": {
            "token": "nbMediaBreakpointsToken"
          }
        }
      ],
      "sources": [
        {
          "fileName": "theme/services/breakpoints.service.ts",
          "line": 66,
          "character": 66
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "any"
      }
    },
    {
      "id": 628,
      "name": "breakpointsMap",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isPrivate": true,
        "isExported": true
      },
      "sources": [
        {
          "fileName": "theme/services/breakpoints.service.ts",
          "line": 64,
          "character": 24
        }
      ],
      "type": {
        "type": "reflection",
        "declaration": {
          "id": 629,
          "name": "__type",
          "kind": 65536,
          "kindString": "Type literal",
          "flags": {},
          "indexSignature": [
            {
              "id": 630,
              "name": "__index",
              "kind": 8192,
              "kindString": "Index signature",
              "flags": {},
              "parameters": [
                {
                  "id": 631,
                  "name": "breakpoint",
                  "kind": 32768,
                  "kindString": "Parameter",
                  "flags": {},
                  "type": {
                    "type": "intrinsic",
                    "name": "string"
                  }
                }
              ],
              "type": {
                "type": "intrinsic",
                "name": "number"
              }
            }
          ],
          "sources": [
            {
              "fileName": "theme/services/breakpoints.service.ts",
              "line": 64,
              "character": 25
            }
          ]
        }
      }
    },
    {
      "id": 642,
      "name": "getBreakpoints",
      "kind": 2048,
      "kindString": "Method",
      "flags": {
        "isExported": true
      },
      "signatures": [
        {
          "id": 643,
          "name": "getBreakpoints",
          "kind": 4096,
          "kindString": "Call signature",
          "flags": {},
          "comment": {
            "shortText": "Returns a list of configured breakpoints for the theme",
            "returns": "NbMediaBreakpoint[]\n"
          },
          "type": {
            "type": "array",
            "elementType": {
              "type": "reference",
              "name": "NbMediaBreakpoint",
              "id": 624
            }
          }
        }
      ],
      "sources": [
        {
          "fileName": "theme/services/breakpoints.service.ts",
          "line": 105,
          "character": 16
        }
      ]
    },
    {
      "id": 644,
      "name": "getBreakpointsMap",
      "kind": 2048,
      "kindString": "Method",
      "flags": {
        "isExported": true
      },
      "signatures": [
        {
          "id": 645,
          "name": "getBreakpointsMap",
          "kind": 4096,
          "kindString": "Call signature",
          "flags": {},
          "comment": {
            "shortText": "Returns a map of configured breakpoints for the theme",
            "returns": "\n"
          },
          "type": {
            "type": "reflection",
            "declaration": {
              "id": 646,
              "name": "__type",
              "kind": 65536,
              "kindString": "Type literal",
              "flags": {},
              "indexSignature": [
                {
                  "id": 647,
                  "name": "__index",
                  "kind": 8192,
                  "kindString": "Index signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 648,
                      "name": "breakpoint",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "intrinsic",
                        "name": "string"
                      }
                    }
                  ],
                  "type": {
                    "type": "intrinsic",
                    "name": "number"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "theme/services/breakpoints.service.ts",
                  "line": 113,
                  "character": 22
                }
              ]
            }
          }
        }
      ],
      "sources": [
        {
          "fileName": "theme/services/breakpoints.service.ts",
          "line": 113,
          "character": 19
        }
      ]
    },
    {
      "id": 639,
      "name": "getByName",
      "kind": 2048,
      "kindString": "Method",
      "flags": {
        "isExported": true
      },
      "signatures": [
        {
          "id": 640,
          "name": "getByName",
          "kind": 4096,
          "kindString": "Call signature",
          "flags": {},
          "comment": {
            "shortText": "Returns a configured breakpoint by name",
            "returns": "NbMediaBreakpoint\n"
          },
          "parameters": [
            {
              "id": 641,
              "name": "name",
              "kind": 32768,
              "kindString": "Parameter",
              "flags": {},
              "comment": {
                "text": "string"
              },
              "type": {
                "type": "intrinsic",
                "name": "string"
              }
            }
          ],
          "type": {
            "type": "reference",
            "name": "NbMediaBreakpoint",
            "id": 624
          }
        }
      ],
      "sources": [
        {
          "fileName": "theme/services/breakpoints.service.ts",
          "line": 94,
          "character": 11
        }
      ]
    },
    {
      "id": 636,
      "name": "getByWidth",
      "kind": 2048,
      "kindString": "Method",
      "flags": {
        "isExported": true
      },
      "signatures": [
        {
          "id": 637,
          "name": "getByWidth",
          "kind": 4096,
          "kindString": "Call signature",
          "flags": {},
          "comment": {
            "shortText": "Returns a configured breakpoint by width",
            "returns": "\n"
          },
          "parameters": [
            {
              "id": 638,
              "name": "width",
              "kind": 32768,
              "kindString": "Parameter",
              "flags": {},
              "comment": {
                "text": "number"
              },
              "type": {
                "type": "intrinsic",
                "name": "number"
              }
            }
          ],
          "type": {
            "type": "reference",
            "name": "NbMediaBreakpoint",
            "id": 624
          }
        }
      ],
      "sources": [
        {
          "fileName": "theme/services/breakpoints.service.ts",
          "line": 78,
          "character": 12
        }
      ]
    }
  ],
  "groups": [
    {
      "title": "Constructors",
      "kind": 512,
      "children": [
        632
      ]
    },
    {
      "title": "Properties",
      "kind": 1024,
      "children": [
        633,
        628
      ]
    },
    {
      "title": "Methods",
      "kind": 2048,
      "children": [
        642,
        644,
        639,
        636
      ]
    }
  ],
  "sources": [
    {
      "fileName": "theme/services/breakpoints.service.ts",
      "line": 62,
      "character": 38
    }
  ]
};

const result = propertiesParser.getProps(example);
const outputObj: string = JSON.stringify(result, null, 2);
fs.writeFileSync ('output.json', outputObj);
