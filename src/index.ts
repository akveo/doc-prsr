import { DocJsParser } from './doc-js.parser/doc-js.parser';
import { InputOutput } from './input-output';
import * as fs from 'fs';
import {
  Common,
  GetExamples,
  GetProperties,
} from './doc-js.parser/getters';
const json = [
  {
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
        }
      }
    },
    "tags": [
      {
        "title": "extends",
        "description": null,
        "lineNumber": 3,
        "type": null,
        "name": "RkComponent"
      },
      {
        "title": "example",
        "description": "Simple usage example:\r\n\r\n```\r\n<RkButton>Button</RkButton>\r\n```",
        "lineNumber": 5
      },
      {
        "title": "example",
        "description": "Custom content inside button\r\n\r\n`RkButton` can contains not only text but also other components:\r\n\r\n```\r\n<RkButton>\r\n   <Image\r\n     style={{width: 50, height: 50}}\r\n     source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}/>\r\n</RkButton>\r\n```",
        "lineNumber": 11
      },
      {
        "title": "example",
        "description": "Using `rkType`prop\r\n\r\n`RkButton` has `rkType` prop. This prop works similar to CSS-class in web. It's possible to set more than one type.\r\nThere are already some predefined types. Here is example of how to use rkType\r\n\r\n```\r\n<RkButton rkType='success'>Accept</RkButton>\r\n<RkButton rkType='danger small'>Cancel</RkButton>\r\n```",
        "lineNumber": 24
      },
      {
        "title": "example",
        "description": "Define new rkTypes\r\n\r\nIt's easy and very common to create new types. Main point for all customization is `RkTheme` object.\r\nNew rkTypes are defined using `setType` method of `RkTheme`:\r\n\r\n```\r\nimport {RkTheme} from 'react-native-ui-kitten';\r\n\r\n RkTheme.setType('RkButton', 'dark', {\r\n  backgroundColor: 'gray',\r\n  borderRadius: 10,\r\n});\r\n\r\n RkTheme.setType('RkButton', 'icon', {\r\n  fontSize: 24,\r\n  width: 46,\r\n  borderRadius: 25\r\n});\r\n\r\n//...\r\n\r\n<RkButton rkType='dark'>SUBMIT</RkButton>\r\n\r\n<RkButton rkType='dark icon' style={{marginLeft: 20}}>\r\n   <Text>+</Text>\r\n</RkButton>\r\n\r\n```",
        "lineNumber": 35
      },
      {
        "title": "styles",
        "description": "Available properties:\r\n- `color` : Color of content of `RkButton`. Applies only if content of `RkButton` is `string`.\r\n- `backgroundColor` : Background color of `RkButton`.\r\n- `borderWidth` : Width of outer border.\r\n- `borderRadius` : Border radius of `RkButton`.\r\n- `borderColor` : Color of border.\r\n- `fontSize` : Size of content inside. Applied only for first level children of `RkButton`.\r\n- `width` : Width of `RkButton`.\r\n- `height` : Height of `RkButton`.",
        "lineNumber": 64
      },
      {
        "title": "example",
        "description": "Advanced Styling\r\n\r\nIt's also possible to implement more detailed styling. RkButton consists from couple of base react component. You can easily set styles for each component.\r\n\r\nFor example you can change the opacity of content passed to RkButton:\r\n\r\n```\r\nRkTheme.setType('RkButton', 'faded', {\r\n  content: {\r\n    opacity: 0.6,\r\n  }\r\n});\r\n```",
        "lineNumber": 75
      },
      {
        "title": "styles",
        "description": "Available properties:\r\n- `container` : `TouchableOpacity` - container of `RkButton`.\r\n- `content` : If you use plain text then `RkText`. If you insert children - then style will be applied to all children on first level.",
        "lineNumber": 89
      },
      {
        "title": "example",
        "description": "Inline styling\r\n\r\nIt's possible to set styles inline. Use props style for container component and contentStyle for content component.\r\n\r\n```\r\n<RkButton\r\n   style={{backgroundColor: 'red'}}\r\n   contentStyle={{color: 'white'}}> Hello </RkButton>\r\n```",
        "lineNumber": 93
      },
      {
        "title": "property",
        "description": "Types for stylization component\r\nBy default `RkButton` supports following types: `primary`, `info`, `warning`, `danger`, `success`, `outline`, `rounded`,\r\n`circle`, `small`, `medium`, `large`, `xlarge`, `clear`, `stretch`",
        "lineNumber": 103,
        "type": {
          "type": "NameExpression",
          "name": "string"
        },
        "name": "rkType"
      },
      {
        "title": "property",
        "description": "Style for button container",
        "lineNumber": 106,
        "type": {
          "type": "NameExpression",
          "name": "style"
        },
        "name": "style"
      },
      {
        "title": "property",
        "description": "Style for each button's children",
        "lineNumber": 107,
        "type": {
          "type": "NameExpression",
          "name": "style"
        },
        "name": "contentStyle"
      },
      {
        "title": "property",
        "description": "Called when the touch is released, but not if cancelled.",
        "lineNumber": 108,
        "type": {
          "type": "NameExpression",
          "name": "function"
        },
        "name": "onPress"
      },
      {
        "title": "property",
        "description": "Same as `TouchableWithoutFeedback.onPressIn`",
        "lineNumber": 109,
        "type": {
          "type": "NameExpression",
          "name": "function"
        },
        "name": "onPressIn"
      },
      {
        "title": "property",
        "description": "Same as `TouchableWithoutFeedback.onPressOut`",
        "lineNumber": 110,
        "type": {
          "type": "NameExpression",
          "name": "function"
        },
        "name": "onPressOut"
      },
      {
        "title": "property",
        "description": "Called when the touch is released and is longer than usual press, but not if cancelled.",
        "lineNumber": 111,
        "type": {
          "type": "NameExpression",
          "name": "function"
        },
        "name": "onLongPress"
      }
    ],
    "loc": {
      "start": {
        "line": 10,
        "column": 0
      },
      "end": {
        "line": 122,
        "column": 3
      }
    },
    "context": {
      "loc": {
        "start": {
          "line": 124,
          "column": 0
        },
        "end": {
          "line": 180,
          "column": 1
        }
      },
      "file": "D:\\NWork\\GitHub\\react-native-ui-kitten\\src\\components\\button\\rkButton.js"
    },
    "augments": [
      {
        "title": "extends",
        "description": null,
        "lineNumber": 3,
        "type": null,
        "name": "RkComponent"
      }
    ],
    "examples": [
      {
        "description": "Simple usage example:\r\n\r\n```\r\n<RkButton>Button</RkButton>\r\n```"
      },
      {
        "description": "Custom content inside button\r\n\r\n`RkButton` can contains not only text but also other components:\r\n\r\n```\r\n<RkButton>\r\n   <Image\r\n     style={{width: 50, height: 50}}\r\n     source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}/>\r\n</RkButton>\r\n```"
      },
      {
        "description": "Using `rkType`prop\r\n\r\n`RkButton` has `rkType` prop. This prop works similar to CSS-class in web. It's possible to set more than one type.\r\nThere are already some predefined types. Here is example of how to use rkType\r\n\r\n```\r\n<RkButton rkType='success'>Accept</RkButton>\r\n<RkButton rkType='danger small'>Cancel</RkButton>\r\n```"
      },
      {
        "description": "Define new rkTypes\r\n\r\nIt's easy and very common to create new types. Main point for all customization is `RkTheme` object.\r\nNew rkTypes are defined using `setType` method of `RkTheme`:\r\n\r\n```\r\nimport {RkTheme} from 'react-native-ui-kitten';\r\n\r\n RkTheme.setType('RkButton', 'dark', {\r\n  backgroundColor: 'gray',\r\n  borderRadius: 10,\r\n});\r\n\r\n RkTheme.setType('RkButton', 'icon', {\r\n  fontSize: 24,\r\n  width: 46,\r\n  borderRadius: 25\r\n});\r\n\r\n//...\r\n\r\n<RkButton rkType='dark'>SUBMIT</RkButton>\r\n\r\n<RkButton rkType='dark icon' style={{marginLeft: 20}}>\r\n   <Text>+</Text>\r\n</RkButton>\r\n\r\n```"
      },
      {
        "description": "Advanced Styling\r\n\r\nIt's also possible to implement more detailed styling. RkButton consists from couple of base react component. You can easily set styles for each component.\r\n\r\nFor example you can change the opacity of content passed to RkButton:\r\n\r\n```\r\nRkTheme.setType('RkButton', 'faded', {\r\n  content: {\r\n    opacity: 0.6,\r\n  }\r\n});\r\n```"
      },
      {
        "description": "Inline styling\r\n\r\nIt's possible to set styles inline. Use props style for container component and contentStyle for content component.\r\n\r\n```\r\n<RkButton\r\n   style={{backgroundColor: 'red'}}\r\n   contentStyle={{color: 'white'}}> Hello </RkButton>\r\n```"
      }
    ],
    "params": [],
    "properties": [
      {
        "title": "property",
        "name": "rkType",
        "lineNumber": 103,
        "description": {
          "type": "root",
          "children": [
            {
              "type": "paragraph",
              "children": [
                {
                  "type": "text",
                  "value": "Types for stylization component\nBy default ",
                  "position": {
                    "start": {
                      "line": 1,
                      "column": 1,
                      "offset": 0
                    },
                    "end": {
                      "line": 2,
                      "column": 12,
                      "offset": 44
                    },
                    "indent": [
                      1
                    ]
                  }
                },
                {
                  "type": "inlineCode",
                  "value": "RkButton",
                  "position": {
                    "start": {
                      "line": 2,
                      "column": 12,
                      "offset": 44
                    },
                    "end": {
                      "line": 2,
                      "column": 22,
                      "offset": 54
                    },
                    "indent": []
                  }
                },
                {
                  "type": "text",
                  "value": " supports following types: ",
                  "position": {
                    "start": {
                      "line": 2,
                      "column": 22,
                      "offset": 54
                    },
                    "end": {
                      "line": 2,
                      "column": 49,
                      "offset": 81
                    },
                    "indent": []
                  }
                },
                {
                  "type": "inlineCode",
                  "value": "primary",
                  "position": {
                    "start": {
                      "line": 2,
                      "column": 49,
                      "offset": 81
                    },
                    "end": {
                      "line": 2,
                      "column": 58,
                      "offset": 90
                    },
                    "indent": []
                  }
                },
                {
                  "type": "text",
                  "value": ", ",
                  "position": {
                    "start": {
                      "line": 2,
                      "column": 58,
                      "offset": 90
                    },
                    "end": {
                      "line": 2,
                      "column": 60,
                      "offset": 92
                    },
                    "indent": []
                  }
                },
                {
                  "type": "inlineCode",
                  "value": "info",
                  "position": {
                    "start": {
                      "line": 2,
                      "column": 60,
                      "offset": 92
                    },
                    "end": {
                      "line": 2,
                      "column": 66,
                      "offset": 98
                    },
                    "indent": []
                  }
                },
                {
                  "type": "text",
                  "value": ", ",
                  "position": {
                    "start": {
                      "line": 2,
                      "column": 66,
                      "offset": 98
                    },
                    "end": {
                      "line": 2,
                      "column": 68,
                      "offset": 100
                    },
                    "indent": []
                  }
                },
                {
                  "type": "inlineCode",
                  "value": "warning",
                  "position": {
                    "start": {
                      "line": 2,
                      "column": 68,
                      "offset": 100
                    },
                    "end": {
                      "line": 2,
                      "column": 77,
                      "offset": 109
                    },
                    "indent": []
                  }
                },
                {
                  "type": "text",
                  "value": ", ",
                  "position": {
                    "start": {
                      "line": 2,
                      "column": 77,
                      "offset": 109
                    },
                    "end": {
                      "line": 2,
                      "column": 79,
                      "offset": 111
                    },
                    "indent": []
                  }
                },
                {
                  "type": "inlineCode",
                  "value": "danger",
                  "position": {
                    "start": {
                      "line": 2,
                      "column": 79,
                      "offset": 111
                    },
                    "end": {
                      "line": 2,
                      "column": 87,
                      "offset": 119
                    },
                    "indent": []
                  }
                },
                {
                  "type": "text",
                  "value": ", ",
                  "position": {
                    "start": {
                      "line": 2,
                      "column": 87,
                      "offset": 119
                    },
                    "end": {
                      "line": 2,
                      "column": 89,
                      "offset": 121
                    },
                    "indent": []
                  }
                },
                {
                  "type": "inlineCode",
                  "value": "success",
                  "position": {
                    "start": {
                      "line": 2,
                      "column": 89,
                      "offset": 121
                    },
                    "end": {
                      "line": 2,
                      "column": 98,
                      "offset": 130
                    },
                    "indent": []
                  }
                },
                {
                  "type": "text",
                  "value": ", ",
                  "position": {
                    "start": {
                      "line": 2,
                      "column": 98,
                      "offset": 130
                    },
                    "end": {
                      "line": 2,
                      "column": 100,
                      "offset": 132
                    },
                    "indent": []
                  }
                },
                {
                  "type": "inlineCode",
                  "value": "outline",
                  "position": {
                    "start": {
                      "line": 2,
                      "column": 100,
                      "offset": 132
                    },
                    "end": {
                      "line": 2,
                      "column": 109,
                      "offset": 141
                    },
                    "indent": []
                  }
                },
                {
                  "type": "text",
                  "value": ", ",
                  "position": {
                    "start": {
                      "line": 2,
                      "column": 109,
                      "offset": 141
                    },
                    "end": {
                      "line": 2,
                      "column": 111,
                      "offset": 143
                    },
                    "indent": []
                  }
                },
                {
                  "type": "inlineCode",
                  "value": "rounded",
                  "position": {
                    "start": {
                      "line": 2,
                      "column": 111,
                      "offset": 143
                    },
                    "end": {
                      "line": 2,
                      "column": 120,
                      "offset": 152
                    },
                    "indent": []
                  }
                },
                {
                  "type": "text",
                  "value": ",\n",
                  "position": {
                    "start": {
                      "line": 2,
                      "column": 120,
                      "offset": 152
                    },
                    "end": {
                      "line": 3,
                      "column": 1,
                      "offset": 155
                    },
                    "indent": [
                      1
                    ]
                  }
                },
                {
                  "type": "inlineCode",
                  "value": "circle",
                  "position": {
                    "start": {
                      "line": 3,
                      "column": 1,
                      "offset": 155
                    },
                    "end": {
                      "line": 3,
                      "column": 9,
                      "offset": 163
                    },
                    "indent": []
                  }
                },
                {
                  "type": "text",
                  "value": ", ",
                  "position": {
                    "start": {
                      "line": 3,
                      "column": 9,
                      "offset": 163
                    },
                    "end": {
                      "line": 3,
                      "column": 11,
                      "offset": 165
                    },
                    "indent": []
                  }
                },
                {
                  "type": "inlineCode",
                  "value": "small",
                  "position": {
                    "start": {
                      "line": 3,
                      "column": 11,
                      "offset": 165
                    },
                    "end": {
                      "line": 3,
                      "column": 18,
                      "offset": 172
                    },
                    "indent": []
                  }
                },
                {
                  "type": "text",
                  "value": ", ",
                  "position": {
                    "start": {
                      "line": 3,
                      "column": 18,
                      "offset": 172
                    },
                    "end": {
                      "line": 3,
                      "column": 20,
                      "offset": 174
                    },
                    "indent": []
                  }
                },
                {
                  "type": "inlineCode",
                  "value": "medium",
                  "position": {
                    "start": {
                      "line": 3,
                      "column": 20,
                      "offset": 174
                    },
                    "end": {
                      "line": 3,
                      "column": 28,
                      "offset": 182
                    },
                    "indent": []
                  }
                },
                {
                  "type": "text",
                  "value": ", ",
                  "position": {
                    "start": {
                      "line": 3,
                      "column": 28,
                      "offset": 182
                    },
                    "end": {
                      "line": 3,
                      "column": 30,
                      "offset": 184
                    },
                    "indent": []
                  }
                },
                {
                  "type": "inlineCode",
                  "value": "large",
                  "position": {
                    "start": {
                      "line": 3,
                      "column": 30,
                      "offset": 184
                    },
                    "end": {
                      "line": 3,
                      "column": 37,
                      "offset": 191
                    },
                    "indent": []
                  }
                },
                {
                  "type": "text",
                  "value": ", ",
                  "position": {
                    "start": {
                      "line": 3,
                      "column": 37,
                      "offset": 191
                    },
                    "end": {
                      "line": 3,
                      "column": 39,
                      "offset": 193
                    },
                    "indent": []
                  }
                },
                {
                  "type": "inlineCode",
                  "value": "xlarge",
                  "position": {
                    "start": {
                      "line": 3,
                      "column": 39,
                      "offset": 193
                    },
                    "end": {
                      "line": 3,
                      "column": 47,
                      "offset": 201
                    },
                    "indent": []
                  }
                },
                {
                  "type": "text",
                  "value": ", ",
                  "position": {
                    "start": {
                      "line": 3,
                      "column": 47,
                      "offset": 201
                    },
                    "end": {
                      "line": 3,
                      "column": 49,
                      "offset": 203
                    },
                    "indent": []
                  }
                },
                {
                  "type": "inlineCode",
                  "value": "clear",
                  "position": {
                    "start": {
                      "line": 3,
                      "column": 49,
                      "offset": 203
                    },
                    "end": {
                      "line": 3,
                      "column": 56,
                      "offset": 210
                    },
                    "indent": []
                  }
                },
                {
                  "type": "text",
                  "value": ", ",
                  "position": {
                    "start": {
                      "line": 3,
                      "column": 56,
                      "offset": 210
                    },
                    "end": {
                      "line": 3,
                      "column": 58,
                      "offset": 212
                    },
                    "indent": []
                  }
                },
                {
                  "type": "inlineCode",
                  "value": "stretch",
                  "position": {
                    "start": {
                      "line": 3,
                      "column": 58,
                      "offset": 212
                    },
                    "end": {
                      "line": 3,
                      "column": 67,
                      "offset": 221
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
                  "column": 67,
                  "offset": 221
                },
                "indent": [
                  1,
                  1
                ]
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
              "column": 67,
              "offset": 221
            }
          }
        },
        "type": {
          "type": "NameExpression",
          "name": "string"
        }
      },
      {
        "title": "property",
        "name": "style",
        "lineNumber": 106,
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
          "name": "style"
        }
      },
      {
        "title": "property",
        "name": "contentStyle",
        "lineNumber": 107,
        "description": {
          "type": "root",
          "children": [
            {
              "type": "paragraph",
              "children": [
                {
                  "type": "text",
                  "value": "Style for each button's children",
                  "position": {
                    "start": {
                      "line": 1,
                      "column": 1,
                      "offset": 0
                    },
                    "end": {
                      "line": 1,
                      "column": 33,
                      "offset": 32
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
                  "column": 33,
                  "offset": 32
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
              "column": 33,
              "offset": 32
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
        "lineNumber": 108,
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
        "lineNumber": 109,
        "description": {
          "type": "root",
          "children": [
            {
              "type": "paragraph",
              "children": [
                {
                  "type": "text",
                  "value": "Same as ",
                  "position": {
                    "start": {
                      "line": 1,
                      "column": 1,
                      "offset": 0
                    },
                    "end": {
                      "line": 1,
                      "column": 9,
                      "offset": 8
                    },
                    "indent": []
                  }
                },
                {
                  "type": "inlineCode",
                  "value": "TouchableWithoutFeedback.onPressIn",
                  "position": {
                    "start": {
                      "line": 1,
                      "column": 9,
                      "offset": 8
                    },
                    "end": {
                      "line": 1,
                      "column": 45,
                      "offset": 44
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
                  "column": 45,
                  "offset": 44
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
              "column": 45,
              "offset": 44
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
        "lineNumber": 110,
        "description": {
          "type": "root",
          "children": [
            {
              "type": "paragraph",
              "children": [
                {
                  "type": "text",
                  "value": "Same as ",
                  "position": {
                    "start": {
                      "line": 1,
                      "column": 1,
                      "offset": 0
                    },
                    "end": {
                      "line": 1,
                      "column": 9,
                      "offset": 8
                    },
                    "indent": []
                  }
                },
                {
                  "type": "inlineCode",
                  "value": "TouchableWithoutFeedback.onPressOut",
                  "position": {
                    "start": {
                      "line": 1,
                      "column": 9,
                      "offset": 8
                    },
                    "end": {
                      "line": 1,
                      "column": 46,
                      "offset": 45
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
                  "column": 46,
                  "offset": 45
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
              "column": 46,
              "offset": 45
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
        "lineNumber": 111,
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
      "static": []
    },
    "path": [
      {
        "name": "RkButton",
        "kind": "class"
      }
    ],
    "namespace": "RkButton"
  },
  {
    "description": {
      "type": "root",
      "children": [
        {
          "type": "paragraph",
          "children": [
            {
              "type": "inlineCode",
              "value": "RkCard",
              "position": {
                "start": {
                  "line": 1,
                  "column": 1,
                  "offset": 0
                },
                "end": {
                  "line": 1,
                  "column": 9,
                  "offset": 8
                },
                "indent": []
              }
            },
            {
              "type": "text",
              "value": " component used to render card view in your application.\nIt's usually being used with its props (described below) applied to standard react or custom components.",
              "position": {
                "start": {
                  "line": 1,
                  "column": 9,
                  "offset": 8
                },
                "end": {
                  "line": 2,
                  "column": 105,
                  "offset": 170
                },
                "indent": [
                  1
                ]
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
              "line": 2,
              "column": 105,
              "offset": 170
            },
            "indent": [
              1
            ]
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
          "line": 2,
          "column": 105,
          "offset": 170
        }
      }
    },
    "tags": [
      {
        "title": "extends",
        "description": null,
        "lineNumber": 3,
        "type": null,
        "name": "RkComponent"
      },
      {
        "title": "example",
        "description": "Usage example:\r\n\r\n```\r\n<RkCard>\r\n  <View rkCardHeader>\r\n    <Text>Header</Text>\r\n  </View>\r\n  <Image rkCardImg source={require('../img/sea.jpg')}/>\r\n  <View rkCardContent>\r\n    <Text> quick brown fox jumps over the lazy dog</Text>\r\n  </View>\r\n  <View rkCardFooter>\r\n    <Text>Footer</Text>\r\n  </View>\r\n</RkCard>\r\n```",
        "lineNumber": 6
      },
      {
        "title": "style",
        "description": "There are 6 `RkCard` nested element props which can be applied to elements inside `RkCard`:\r\n- `rkCardContainer` : Used for styling root card container.\r\n- `rkCardHeader` : Used for styling header of card.\r\n- `rkCardImg` : Used for styling image content in card.\r\n- `rkCardImgOverlay` : Used for styling component which will be displayed over the image.\r\n- `rkCardContent` : Used for styling content.\r\n- `rkCardFooter` : Used for styling footer of card.",
        "lineNumber": 23
      },
      {
        "title": "example",
        "description": "Using `rkType`prop\r\n\r\n`RkCard` has `rkType` prop. This prop works similar to CSS-class in web. It's possible to set more than one type.\r\nThere are already some predefined types. Here is example of how to use rkType\r\n\r\n<RkCard rkType='shadowed'>\r\n  <View rkCardHeader>\r\n    <Text>Header</Text>\r\n  </View>\r\n  <View rkCardContent>\r\n    <Text>Shadowed card</Text>\r\n  </View>\r\n</RkCard>\r\n```",
        "lineNumber": 31
      },
      {
        "title": "example",
        "description": "Define new rkTypes\r\n\r\nIt's easy and very common to create new types. Main point for all customization is `RkTheme` object.\r\n`rkType` used here to set style for each of 6 `rkCard` nested element props.\r\nNew rkTypes are defined using `setType` method of `RkTheme`:\r\n\r\nRkTheme.setType('RkCard', 'story', {\r\n  img: {\r\n    height: 100,\r\n    opacity: 0.7\r\n  },\r\n  header: {\r\n    alignSelf: 'center'\r\n  },\r\n  content:{\r\n    alignSelf:'center'\r\n  }\r\n});\r\n\r\n//...\r\n\r\n\r\n<RkCard rkType='story'>\r\n  <Image rkCardImg source={require('../img/sea.jpg')}/>\r\n  <View rkCardHeader>\r\n    <RkText rkType='header'>Once upon a time</RkText>\r\n  </View>\r\n  <View rkCardContent>\r\n    <RkText style={{textAlign:'center'}}>\r\n      One morning, when Gregor Samsa woke from happy dreams, he found himself transformed in ...\r\n    </RkText>\r\n  </View>\r\n  <View rkCardFooter>\r\n    <RkButton rkType='small outline'>Learn More</RkButton>\r\n    <RkButton rkType='small'>Read later</RkButton>\r\n  </View>\r\n</RkCard>",
        "lineNumber": 46
      },
      {
        "title": "styles",
        "description": "Nested element props available for styling:\r\n- `container` : Style key for `rkCardContainer`.\r\n- `header` : Style key for `rkCardHeader`.\r\n- `content` : Style key for `rkCardContent`.\r\n- `footer` : Style key for `rkCardFooter`.\r\n- `img` : Style key for `rkCardImg`.\r\n- `imgOverlay` : Style key for `rkCardImgOverlay`.",
        "lineNumber": 84
      },
      {
        "title": "property",
        "description": "Types for stylization component\r\nBy default `RkCard` supports following types: `shadowed`, `heroImage`",
        "lineNumber": 92,
        "type": {
          "type": "NameExpression",
          "name": "string"
        },
        "name": "rkType"
      },
      {
        "title": "property",
        "description": "Style for root container of `RkCard`",
        "lineNumber": 94,
        "type": {
          "type": "NameExpression",
          "name": "style"
        },
        "name": "style"
      }
    ],
    "loc": {
      "start": {
        "line": 5,
        "column": 0
      },
      "end": {
        "line": 100,
        "column": 3
      }
    },
    "context": {
      "loc": {
        "start": {
          "line": 101,
          "column": 0
        },
        "end": {
          "line": 161,
          "column": 1
        }
      },
      "file": "D:\\NWork\\GitHub\\react-native-ui-kitten\\src\\components\\card\\rkCard.js"
    },
    "augments": [
      {
        "title": "extends",
        "description": null,
        "lineNumber": 3,
        "type": null,
        "name": "RkComponent"
      }
    ],
    "examples": [
      {
        "description": "Usage example:\r\n\r\n```\r\n<RkCard>\r\n  <View rkCardHeader>\r\n    <Text>Header</Text>\r\n  </View>\r\n  <Image rkCardImg source={require('../img/sea.jpg')}/>\r\n  <View rkCardContent>\r\n    <Text> quick brown fox jumps over the lazy dog</Text>\r\n  </View>\r\n  <View rkCardFooter>\r\n    <Text>Footer</Text>\r\n  </View>\r\n</RkCard>\r\n```"
      },
      {
        "description": "Using `rkType`prop\r\n\r\n`RkCard` has `rkType` prop. This prop works similar to CSS-class in web. It's possible to set more than one type.\r\nThere are already some predefined types. Here is example of how to use rkType\r\n\r\n<RkCard rkType='shadowed'>\r\n  <View rkCardHeader>\r\n    <Text>Header</Text>\r\n  </View>\r\n  <View rkCardContent>\r\n    <Text>Shadowed card</Text>\r\n  </View>\r\n</RkCard>\r\n```"
      },
      {
        "description": "Define new rkTypes\r\n\r\nIt's easy and very common to create new types. Main point for all customization is `RkTheme` object.\r\n`rkType` used here to set style for each of 6 `rkCard` nested element props.\r\nNew rkTypes are defined using `setType` method of `RkTheme`:\r\n\r\nRkTheme.setType('RkCard', 'story', {\r\n  img: {\r\n    height: 100,\r\n    opacity: 0.7\r\n  },\r\n  header: {\r\n    alignSelf: 'center'\r\n  },\r\n  content:{\r\n    alignSelf:'center'\r\n  }\r\n});\r\n\r\n//...\r\n\r\n\r\n<RkCard rkType='story'>\r\n  <Image rkCardImg source={require('../img/sea.jpg')}/>\r\n  <View rkCardHeader>\r\n    <RkText rkType='header'>Once upon a time</RkText>\r\n  </View>\r\n  <View rkCardContent>\r\n    <RkText style={{textAlign:'center'}}>\r\n      One morning, when Gregor Samsa woke from happy dreams, he found himself transformed in ...\r\n    </RkText>\r\n  </View>\r\n  <View rkCardFooter>\r\n    <RkButton rkType='small outline'>Learn More</RkButton>\r\n    <RkButton rkType='small'>Read later</RkButton>\r\n  </View>\r\n</RkCard>"
      }
    ],
    "params": [
      {
        "title": "param",
        "name": "props",
        "lineNumber": 115
      }
    ],
    "properties": [
      {
        "title": "property",
        "name": "rkType",
        "lineNumber": 92,
        "description": {
          "type": "root",
          "children": [
            {
              "type": "paragraph",
              "children": [
                {
                  "type": "text",
                  "value": "Types for stylization component\nBy default ",
                  "position": {
                    "start": {
                      "line": 1,
                      "column": 1,
                      "offset": 0
                    },
                    "end": {
                      "line": 2,
                      "column": 12,
                      "offset": 44
                    },
                    "indent": [
                      1
                    ]
                  }
                },
                {
                  "type": "inlineCode",
                  "value": "RkCard",
                  "position": {
                    "start": {
                      "line": 2,
                      "column": 12,
                      "offset": 44
                    },
                    "end": {
                      "line": 2,
                      "column": 20,
                      "offset": 52
                    },
                    "indent": []
                  }
                },
                {
                  "type": "text",
                  "value": " supports following types: ",
                  "position": {
                    "start": {
                      "line": 2,
                      "column": 20,
                      "offset": 52
                    },
                    "end": {
                      "line": 2,
                      "column": 47,
                      "offset": 79
                    },
                    "indent": []
                  }
                },
                {
                  "type": "inlineCode",
                  "value": "shadowed",
                  "position": {
                    "start": {
                      "line": 2,
                      "column": 47,
                      "offset": 79
                    },
                    "end": {
                      "line": 2,
                      "column": 57,
                      "offset": 89
                    },
                    "indent": []
                  }
                },
                {
                  "type": "text",
                  "value": ", ",
                  "position": {
                    "start": {
                      "line": 2,
                      "column": 57,
                      "offset": 89
                    },
                    "end": {
                      "line": 2,
                      "column": 59,
                      "offset": 91
                    },
                    "indent": []
                  }
                },
                {
                  "type": "inlineCode",
                  "value": "heroImage",
                  "position": {
                    "start": {
                      "line": 2,
                      "column": 59,
                      "offset": 91
                    },
                    "end": {
                      "line": 2,
                      "column": 70,
                      "offset": 102
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
                  "line": 2,
                  "column": 70,
                  "offset": 102
                },
                "indent": [
                  1
                ]
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
              "line": 2,
              "column": 70,
              "offset": 102
            }
          }
        },
        "type": {
          "type": "NameExpression",
          "name": "string"
        }
      },
      {
        "title": "property",
        "name": "style",
        "lineNumber": 94,
        "description": {
          "type": "root",
          "children": [
            {
              "type": "paragraph",
              "children": [
                {
                  "type": "text",
                  "value": "Style for root container of ",
                  "position": {
                    "start": {
                      "line": 1,
                      "column": 1,
                      "offset": 0
                    },
                    "end": {
                      "line": 1,
                      "column": 29,
                      "offset": 28
                    },
                    "indent": []
                  }
                },
                {
                  "type": "inlineCode",
                  "value": "RkCard",
                  "position": {
                    "start": {
                      "line": 1,
                      "column": 29,
                      "offset": 28
                    },
                    "end": {
                      "line": 1,
                      "column": 37,
                      "offset": 36
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
                  "column": 37,
                  "offset": 36
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
              "column": 37,
              "offset": 36
            }
          }
        },
        "type": {
          "type": "NameExpression",
          "name": "style"
        }
      }
    ],
    "returns": [],
    "sees": [],
    "throws": [],
    "todos": [],
    "name": "RkCard",
    "kind": "class",
    "members": {
      "global": [],
      "inner": [],
      "instance": [],
      "events": [],
      "static": []
    },
    "path": [
      {
        "name": "RkCard",
        "kind": "class"
      }
    ],
    "namespace": "RkCard"
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
      "file": "D:\\NWork\\GitHub\\react-native-ui-kitten\\src\\components\\rkComponent.js"
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
            "file": "D:\\NWork\\GitHub\\react-native-ui-kitten\\src\\components\\rkComponent.js"
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
            "file": "D:\\NWork\\GitHub\\react-native-ui-kitten\\src\\components\\rkComponent.js"
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
            "file": "D:\\NWork\\GitHub\\react-native-ui-kitten\\src\\components\\rkComponent.js"
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
            "file": "D:\\NWork\\GitHub\\react-native-ui-kitten\\src\\components\\rkComponent.js"
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
            "file": "D:\\NWork\\GitHub\\react-native-ui-kitten\\src\\components\\rkComponent.js"
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
            "file": "D:\\NWork\\GitHub\\react-native-ui-kitten\\src\\components\\rkComponent.js"
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
              "value": "Theme manager",
              "position": {
                "start": {
                  "line": 1,
                  "column": 1,
                  "offset": 0
                },
                "end": {
                  "line": 1,
                  "column": 14,
                  "offset": 13
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
              "column": 14,
              "offset": 13
            },
            "indent": []
          }
        },
        {
          "type": "paragraph",
          "children": [
            {
              "type": "text",
              "value": "Theme manager class, entry point for all manipulations with customization.",
              "position": {
                "start": {
                  "line": 3,
                  "column": 1,
                  "offset": 17
                },
                "end": {
                  "line": 3,
                  "column": 75,
                  "offset": 91
                },
                "indent": []
              }
            }
          ],
          "position": {
            "start": {
              "line": 3,
              "column": 1,
              "offset": 17
            },
            "end": {
              "line": 3,
              "column": 75,
              "offset": 91
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
          "column": 75,
          "offset": 91
        }
      }
    },
    "tags": [],
    "loc": {
      "start": {
        "line": 9,
        "column": 0
      },
      "end": {
        "line": 13,
        "column": 3
      }
    },
    "context": {
      "loc": {
        "start": {
          "line": 14,
          "column": 0
        },
        "end": {
          "line": 121,
          "column": 1
        }
      },
      "file": "D:\\NWork\\GitHub\\react-native-ui-kitten\\src\\styles\\themeManager.js"
    },
    "augments": [],
    "examples": [],
    "params": [],
    "properties": [],
    "returns": [],
    "sees": [],
    "throws": [],
    "todos": [],
    "name": "ThemeManager",
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
                    "value": "{object} returns current theme object.",
                    "position": {
                      "start": {
                        "line": 1,
                        "column": 1,
                        "offset": 0
                      },
                      "end": {
                        "line": 1,
                        "column": 39,
                        "offset": 38
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
                    "column": 39,
                    "offset": 38
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
                "column": 39,
                "offset": 38
              }
            }
          },
          "tags": [],
          "loc": {
            "start": {
              "line": 55,
              "column": 2
            },
            "end": {
              "line": 57,
              "column": 5
            }
          },
          "context": {
            "loc": {
              "start": {
                "line": 58,
                "column": 2
              },
              "end": {
                "line": 60,
                "column": 3
              }
            },
            "file": "D:\\NWork\\GitHub\\react-native-ui-kitten\\src\\styles\\themeManager.js"
          },
          "augments": [],
          "examples": [],
          "params": [],
          "properties": [],
          "returns": [],
          "sees": [],
          "throws": [],
          "todos": [],
          "name": "current",
          "kind": "member",
          "memberof": "ThemeManager",
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
              "name": "ThemeManager",
              "kind": "class"
            },
            {
              "name": "current",
              "kind": "member",
              "scope": "instance"
            }
          ],
          "namespace": "ThemeManager#current"
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
                    "value": "{object} returns auto styles. Deprecated.",
                    "position": {
                      "start": {
                        "line": 1,
                        "column": 1,
                        "offset": 0
                      },
                      "end": {
                        "line": 1,
                        "column": 42,
                        "offset": 41
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
                    "column": 42,
                    "offset": 41
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
                "column": 42,
                "offset": 41
              }
            }
          },
          "tags": [],
          "loc": {
            "start": {
              "line": 62,
              "column": 2
            },
            "end": {
              "line": 64,
              "column": 5
            }
          },
          "context": {
            "loc": {
              "start": {
                "line": 65,
                "column": 2
              },
              "end": {
                "line": 67,
                "column": 3
              }
            },
            "file": "D:\\NWork\\GitHub\\react-native-ui-kitten\\src\\styles\\themeManager.js"
          },
          "augments": [],
          "examples": [],
          "params": [],
          "properties": [],
          "returns": [],
          "sees": [],
          "throws": [],
          "todos": [],
          "name": "styles",
          "kind": "member",
          "memberof": "ThemeManager",
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
              "name": "ThemeManager",
              "kind": "class"
            },
            {
              "name": "styles",
              "kind": "member",
              "scope": "instance"
            }
          ],
          "namespace": "ThemeManager#styles"
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
                    "value": "{object} returns object contains material colors.",
                    "position": {
                      "start": {
                        "line": 1,
                        "column": 1,
                        "offset": 0
                      },
                      "end": {
                        "line": 1,
                        "column": 50,
                        "offset": 49
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
                    "column": 50,
                    "offset": 49
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
                "column": 50,
                "offset": 49
              }
            }
          },
          "tags": [],
          "loc": {
            "start": {
              "line": 69,
              "column": 2
            },
            "end": {
              "line": 71,
              "column": 5
            }
          },
          "context": {
            "loc": {
              "start": {
                "line": 72,
                "column": 2
              },
              "end": {
                "line": 74,
                "column": 3
              }
            },
            "file": "D:\\NWork\\GitHub\\react-native-ui-kitten\\src\\styles\\themeManager.js"
          },
          "augments": [],
          "examples": [],
          "params": [],
          "properties": [],
          "returns": [],
          "sees": [],
          "throws": [],
          "todos": [],
          "name": "colors",
          "kind": "member",
          "memberof": "ThemeManager",
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
              "name": "ThemeManager",
              "kind": "class"
            },
            {
              "name": "colors",
              "kind": "member",
              "scope": "instance"
            }
          ],
          "namespace": "ThemeManager#colors"
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
                    "value": "Updates current theme with new one. Note: function will always merge new theme with current.",
                    "position": {
                      "start": {
                        "line": 1,
                        "column": 1,
                        "offset": 0
                      },
                      "end": {
                        "line": 1,
                        "column": 93,
                        "offset": 92
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
                    "column": 93,
                    "offset": 92
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
                "column": 93,
                "offset": 92
              }
            }
          },
          "tags": [
            {
              "title": "param",
              "description": "new theme.",
              "lineNumber": 2,
              "type": {
                "type": "NameExpression",
                "name": "object"
              },
              "name": "theme"
            }
          ],
          "loc": {
            "start": {
              "line": 76,
              "column": 2
            },
            "end": {
              "line": 79,
              "column": 5
            }
          },
          "context": {
            "loc": {
              "start": {
                "line": 80,
                "column": 2
              },
              "end": {
                "line": 91,
                "column": 3
              }
            },
            "file": "D:\\NWork\\GitHub\\react-native-ui-kitten\\src\\styles\\themeManager.js"
          },
          "augments": [],
          "examples": [],
          "params": [
            {
              "title": "param",
              "name": "theme",
              "lineNumber": 2,
              "description": {
                "type": "root",
                "children": [
                  {
                    "type": "paragraph",
                    "children": [
                      {
                        "type": "text",
                        "value": "new theme.",
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
                        "column": 11,
                        "offset": 10
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
                    "column": 11,
                    "offset": 10
                  }
                }
              },
              "type": {
                "type": "NameExpression",
                "name": "object"
              }
            },
            {
              "title": "param",
              "name": "baseTheme",
              "lineNumber": 80
            }
          ],
          "properties": [],
          "returns": [],
          "sees": [],
          "throws": [],
          "todos": [],
          "name": "setTheme",
          "kind": "function",
          "memberof": "ThemeManager",
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
              "name": "ThemeManager",
              "kind": "class"
            },
            {
              "name": "setTheme",
              "kind": "function",
              "scope": "instance"
            }
          ],
          "namespace": "ThemeManager#setTheme"
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
                    "value": "Creates new rkType for ",
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
                  },
                  {
                    "type": "inlineCode",
                    "value": "RkComponent",
                    "position": {
                      "start": {
                        "line": 1,
                        "column": 24,
                        "offset": 23
                      },
                      "end": {
                        "line": 1,
                        "column": 37,
                        "offset": 36
                      },
                      "indent": []
                    }
                  },
                  {
                    "type": "text",
                    "value": ".",
                    "position": {
                      "start": {
                        "line": 1,
                        "column": 37,
                        "offset": 36
                      },
                      "end": {
                        "line": 1,
                        "column": 38,
                        "offset": 37
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
                    "column": 38,
                    "offset": 37
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
                "column": 38,
                "offset": 37
              }
            }
          },
          "tags": [
            {
              "title": "param",
              "description": "element name for which new rkType should applied.",
              "lineNumber": 2,
              "type": {
                "type": "NameExpression",
                "name": "string"
              },
              "name": "element"
            },
            {
              "title": "param",
              "description": "name of new rkType",
              "lineNumber": 3,
              "type": {
                "type": "NameExpression",
                "name": "string"
              },
              "name": "name"
            },
            {
              "title": "param",
              "description": "style object for new rkType",
              "lineNumber": 4,
              "type": {
                "type": "NameExpression",
                "name": "object"
              },
              "name": "value"
            }
          ],
          "loc": {
            "start": {
              "line": 93,
              "column": 2
            },
            "end": {
              "line": 98,
              "column": 5
            }
          },
          "context": {
            "loc": {
              "start": {
                "line": 99,
                "column": 2
              },
              "end": {
                "line": 101,
                "column": 3
              }
            },
            "file": "D:\\NWork\\GitHub\\react-native-ui-kitten\\src\\styles\\themeManager.js"
          },
          "augments": [],
          "examples": [],
          "params": [
            {
              "title": "param",
              "name": "element",
              "lineNumber": 2,
              "description": {
                "type": "root",
                "children": [
                  {
                    "type": "paragraph",
                    "children": [
                      {
                        "type": "text",
                        "value": "element name for which new rkType should applied.",
                        "position": {
                          "start": {
                            "line": 1,
                            "column": 1,
                            "offset": 0
                          },
                          "end": {
                            "line": 1,
                            "column": 50,
                            "offset": 49
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
                        "column": 50,
                        "offset": 49
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
                    "column": 50,
                    "offset": 49
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
              "name": "name",
              "lineNumber": 3,
              "description": {
                "type": "root",
                "children": [
                  {
                    "type": "paragraph",
                    "children": [
                      {
                        "type": "text",
                        "value": "name of new rkType",
                        "position": {
                          "start": {
                            "line": 1,
                            "column": 1,
                            "offset": 0
                          },
                          "end": {
                            "line": 1,
                            "column": 19,
                            "offset": 18
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
                        "column": 19,
                        "offset": 18
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
                    "column": 19,
                    "offset": 18
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
              "lineNumber": 4,
              "description": {
                "type": "root",
                "children": [
                  {
                    "type": "paragraph",
                    "children": [
                      {
                        "type": "text",
                        "value": "style object for new rkType",
                        "position": {
                          "start": {
                            "line": 1,
                            "column": 1,
                            "offset": 0
                          },
                          "end": {
                            "line": 1,
                            "column": 28,
                            "offset": 27
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
                        "column": 28,
                        "offset": 27
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
                    "column": 28,
                    "offset": 27
                  }
                }
              },
              "type": {
                "type": "NameExpression",
                "name": "object"
              }
            }
          ],
          "properties": [],
          "returns": [],
          "sees": [],
          "throws": [],
          "todos": [],
          "name": "setType",
          "kind": "function",
          "memberof": "ThemeManager",
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
              "name": "ThemeManager",
              "kind": "class"
            },
            {
              "name": "setType",
              "kind": "function",
              "scope": "instance"
            }
          ],
          "namespace": "ThemeManager#setType"
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
                    "value": "Register ",
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
                  },
                  {
                    "type": "inlineCode",
                    "value": "RkComponent",
                    "position": {
                      "start": {
                        "line": 1,
                        "column": 10,
                        "offset": 9
                      },
                      "end": {
                        "line": 1,
                        "column": 23,
                        "offset": 22
                      },
                      "indent": []
                    }
                  },
                  {
                    "type": "text",
                    "value": " in theming system in order to predefine rkTypes.",
                    "position": {
                      "start": {
                        "line": 1,
                        "column": 23,
                        "offset": 22
                      },
                      "end": {
                        "line": 1,
                        "column": 72,
                        "offset": 71
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
                    "column": 72,
                    "offset": 71
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
                "column": 72,
                "offset": 71
              }
            }
          },
          "tags": [
            {
              "title": "param",
              "description": "element name which will be registered.",
              "lineNumber": 2,
              "type": {
                "type": "NameExpression",
                "name": "string"
              },
              "name": "element"
            },
            {
              "title": "param",
              "description": "function which takes theme and returns object with themed rkTypes",
              "lineNumber": 3,
              "type": {
                "type": "NameExpression",
                "name": "func"
              },
              "name": "types"
            }
          ],
          "loc": {
            "start": {
              "line": 103,
              "column": 2
            },
            "end": {
              "line": 107,
              "column": 5
            }
          },
          "context": {
            "loc": {
              "start": {
                "line": 108,
                "column": 2
              },
              "end": {
                "line": 110,
                "column": 3
              }
            },
            "file": "D:\\NWork\\GitHub\\react-native-ui-kitten\\src\\styles\\themeManager.js"
          },
          "augments": [],
          "examples": [],
          "params": [
            {
              "title": "param",
              "name": "element",
              "lineNumber": 2,
              "description": {
                "type": "root",
                "children": [
                  {
                    "type": "paragraph",
                    "children": [
                      {
                        "type": "text",
                        "value": "element name which will be registered.",
                        "position": {
                          "start": {
                            "line": 1,
                            "column": 1,
                            "offset": 0
                          },
                          "end": {
                            "line": 1,
                            "column": 39,
                            "offset": 38
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
                        "column": 39,
                        "offset": 38
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
                    "column": 39,
                    "offset": 38
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
              "name": "types",
              "lineNumber": 3,
              "description": {
                "type": "root",
                "children": [
                  {
                    "type": "paragraph",
                    "children": [
                      {
                        "type": "text",
                        "value": "function which takes theme and returns object with themed rkTypes",
                        "position": {
                          "start": {
                            "line": 1,
                            "column": 1,
                            "offset": 0
                          },
                          "end": {
                            "line": 1,
                            "column": 66,
                            "offset": 65
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
                        "column": 66,
                        "offset": 65
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
                    "column": 66,
                    "offset": 65
                  }
                }
              },
              "type": {
                "type": "NameExpression",
                "name": "func"
              }
            }
          ],
          "properties": [],
          "returns": [],
          "sees": [],
          "throws": [],
          "todos": [],
          "name": "registerComponent",
          "kind": "function",
          "memberof": "ThemeManager",
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
              "name": "ThemeManager",
              "kind": "class"
            },
            {
              "name": "registerComponent",
              "kind": "function",
              "scope": "instance"
            }
          ],
          "namespace": "ThemeManager#registerComponent"
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
                    "value": "Add new color to theme",
                    "position": {
                      "start": {
                        "line": 1,
                        "column": 1,
                        "offset": 0
                      },
                      "end": {
                        "line": 1,
                        "column": 23,
                        "offset": 22
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
                    "column": 23,
                    "offset": 22
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
                "column": 23,
                "offset": 22
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
            }
          ],
          "loc": {
            "start": {
              "line": 112,
              "column": 2
            },
            "end": {
              "line": 116,
              "column": 5
            }
          },
          "context": {
            "loc": {
              "start": {
                "line": 117,
                "column": 2
              },
              "end": {
                "line": 120,
                "column": 3
              }
            },
            "file": "D:\\NWork\\GitHub\\react-native-ui-kitten\\src\\styles\\themeManager.js"
          },
          "augments": [],
          "examples": [],
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
          "name": "setColor",
          "kind": "function",
          "memberof": "ThemeManager",
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
              "name": "ThemeManager",
              "kind": "class"
            },
            {
              "name": "setColor",
              "kind": "function",
              "scope": "instance"
            }
          ],
          "namespace": "ThemeManager#setColor"
        }
      ],
      "events": [],
      "static": []
    },
    "path": [
      {
        "name": "ThemeManager",
        "kind": "class"
      }
    ],
    "namespace": "ThemeManager"
  }
];

const ep = new DocJsParser();
const output = JSON.stringify(ep.parse(json), null, 2);
console.log(output);
// console.log('Hello world');
// const io = new InputOutput();
// io.createFile();












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