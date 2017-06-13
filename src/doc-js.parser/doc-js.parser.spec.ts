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

  test('#GetProperties -> getPropsFromProperties', () => {
    const props = new GetProperties();
    const test1 = {
      "description": {
        "type": "root",
        "children": [
          {
            "type": "paragraph",
            "children": [
              {
                "type": "inlineCode",
                "value": "RkButton",
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
                "value": " is a basic button component.",
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
                "value": "This is full description for ",
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
                "value": "RkButton",
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
      },
      "tags": [
        {
          "title": "extends",
          "description": null,
          "lineNumber": 5,
          "type": null,
          "name": "RkComponent"
        },
        {
          "title": "example",
          "description": "Usage example\n\n```\nimport {RkButton} from 'react-native-ui-kitten';\n\n //...\n\n <RkButton>Click</RkButton>\n```",
          "lineNumber": 6
        },
        {
          "title": "example",
          "description": "Usage with Icons\n\nYou can put text or/and icon inside of `RkButton`. Example of button with icon usage:\n\n```\nimport {RkButton} from 'react-native-ui-kitten';\nimport Icon from 'react-native-vector-icons/Ionicons';\n\n//...\n\n<RkButton rkType='small outline'>\n<Icon style={{marginRight: 5, fontSize: 18}} name={'logo-github'}/> Star\n</RkButton>*\n```",
          "lineNumber": 18
        },
        {
          "title": "example",
          "description": "Create custom rkType\n\nTo define new `rkType` you can use predefined properties which will passed to according element inside components:\n\n```\nimport {RkTheme} from 'react-native-ui-kitten';\n\nRkTheme.setType('RkButton', 'dark', {\n backgroundColor: 'gray',\n borderRadius: 10,\n});\n\nRkTheme.setType('RkButton', 'icon', {\n fontSize: 24,\n width: 46,\n borderRadius: 25\n});\n```\n\nNow you can use *dark* and *icon* types in you app:\n\n```\nimport {RkButton} from 'react-native-ui-kitten';\n\n//...\n\n<RkButton rkType='dark'>SUBMIT</RkButton>\n\n<RkButton rkType='dark icon' style={{marginLeft: 20}}>\n<Icon name=\"md-heart\"/>\n</RkButton>\n\n```",
          "lineNumber": 33
        },
        {
          "title": "example",
          "description": "Advanced Styling\n\nIt's also possible to implement more detailed styling. `RkButton` consists from couple of base react component.\nYou can easily set styles for each component.\n\nFor example you can change the opacity of content passed to `RkButton`:\n\n```\nimport {RkTheme} from 'react-native-ui-kitten';\n\nRkTheme.setType('RkButton', 'faded', {\n  content: {\n    opacity: 0.6,\n  }\n});\n```",
          "lineNumber": 67
        },
        {
          "title": "example",
          "description": "Inline styling\n\nIt's possible to set styles inline. Use props `style` for `container` component and `contentStyle` for `content` component.\n\n```\nimport {RkButton} from 'react-native-ui-kitten';\n\n//...\n\n<RkButton\nstyle={{backgroundColor: 'red'}}\ncontentStyle={{color: 'white'}}> Hello </RkButton>\n```",
          "lineNumber": 84
        },
        {
          "title": "styles",
          "description": "Available properties\n- `color` : Color of content of `RkButton`. Usually text or icon.\n- `backgroundColor` : Background color of `RkButton`.\n- `borderWidth` : Width of outer border.\n- `borderRadius` : Border radius of `RkButton`.\n- `borderColor` : Color of border.\n- `fontSize` : Size of content inside. Applied only for first level children of `RkButton`.\n- `width` : Width of `RkButton`.\n- `height` : Height of `RkButton`.",
          "lineNumber": 98
        },
        {
          "title": "property",
          "description": "@required {string} rkType - Types for stylization component\nBy default RkButton supports following types: primary, info, warning, danger, success, outline, rounded,\ncircle, small, medium, large, xlarge, clear",
          "lineNumber": 113,
          "type": null,
          "errors": [
            "Missing or invalid tag type"
          ],
          "name": "null"
        },
        {
          "title": "property",
          "description": "Style for button container",
          "lineNumber": 117,
          "type": {
            "type": "NameExpression",
            "name": "TouchableOpacity.style"
          },
          "name": "style"
        },
        {
          "title": "property",
          "description": "Style for each button's children, plaftorm ios",
          "lineNumber": 119,
          "type": {
            "type": "NameExpression",
            "name": "style"
          },
          "name": "contentStyle"
        },
        {
          "title": "property",
          "description": "Called when the touch is released, but not if cancelled.",
          "lineNumber": 121,
          "type": {
            "type": "NameExpression",
            "name": "function"
          },
          "name": "onPress"
        },
        {
          "title": "property",
          "description": "Called when the touch is released, but not if cancelled.",
          "lineNumber": 122,
          "type": {
            "type": "NameExpression",
            "name": "function"
          },
          "name": "onPressIn"
        },
        {
          "title": "property",
          "description": "Called when the touch is released, but not if cancelled.",
          "lineNumber": 123,
          "type": {
            "type": "NameExpression",
            "name": "function"
          },
          "name": "onPressOut"
        },
        {
          "title": "property",
          "description": "Called when the touch is released and is longer than usual press, but not if cancelled.",
          "lineNumber": 124,
          "type": {
            "type": "NameExpression",
            "name": "function"
          },
          "name": "onLongPress"
        }
      ],
      "loc": {
        "start": {
          "line": 17,
          "column": 0
        },
        "end": {
          "line": 144,
          "column": 3
        }
      },
      "context": {
        "loc": {
          "start": {
            "line": 145,
            "column": 0
          },
          "end": {
            "line": 226,
            "column": 1
          }
        },
        "file": "/Users/alexei/dev/react-native-ui-kitten/src/components/button/rkButton.js"
      },
      "augments": [
        {
          "title": "extends",
          "description": null,
          "lineNumber": 5,
          "type": null,
          "name": "RkComponent"
        }
      ],
      "examples": [
        {
          "description": "Usage example\n\n```\nimport {RkButton} from 'react-native-ui-kitten';\n\n //...\n\n <RkButton>Click</RkButton>\n```"
        },
        {
          "description": "Usage with Icons\n\nYou can put text or/and icon inside of `RkButton`. Example of button with icon usage:\n\n```\nimport {RkButton} from 'react-native-ui-kitten';\nimport Icon from 'react-native-vector-icons/Ionicons';\n\n//...\n\n<RkButton rkType='small outline'>\n<Icon style={{marginRight: 5, fontSize: 18}} name={'logo-github'}/> Star\n</RkButton>*\n```"
        },
        {
          "description": "Create custom rkType\n\nTo define new `rkType` you can use predefined properties which will passed to according element inside components:\n\n```\nimport {RkTheme} from 'react-native-ui-kitten';\n\nRkTheme.setType('RkButton', 'dark', {\n backgroundColor: 'gray',\n borderRadius: 10,\n});\n\nRkTheme.setType('RkButton', 'icon', {\n fontSize: 24,\n width: 46,\n borderRadius: 25\n});\n```\n\nNow you can use *dark* and *icon* types in you app:\n\n```\nimport {RkButton} from 'react-native-ui-kitten';\n\n//...\n\n<RkButton rkType='dark'>SUBMIT</RkButton>\n\n<RkButton rkType='dark icon' style={{marginLeft: 20}}>\n<Icon name=\"md-heart\"/>\n</RkButton>\n\n```"
        },
        {
          "description": "Advanced Styling\n\nIt's also possible to implement more detailed styling. `RkButton` consists from couple of base react component.\nYou can easily set styles for each component.\n\nFor example you can change the opacity of content passed to `RkButton`:\n\n```\nimport {RkTheme} from 'react-native-ui-kitten';\n\nRkTheme.setType('RkButton', 'faded', {\n  content: {\n    opacity: 0.6,\n  }\n});\n```"
        },
        {
          "description": "Inline styling\n\nIt's possible to set styles inline. Use props `style` for `container` component and `contentStyle` for `content` component.\n\n```\nimport {RkButton} from 'react-native-ui-kitten';\n\n//...\n\n<RkButton\nstyle={{backgroundColor: 'red'}}\ncontentStyle={{color: 'white'}}> Hello </RkButton>\n```"
        }
      ],
      "params": [],
      "properties": [
        {
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
        },
        {
          "title": "property",
          "name": "contentStyle",
          "lineNumber": 119,
          "description": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "text",
                    "value": "Style for each button's children, plaftorm ios",
                    "position": {
                      "start": {
                        "line": 1,
                        "column": 1,
                        "offset": 0
                      },
                      "end": {
                        "line": 1,
                        "column": 47,
                        "offset": 46
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
                    "column": 47,
                    "offset": 46
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
                "column": 47,
                "offset": 46
              }
            }
          },
          "type": {
            "type": "NameExpression",
            "name": "style"
          }
        },
        {
          "title": "property",
          "name": "onPress",
          "lineNumber": 121,
          "description": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "text",
                    "value": "Called when the touch is released, but not if cancelled.",
                    "position": {
                      "start": {
                        "line": 1,
                        "column": 1,
                        "offset": 0
                      },
                      "end": {
                        "line": 1,
                        "column": 57,
                        "offset": 56
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
                    "column": 57,
                    "offset": 56
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
                "column": 57,
                "offset": 56
              }
            }
          },
          "type": {
            "type": "NameExpression",
            "name": "function"
          }
        },
        {
          "title": "property",
          "name": "onPressIn",
          "lineNumber": 122,
          "description": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "text",
                    "value": "Called when the touch is released, but not if cancelled.",
                    "position": {
                      "start": {
                        "line": 1,
                        "column": 1,
                        "offset": 0
                      },
                      "end": {
                        "line": 1,
                        "column": 57,
                        "offset": 56
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
                    "column": 57,
                    "offset": 56
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
                "column": 57,
                "offset": 56
              }
            }
          },
          "type": {
            "type": "NameExpression",
            "name": "function"
          }
        },
        {
          "title": "property",
          "name": "onPressOut",
          "lineNumber": 123,
          "description": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "text",
                    "value": "Called when the touch is released, but not if cancelled.",
                    "position": {
                      "start": {
                        "line": 1,
                        "column": 1,
                        "offset": 0
                      },
                      "end": {
                        "line": 1,
                        "column": 57,
                        "offset": 56
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
                    "column": 57,
                    "offset": 56
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
                "column": 57,
                "offset": 56
              }
            }
          },
          "type": {
            "type": "NameExpression",
            "name": "function"
          }
        },
        {
          "title": "property",
          "name": "onLongPress",
          "lineNumber": 124,
          "description": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "text",
                    "value": "Called when the touch is released and is longer than usual press, but not if cancelled.",
                    "position": {
                      "start": {
                        "line": 1,
                        "column": 1,
                        "offset": 0
                      },
                      "end": {
                        "line": 1,
                        "column": 88,
                        "offset": 87
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
                    "column": 88,
                    "offset": 87
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
                "column": 88,
                "offset": 87
              }
            }
          },
          "type": {
            "type": "NameExpression",
            "name": "function"
          }
        }
      ],
      "returns": [],
      "sees": [],
      "throws": [],
      "todos": [],
      "name": "RkButton",
      "kind": "class",
      "members": {
        "global": [],
        "inner": [],
        "instance": [],
        "events": [],
        "static": [
          {
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
          },
          {
            "description": {
              "type": "root",
              "children": [
                {
                  "type": "paragraph",
                  "children": [
                    {
                      "type": "text",
                      "value": "Add new color to theme STATIC",
                      "position": {
                        "start": {
                          "line": 1,
                          "column": 1,
                          "offset": 0
                        },
                        "end": {
                          "line": 1,
                          "column": 30,
                          "offset": 29
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
                      "column": 30,
                      "offset": 29
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
                  "column": 30,
                  "offset": 29
                }
              }
            },
            "tags": [
              {
                "title": "param",
                "description": "name of new color",
                "lineNumber": 2,
                "type": {
                  "type": "NameExpression",
                  "name": "string"
                },
                "name": "name"
              },
              {
                "title": "param",
                "description": "color value.",
                "lineNumber": 3,
                "type": {
                  "type": "NameExpression",
                  "name": "string"
                },
                "name": "value"
              },
              {
                "title": "example",
                "description": "Just a sample of example code\n\n```\nimport {RkButton} from 'react-native-ui-kitten';\n\n//...\n\n<RkButton\nstyle={{backgroundColor: 'example'}}\ncontentStyle={{color: 'white'}}> Hello </RkButton>\n```",
                "lineNumber": 5
              }
            ],
            "loc": {
              "start": {
                "line": 170,
                "column": 2
              },
              "end": {
                "line": 187,
                "column": 5
              }
            },
            "context": {
              "loc": {
                "start": {
                  "line": 188,
                  "column": 2
                },
                "end": {
                  "line": 189,
                  "column": 3
                }
              },
              "file": "/Users/alexei/dev/react-native-ui-kitten/src/components/button/rkButton.js"
            },
            "augments": [],
            "examples": [
              {
                "description": "Just a sample of example code\n\n```\nimport {RkButton} from 'react-native-ui-kitten';\n\n//...\n\n<RkButton\nstyle={{backgroundColor: 'example'}}\ncontentStyle={{color: 'white'}}> Hello </RkButton>\n```"
              }
            ],
            "params": [
              {
                "title": "param",
                "name": "name",
                "lineNumber": 2,
                "description": {
                  "type": "root",
                  "children": [
                    {
                      "type": "paragraph",
                      "children": [
                        {
                          "type": "text",
                          "value": "name of new color",
                          "position": {
                            "start": {
                              "line": 1,
                              "column": 1,
                              "offset": 0
                            },
                            "end": {
                              "line": 1,
                              "column": 18,
                              "offset": 17
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
                          "column": 18,
                          "offset": 17
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
                      "column": 18,
                      "offset": 17
                    }
                  }
                },
                "type": {
                  "type": "NameExpression",
                  "name": "string"
                }
              },
              {
                "title": "param",
                "name": "value",
                "lineNumber": 3,
                "description": {
                  "type": "root",
                  "children": [
                    {
                      "type": "paragraph",
                      "children": [
                        {
                          "type": "text",
                          "value": "color value.",
                          "position": {
                            "start": {
                              "line": 1,
                              "column": 1,
                              "offset": 0
                            },
                            "end": {
                              "line": 1,
                              "column": 13,
                              "offset": 12
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
                          "column": 13,
                          "offset": 12
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
                      "column": 13,
                      "offset": 12
                    }
                  }
                },
                "type": {
                  "type": "NameExpression",
                  "name": "string"
                }
              }
            ],
            "properties": [],
            "returns": [],
            "sees": [],
            "throws": [],
            "todos": [],
            "name": "show",
            "kind": "function",
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
                "name": "show",
                "kind": "function",
                "scope": "static"
              }
            ],
            "namespace": "RkButton.show"
          }
        ]
      },
      "path": [
        {
          "name": "RkButton",
          "kind": "class"
        }
      ],
      "namespace": "RkButton"
    };
    const output1 = [
      {
        "kind": "prop",
        "platform": null,
        "isStatic": false,
        "type": "TouchableOpacity.style",
        "required": null,
        "name": "style",
        "shortDescription": "Style for button container",
        "description": ""
      },
      {
        "kind": "prop",
        "platform": null,
        "isStatic": false,
        "type": "style",
        "required": null,
        "name": "contentStyle",
        "shortDescription": "Style for each button's children, plaftorm ios",
        "description": ""
      },
      {
        "kind": "prop",
        "platform": null,
        "isStatic": false,
        "type": "function",
        "required": null,
        "name": "onPress",
        "shortDescription": "Called when the touch is released, but not if cancelled.",
        "description": ""
      },
      {
        "kind": "prop",
        "platform": null,
        "isStatic": false,
        "type": "function",
        "required": null,
        "name": "onPressIn",
        "shortDescription": "Called when the touch is released, but not if cancelled.",
        "description": ""
      },
      {
        "kind": "prop",
        "platform": null,
        "isStatic": false,
        "type": "function",
        "required": null,
        "name": "onPressOut",
        "shortDescription": "Called when the touch is released, but not if cancelled.",
        "description": ""
      },
      {
        "kind": "prop",
        "platform": null,
        "isStatic": false,
        "type": "function",
        "required": null,
        "name": "onLongPress",
        "shortDescription": "Called when the touch is released and is longer than usual press, but not if cancelled.",
        "description": ""
      }];
    const test2 = {};

    expect(props.getPropsFromProperties(test1).toString()).toBe(output1.toString());
    expect(props.getShortDescriptionInstance(test2).toString()).toBe([].toString());
  });

  test('#GetProperties -> getPropsFromInstance', () => {
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
                "value": "RkComponent is component",
                "position": {
                  "start": {
                    "line": 1,
                    "column": 1,
                    "offset": 0
                  },
                  "end": {
                    "line": 1,
                    "column": 25,
                    "offset": 24
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
                "column": 25,
                "offset": 24
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
            "column": 25,
            "offset": 24
          }
        }
      },
      "tags": [],
      "loc": {
        "start": {
          "line": 7,
          "column": 0
        },
        "end": {
          "line": 9,
          "column": 3
        }
      },
      "context": {
        "loc": {
          "start": {
            "line": 10,
            "column": 0
          },
          "end": {
            "line": 134,
            "column": 1
          }
        },
        "file": "/Users/alexei/dev/react-native-ui-kitten/src/components/rkComponent.js"
      },
      "augments": [
        {
          "title": "augments",
          "name": "Component"
        }
      ],
      "examples": [],
      "params": [],
      "properties": [],
      "returns": [],
      "sees": [],
      "throws": [],
      "todos": [],
      "name": "RkComponent",
      "kind": "class",
      "members": {
        "global": [],
        "inner": [],
        "instance": [
          {
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
          },
          {
            "description": {
              "type": "root",
              "children": [
                {
                  "type": "paragraph",
                  "children": [
                    {
                      "type": "text",
                      "value": "{object} mapping",
                      "position": {
                        "start": {
                          "line": 1,
                          "column": 1,
                          "offset": 0
                        },
                        "end": {
                          "line": 1,
                          "column": 17,
                          "offset": 16
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
                      "column": 17,
                      "offset": 16
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
                  "column": 17,
                  "offset": 16
                }
              }
            },
            "tags": [],
            "loc": {
              "start": {
                "line": 17,
                "column": 2
              },
              "end": {
                "line": 19,
                "column": 5
              }
            },
            "context": {
              "loc": {
                "start": {
                  "line": 20,
                  "column": 2
                },
                "end": {
                  "line": 20,
                  "column": 19
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
            "name": "typeMapping",
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
                "name": "typeMapping",
                "kind": "member",
                "scope": "instance"
              }
            ],
            "namespace": "RkComponent#typeMapping"
          },
          {
            "description": {
              "type": "root",
              "children": [
                {
                  "type": "paragraph",
                  "children": [
                    {
                      "type": "text",
                      "value": "{string} base style name",
                      "position": {
                        "start": {
                          "line": 1,
                          "column": 1,
                          "offset": 0
                        },
                        "end": {
                          "line": 1,
                          "column": 25,
                          "offset": 24
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
                      "column": 25,
                      "offset": 24
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
                  "column": 25,
                  "offset": 24
                }
              }
            },
            "tags": [],
            "loc": {
              "start": {
                "line": 21,
                "column": 2
              },
              "end": {
                "line": 23,
                "column": 5
              }
            },
            "context": {
              "loc": {
                "start": {
                  "line": 24,
                  "column": 2
                },
                "end": {
                  "line": 24,
                  "column": 22
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
            "name": "baseStyle",
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
                "name": "baseStyle",
                "kind": "member",
                "scope": "instance"
              }
            ],
            "namespace": "RkComponent#baseStyle"
          },
          {
            "description": {
              "type": "root",
              "children": [
                {
                  "type": "paragraph",
                  "children": [
                    {
                      "type": "text",
                      "value": "{string} default type name",
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
                "line": 26,
                "column": 2
              },
              "end": {
                "line": 28,
                "column": 5
              }
            },
            "context": {
              "loc": {
                "start": {
                  "line": 29,
                  "column": 2
                },
                "end": {
                  "line": 29,
                  "column": 24
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
            "name": "defaultType",
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
                "name": "defaultType",
                "kind": "member",
                "scope": "instance"
              }
            ],
            "namespace": "RkComponent#defaultType"
          },
          {
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
          },
          {
            "description": {
              "type": "root",
              "children": [
                {
                  "type": "paragraph",
                  "children": [
                    {
                      "type": "text",
                      "value": "Extracts non style value",
                      "position": {
                        "start": {
                          "line": 1,
                          "column": 1,
                          "offset": 0
                        },
                        "end": {
                          "line": 1,
                          "column": 25,
                          "offset": 24
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
                      "column": 25,
                      "offset": 24
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
                  "column": 25,
                  "offset": 24
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
                "name": "styles"
              },
              {
                "title": "param",
                "description": null,
                "lineNumber": 3,
                "type": {
                  "type": "NameExpression",
                  "name": "string"
                },
                "name": "property"
              },
              {
                "title": "returns",
                "description": "something",
                "lineNumber": 4,
                "type": {
                  "type": "NameExpression",
                  "name": "object"
                }
              }
            ],
            "loc": {
              "start": {
                "line": 43,
                "column": 2
              },
              "end": {
                "line": 48,
                "column": 5
              }
            },
            "context": {
              "loc": {
                "start": {
                  "line": 49,
                  "column": 2
                },
                "end": {
                  "line": 58,
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
                "name": "styles",
                "lineNumber": 2,
                "type": {
                  "type": "NameExpression",
                  "name": "string"
                }
              },
              {
                "title": "param",
                "name": "property",
                "lineNumber": 3,
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
                          "value": "something",
                          "position": {
                            "start": {
                              "line": 1,
                              "column": 1,
                              "offset": 0
                            },
                            "end": {
                              "line": 1,
                              "column": 10,
                              "offset": 9
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
                          "column": 10,
                          "offset": 9
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
                      "column": 10,
                      "offset": 9
                    }
                  }
                },
                "title": "returns",
                "type": {
                  "type": "NameExpression",
                  "name": "object"
                }
              }
            ],
            "sees": [],
            "throws": [],
            "todos": [],
            "name": "extractNonStyleValue",
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
                "name": "extractNonStyleValue",
                "kind": "function",
                "scope": "instance"
              }
            ],
            "namespace": "RkComponent#extractNonStyleValue"
          }
        ],
        "events": [],
        "static": []
      },
      "path": [
        {
          "name": "RkComponent",
          "kind": "class"
        }
      ],
      "namespace": "RkComponent"
    };
    const output1 = [
      {
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
      },
      {
        "description": {
          "type": "root",
          "children": [
            {
              "type": "paragraph",
              "children": [
                {
                  "type": "text",
                  "value": "{object} mapping",
                  "position": {
                    "start": {
                      "line": 1,
                      "column": 1,
                      "offset": 0
                    },
                    "end": {
                      "line": 1,
                      "column": 17,
                      "offset": 16
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
                  "column": 17,
                  "offset": 16
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
              "column": 17,
              "offset": 16
            }
          }
        },
        "tags": [],
        "loc": {
          "start": {
            "line": 17,
            "column": 2
          },
          "end": {
            "line": 19,
            "column": 5
          }
        },
        "context": {
          "loc": {
            "start": {
              "line": 20,
              "column": 2
            },
            "end": {
              "line": 20,
              "column": 19
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
        "name": "typeMapping",
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
            "name": "typeMapping",
            "kind": "member",
            "scope": "instance"
          }
        ],
        "namespace": "RkComponent#typeMapping"
      },
      {
        "description": {
          "type": "root",
          "children": [
            {
              "type": "paragraph",
              "children": [
                {
                  "type": "text",
                  "value": "{string} base style name",
                  "position": {
                    "start": {
                      "line": 1,
                      "column": 1,
                      "offset": 0
                    },
                    "end": {
                      "line": 1,
                      "column": 25,
                      "offset": 24
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
                  "column": 25,
                  "offset": 24
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
              "column": 25,
              "offset": 24
            }
          }
        },
        "tags": [],
        "loc": {
          "start": {
            "line": 21,
            "column": 2
          },
          "end": {
            "line": 23,
            "column": 5
          }
        },
        "context": {
          "loc": {
            "start": {
              "line": 24,
              "column": 2
            },
            "end": {
              "line": 24,
              "column": 22
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
        "name": "baseStyle",
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
            "name": "baseStyle",
            "kind": "member",
            "scope": "instance"
          }
        ],
        "namespace": "RkComponent#baseStyle"
      },
      {
        "description": {
          "type": "root",
          "children": [
            {
              "type": "paragraph",
              "children": [
                {
                  "type": "text",
                  "value": "{string} default type name",
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
            "line": 26,
            "column": 2
          },
          "end": {
            "line": 28,
            "column": 5
          }
        },
        "context": {
          "loc": {
            "start": {
              "line": 29,
              "column": 2
            },
            "end": {
              "line": 29,
              "column": 24
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
        "name": "defaultType",
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
            "name": "defaultType",
            "kind": "member",
            "scope": "instance"
          }
        ],
        "namespace": "RkComponent#defaultType"
      }];
    const test2 = {};

    expect(props.getPropsFromInstance(test1).toString()).toBe(output1.toString());
    expect(props.getPropsFromInstance(test2).toString()).toBe([].toString());
  });
});