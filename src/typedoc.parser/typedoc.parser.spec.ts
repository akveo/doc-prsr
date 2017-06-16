import {TypedocParser} from './typedoc.parser';
import {
  GetExamples,
  GetStyles,
  GetMethods,
  GetProperties,
  GetParams
} from './getters';

describe('#TypedocParser', () => {
  test('#GetStyles -> getStyles', () => {
    const getStyles = new GetStyles();
    const test = {
      "id": 421,
      "name": "NgaSidebarComponent",
      "kind": 128,
      "kindString": "Class",
      "flags": {
        "isExported": true
      },
      "comment": {
        "shortText": "Main sidebar component.",
        "text": "Sidebar can be place on the left or right side of the layout, can be fixed (shown above the content)\nor can push the layout when opened.\n",
        "tags": [
          {
            "tag": "styles",
            "text": "Available component styles\n\n$nga-sidebar-foreground: $nga-foreground-inverse !default;\n$nga-sidebar-background: $nga-background-inverse !default;\n$nga-sidebar-height: 100vh !default;\n$nga-sidebar-width: 12rem !default;\n$nga-sidebar-width-compact: 4rem !default;\n$nga-sidebar-padding: $nga-padding !default;\n$nga-sidebar-header-height: 3.5rem !default;\n$nga-sidebar-footer-height: 3.5rem !default;\n"
          },
          {
            "tag": "example",
            "text": "Min sidebar example\n\n```\n<nga-sidebar><nga-sidebar-content>Sidebar content</nga-sidebar-content></nga-sidebar>\n```\n"
          },
          {
            "tag": "example",
            "text": "Fixed sidebar\n\nExample of fixed sidebar located on the left side, initially collapsed.\n\n```\n<nga-sidebar left fixed state=\"collapsed\">\n <nga-sidebar-header>Header</nga-sidebar-header>\n <nga-sidebar-content>\n   Menu or another component here\n </nga-sidebar-content>\n <nga-sidebar-footer>\n   Footer components here\n </nga-sidebar-footer>\n</nga-sidebar>\n```\n"
          }
        ]
      },
      "decorators": [
        {
          "name": "Component",
          "type": {
            "type": "reference",
            "name": "Component"
          },
          "arguments": {
            "obj": "{\n  selector: 'nga-sidebar',\n  styleUrls: ['./sidebar.component.scss'],\n  template: `\n    <div class=\"scrollable\">\n      <ng-content select=\"nga-sidebar-header\"></ng-content>\n      <div class=\"main-container\">\n        <ng-content></ng-content>\n      </div>\n      <ng-content select=\"nga-sidebar-footer\"></ng-content>\n    </div>\n  `,\n}"
          }
        }
      ],
      "children": [
        {
          "id": 451,
          "name": "constructor",
          "kind": 512,
          "kindString": "Constructor",
          "flags": {
            "isExported": true
          },
          "signatures": [
            {
              "id": 453,
              "name": "new NgaSidebarComponent",
              "kind": 16384,
              "kindString": "Constructor signature",
              "flags": {},
              "parameters": [
                {
                  "id": 454,
                  "name": "sidebarService",
                  "kind": 32768,
                  "kindString": "Parameter",
                  "flags": {},
                  "type": {
                    "type": "reference",
                    "name": "NgaSidebarService",
                    "id": 390
                  }
                }
              ],
              "type": {
                "type": "reference",
                "name": "NgaSidebarComponent",
                "id": 421
              }
            }
          ],
          "sources": [
            {
              "fileName": "theme/components/sidebar/sidebar.component.ts",
              "line": 181,
              "character": 45
            }
          ]
        },
        {
          "id": 450,
          "name": "collapseSubscription",
          "kind": 1024,
          "kindString": "Property",
          "flags": {
            "isPrivate": true,
            "isExported": true
          },
          "sources": [
            {
              "fileName": "theme/components/sidebar/sidebar.component.ts",
              "line": 181,
              "character": 30
            }
          ],
          "type": {
            "type": "reference",
            "name": "Subscription"
          }
        },
        {
          "id": 449,
          "name": "expandSubscription",
          "kind": 1024,
          "kindString": "Property",
          "flags": {
            "isPrivate": true,
            "isExported": true
          },
          "sources": [
            {
              "fileName": "theme/components/sidebar/sidebar.component.ts",
              "line": 180,
              "character": 28
            }
          ],
          "type": {
            "type": "reference",
            "name": "Subscription"
          }
        },
        {
          "id": 426,
          "name": "fixedValue",
          "kind": 1024,
          "kindString": "Property",
          "flags": {
            "isExported": true
          },
          "decorators": [
            {
              "name": "HostBinding",
              "type": {
                "type": "reference",
                "name": "HostBinding"
              },
              "arguments": {
                "hostPropertyName": "'class.fixed'"
              }
            }
          ],
          "sources": [
            {
              "fileName": "theme/components/sidebar/sidebar.component.ts",
              "line": 118,
              "character": 40
            }
          ],
          "type": {
            "type": "intrinsic",
            "name": "boolean"
          },
          "defaultValue": "false"
        },
        {
          "id": 428,
          "name": "leftValue",
          "kind": 1024,
          "kindString": "Property",
          "flags": {
            "isExported": true
          },
          "decorators": [
            {
              "name": "HostBinding",
              "type": {
                "type": "reference",
                "name": "HostBinding"
              },
              "arguments": {
                "hostPropertyName": "'class.left'"
              }
            }
          ],
          "sources": [
            {
              "fileName": "theme/components/sidebar/sidebar.component.ts",
              "line": 120,
              "character": 38
            }
          ],
          "type": {
            "type": "intrinsic",
            "name": "boolean"
          },
          "defaultValue": "false"
        },
        {
          "id": 427,
          "name": "rightValue",
          "kind": 1024,
          "kindString": "Property",
          "flags": {
            "isExported": true
          },
          "decorators": [
            {
              "name": "HostBinding",
              "type": {
                "type": "reference",
                "name": "HostBinding"
              },
              "arguments": {
                "hostPropertyName": "'class.right'"
              }
            }
          ],
          "sources": [
            {
              "fileName": "theme/components/sidebar/sidebar.component.ts",
              "line": 119,
              "character": 40
            }
          ],
          "type": {
            "type": "intrinsic",
            "name": "boolean"
          },
          "defaultValue": "false"
        },
        {
          "id": 452,
          "name": "sidebarService",
          "kind": 1024,
          "kindString": "Property",
          "flags": {
            "isPrivate": true,
            "isConstructorProperty": true,
            "isExported": true
          },
          "sources": [
            {
              "fileName": "theme/components/sidebar/sidebar.component.ts",
              "line": 183,
              "character": 36
            }
          ],
          "type": {
            "type": "reference",
            "name": "NgaSidebarService",
            "id": 390
          }
        },
        {
          "id": 425,
          "name": "stateValue",
          "kind": 1024,
          "kindString": "Property",
          "flags": {
            "isExported": true,
            "isProtected": true
          },
          "sources": [
            {
              "fileName": "theme/components/sidebar/sidebar.component.ts",
              "line": 116,
              "character": 22
            }
          ],
          "type": {
            "type": "intrinsic",
            "name": "string"
          }
        },
        {
          "id": 447,
          "name": "tag",
          "kind": 1024,
          "kindString": "Property",
          "flags": {
            "isExported": true
          },
          "comment": {
            "shortText": "Tags a sidebar with some ID, can be later used in sidebar service\nto determine which sidebar triggered the action, if multiple sidebars exist on the page.",
            "tags": [
              {
                "tag": "type",
                "text": "{string}\n"
              }
            ]
          },
          "decorators": [
            {
              "name": "Input",
              "type": {
                "type": "reference",
                "name": "Input"
              },
              "arguments": {}
            }
          ],
          "sources": [
            {
              "fileName": "theme/components/sidebar/sidebar.component.ts",
              "line": 177,
              "character": 14
            }
          ],
          "type": {
            "type": "intrinsic",
            "name": "string"
          }
        },
        {
          "id": 448,
          "name": "toggleSubscription",
          "kind": 1024,
          "kindString": "Property",
          "flags": {
            "isPrivate": true,
            "isExported": true
          },
          "sources": [
            {
              "fileName": "theme/components/sidebar/sidebar.component.ts",
              "line": 179,
              "character": 28
            }
          ],
          "type": {
            "type": "reference",
            "name": "Subscription"
          }
        },
        {
          "id": 423,
          "name": "STATE_COLLAPSED",
          "kind": 1024,
          "kindString": "Property",
          "flags": {
            "isStatic": true,
            "isExported": true
          },
          "sources": [
            {
              "fileName": "theme/components/sidebar/sidebar.component.ts",
              "line": 113,
              "character": 33
            }
          ],
          "type": {
            "type": "intrinsic",
            "name": "string"
          },
          "defaultValue": "\"collapsed\""
        },
        {
          "id": 424,
          "name": "STATE_COMPACTED",
          "kind": 1024,
          "kindString": "Property",
          "flags": {
            "isStatic": true,
            "isExported": true
          },
          "sources": [
            {
              "fileName": "theme/components/sidebar/sidebar.component.ts",
              "line": 114,
              "character": 33
            }
          ],
          "type": {
            "type": "intrinsic",
            "name": "string"
          },
          "defaultValue": "\"compacted\""
        },
        {
          "id": 422,
          "name": "STATE_EXPANDED",
          "kind": 1024,
          "kindString": "Property",
          "flags": {
            "isStatic": true,
            "isExported": true
          },
          "sources": [
            {
              "fileName": "theme/components/sidebar/sidebar.component.ts",
              "line": 112,
              "character": 32
            }
          ],
          "type": {
            "type": "intrinsic",
            "name": "string"
          },
          "defaultValue": "\"expanded\""
        },
        {
          "id": 431,
          "name": "collapsed",
          "kind": 262144,
          "kindString": "Accessor",
          "flags": {
            "isExported": true
          },
          "decorators": [
            {
              "name": "HostBinding",
              "type": {
                "type": "reference",
                "name": "HostBinding"
              },
              "arguments": {
                "hostPropertyName": "'class.collapsed'"
              }
            }
          ],
          "getSignature": [
            {
              "id": 432,
              "name": "__get",
              "kind": 524288,
              "kindString": "Get signature",
              "flags": {},
              "type": {
                "type": "intrinsic",
                "name": "boolean"
              }
            }
          ],
          "sources": [
            {
              "fileName": "theme/components/sidebar/sidebar.component.ts",
              "line": 127,
              "character": 15
            }
          ]
        },
        {
          "id": 433,
          "name": "compacted",
          "kind": 262144,
          "kindString": "Accessor",
          "flags": {
            "isExported": true
          },
          "decorators": [
            {
              "name": "HostBinding",
              "type": {
                "type": "reference",
                "name": "HostBinding"
              },
              "arguments": {
                "hostPropertyName": "'class.compacted'"
              }
            }
          ],
          "getSignature": [
            {
              "id": 434,
              "name": "__get",
              "kind": 524288,
              "kindString": "Get signature",
              "flags": {},
              "type": {
                "type": "intrinsic",
                "name": "boolean"
              }
            }
          ],
          "sources": [
            {
              "fileName": "theme/components/sidebar/sidebar.component.ts",
              "line": 131,
              "character": 15
            }
          ]
        },
        {
          "id": 429,
          "name": "expanded",
          "kind": 262144,
          "kindString": "Accessor",
          "flags": {
            "isExported": true
          },
          "decorators": [
            {
              "name": "HostBinding",
              "type": {
                "type": "reference",
                "name": "HostBinding"
              },
              "arguments": {
                "hostPropertyName": "'class.expanded'"
              }
            }
          ],
          "getSignature": [
            {
              "id": 430,
              "name": "__get",
              "kind": 524288,
              "kindString": "Get signature",
              "flags": {},
              "type": {
                "type": "intrinsic",
                "name": "boolean"
              }
            }
          ],
          "sources": [
            {
              "fileName": "theme/components/sidebar/sidebar.component.ts",
              "line": 123,
              "character": 14
            }
          ]
        },
        {
          "id": 441,
          "name": "fixed",
          "kind": 262144,
          "kindString": "Accessor",
          "flags": {
            "isExported": true
          },
          "comment": {
            "shortText": "Makes sidebar fixed (shown above the layout content)",
            "tags": [
              {
                "tag": "type",
                "text": "{boolean}\n"
              }
            ]
          },
          "decorators": [
            {
              "name": "Input",
              "type": {
                "type": "reference",
                "name": "Input"
              },
              "arguments": {}
            }
          ],
          "setSignature": [
            {
              "id": 442,
              "name": "__set",
              "kind": 1048576,
              "kindString": "Set signature",
              "flags": {},
              "comment": {
                "shortText": "Makes sidebar fixed (shown above the layout content)",
                "tags": [
                  {
                    "tag": "type",
                    "text": "{boolean}\n"
                  }
                ]
              },
              "parameters": [
                {
                  "id": 443,
                  "name": "val",
                  "kind": 32768,
                  "kindString": "Parameter",
                  "flags": {},
                  "type": {
                    "type": "intrinsic",
                    "name": "boolean"
                  }
                }
              ],
              "type": {
                "type": "intrinsic",
                "name": "void"
              }
            }
          ],
          "sources": [
            {
              "fileName": "theme/components/sidebar/sidebar.component.ts",
              "line": 158,
              "character": 11
            }
          ]
        },
        {
          "id": 438,
          "name": "left",
          "kind": 262144,
          "kindString": "Accessor",
          "flags": {
            "isExported": true
          },
          "comment": {
            "shortText": "Places sidebar on the right side",
            "tags": [
              {
                "tag": "type",
                "text": "{boolean}\n"
              }
            ]
          },
          "decorators": [
            {
              "name": "Input",
              "type": {
                "type": "reference",
                "name": "Input"
              },
              "arguments": {}
            }
          ],
          "setSignature": [
            {
              "id": 439,
              "name": "__set",
              "kind": 1048576,
              "kindString": "Set signature",
              "flags": {},
              "comment": {
                "shortText": "Places sidebar on the right side",
                "tags": [
                  {
                    "tag": "type",
                    "text": "{boolean}\n"
                  }
                ]
              },
              "parameters": [
                {
                  "id": 440,
                  "name": "val",
                  "kind": 32768,
                  "kindString": "Parameter",
                  "flags": {},
                  "type": {
                    "type": "intrinsic",
                    "name": "boolean"
                  }
                }
              ],
              "type": {
                "type": "intrinsic",
                "name": "void"
              }
            }
          ],
          "sources": [
            {
              "fileName": "theme/components/sidebar/sidebar.component.ts",
              "line": 149,
              "character": 10
            }
          ]
        },
        {
          "id": 435,
          "name": "right",
          "kind": 262144,
          "kindString": "Accessor",
          "flags": {
            "isExported": true
          },
          "comment": {
            "shortText": "Places sidebar on the left side",
            "tags": [
              {
                "tag": "type",
                "text": "{boolean}\n"
              }
            ]
          },
          "decorators": [
            {
              "name": "Input",
              "type": {
                "type": "reference",
                "name": "Input"
              },
              "arguments": {}
            }
          ],
          "setSignature": [
            {
              "id": 436,
              "name": "__set",
              "kind": 1048576,
              "kindString": "Set signature",
              "flags": {},
              "comment": {
                "shortText": "Places sidebar on the left side",
                "tags": [
                  {
                    "tag": "type",
                    "text": "{boolean}\n"
                  }
                ]
              },
              "parameters": [
                {
                  "id": 437,
                  "name": "val",
                  "kind": 32768,
                  "kindString": "Parameter",
                  "flags": {},
                  "type": {
                    "type": "intrinsic",
                    "name": "boolean"
                  }
                }
              ],
              "type": {
                "type": "intrinsic",
                "name": "void"
              }
            }
          ],
          "sources": [
            {
              "fileName": "theme/components/sidebar/sidebar.component.ts",
              "line": 140,
              "character": 11
            }
          ]
        },
        {
          "id": 444,
          "name": "state",
          "kind": 262144,
          "kindString": "Accessor",
          "flags": {
            "isExported": true
          },
          "comment": {
            "shortText": "Initial sidebar state, `expanded`|`collapsed`|`compacted`",
            "tags": [
              {
                "tag": "type",
                "text": "{string}\n"
              }
            ]
          },
          "decorators": [
            {
              "name": "Input",
              "type": {
                "type": "reference",
                "name": "Input"
              },
              "arguments": {}
            }
          ],
          "setSignature": [
            {
              "id": 445,
              "name": "__set",
              "kind": 1048576,
              "kindString": "Set signature",
              "flags": {},
              "comment": {
                "shortText": "Initial sidebar state, `expanded`|`collapsed`|`compacted`",
                "tags": [
                  {
                    "tag": "type",
                    "text": "{string}\n"
                  }
                ]
              },
              "parameters": [
                {
                  "id": 446,
                  "name": "val",
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
                "name": "void"
              }
            }
          ],
          "sources": [
            {
              "fileName": "theme/components/sidebar/sidebar.component.ts",
              "line": 167,
              "character": 11
            }
          ]
        },
        {
          "id": 465,
          "name": "collapse",
          "kind": 2048,
          "kindString": "Method",
          "flags": {
            "isExported": true
          },
          "signatures": [
            {
              "id": 466,
              "name": "collapse",
              "kind": 4096,
              "kindString": "Call signature",
              "flags": {},
              "comment": {
                "shortText": "Collapses the sidebar"
              },
              "type": {
                "type": "intrinsic",
                "name": "void"
              }
            }
          ],
          "sources": [
            {
              "fileName": "theme/components/sidebar/sidebar.component.ts",
              "line": 240,
              "character": 10
            }
          ]
        },
        {
          "id": 469,
          "name": "compact",
          "kind": 2048,
          "kindString": "Method",
          "flags": {
            "isExported": true
          },
          "signatures": [
            {
              "id": 470,
              "name": "compact",
              "kind": 4096,
              "kindString": "Call signature",
              "flags": {},
              "comment": {
                "shortText": "Compacts the sidebar (minimizes)"
              },
              "type": {
                "type": "intrinsic",
                "name": "void"
              }
            }
          ],
          "sources": [
            {
              "fileName": "theme/components/sidebar/sidebar.component.ts",
              "line": 254,
              "character": 9
            }
          ]
        },
        {
          "id": 467,
          "name": "expand",
          "kind": 2048,
          "kindString": "Method",
          "flags": {
            "isExported": true
          },
          "signatures": [
            {
              "id": 468,
              "name": "expand",
              "kind": 4096,
              "kindString": "Call signature",
              "flags": {},
              "comment": {
                "shortText": "Expands the sidebar"
              },
              "type": {
                "type": "intrinsic",
                "name": "void"
              }
            }
          ],
          "sources": [
            {
              "fileName": "theme/components/sidebar/sidebar.component.ts",
              "line": 247,
              "character": 8
            }
          ]
        },
        {
          "id": 457,
          "name": "ngOnDestroy",
          "kind": 2048,
          "kindString": "Method",
          "flags": {
            "isExported": true
          },
          "signatures": [
            {
              "id": 458,
              "name": "ngOnDestroy",
              "kind": 4096,
              "kindString": "Call signature",
              "flags": {},
              "type": {
                "type": "intrinsic",
                "name": "void"
              }
            }
          ],
          "sources": [
            {
              "fileName": "theme/components/sidebar/sidebar.component.ts",
              "line": 208,
              "character": 13
            }
          ]
        },
        {
          "id": 455,
          "name": "ngOnInit",
          "kind": 2048,
          "kindString": "Method",
          "flags": {
            "isExported": true
          },
          "signatures": [
            {
              "id": 456,
              "name": "ngOnInit",
              "kind": 4096,
              "kindString": "Call signature",
              "flags": {},
              "type": {
                "type": "intrinsic",
                "name": "void"
              }
            }
          ],
          "sources": [
            {
              "fileName": "theme/components/sidebar/sidebar.component.ts",
              "line": 185,
              "character": 10
            }
          ]
        },
        {
          "id": 463,
          "name": "returnSomeValue",
          "kind": 2048,
          "kindString": "Method",
          "flags": {
            "isExported": true
          },
          "signatures": [
            {
              "id": 464,
              "name": "returnSomeValue",
              "kind": 4096,
              "kindString": "Call signature",
              "flags": {},
              "comment": {
                "shortText": "Returns some value\n// TODO: remove this",
                "returns": "number\n"
              },
              "type": {
                "type": "intrinsic",
                "name": "number"
              }
            }
          ],
          "sources": [
            {
              "fileName": "theme/components/sidebar/sidebar.component.ts",
              "line": 233,
              "character": 17
            }
          ]
        },
        {
          "id": 471,
          "name": "toggle",
          "kind": 2048,
          "kindString": "Method",
          "flags": {
            "isExported": true
          },
          "signatures": [
            {
              "id": 472,
              "name": "toggle",
              "kind": 4096,
              "kindString": "Call signature",
              "flags": {},
              "comment": {
                "shortText": "Toggles sidebar state (expanded|collapsed|compacted)",
                "tags": [
                  {
                    "tag": "example",
                    "text": "Toggle sidebar state\n\n```\nthis.sidebar.toggle(true);\n```\n"
                  }
                ]
              },
              "parameters": [
                {
                  "id": 473,
                  "name": "compact",
                  "kind": 32768,
                  "kindString": "Parameter",
                  "flags": {},
                  "comment": {
                    "text": "If true, then sidebar state will be changed between expanded & compacted,\notherwise - between expanded & collapsed. False by default.\n"
                  },
                  "type": {
                    "type": "intrinsic",
                    "name": "boolean"
                  },
                  "defaultValue": "false"
                }
              ],
              "type": {
                "type": "intrinsic",
                "name": "void"
              }
            }
          ],
          "sources": [
            {
              "fileName": "theme/components/sidebar/sidebar.component.ts",
              "line": 269,
              "character": 8
            }
          ]
        },
        {
          "id": 459,
          "name": "someTestMethod",
          "kind": 2048,
          "kindString": "Method",
          "flags": {
            "isStatic": true,
            "isExported": true
          },
          "signatures": [
            {
              "id": 460,
              "name": "someTestMethod",
              "kind": 4096,
              "kindString": "Call signature",
              "flags": {},
              "comment": {
                "shortText": "Some Static method\n// TODO: remove this",
                "returns": "\n"
              },
              "parameters": [
                {
                  "id": 461,
                  "name": "test",
                  "kind": 32768,
                  "kindString": "Parameter",
                  "flags": {},
                  "comment": {},
                  "type": {
                    "type": "intrinsic",
                    "name": "string"
                  }
                },
                {
                  "id": 462,
                  "name": "anotherOne",
                  "kind": 32768,
                  "kindString": "Parameter",
                  "flags": {},
                  "comment": {},
                  "type": {
                    "type": "intrinsic",
                    "name": "any"
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
              "fileName": "theme/components/sidebar/sidebar.component.ts",
              "line": 223,
              "character": 23
            }
          ]
        }
      ],
      "groups": [
        {
          "title": "Constructors",
          "kind": 512,
          "children": [
            451
          ]
        },
        {
          "title": "Properties",
          "kind": 1024,
          "children": [
            450,
            449,
            426,
            428,
            427,
            452,
            425,
            447,
            448,
            423,
            424,
            422
          ]
        },
        {
          "title": "Accessors",
          "kind": 262144,
          "children": [
            431,
            433,
            429,
            441,
            438,
            435,
            444
          ]
        },
        {
          "title": "Methods",
          "kind": 2048,
          "children": [
            465,
            469,
            467,
            457,
            455,
            463,
            471,
            459
          ]
        }
      ],
      "sources": [
        {
          "fileName": "theme/components/sidebar/sidebar.component.ts",
          "line": 110,
          "character": 32
        }
      ],
      "implementedTypes": [
        {
          "type": "reference",
          "name": "OnInit"
        },
        {
          "type": "reference",
          "name": "OnDestroy"
        }
      ]
    };
    const out1 = [
      {
        "shortDescription": "Available component styles",
        "styles": [
          {
            "name": "$nga-sidebar-foreground",
            "description": "$nga-foreground-inverse !default;"
          },
          {
            "name": "$nga-sidebar-background",
            "description": "$nga-background-inverse !default;"
          },
          {
            "name": "$nga-sidebar-height",
            "description": "100vh !default;"
          },
          {
            "name": "$nga-sidebar-width",
            "description": "12rem !default;"
          },
          {
            "name": "$nga-sidebar-width-compact",
            "description": "4rem !default;"
          },
          {
            "name": "$nga-sidebar-padding",
            "description": "$nga-padding !default;"
          },
          {
            "name": "$nga-sidebar-header-height",
            "description": "3.5rem !default;"
          },
          {
            "name": "$nga-sidebar-footer-height",
            "description": "3.5rem !default;"
          }
        ]
      }
    ];

    expect(getStyles.getStyles(test).toString()).toBe(out1.toString());
  });
});