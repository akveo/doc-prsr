import {
  GetStyles,
  GetProperties,
  GetExamples,
  GetMethods,
  Common,
  GetParams
} from './getters';
import {DocJsParser} from './doc-js.parser';
import {CommonOptions} from './doc-js.parser.options';

describe('#DocJsParser', () => {
  test('#Common -> getName', () => {
    const common = new Common();
    const testObj1 = {kind: 'component'};
    const testObj2 = {name: 'Obj name'};

    expect(common.getName(testObj2)).toBe('Obj name');
    expect(common.getName(testObj1)).toBe('');
  });

  test('#Common -> getShortDescription', () => {
    const common = new Common();
    const testObj1 = {
      "description": {
        "type": "root",
        "children": [
          {
            "children": [
              {
                "type": "inlineCode",
                "value": "Some short description",
                "position": {
                  "start": {
                    "line": 1,
                    "column": 1,
                    "offset": 0
                  },
                  "end": {
                    "line": 1,
                    "column": 11,
                    "offset": 10
                  },
                  "indent": []
                }
              },
              {
                "type": "text",
                "value": " - part of a big description",
                "position": {
                  "start": {
                    "line": 1,
                    "column": 11,
                    "offset": 10
                  },
                  "end": {
                    "line": 1,
                    "column": 40,
                    "offset": 39
                  },
                  "indent": []
                }
              }
            ]
          }
        ]
      },
    };
    const testObj2 = {name: 'Obj name'};

    expect(common.getShortDescription(testObj1)).toBe('Some short description');
    expect(common.getShortDescription(testObj2)).toBe('');
  });

  test('#Common -> getDescription', () => {
    const common = new Common();
    const testObj1 = {
      "description": {
        "type": "root",
        "children": [
          {
            "type": "paragraph",
            "children": [
              {
                "type": "inlineCode",
                "value": "Some",
                "position": {
                  "start": {
                    "line": 1,
                    "column": 1,
                    "offset": 0
                  },
                  "end": {
                    "line": 1,
                    "column": 11,
                    "offset": 10
                  },
                  "indent": []
                }
              },
              {
                "type": "text",
                "value": "short description is OK.",
                "position": {
                  "start": {
                    "line": 1,
                    "column": 11,
                    "offset": 10
                  },
                  "end": {
                    "line": 1,
                    "column": 40,
                    "offset": 39
                  },
                  "indent": []
                }
              }
            ],
            "position": {
              "start": {
                "line": 1,
                "column": 1,
                "offset": 0
              },
              "end": {
                "line": 1,
                "column": 40,
                "offset": 39
              },
              "indent": []
            }
          },
          {
            "type": "paragraph",
            "children": [
              {
                "type": "text",
                "value": "This is full description for",
                "position": {
                  "start": {
                    "line": 3,
                    "column": 1,
                    "offset": 41
                  },
                  "end": {
                    "line": 3,
                    "column": 30,
                    "offset": 70
                  },
                  "indent": []
                }
              },
              {
                "type": "inlineCode",
                "value": "something",
                "position": {
                  "start": {
                    "line": 3,
                    "column": 30,
                    "offset": 70
                  },
                  "end": {
                    "line": 3,
                    "column": 40,
                    "offset": 80
                  },
                  "indent": []
                }
              }
            ],
            "position": {
              "start": {
                "line": 3,
                "column": 1,
                "offset": 41
              },
              "end": {
                "line": 3,
                "column": 40,
                "offset": 80
              },
              "indent": []
            }
          }
        ],
        "position": {
          "start": {
            "line": 1,
            "column": 1,
            "offset": 0
          },
          "end": {
            "line": 3,
            "column": 40,
            "offset": 80
          }
        }
      }
    };
    const testObj2 = {name: 'Obj name'};

    // expect(common.getDescription(testObj1).toString()).toBe('Some short description is OK. This is full description for something');
    expect(common.getDescription(testObj2)).toBe('');
  });

  test('#GetExamples -> getCode', () => {
    const examples = new GetExamples();
    const testObj1 = {
      "description": "Advanced Styling\n\nIt's also possible to implement more detailed styling. `RkButton` consists from couple of base react component.\nYou can easily set styles for each component.\n\nFor example you can change the opacity of content passed to `RkButton`:\n\n```\nimport {RkTheme} from 'react-native-ui-kitten';\n\nRkTheme.setType('RkButton', 'faded', {\n  content: {\n    opacity: 0.6,\n  }\n});\n```"
    };
    const testObj2 = {name: 'name'};

    expect(examples.getCode(testObj1)).toBe(`\nimport {RkTheme} from 'react-native-ui-kitten';\n\nRkTheme.setType('RkButton', 'faded', {\n  content: {\n    opacity: 0.6,\n  }\n});\n`);
    expect(examples.getCode(testObj2)).toBe('');
  });

  test('#GetExamples -> getDescription', () => {
    const examples = new GetExamples();
    const testObj1 = {
      "description": "Advanced Styling\n\nIts also possible to implement more detailed styling. RkButton consists from couple of base react component.\nYou can easily set styles for each component.\n\nFor example you can change the opacity of content passed to RkButton:\n\n```\nimport {RkTheme} from 'react-native-ui-kitten';\n\nRkTheme.setType('RkButton', 'faded', {\n  content: {\n    opacity: 0.6,\n  }\n});\n```"
    };
    const testObj2 = {name: 'name'};

    expect(examples.getDescription(testObj1)).toBe('Its also possible to implement more detailed styling. RkButton consists from couple of base react component.\nYou can easily set styles for each component.');
    expect(examples.getDescription(testObj2)).toBe(undefined);
  });

  test('#GetExamples -> getShortDescription', () => {
    const examples = new GetExamples();
    const testObj1 = {
      "description": "Advanced Styling\n\nIts also possible to implement more detailed styling. RkButton consists from couple of base react component.\nYou can easily set styles for each component.\n\nFor example you can change the opacity of content passed to RkButton:\n\n```\nimport {RkTheme} from 'react-native-ui-kitten';\n\nRkTheme.setType('RkButton', 'faded', {\n  content: {\n    opacity: 0.6,\n  }\n});\n```"
    };
    const testObj2 = {name: 'name'};

    expect(examples.getShortDescription(testObj1)).toBe('Advanced Styling');
    expect(examples.getShortDescription(testObj2)).toBe(undefined);
  });

  test('#GetParams -> getType', () => {
    const params = new GetParams();
    const test1 = {
      "title": "param",
      "name": "additionalTypes",
      "lineNumber": 2,
      "type": {
        "type": "NameExpression",
        "name": "string"
      }
    };
    const test2 = {};

    expect(params.getType(test1)).toBe('NameExpression');
    expect(params.getType(test2)).toBe('');
  });

  test('#GetParams -> getParams', () => {
    const params = new GetParams();
    const test1 = {
      "description": {
        "type": "root",
        "children": [
          {
            "type": "paragraph",
            "children": [
              {
                "type": "text",
                "value": "used to compile rkTypes",
                "position": {
                  "start": {
                    "line": 1,
                    "column": 1,
                    "offset": 0
                  },
                  "end": {
                    "line": 1,
                    "column": 24,
                    "offset": 23
                  },
                  "indent": []
                }
              }
            ],
            "position": {
              "start": {
                "line": 1,
                "column": 1,
                "offset": 0
              },
              "end": {
                "line": 1,
                "column": 24,
                "offset": 23
              },
              "indent": []
            }
          }
        ],
        "position": {
          "start": {
            "line": 1,
            "column": 1,
            "offset": 0
          },
          "end": {
            "line": 1,
            "column": 24,
            "offset": 23
          }
        }
      },
      "tags": [
        {
          "title": "param",
          "description": null,
          "lineNumber": 2,
          "type": {
            "type": "NameExpression",
            "name": "string"
          },
          "name": "additionalTypes"
        },
        {
          "title": "returns",
          "description": "styles",
          "lineNumber": 3,
          "type": {
            "type": "NameExpression",
            "name": "array"
          }
        }
      ],
      "loc": {
        "start": {
          "line": 31,
          "column": 2
        },
        "end": {
          "line": 35,
          "column": 5
        }
      },
      "context": {
        "loc": {
          "start": {
            "line": 36,
            "column": 2
          },
          "end": {
            "line": 41,
            "column": 3
          }
        },
        "file": "/Users/alexei/dev/react-native-ui-kitten/src/components/rkComponent.js"
      },
      "augments": [],
      "examples": [],
      "params": [
        {
          "title": "param",
          "name": "additionalTypes",
          "lineNumber": 2,
          "type": {
            "type": "NameExpression",
            "name": "string"
          }
        }
      ],
      "properties": [],
      "returns": [
        {
          "description": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "text",
                    "value": "styles",
                    "position": {
                      "start": {
                        "line": 1,
                        "column": 1,
                        "offset": 0
                      },
                      "end": {
                        "line": 1,
                        "column": 7,
                        "offset": 6
                      },
                      "indent": []
                    }
                  }
                ],
                "position": {
                  "start": {
                    "line": 1,
                    "column": 1,
                    "offset": 0
                  },
                  "end": {
                    "line": 1,
                    "column": 7,
                    "offset": 6
                  },
                  "indent": []
                }
              }
            ],
            "position": {
              "start": {
                "line": 1,
                "column": 1,
                "offset": 0
              },
              "end": {
                "line": 1,
                "column": 7,
                "offset": 6
              }
            }
          },
          "title": "returns",
          "type": {
            "type": "NameExpression",
            "name": "array"
          }
        }
      ],
      "sees": [],
      "throws": [],
      "todos": [],
      "name": "defineStyles",
      "kind": "function",
      "memberof": "RkComponent",
      "scope": "instance",
      "members": {
        "global": [],
        "inner": [],
        "instance": [],
        "events": [],
        "static": []
      },
      "path": [
        {
          "name": "RkComponent",
          "kind": "class"
        },
        {
          "name": "defineStyles",
          "kind": "function",
          "scope": "instance"
        }
      ],
      "namespace": "RkComponent#defineStyles"
    };
    const output1 = [
      {
        "name": "additionalTypes",
        "type": "NameExpression",
        "required": null,
        "shortDescription": "",
        "description": ""
      }
    ];
    const test2 = {};

    expect(params.getParams(test1).toString()).toBe(output1.toString());
    expect(params.getParams(test2).toString()).toBe([].toString());
  });

  test('#GetStyles -> getShortDescription', () => {
    const styles = new GetStyles();
    const test1 = {
      "title": "styles",
      "description": "Available properties\n- `color` : Color of content of `RkButton`. Usually text or icon.\n- `backgroundColor` : Background color of `RkButton`.\n- `borderWidth` : Width of outer border.\n- `borderRadius` : Border radius of `RkButton`.\n- `borderColor` : Color of border.\n- `fontSize` : Size of content inside. Applied only for first level children of `RkButton`.\n- `width` : Width of `RkButton`.\n- `height` : Height of `RkButton`.",
      "lineNumber": 98
    };
    const test2 = {};

    expect(styles.getShortDescription(test1)).toBe('Available properties');
    expect(styles.getShortDescription(test2).toString()).toBe('');
  });

  test('#GetStyles -> getStylesOfStyle', () => {
    const styles = new GetStyles();
    const test1 = {
      "title": "styles",
      "description": "Available properties\n- `color` : Color of content of `RkButton`. Usually text or icon.\n- `backgroundColor` : Background color of `RkButton`.\n- `borderWidth` : Width of outer border.\n- `borderRadius` : Border radius of `RkButton`.\n- `borderColor` : Color of border.\n- `fontSize` : Size of content inside. Applied only for first level children of `RkButton`.\n- `width` : Width of `RkButton`.\n- `height` : Height of `RkButton`.",
      "lineNumber": 98
    };
    const output1 = [
      {
        "color": "Color of content of `RkButton`. Usually text or icon."
      },
      {
        "backgroundColor": "Background color of `RkButton`."
      },
      {
        "borderWidth": "Width of outer border."
      },
      {
        "borderRadius": "Border radius of `RkButton`."
      },
      {
        "borderColor": "Color of border."
      },
      {
        "fontSize": "Size of content inside. Applied only for first level children of `RkButton`."
      },
      {
        "width": "Width of `RkButton`."
      },
      {
        "height": "Height of `RkButton`."
      }
    ];
    const test2 = {};

    expect(styles.getStylesOfStyle(test1).toString()).toBe(output1.toString());
    expect(styles.getStylesOfStyle(test2).toString()).toBe([].toString());
  });

  test('#GetProperties -> getDescription', () => {
    const props = new GetProperties();
    const test1 = {
      "title": "property",
      "name": "style",
      "lineNumber": 117,
      "description": {
        "type": "root",
        "children": [
          {
            "type": "paragraph",
            "children": [
              {
                "type": "text",
                "value": "Style for button container",
                "position": {
                  "start": {
                    "line": 1,
                    "column": 1,
                    "offset": 0
                  },
                  "end": {
                    "line": 1,
                    "column": 27,
                    "offset": 26
                  },
                  "indent": []
                }
              }
            ],
            "position": {
              "start": {
                "line": 1,
                "column": 1,
                "offset": 0
              },
              "end": {
                "line": 1,
                "column": 27,
                "offset": 26
              },
              "indent": []
            }
          }
        ],
        "position": {
          "start": {
            "line": 1,
            "column": 1,
            "offset": 0
          },
          "end": {
            "line": 1,
            "column": 27,
            "offset": 26
          }
        }
      },
      "type": {
        "type": "NameExpression",
        "name": "TouchableOpacity.style"
      }
    };
    const test2 = {};

    expect(props.getDescription(test1)).toBe('');
    expect(props.getDescription(test2)).toBe('');
  });

  test('#GetProperties -> getDescriptionStatic', () => {
    const props = new GetProperties();
    const test1 = {
      "description": "",
      "tags": [
        {
          "title": "property",
          "description": "Another static property",
          "lineNumber": 1,
          "type": {
            "type": "NameExpression",
            "name": "object"
          },
          "name": "null-null"
        }
      ],
      "loc": {
        "start": {
          "line": 162,
          "column": 2
        },
        "end": {
          "line": 165,
          "column": 5
        }
      },
      "context": {
        "loc": {
          "start": {
            "line": 166,
            "column": 2
          },
          "end": {
            "line": 168,
            "column": 4
          }
        },
        "file": "/Users/alexei/dev/react-native-ui-kitten/src/components/button/rkButton.js"
      },
      "augments": [],
      "examples": [],
      "params": [],
      "properties": [
        {
          "title": "property",
          "name": "null-null",
          "lineNumber": 1,
          "description": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "text",
                    "value": "Another static property",
                    "position": {
                      "start": {
                        "line": 1,
                        "column": 1,
                        "offset": 0
                      },
                      "end": {
                        "line": 1,
                        "column": 24,
                        "offset": 23
                      },
                      "indent": []
                    }
                  }
                ],
                "position": {
                  "start": {
                    "line": 1,
                    "column": 1,
                    "offset": 0
                  },
                  "end": {
                    "line": 1,
                    "column": 24,
                    "offset": 23
                  },
                  "indent": []
                }
              }
            ],
            "position": {
              "start": {
                "line": 1,
                "column": 1,
                "offset": 0
              },
              "end": {
                "line": 1,
                "column": 24,
                "offset": 23
              }
            }
          },
          "type": {
            "type": "NameExpression",
            "name": "object"
          }
        }
      ],
      "returns": [],
      "sees": [],
      "throws": [],
      "todos": [],
      "name": "contextTypes",
      "kind": "member",
      "memberof": "RkButton",
      "scope": "static",
      "members": {
        "global": [],
        "inner": [],
        "instance": [],
        "events": [],
        "static": []
      },
      "path": [
        {
          "name": "RkButton",
          "kind": "class"
        },
        {
          "name": "contextTypes",
          "kind": "member",
          "scope": "static"
        }
      ],
      "namespace": "RkButton.contextTypes"
    };
    const test2 = {};

    expect(props.getDescriptionStatic(test1)).toBe('Another static property');
    expect(props.getDescriptionStatic(test2)).toBe('');
  });

  test('#GetProperties -> getTypeProperties', () => {
    const props = new GetProperties();
    const test1 = {
      "title": "property",
      "name": "style",
      "lineNumber": 117,
      "description": {
        "type": "root",
        "children": [
          {
            "type": "paragraph",
            "children": [
              {
                "type": "text",
                "value": "Style for button container",
                "position": {
                  "start": {
                    "line": 1,
                    "column": 1,
                    "offset": 0
                  },
                  "end": {
                    "line": 1,
                    "column": 27,
                    "offset": 26
                  },
                  "indent": []
                }
              }
            ],
            "position": {
              "start": {
                "line": 1,
                "column": 1,
                "offset": 0
              },
              "end": {
                "line": 1,
                "column": 27,
                "offset": 26
              },
              "indent": []
            }
          }
        ],
        "position": {
          "start": {
            "line": 1,
            "column": 1,
            "offset": 0
          },
          "end": {
            "line": 1,
            "column": 27,
            "offset": 26
          }
        }
      },
      "type": {
        "type": "NameExpression",
        "name": "TouchableOpacity.style"
      }
    };
    const test2 = {};

    expect(props.getTypeProperties(test1)).toBe('TouchableOpacity.style');
    expect(props.getTypeProperties(test2)).toBe('');
  });

  test('#GetProperties -> getTypeStatic', () => {
    const props = new GetProperties();
    const test1 = {
      "description": "",
      "tags": [
        {
          "title": "property",
          "description": "Another static property",
          "lineNumber": 1,
          "type": {
            "type": "NameExpression",
            "name": "object"
          },
          "name": "null-null"
        }
      ],
      "loc": {
        "start": {
          "line": 162,
          "column": 2
        },
        "end": {
          "line": 165,
          "column": 5
        }
      },
      "context": {
        "loc": {
          "start": {
            "line": 166,
            "column": 2
          },
          "end": {
            "line": 168,
            "column": 4
          }
        },
        "file": "/Users/alexei/dev/react-native-ui-kitten/src/components/button/rkButton.js"
      },
      "augments": [],
      "examples": [],
      "params": [],
      "properties": [
        {
          "title": "property",
          "name": "null-null",
          "lineNumber": 1,
          "description": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "text",
                    "value": "Another static property",
                    "position": {
                      "start": {
                        "line": 1,
                        "column": 1,
                        "offset": 0
                      },
                      "end": {
                        "line": 1,
                        "column": 24,
                        "offset": 23
                      },
                      "indent": []
                    }
                  }
                ],
                "position": {
                  "start": {
                    "line": 1,
                    "column": 1,
                    "offset": 0
                  },
                  "end": {
                    "line": 1,
                    "column": 24,
                    "offset": 23
                  },
                  "indent": []
                }
              }
            ],
            "position": {
              "start": {
                "line": 1,
                "column": 1,
                "offset": 0
              },
              "end": {
                "line": 1,
                "column": 24,
                "offset": 23
              }
            }
          },
          "type": {
            "type": "NameExpression",
            "name": "object"
          }
        }
      ],
      "returns": [],
      "sees": [],
      "throws": [],
      "todos": [],
      "name": "contextTypes",
      "kind": "member",
      "memberof": "RkButton",
      "scope": "static",
      "members": {
        "global": [],
        "inner": [],
        "instance": [],
        "events": [],
        "static": []
      },
      "path": [
        {
          "name": "RkButton",
          "kind": "class"
        },
        {
          "name": "contextTypes",
          "kind": "member",
          "scope": "static"
        }
      ],
      "namespace": "RkButton.contextTypes"
    };
    const test2 = {};

    expect(props.getTypeStatic(test1)).toBe('object');
    expect(props.getTypeStatic(test2)).toBe('');
  });

  test('#GetProperties -> getTypeInstance', () => {
    const props = new GetProperties();
    const test1 = {
      "description": {
        "type": "root",
        "children": [
          {
            "type": "paragraph",
            "children": [
              {
                "type": "text",
                "value": "{string} Name of component",
                "position": {
                  "start": {
                    "line": 1,
                    "column": 1,
                    "offset": 0
                  },
                  "end": {
                    "line": 1,
                    "column": 27,
                    "offset": 26
                  },
                  "indent": []
                }
              }
            ],
            "position": {
              "start": {
                "line": 1,
                "column": 1,
                "offset": 0
              },
              "end": {
                "line": 1,
                "column": 27,
                "offset": 26
              },
              "indent": []
            }
          }
        ],
        "position": {
          "start": {
            "line": 1,
            "column": 1,
            "offset": 0
          },
          "end": {
            "line": 1,
            "column": 27,
            "offset": 26
          }
        }
      },
      "tags": [],
      "loc": {
        "start": {
          "line": 13,
          "column": 2
        },
        "end": {
          "line": 15,
          "column": 5
        }
      },
      "context": {
        "loc": {
          "start": {
            "line": 16,
            "column": 2
          },
          "end": {
            "line": 16,
            "column": 21
          }
        },
        "file": "/Users/alexei/dev/react-native-ui-kitten/src/components/rkComponent.js"
      },
      "augments": [],
      "examples": [],
      "params": [],
      "properties": [],
      "returns": [],
      "sees": [],
      "throws": [],
      "todos": [],
      "name": "componentName",
      "kind": "member",
      "memberof": "RkComponent",
      "scope": "instance",
      "members": {
        "global": [],
        "inner": [],
        "instance": [],
        "events": [],
        "static": []
      },
      "path": [
        {
          "name": "RkComponent",
          "kind": "class"
        },
        {
          "name": "componentName",
          "kind": "member",
          "scope": "instance"
        }
      ],
      "namespace": "RkComponent#componentName"
    };
    const test2 = {};

    expect(props.getTypeInstance(test1)).toBe('string');
    expect(props.getTypeInstance(test2)).toBe('');
  });

  test('#GetProperties -> getShortDescriptionProperties', () => {
    const props = new GetProperties();
    const test1 = {
      "title": "property",
      "name": "style",
      "lineNumber": 117,
      "description": {
        "type": "root",
        "children": [
          {
            "type": "paragraph",
            "children": [
              {
                "type": "text",
                "value": "Style for button container",
                "position": {
                  "start": {
                    "line": 1,
                    "column": 1,
                    "offset": 0
                  },
                  "end": {
                    "line": 1,
                    "column": 27,
                    "offset": 26
                  },
                  "indent": []
                }
              }
            ],
            "position": {
              "start": {
                "line": 1,
                "column": 1,
                "offset": 0
              },
              "end": {
                "line": 1,
                "column": 27,
                "offset": 26
              },
              "indent": []
            }
          }
        ],
        "position": {
          "start": {
            "line": 1,
            "column": 1,
            "offset": 0
          },
          "end": {
            "line": 1,
            "column": 27,
            "offset": 26
          }
        }
      },
      "type": {
        "type": "NameExpression",
        "name": "TouchableOpacity.style"
      }
    };
    const test2 = {};

    expect(props.getShortDescriptionProperties(test1)).toBe('Style for button container');
    expect(props.getShortDescriptionProperties(test2)).toBe('');
  });

  test('#GetProperties -> getShortDescriptionInstance', () => {
    const props = new GetProperties();
    const test1 = {
      "description": {
        "type": "root",
        "children": [
          {
            "type": "paragraph",
            "children": [
              {
                "type": "text",
                "value": "{string} Name of component",
                "position": {
                  "start": {
                    "line": 1,
                    "column": 1,
                    "offset": 0
                  },
                  "end": {
                    "line": 1,
                    "column": 27,
                    "offset": 26
                  },
                  "indent": []
                }
              }
            ],
            "position": {
              "start": {
                "line": 1,
                "column": 1,
                "offset": 0
              },
              "end": {
                "line": 1,
                "column": 27,
                "offset": 26
              },
              "indent": []
            }
          }
        ],
        "position": {
          "start": {
            "line": 1,
            "column": 1,
            "offset": 0
          },
          "end": {
            "line": 1,
            "column": 27,
            "offset": 26
          }
        }
      },
      "tags": [],
      "loc": {
        "start": {
          "line": 13,
          "column": 2
        },
        "end": {
          "line": 15,
          "column": 5
        }
      },
      "context": {
        "loc": {
          "start": {
            "line": 16,
            "column": 2
          },
          "end": {
            "line": 16,
            "column": 21
          }
        },
        "file": "/Users/alexei/dev/react-native-ui-kitten/src/components/rkComponent.js"
      },
      "augments": [],
      "examples": [],
      "params": [],
      "properties": [],
      "returns": [],
      "sees": [],
      "throws": [],
      "todos": [],
      "name": "componentName",
      "kind": "member",
      "memberof": "RkComponent",
      "scope": "instance",
      "members": {
        "global": [],
        "inner": [],
        "instance": [],
        "events": [],
        "static": []
      },
      "path": [
        {
          "name": "RkComponent",
          "kind": "class"
        },
        {
          "name": "componentName",
          "kind": "member",
          "scope": "instance"
        }
      ],
      "namespace": "RkComponent#componentName"
    };
    const test2 = {};

    expect(props.getShortDescriptionInstance(test1)).toBe('Name of component');
    expect(props.getShortDescriptionInstance(test2)).toBe('');
  });
});