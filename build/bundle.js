/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var metadata_1 = __webpack_require__(11);
exports.Metadata = metadata_1.Metadata;
var class_1 = __webpack_require__(5);
exports.Class = class_1.Class;
var example_1 = __webpack_require__(6);
exports.Example = example_1.Example;
var method_1 = __webpack_require__(7);
exports.Method = method_1.Method;
var param_1 = __webpack_require__(8);
exports.Param = param_1.Param;
var prop_1 = __webpack_require__(9);
exports.Prop = prop_1.Prop;
var model_1 = __webpack_require__(12);
exports.Model = model_1.Model;
var style_1 = __webpack_require__(10);
exports.Style = style_1.Style;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonOptions = {
    children: 'children',
    primKind: 'kindString',
    name: 'name',
    decorators: 'decorators',
    comment: 'comment',
    type: 'type',
    flags: 'flags',
    isStatic: 'isStatic',
    signatures: 'signatures',
    parameters: 'parameters',
    tag: 'tag',
    tags: 'tags',
    text: 'text'
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = __webpack_require__(0);
var typedoc_parser_options_1 = __webpack_require__(1);
var GetParams = (function () {
    function GetParams() {
    }
    GetParams.prototype.getParams = function (obj) {
        var _this = this;
        if (obj && obj[typedoc_parser_options_1.CommonOptions.signatures] && obj[typedoc_parser_options_1.CommonOptions.signatures][0][typedoc_parser_options_1.CommonOptions.parameters]) {
            return obj[typedoc_parser_options_1.CommonOptions.signatures][0][typedoc_parser_options_1.CommonOptions.parameters]
                .map(function (item) { return _this.parseParam(item); });
        }
    };
    GetParams.prototype.parseParam = function (obj) {
        return new model_1.Param({
            name: obj[typedoc_parser_options_1.CommonOptions.name],
            type: this.getType(obj),
            required: null,
            shortDescription: '',
            description: ''
        });
    };
    GetParams.prototype.getType = function (obj) {
        if (obj && obj[typedoc_parser_options_1.CommonOptions.type]) {
            return obj[typedoc_parser_options_1.CommonOptions.type][typedoc_parser_options_1.CommonOptions.name];
        }
        else {
            return '';
        }
    };
    return GetParams;
}());
exports.GetParams = GetParams;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var getProperties_1 = __webpack_require__(15);
exports.GetProperties = getProperties_1.GetProperties;
var getMethods_1 = __webpack_require__(14);
exports.GetMethods = getMethods_1.GetMethods;
var getStyles_1 = __webpack_require__(16);
exports.GetStyles = getStyles_1.GetStyles;
var getParams_1 = __webpack_require__(2);
exports.GetParams = getParams_1.GetParams;
var getExamples_1 = __webpack_require__(13);
exports.GetExamples = getExamples_1.GetExamples;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// import { InputOutput } from  './input-output';
// const io = new InputOutput();
// io.createFile();
Object.defineProperty(exports, "__esModule", { value: true });
var typedoc_parser_1 = __webpack_require__(17);
var getters_1 = __webpack_require__(3);
var rdp = new typedoc_parser_1.TypedocParser();
// fs.readFile('./right-examples/typedoc/new/docs.json', (err: any, data: any) => {
//   const newdoc = new TypedocParser().parse(JSON.parse(data));
//   const outputObj: any = JSON.stringify(newdoc, null, 2);
//   fs.writeFile('./watchOut.json', outputObj);
// });
var ge = new getters_1.GetExamples();
var obj1 = {
    "tag": "example",
    "text": "Min sidebar example\n\n```\n<nga-sidebar><nga-sidebar-content>Sidebar content</nga-sidebar-content></nga-sidebar>\n```\n"
};
var obj2 = {
    "tag": "example",
    "text": "Fixed sidebar\n\nExample of fixed sidebar located on the left side, initially collapsed.\n\n```\n<nga-sidebar left fixed state=\"collapsed\">\n <nga-sidebar-header>Header</nga-sidebar-header>\n <nga-sidebar-content>\n   Menu or another component here\n </nga-sidebar-content>\n <nga-sidebar-footer>\n   Footer components here\n </nga-sidebar-footer>\n</nga-sidebar>\n```\n"
};
console.log(ge.getCode(obj2));


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Class = (function () {
    function Class(options) {
        this.kind = options.kind;
        this.platform = options.platform;
        this.examples = options.examples;
        this.props = options.props;
        this.methods = options.methods;
        this.name = options.name;
        this.description = options.description;
        this.shortDescription = options.shortDescription;
        this.styles = options.styles;
    }
    return Class;
}());
exports.Class = Class;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Example = (function () {
    function Example(options) {
        this.shortDescription = options.shortDescription;
        this.description = options.description;
        this.code = options.code;
    }
    return Example;
}());
exports.Example = Example;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Method = (function () {
    function Method(options) {
        this.examples = options.examples;
        this.params = options.params;
        this.platform = options.platform;
        this.name = options.name;
        this.type = options.type;
        this.isStatic = options.isStatic;
        this.shortDescription = options.shortDescription;
        this.description = options.description;
    }
    return Method;
}());
exports.Method = Method;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Param = (function () {
    function Param(options) {
        this.name = options.name;
        this.type = options.type;
        this.required = options.required;
        this.shortDescription = options.shortDescription;
        this.description = options.description;
    }
    return Param;
}());
exports.Param = Param;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Prop = (function () {
    function Prop(options) {
        this.kind = options.kind;
        this.platform = options.platform;
        this.isStatic = options.isStatic;
        this.type = options.type;
        this.required = options.required;
        this.name = options.name;
        this.shortDescription = options.shortDescription;
        this.description = options.description;
    }
    return Prop;
}());
exports.Prop = Prop;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Style = (function () {
    function Style(options) {
        this.shortDescription = options.shortDescription;
        this.styles = options.styles;
    }
    return Style;
}());
exports.Style = Style;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Metadata = (function () {
    function Metadata(language, generator, framework) {
        this.language = language;
        this.generator = generator;
        this.framework = framework;
    }
    return Metadata;
}());
exports.Metadata = Metadata;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Model = (function () {
    function Model(classes /*, metadata: Metadata*/) {
        // this.metadata = metadata;
        this.classes = classes;
    }
    return Model;
}());
exports.Model = Model;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = __webpack_require__(0);
var typedoc_parser_options_1 = __webpack_require__(1);
var GetExamples = (function () {
    function GetExamples() {
    }
    GetExamples.prototype.getExamples = function (obj) {
        var _this = this;
        if (obj && obj[typedoc_parser_options_1.CommonOptions.comment] && obj[typedoc_parser_options_1.CommonOptions.comment][typedoc_parser_options_1.CommonOptions.tags] &&
            obj[typedoc_parser_options_1.CommonOptions.comment][typedoc_parser_options_1.CommonOptions.tags].length) {
            return obj[typedoc_parser_options_1.CommonOptions.comment][typedoc_parser_options_1.CommonOptions.tags]
                .filter(function (item) { return item[typedoc_parser_options_1.CommonOptions.tag] === 'example'; })
                .map(function (item) { return _this.parseExample(item); });
        }
        else {
            return [];
        }
    };
    GetExamples.prototype.parseExample = function (obj) {
        return new model_1.Example({
            code: this.getCode(obj),
            description: this.getDescription(obj),
            shortDescription: this.getShortDescription(obj)
        });
    };
    GetExamples.prototype.getDescription = function (obj) {
    };
    GetExamples.prototype.getShortDescription = function (obj) {
    };
    GetExamples.prototype.getCode = function (obj) {
        if (obj && obj[typedoc_parser_options_1.CommonOptions.text]) {
            return obj[typedoc_parser_options_1.CommonOptions.text].split(/```/g)[1];
        }
        else {
            return '';
        }
    };
    return GetExamples;
}());
exports.GetExamples = GetExamples;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = __webpack_require__(0);
var typedoc_parser_options_1 = __webpack_require__(1);
var getParams_1 = __webpack_require__(2);
var GetMethods = (function () {
    function GetMethods() {
        this.params = new getParams_1.GetParams();
    }
    GetMethods.prototype.getMethods = function (obj) {
        var _this = this;
        if (obj && obj[typedoc_parser_options_1.CommonOptions.children]) {
            return obj[typedoc_parser_options_1.CommonOptions.children]
                .filter(function (item) { return item[typedoc_parser_options_1.CommonOptions.primKind] === 'Method'; })
                .map(function (item) { return _this.parseMethod(item); });
        }
    };
    GetMethods.prototype.parseMethod = function (obj) {
        return new model_1.Method({
            examples: [],
            params: this.params.getParams(obj),
            platform: null,
            name: obj[typedoc_parser_options_1.CommonOptions.name],
            type: this.getType(obj),
            isStatic: this.isStatic(obj),
            shortDescription: this.getShortDescription(obj),
            description: this.getDescription(obj)
        });
    };
    GetMethods.prototype.getDescription = function (obj) {
        if (obj && obj[typedoc_parser_options_1.CommonOptions.signatures][0][typedoc_parser_options_1.CommonOptions.comment]) {
            return obj[typedoc_parser_options_1.CommonOptions.signatures][0][typedoc_parser_options_1.CommonOptions.comment]['text'];
        }
        else {
            return '';
        }
    };
    GetMethods.prototype.getShortDescription = function (obj) {
        if (obj && obj[typedoc_parser_options_1.CommonOptions.signatures][0][typedoc_parser_options_1.CommonOptions.comment]) {
            return obj[typedoc_parser_options_1.CommonOptions.signatures][0][typedoc_parser_options_1.CommonOptions.comment]['shortText'];
        }
        else {
            return '';
        }
    };
    GetMethods.prototype.getType = function (obj) {
        var returnsArray = [];
        if (obj && obj[typedoc_parser_options_1.CommonOptions.signatures] && obj[typedoc_parser_options_1.CommonOptions.signatures][0][typedoc_parser_options_1.CommonOptions.type]) {
            returnsArray.push(obj[typedoc_parser_options_1.CommonOptions.signatures][0][typedoc_parser_options_1.CommonOptions.type][typedoc_parser_options_1.CommonOptions.name]);
            return returnsArray;
        }
        else {
            return ['void'];
        }
    };
    GetMethods.prototype.isStatic = function (obj) {
        if (obj && obj[typedoc_parser_options_1.CommonOptions.flags] && obj[typedoc_parser_options_1.CommonOptions.flags][typedoc_parser_options_1.CommonOptions.isStatic]) {
            return obj[typedoc_parser_options_1.CommonOptions.flags][typedoc_parser_options_1.CommonOptions.isStatic];
        }
        else {
            return false;
        }
    };
    return GetMethods;
}());
exports.GetMethods = GetMethods;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = __webpack_require__(0);
var typedoc_parser_options_1 = __webpack_require__(1);
var GetProperties = (function () {
    function GetProperties() {
    }
    GetProperties.prototype.getProps = function (obj) {
        var _this = this;
        if (obj && obj[typedoc_parser_options_1.CommonOptions.children]) {
            return obj[typedoc_parser_options_1.CommonOptions.children]
                .filter(function (item) {
                if (item[typedoc_parser_options_1.CommonOptions.primKind] === 'Property' || item[typedoc_parser_options_1.CommonOptions.primKind] === 'Accessor'
                    || item[typedoc_parser_options_1.CommonOptions.primKind] === 'Constructor') {
                    return item;
                }
            })
                .map(function (item) {
                if (item[typedoc_parser_options_1.CommonOptions.primKind] === 'Property') {
                    if (item[typedoc_parser_options_1.CommonOptions.decorators] && item[typedoc_parser_options_1.CommonOptions.decorators][typedoc_parser_options_1.CommonOptions.name] === 'Input') {
                        return _this.parseInput(item);
                    }
                    else if (item[typedoc_parser_options_1.CommonOptions.decorators] && item[typedoc_parser_options_1.CommonOptions.decorators][typedoc_parser_options_1.CommonOptions.name] === 'Output') {
                        return _this.parseOutput(item);
                    }
                    else if (item[typedoc_parser_options_1.CommonOptions.decorators]) {
                        return _this.parseProperty(item);
                    }
                    else if (!item[typedoc_parser_options_1.CommonOptions.decorators]) {
                        return _this.parseProperty(item);
                    }
                }
                else if (item[typedoc_parser_options_1.CommonOptions.primKind] === 'Accessor') {
                    if (item[typedoc_parser_options_1.CommonOptions.decorators] && item[typedoc_parser_options_1.CommonOptions.decorators][typedoc_parser_options_1.CommonOptions.name] === 'Input') {
                        return _this.parseInput(item);
                    }
                    else if (item[typedoc_parser_options_1.CommonOptions.decorators] && item[typedoc_parser_options_1.CommonOptions.decorators][typedoc_parser_options_1.CommonOptions.name] === 'Output') {
                        return _this.parseOutput(item);
                    }
                    else if (item[typedoc_parser_options_1.CommonOptions.decorators]) {
                        return _this.parseProperty(item);
                    }
                    else if (!item[typedoc_parser_options_1.CommonOptions.decorators]) {
                        return _this.parseProperty(item);
                    }
                }
                else if (item[typedoc_parser_options_1.CommonOptions.primKind] === 'Constructor') {
                    return _this.parseProperty(item);
                }
            });
        }
        else {
            return [];
        }
    };
    GetProperties.prototype.parseConstructor = function (obj) {
        return new model_1.Prop({
            kind: 'property',
            platform: null,
            isStatic: this.isStatic(obj),
            type: 'void',
            required: null,
            name: obj[typedoc_parser_options_1.CommonOptions.name],
            description: this.getDescription(obj),
            shortDescription: this.getShortDescription(obj)
        });
    };
    GetProperties.prototype.parseProperty = function (obj) {
        return new model_1.Prop({
            kind: 'property',
            platform: null,
            isStatic: this.isStatic(obj),
            type: this.getType(obj),
            required: null,
            name: obj[typedoc_parser_options_1.CommonOptions.name],
            description: this.getDescription(obj),
            shortDescription: this.getShortDescription(obj)
        });
    };
    GetProperties.prototype.parseInput = function (obj) {
        return new model_1.Prop({
            kind: 'input',
            platform: null,
            isStatic: this.isStatic(obj),
            type: this.getType(obj),
            required: null,
            name: obj[typedoc_parser_options_1.CommonOptions.name],
            description: this.getDescription(obj),
            shortDescription: this.getShortDescription(obj)
        });
    };
    GetProperties.prototype.parseOutput = function (obj) {
        return new model_1.Prop({
            kind: 'output',
            platform: null,
            isStatic: false,
            type: this.getType(obj),
            required: null,
            name: obj[typedoc_parser_options_1.CommonOptions.name],
            shortDescription: '',
            description: ''
        });
    };
    GetProperties.prototype.getType = function (obj) {
        if (obj && obj[typedoc_parser_options_1.CommonOptions.type]) {
            return obj[typedoc_parser_options_1.CommonOptions.type][typedoc_parser_options_1.CommonOptions.name];
        }
        else {
            return '';
        }
    };
    GetProperties.prototype.getDescription = function (obj) {
        if (obj && obj[typedoc_parser_options_1.CommonOptions.comment]) {
            return obj[typedoc_parser_options_1.CommonOptions.comment]['text'];
        }
        else {
            return '';
        }
    };
    GetProperties.prototype.getShortDescription = function (obj) {
        if (obj && obj[typedoc_parser_options_1.CommonOptions.comment]) {
            return obj[typedoc_parser_options_1.CommonOptions.comment]['shortText'];
        }
        else {
            return '';
        }
    };
    GetProperties.prototype.isStatic = function (obj) {
        if (obj && obj[typedoc_parser_options_1.CommonOptions.flags] && obj[typedoc_parser_options_1.CommonOptions.flags][typedoc_parser_options_1.CommonOptions.isStatic]) {
            return obj[typedoc_parser_options_1.CommonOptions.flags][typedoc_parser_options_1.CommonOptions.isStatic];
        }
        else {
            return false;
        }
    };
    return GetProperties;
}());
exports.GetProperties = GetProperties;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = __webpack_require__(0);
var typedoc_parser_options_1 = __webpack_require__(1);
var GetStyles = (function () {
    function GetStyles() {
    }
    GetStyles.prototype.getStyles = function (obj) {
        var _this = this;
        if (obj && obj[typedoc_parser_options_1.CommonOptions.comment] && obj[typedoc_parser_options_1.CommonOptions.comment][typedoc_parser_options_1.CommonOptions.tags] &&
            obj[typedoc_parser_options_1.CommonOptions.comment][typedoc_parser_options_1.CommonOptions.tags].length) {
            return obj[typedoc_parser_options_1.CommonOptions.comment][typedoc_parser_options_1.CommonOptions.tags]
                .filter(function (item) { return item[typedoc_parser_options_1.CommonOptions.tag] === 'styles'; })
                .map(function (item) { return _this.parserStyle(item); });
        }
        else {
            return [];
        }
    };
    GetStyles.prototype.parserStyle = function (obj) {
        return new model_1.Style({
            shortDescription: this.getShortDescription(obj),
            styles: this.getStylesOfStyle(obj)
        });
    };
    GetStyles.prototype.getStylesOfStyle = function (obj) {
        if (obj && obj[typedoc_parser_options_1.CommonOptions.text]) {
            var arr = obj[typedoc_parser_options_1.CommonOptions.text].split('\n\n');
            var tempArr = [];
            var returnArr_1 = [];
            arr.splice(0, 1);
            tempArr = arr[0].split('\n');
            tempArr.forEach(function (item) {
                if (item) {
                    var _a = item.split(':'), key = _a[0], value = _a[1];
                    var styleObj = {};
                    if (key) {
                        styleObj['name'] = key.trim();
                    }
                    else {
                        styleObj['name'] = '';
                    }
                    if (value) {
                        styleObj['description'] = value.trim();
                    }
                    else {
                        styleObj['description'] = '';
                    }
                    returnArr_1.push(styleObj);
                }
            });
            return returnArr_1;
        }
        else {
            return [];
        }
    };
    GetStyles.prototype.getShortDescription = function (obj) {
        if (obj && obj[typedoc_parser_options_1.CommonOptions.text]) {
            var workString = obj[typedoc_parser_options_1.CommonOptions.text].replace(/\r\n\r\n/g, '/n/n').split(/\n\n/g);
            return workString[0];
        }
        else {
            return '';
        }
    };
    return GetStyles;
}());
exports.GetStyles = GetStyles;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var typedoc_parser_options_1 = __webpack_require__(1);
var model_1 = __webpack_require__(0);
var getters_1 = __webpack_require__(3);
var TypedocParser = (function () {
    function TypedocParser() {
        this.examples = new getters_1.GetExamples();
        this.styles = new getters_1.GetStyles();
        this.methods = new getters_1.GetMethods();
        this.props = new getters_1.GetProperties();
        this.classes = [];
    }
    TypedocParser.prototype.saveJSON = function (json) {
        this.json = json;
    };
    TypedocParser.prototype.parse = function (json) {
        this.saveJSON(json);
        return new model_1.Model(this.getClasses(this.json));
    };
    TypedocParser.prototype.findAllClasses = function (obj) {
        var _this = this;
        if (obj && obj[typedoc_parser_options_1.CommonOptions.children]) {
            obj[typedoc_parser_options_1.CommonOptions.children].forEach(function (item) {
                if (item[typedoc_parser_options_1.CommonOptions.primKind] === 'Class' || item[typedoc_parser_options_1.CommonOptions.primKind] === 'Interface') {
                    _this.classes.push(item);
                }
                else {
                    _this.findAllClasses(item);
                }
            });
        }
    };
    TypedocParser.prototype.getClasses = function (obj) {
        var _this = this;
        this.findAllClasses(obj);
        var tempClasses = [];
        tempClasses = this.classes
            .filter(function (item) { return item[typedoc_parser_options_1.CommonOptions.primKind] === 'Class' || item[typedoc_parser_options_1.CommonOptions.primKind] === 'Interface'; })
            .map(function (item) {
            if (!item[typedoc_parser_options_1.CommonOptions.decorators]) {
                if (item[typedoc_parser_options_1.CommonOptions.primKind] === 'Class') {
                    return _this.parseClass(item);
                }
                else if (item[typedoc_parser_options_1.CommonOptions.primKind] === 'Interface') {
                    return _this.parseInterface(item);
                }
            }
            else if (item[typedoc_parser_options_1.CommonOptions.decorators]) {
                if (item[typedoc_parser_options_1.CommonOptions.decorators][0][typedoc_parser_options_1.CommonOptions.name] === 'Component') {
                    return _this.parseComponent(item);
                }
                else if (item[typedoc_parser_options_1.CommonOptions.decorators][0][typedoc_parser_options_1.CommonOptions.name] === 'Injectable') {
                    return _this.parseService(item);
                }
                else if (item[typedoc_parser_options_1.CommonOptions.decorators][0][typedoc_parser_options_1.CommonOptions.name] === 'Directive') {
                    return _this.parseDirective(item);
                }
                else if (item[typedoc_parser_options_1.CommonOptions.decorators][0][typedoc_parser_options_1.CommonOptions.name] === 'NgModule') {
                    return _this.parseNgModule(item);
                }
            }
        });
        return tempClasses;
    };
    TypedocParser.prototype.parseComponent = function (obj) {
        return new model_1.Class({
            kind: 'component',
            platform: null,
            examples: [],
            props: this.props.getProps(obj),
            methods: this.methods.getMethods(obj),
            name: obj[typedoc_parser_options_1.CommonOptions.name],
            description: this.getDescription(obj),
            shortDescription: this.getShortDescription(obj),
            styles: this.styles.getStyles(obj)
        });
    };
    TypedocParser.prototype.parseClass = function (obj) {
        return new model_1.Class({
            kind: 'class',
            platform: null,
            examples: [],
            props: this.props.getProps(obj),
            methods: this.methods.getMethods(obj),
            name: obj[typedoc_parser_options_1.CommonOptions.name],
            description: this.getDescription(obj),
            shortDescription: this.getShortDescription(obj),
            styles: this.styles.getStyles(obj)
        });
    };
    TypedocParser.prototype.parseDirective = function (obj) {
        return new model_1.Class({
            kind: 'directive',
            platform: null,
            examples: [],
            props: this.props.getProps(obj),
            methods: this.methods.getMethods(obj),
            name: obj[typedoc_parser_options_1.CommonOptions.name],
            description: this.getDescription(obj),
            shortDescription: this.getShortDescription(obj),
            styles: this.styles.getStyles(obj)
        });
    };
    TypedocParser.prototype.parseService = function (obj) {
        return new model_1.Class({
            kind: 'service',
            platform: null,
            examples: [],
            props: this.props.getProps(obj),
            methods: this.methods.getMethods(obj),
            name: obj[typedoc_parser_options_1.CommonOptions.name],
            description: this.getDescription(obj),
            shortDescription: this.getShortDescription(obj),
            styles: this.styles.getStyles(obj)
        });
    };
    TypedocParser.prototype.parseInterface = function (obj) {
        return new model_1.Class({
            kind: 'interface',
            platform: null,
            examples: [],
            props: this.props.getProps(obj),
            methods: this.methods.getMethods(obj),
            name: obj[typedoc_parser_options_1.CommonOptions.name],
            description: this.getDescription(obj),
            shortDescription: this.getShortDescription(obj),
            styles: this.styles.getStyles(obj) //TODO tell about templates
        });
    };
    TypedocParser.prototype.parseNgModule = function (obj) {
        return new model_1.Class({
            kind: 'class',
            platform: null,
            examples: [],
            props: this.props.getProps(obj),
            methods: this.methods.getMethods(obj),
            name: obj[typedoc_parser_options_1.CommonOptions.name],
            description: this.getDescription(obj),
            shortDescription: this.getShortDescription(obj),
            styles: this.styles.getStyles(obj)
        });
    };
    TypedocParser.prototype.getDescription = function (obj) {
        if (obj && obj[typedoc_parser_options_1.CommonOptions.comment]) {
            return obj[typedoc_parser_options_1.CommonOptions.comment]['text'];
        }
        else {
            return '';
        }
    };
    TypedocParser.prototype.getShortDescription = function (obj) {
        if (obj && obj[typedoc_parser_options_1.CommonOptions.comment]) {
            return obj[typedoc_parser_options_1.CommonOptions.comment]['shortText'];
        }
        else {
            return '';
        }
    };
    return TypedocParser;
}());
exports.TypedocParser = TypedocParser;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ })
/******/ ]);