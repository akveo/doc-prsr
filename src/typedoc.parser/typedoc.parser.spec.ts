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
    const test1 = {
      "name": "NgaSidebarComponent",
      "kindString": "Class",
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
      }
    };
    const test2 = {};
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

    expect(getStyles.getStyles(test2).toString()).toBe([].toString());
    expect(getStyles.getStyles(test1).toString()).toBe(out1.toString());
  });

  test('#GetStyles -> getStylesOfStyle', () => {
    const getStyles = new GetStyles();
    const test1 = {
      "tag": "styles",
      "text": "Available component styles\n\n$nga-sidebar-foreground: $nga-foreground-inverse !default;\n$nga-sidebar-background: $nga-background-inverse !default;\n$nga-sidebar-height: 100vh !default;\n$nga-sidebar-width: 12rem !default;\n$nga-sidebar-width-compact: 4rem !default;\n$nga-sidebar-padding: $nga-padding !default;\n$nga-sidebar-header-height: 3.5rem !default;\n$nga-sidebar-footer-height: 3.5rem !default;\n"
    };
    const test2 = {};
    const out1 = [
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
    ];

    expect(getStyles.getStylesOfStyle(test2).toString()).toBe([].toString());
    expect(getStyles.getStylesOfStyle(test1).toString()).toBe(out1.toString());
  });

  test('#GetStyles -> getShortDescription', () => {
    const getStyles = new GetStyles();
    const test1 = {
      "tag": "styles",
      "text": "Available component styles\n\n$nga-sidebar-foreground: $nga-foreground-inverse !default;\n$nga-sidebar-background: $nga-background-inverse !default;\n$nga-sidebar-height: 100vh !default;\n$nga-sidebar-width: 12rem !default;\n$nga-sidebar-width-compact: 4rem !default;\n$nga-sidebar-padding: $nga-padding !default;\n$nga-sidebar-header-height: 3.5rem !default;\n$nga-sidebar-footer-height: 3.5rem !default;\n"
    };
    const test2 = {};

    expect(getStyles.getShortDescription(test2)).toBe('');
    expect(getStyles.getShortDescription(test1)).toBe('Available component styles');
  });

  test('#GetParams -> getParams', () => {
    const getParams = new GetParams();
    const test1 = {
      "name": "toggle",
      "kindString": "Method",
      "signatures": [
        {
          "id": 408,
          "name": "toggle",
          "kind": 4096,
          "kindString": "Call signature",
          "flags": {},
          "comment": {
            "shortText": "Toggle a sidebar"
          },
          "parameters": [
            {
              "id": 409,
              "name": "compact",
              "kind": 32768,
              "kindString": "Parameter",
              "flags": {},
              "type": {
                "type": "intrinsic",
                "name": "boolean"
              },
              "defaultValue": "false"
            },
            {
              "id": 410,
              "name": "tag",
              "kind": 32768,
              "kindString": "Parameter",
              "flags": {
                "isOptional": true
              },
              "comment": {
                "text": "tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here\nto specify which sidebar you want to control\n"
              },
              "type": {
                "type": "intrinsic",
                "name": "string"
              }
            }
          ]
        }]
    };
    const test2 = {};
    const out1 = [
      {
        "name": "compact",
        "type": "boolean",
        "required": null,
        "shortDescription": "",
        "description": ""
      },
      {
        "name": "tag",
        "type": "string",
        "required": null,
        "description": "tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here\nto specify which sidebar you want to control\n"
      }
    ];

    expect(getParams.getParams(test2).toString()).toBe([].toString());
    expect(getParams.getParams(test1).toString()).toBe(out1.toString());
  });

  test('#GetParams -> getType', () => {
    const getParams = new GetParams();
    const test1 = {
      "kindString": "Parameter",
      "comment": {
        "text": "tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here\nto specify which sidebar you want to control\n"
      },
      "type": {
        "type": "intrinsic",
        "name": "string"
      }
    };
    const test2 = {};

    expect(getParams.getType(test2)).toBe('');
    expect(getParams.getType(test1)).toBe('string');
  });

  test('#GetParams -> getDescription', () => {
    const getParams = new GetParams();
    const test1 = {
      "kindString": "Parameter",
      "comment": {
        "text": "tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here\nto specify which sidebar you want to control\n"
      },
      "type": {
        "type": "intrinsic",
        "name": "string"
      }
    };
    const test2 = {};

    expect(getParams.getDescription(test2)).toBe('');
    expect(getParams.getDescription(test1)).toBe('tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here\nto specify which sidebar you want to control\n');
  });

  test('#GetParams -> getShortDescription', () => {
    const getParams = new GetParams();
    const test1 = {
      "kindString": "Parameter",
      "comment": {
        "shortText": "tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here\nto specify which sidebar you want to control\n"
      },
      "type": {
        "type": "intrinsic",
        "name": "string"
      }
    };
    const test2 = {};

    expect(getParams.getShortDescription(test2)).toBe('');
    expect(getParams.getShortDescription(test1)).toBe('tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here\nto specify which sidebar you want to control\n');
  });

  test('#GetExamples -> getExamples', () => {
    const getExamples = new GetExamples();
    const test1 = {
      "name": "NgaSidebarComponent",
      "kindString": "Class",
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
      }
    };
    const test2 = {};
    const out1 = [
      {
        "shortDescription": "Min sidebar example",
        "description": "",
        "code": "\n<nga-sidebar><nga-sidebar-content>Sidebar content</nga-sidebar-content></nga-sidebar>\n"
      },
      {
        "shortDescription": "Fixed sidebar",
        "description": "Example of fixed sidebar located on the left side, initially collapsed.",
        "code": "\n<nga-sidebar left fixed state=\"collapsed\">\n <nga-sidebar-header>Header</nga-sidebar-header>\n <nga-sidebar-content>\n   Menu or another component here\n </nga-sidebar-content>\n <nga-sidebar-footer>\n   Footer components here\n </nga-sidebar-footer>\n</nga-sidebar>\n"
      }
    ];

    expect(getExamples.getExamples(test2).toString()).toBe([].toString());
    expect(getExamples.getExamples(test1).toString()).toBe(out1.toString());
  });

  test('#GetExamples -> getCode', () => {
    const getExamples = new GetExamples();
    const test1 = {
      "tag": "example",
      "text": "Fixed sidebar\n\nExample of fixed sidebar located on the left side, initially collapsed.\n\n```\n<nga-sidebar left fixed state=\"collapsed\">\n <nga-sidebar-header>Header</nga-sidebar-header>\n <nga-sidebar-content>\n   Menu or another component here\n </nga-sidebar-content>\n <nga-sidebar-footer>\n   Footer components here\n </nga-sidebar-footer>\n</nga-sidebar>\n```\n"
    };
    const test2 = {};

    expect(getExamples.getCode(test2)).toBe('');
    expect(getExamples.getCode(test1)).toBe('\n<nga-sidebar left fixed state=\"collapsed\">\n <nga-sidebar-header>Header</nga-sidebar-header>\n <nga-sidebar-content>\n   Menu or another component here\n </nga-sidebar-content>\n <nga-sidebar-footer>\n   Footer components here\n </nga-sidebar-footer>\n</nga-sidebar>\n');
  });

  test('#GetExamples -> getDescription', () => {
    const getExamples = new GetExamples();
    const test1 = {
      "tag": "example",
      "text": "Fixed sidebar\n\nExample of fixed sidebar located on the left side, initially collapsed.\n\n```\n<nga-sidebar left fixed state=\"collapsed\">\n <nga-sidebar-header>Header</nga-sidebar-header>\n <nga-sidebar-content>\n   Menu or another component here\n </nga-sidebar-content>\n <nga-sidebar-footer>\n   Footer components here\n </nga-sidebar-footer>\n</nga-sidebar>\n```\n"
    };
    const test2 = {};

    expect(getExamples.getDescription(test2)).toBe('');
    expect(getExamples.getDescription(test1)).toBe('Example of fixed sidebar located on the left side, initially collapsed.');
  });

  test('#GetExamples -> getShortDescription', () => {
    const getExamples = new GetExamples();
    const test1 = {
      "tag": "example",
      "text": "Fixed sidebar\n\nExample of fixed sidebar located on the left side, initially collapsed.\n\n```\n<nga-sidebar left fixed state=\"collapsed\">\n <nga-sidebar-header>Header</nga-sidebar-header>\n <nga-sidebar-content>\n   Menu or another component here\n </nga-sidebar-content>\n <nga-sidebar-footer>\n   Footer components here\n </nga-sidebar-footer>\n</nga-sidebar>\n```\n"
    };
    const test2 = {};

    expect(getExamples.getShortDescription(test2)).toBe('');
    expect(getExamples.getShortDescription(test1)).toBe('Fixed sidebar');
  });

  test('#GetMethods -> getMethods', () => {
    const getMethods = new GetMethods();
    const test1 = {
      "name": "NgaSidebarService",
      "kindString": "Class",
      "children": [
        {
          "id": 393,
          "name": "collapse$",
          "kind": 1024,
          "kindString": "Property",
          "flags": {
            "isPrivate": true,
            "isExported": true
          },
          "sources": [
            {
              "fileName": "theme/components/sidebar/sidebar.service.ts",
              "line": 22,
              "character": 19
            }
          ],
          "type": {
            "type": "reference",
            "name": "Subject",
            "typeArguments": [
              {
                "type": "intrinsic",
                "name": "Object"
              }
            ]
          },
          "defaultValue": " new Subject()"
        },
        {
          "id": 392,
          "name": "expand$",
          "kind": 1024,
          "kindString": "Property",
          "flags": {
            "isPrivate": true,
            "isExported": true
          },
          "sources": [
            {
              "fileName": "theme/components/sidebar/sidebar.service.ts",
              "line": 21,
              "character": 17
            }
          ],
          "type": {
            "type": "reference",
            "name": "Subject",
            "typeArguments": [
              {
                "type": "intrinsic",
                "name": "Object"
              }
            ]
          },
          "defaultValue": " new Subject()"
        },
        {
          "id": 391,
          "name": "toggle$",
          "kind": 1024,
          "kindString": "Property",
          "flags": {
            "isPrivate": true,
            "isExported": true
          },
          "sources": [
            {
              "fileName": "theme/components/sidebar/sidebar.service.ts",
              "line": 20,
              "character": 17
            }
          ],
          "type": {
            "type": "reference",
            "name": "Subject",
            "typeArguments": [
              {
                "type": "intrinsic",
                "name": "Object"
              }
            ]
          },
          "defaultValue": " new Subject()"
        },
        {
          "id": 414,
          "name": "collapse",
          "kind": 2048,
          "kindString": "Method",
          "flags": {
            "isExported": true
          },
          "signatures": [
            {
              "id": 415,
              "name": "collapse",
              "kind": 4096,
              "kindString": "Call signature",
              "flags": {},
              "comment": {
                "shortText": "Collapses a sidebar"
              },
              "parameters": [
                {
                  "id": 416,
                  "name": "tag",
                  "kind": 32768,
                  "kindString": "Parameter",
                  "flags": {
                    "isOptional": true
                  },
                  "comment": {
                    "text": "If you have multiple sidebars on the page, mark them with `tag` input property and pass it here\nto specify which sidebar you want to control\n"
                  },
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
              "fileName": "theme/components/sidebar/sidebar.service.ts",
              "line": 73,
              "character": 10
            }
          ]
        },
        {
          "id": 411,
          "name": "expand",
          "kind": 2048,
          "kindString": "Method",
          "flags": {
            "isExported": true
          },
          "signatures": [
            {
              "id": 412,
              "name": "expand",
              "kind": 4096,
              "kindString": "Call signature",
              "flags": {},
              "comment": {
                "shortText": "Expands a sidebar"
              },
              "parameters": [
                {
                  "id": 413,
                  "name": "tag",
                  "kind": 32768,
                  "kindString": "Parameter",
                  "flags": {
                    "isOptional": true
                  },
                  "comment": {
                    "text": "tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here\nto specify which sidebar you want to control\n"
                  },
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
              "fileName": "theme/components/sidebar/sidebar.service.ts",
              "line": 64,
              "character": 8
            }
          ]
        },
        {
          "id": 403,
          "name": "onCollapse",
          "kind": 2048,
          "kindString": "Method",
          "flags": {
            "isExported": true
          },
          "signatures": [
            {
              "id": 404,
              "name": "onCollapse",
              "kind": 4096,
              "kindString": "Call signature",
              "flags": {},
              "comment": {
                "shortText": "Subscribe to collapse evens",
                "returns": "Observable<{ tag: string }>\n"
              },
              "type": {
                "type": "reference",
                "name": "Observable",
                "typeArguments": [
                  {
                    "type": "reflection",
                    "declaration": {
                      "id": 405,
                      "name": "__type",
                      "kind": 65536,
                      "kindString": "Type literal",
                      "flags": {},
                      "children": [
                        {
                          "id": 406,
                          "name": "tag",
                          "kind": 32,
                          "kindString": "Variable",
                          "flags": {},
                          "sources": [
                            {
                              "fileName": "theme/components/sidebar/sidebar.service.ts",
                              "line": 45,
                              "character": 32
                            }
                          ],
                          "type": {
                            "type": "intrinsic",
                            "name": "string"
                          }
                        }
                      ],
                      "groups": [
                        {
                          "title": "Variables",
                          "kind": 32,
                          "children": [
                            406
                          ]
                        }
                      ],
                      "sources": [
                        {
                          "fileName": "theme/components/sidebar/sidebar.service.ts",
                          "line": 45,
                          "character": 27
                        }
                      ]
                    }
                  }
                ]
              }
            }
          ],
          "sources": [
            {
              "fileName": "theme/components/sidebar/sidebar.service.ts",
              "line": 45,
              "character": 12
            }
          ]
        },
        {
          "id": 399,
          "name": "onExpand",
          "kind": 2048,
          "kindString": "Method",
          "flags": {
            "isExported": true
          },
          "signatures": [
            {
              "id": 400,
              "name": "onExpand",
              "kind": 4096,
              "kindString": "Call signature",
              "flags": {},
              "comment": {
                "shortText": "Subscribe to expand events",
                "returns": "Observable<{ tag: string }>\n"
              },
              "type": {
                "type": "reference",
                "name": "Observable",
                "typeArguments": [
                  {
                    "type": "reflection",
                    "declaration": {
                      "id": 401,
                      "name": "__type",
                      "kind": 65536,
                      "kindString": "Type literal",
                      "flags": {},
                      "children": [
                        {
                          "id": 402,
                          "name": "tag",
                          "kind": 32,
                          "kindString": "Variable",
                          "flags": {},
                          "sources": [
                            {
                              "fileName": "theme/components/sidebar/sidebar.service.ts",
                              "line": 37,
                              "character": 30
                            }
                          ],
                          "type": {
                            "type": "intrinsic",
                            "name": "string"
                          }
                        }
                      ],
                      "groups": [
                        {
                          "title": "Variables",
                          "kind": 32,
                          "children": [
                            402
                          ]
                        }
                      ],
                      "sources": [
                        {
                          "fileName": "theme/components/sidebar/sidebar.service.ts",
                          "line": 37,
                          "character": 25
                        }
                      ]
                    }
                  }
                ]
              }
            }
          ],
          "sources": [
            {
              "fileName": "theme/components/sidebar/sidebar.service.ts",
              "line": 37,
              "character": 10
            }
          ]
        },
        {
          "id": 394,
          "name": "onToggle",
          "kind": 2048,
          "kindString": "Method",
          "flags": {
            "isExported": true
          },
          "signatures": [
            {
              "id": 395,
              "name": "onToggle",
              "kind": 4096,
              "kindString": "Call signature",
              "flags": {},
              "comment": {
                "shortText": "Subscribe to toggle events",
                "returns": "Observable<{ compact: boolean, tag: string }>\n"
              },
              "type": {
                "type": "reference",
                "name": "Observable",
                "typeArguments": [
                  {
                    "type": "reflection",
                    "declaration": {
                      "id": 396,
                      "name": "__type",
                      "kind": 65536,
                      "kindString": "Type literal",
                      "flags": {},
                      "children": [
                        {
                          "id": 397,
                          "name": "compact",
                          "kind": 32,
                          "kindString": "Variable",
                          "flags": {},
                          "sources": [
                            {
                              "fileName": "theme/components/sidebar/sidebar.service.ts",
                              "line": 29,
                              "character": 34
                            }
                          ],
                          "type": {
                            "type": "intrinsic",
                            "name": "boolean"
                          }
                        },
                        {
                          "id": 398,
                          "name": "tag",
                          "kind": 32,
                          "kindString": "Variable",
                          "flags": {},
                          "sources": [
                            {
                              "fileName": "theme/components/sidebar/sidebar.service.ts",
                              "line": 29,
                              "character": 48
                            }
                          ],
                          "type": {
                            "type": "intrinsic",
                            "name": "string"
                          }
                        }
                      ],
                      "groups": [
                        {
                          "title": "Variables",
                          "kind": 32,
                          "children": [
                            397,
                            398
                          ]
                        }
                      ],
                      "sources": [
                        {
                          "fileName": "theme/components/sidebar/sidebar.service.ts",
                          "line": 29,
                          "character": 25
                        }
                      ]
                    }
                  }
                ]
              }
            }
          ],
          "sources": [
            {
              "fileName": "theme/components/sidebar/sidebar.service.ts",
              "line": 29,
              "character": 10
            }
          ]
        },
        {
          "id": 407,
          "name": "toggle",
          "kind": 2048,
          "kindString": "Method",
          "flags": {
            "isExported": true
          },
          "signatures": [
            {
              "id": 408,
              "name": "toggle",
              "kind": 4096,
              "kindString": "Call signature",
              "flags": {},
              "comment": {
                "shortText": "Toggle a sidebar"
              },
              "parameters": [
                {
                  "id": 409,
                  "name": "compact",
                  "kind": 32768,
                  "kindString": "Parameter",
                  "flags": {},
                  "type": {
                    "type": "intrinsic",
                    "name": "boolean"
                  },
                  "defaultValue": "false"
                },
                {
                  "id": 410,
                  "name": "tag",
                  "kind": 32768,
                  "kindString": "Parameter",
                  "flags": {
                    "isOptional": true
                  },
                  "comment": {
                    "text": "tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here\nto specify which sidebar you want to control\n"
                  },
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
              "fileName": "theme/components/sidebar/sidebar.service.ts",
              "line": 55,
              "character": 8
            }
          ]
        }
      ]
    };
    const test2 = {};
    const out1 = [
      {
        "examples": [],
        "params": [
          {
            "name": "tag",
            "type": "string",
            "required": null,
            "description": "If you have multiple sidebars on the page, mark them with `tag` input property and pass it here\nto specify which sidebar you want to control\n"
          }
        ],
        "platform": null,
        "name": "collapse",
        "type": [],
        "isStatic": false,
        "shortDescription": "Collapses a sidebar"
      },
      {
        "examples": [],
        "params": [
          {
            "name": "tag",
            "type": "string",
            "required": null,
            "description": "tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here\nto specify which sidebar you want to control\n"
          }
        ],
        "platform": null,
        "name": "expand",
        "type": [],
        "isStatic": false,
        "shortDescription": "Expands a sidebar"
      },
      {
        "examples": [],
        "params": [],
        "platform": null,
        "name": "onCollapse",
        "type": [
          "Observable<{ tag: string }>"
        ],
        "isStatic": false,
        "shortDescription": "Subscribe to collapse evens"
      },
      {
        "examples": [],
        "params": [],
        "platform": null,
        "name": "onExpand",
        "type": [
          "Observable<{ tag: string }>"
        ],
        "isStatic": false,
        "shortDescription": "Subscribe to expand events"
      },
      {
        "examples": [],
        "params": [],
        "platform": null,
        "name": "onToggle",
        "type": [
          "Observable<{ compact: boolean, tag: string }>"
        ],
        "isStatic": false,
        "shortDescription": "Subscribe to toggle events"
      },
      {
        "examples": [],
        "params": [
          {
            "name": "compact",
            "type": "boolean",
            "required": null,
            "shortDescription": "",
            "description": ""
          },
          {
            "name": "tag",
            "type": "string",
            "required": null,
            "description": "tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here\nto specify which sidebar you want to control\n"
          }
        ],
        "platform": null,
        "name": "toggle",
        "type": [],
        "isStatic": false,
        "shortDescription": "Toggle a sidebar"
      }
    ];

    expect(getMethods.getMethods(test2).toString()).toBe([].toString());
    expect(getMethods.getMethods(test1).toString()).toBe(out1.toString());
  });

  test('#GetMethods -> getType', () => {
    const getMethods = new GetMethods();
    const test1 = {
      "name": "toggle",
      "kindString": "Method",
      "signatures": [
        {
          "name": "toggle",
          "kindString": "Call signature",
          "comment": {
            "shortText": "Toggle a sidebar"
          },
          "parameters": [
            {
              "id": 409,
              "name": "compact",
              "kind": 32768,
              "kindString": "Parameter",
              "flags": {},
              "type": {
                "type": "intrinsic",
                "name": "boolean"
              },
              "defaultValue": "false"
            },
            {
              "id": 410,
              "name": "tag",
              "kind": 32768,
              "kindString": "Parameter",
              "flags": {
                "isOptional": true
              },
              "comment": {
                "text": "tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here\nto specify which sidebar you want to control\n"
              },
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
    };
    const test2 = {};

    expect(getMethods.getType(test2).toString()).toBe('void'.toString());
    expect(getMethods.getType(test1).toString()).toBe(['void'].toString());
  });

  test('#GetMethods -> isStatic', () => {
    const getMethods = new GetMethods();
    const test1 = {
      "name": "toggle",
      "kindString": "Method",
      "flags": {
        "isExported": true
      }
    };
    const test2 = {};

    expect(getMethods.isStatic(test2)).toBe(false);
    expect(getMethods.isStatic(test1)).toBe(false);
  });

  test('#GetMethods -> getDescription', () => {
    const getMethods = new GetMethods();
    const test1 = {
      "name": "toggle",
      "kindString": "Method",
      "signatures": [
        {
          "id": 408,
          "name": "toggle",
          "kind": 4096,
          "kindString": "Call signature",
          "flags": {},
          "comment": {
            "text": "Toggle a sidebar"
          },
          "parameters": [
            {
              "id": 409,
              "name": "compact",
              "kind": 32768,
              "kindString": "Parameter",
              "flags": {},
              "type": {
                "type": "intrinsic",
                "name": "boolean"
              },
              "defaultValue": "false"
            },
            {
              "id": 410,
              "name": "tag",
              "kind": 32768,
              "kindString": "Parameter",
              "flags": {
                "isOptional": true
              },
              "comment": {
                "text": "tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here\nto specify which sidebar you want to control\n"
              },
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
    };
    const test2 = {};

    expect(getMethods.getDescription(test2)).toBe('');
    expect(getMethods.getDescription(test1)).toBe('Toggle a sidebar');
  });

  test('#GetMethods -> getShortDescription', () => {
    const getMethods = new GetMethods();
    const test1 = {
      "name": "toggle",
      "kindString": "Method",
      "signatures": [
        {
          "id": 408,
          "name": "toggle",
          "kind": 4096,
          "kindString": "Call signature",
          "flags": {},
          "comment": {
            "shortText": "Toggle a sidebar"
          },
          "parameters": [
            {
              "id": 409,
              "name": "compact",
              "kind": 32768,
              "kindString": "Parameter",
              "flags": {},
              "type": {
                "type": "intrinsic",
                "name": "boolean"
              },
              "defaultValue": "false"
            },
            {
              "id": 410,
              "name": "tag",
              "kind": 32768,
              "kindString": "Parameter",
              "flags": {
                "isOptional": true
              },
              "comment": {
                "text": "tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here\nto specify which sidebar you want to control\n"
              },
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
    };
    const test2 = {};

    expect(getMethods.getShortDescription(test2)).toBe('');
    expect(getMethods.getShortDescription(test1)).toBe('Toggle a sidebar');
  });

  test('#GetProperties -> getProperties', () => {
    const getProperties = new GetProperties();
    const test1 = {
      "name": "NgaSidebarComponent",
      "kindString": "Class",
      "children": [
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
      ]
    };
    const test2 = {};
    const out1 = [
      {
        "kind": "input",
        "platform": null,
        "isStatic": false,
        "type": "string",
        "required": null,
        "name": "tag",
        "shortDescription": "Tags a sidebar with some ID, can be later used in sidebar service\nto determine which sidebar triggered the action, if multiple sidebars exist on the page."
      },
      {
        "kind": "input",
        "platform": null,
        "isStatic": false,
        "type": "",
        "required": null,
        "name": "fixed",
        "shortDescription": "Makes sidebar fixed (shown above the layout content)"
      },
      {
        "kind": "input",
        "platform": null,
        "isStatic": false,
        "type": "",
        "required": null,
        "name": "left",
        "shortDescription": "Places sidebar on the right side"
      },
      {
        "kind": "input",
        "platform": null,
        "isStatic": false,
        "type": "",
        "required": null,
        "name": "right",
        "shortDescription": "Places sidebar on the left side"
      },
      {
        "kind": "input",
        "platform": null,
        "isStatic": false,
        "type": "",
        "required": null,
        "name": "state",
        "shortDescription": "Initial sidebar state, `expanded`|`collapsed`|`compacted`"
      }
    ];

    expect(getProperties.getProps(test2).toString()).toBe([].toString());
    expect(getProperties.getProps(test1).toString()).toBe(out1.toString());
  });

  test('#GetProperties -> getType', () => {
    const getProperties = new GetProperties();
    const test1 = {
      "name": "collapseSubscription",
      "kindString": "Property",
      "type": {
        "type": "reference",
        "name": "Subscription"
      }
    };
    const test2 = {};

    expect(getProperties.getType(test2)).toBe('');
    expect(getProperties.getType(test1)).toBe('Subscription');
  });

  test('#GetProperties -> isStatic', () => {
    const getProperties = new GetProperties();
    const test1 = {
      "name": "collapseSubscription",
      "kindString": "Property",
      "flags": {
        "isPrivate": true,
        "isExported": true
      }
    };
    const test2 = {};

    expect(getProperties.isStatic(test2)).toBe(false);
    expect(getProperties.isStatic(test1)).toBe(false);
  });

  test('#GetProperties -> getDescription', () => {
    const getProperties = new GetProperties();
    const test1 = {
      "name": "tag",
      "kindString": "Property",
      "comment": {
        "text": "Tags a sidebar with some ID, can be later used in sidebar service\nto determine which sidebar triggered the action, if multiple sidebars exist on the page.",
      }
    };
    const test2 = {};

    expect(getProperties.getDescription(test2)).toBe('');
    expect(getProperties.getDescription(test1)).toBe('Tags a sidebar with some ID, can be later used in sidebar service\nto determine which sidebar triggered the action, if multiple sidebars exist on the page.');
  });

  test('#GetProperties -> getShortDescription', () => {
    const getProperties = new GetProperties();
    const test1 = {
      "name": "tag",
      "kindString": "Property",
      "comment": {
        "shortText": "Tags a sidebar with some ID, can be later used in sidebar service\nto determine which sidebar triggered the action, if multiple sidebars exist on the page.",
      }
    };
    const test2 = {};

    expect(getProperties.getShortDescription(test2)).toBe('');
    expect(getProperties.getShortDescription(test1)).toBe('Tags a sidebar with some ID, can be later used in sidebar service\nto determine which sidebar triggered the action, if multiple sidebars exist on the page.');
  });

  
});