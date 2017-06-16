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
});