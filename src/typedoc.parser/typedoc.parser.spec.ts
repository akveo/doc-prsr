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
});