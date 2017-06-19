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
/******/ 	return __webpack_require__(__webpack_require__.s = 34);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var metadata_1 = __webpack_require__(7);
exports.Metadata = metadata_1.Metadata;
var class_1 = __webpack_require__(17);
exports.Class = class_1.Class;
var example_1 = __webpack_require__(18);
exports.Example = example_1.Example;
var method_1 = __webpack_require__(19);
exports.Method = method_1.Method;
var param_1 = __webpack_require__(20);
exports.Param = param_1.Param;
var prop_1 = __webpack_require__(21);
exports.Prop = prop_1.Prop;
var model_1 = __webpack_require__(23);
exports.Model = model_1.Model;
var style_1 = __webpack_require__(22);
exports.Style = style_1.Style;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonOptions = {
    classKind: 'kind',
    name: 'name',
    platform: 'platform',
    description: 'description',
    children: 'children',
    value: 'value',
    instance: 'instance',
    kind: 'kind',
    members: 'members',
    methodType: 'returns',
    params: 'params',
    paramType: 'type',
    properties: 'properties',
    examples: 'examples',
    type: 'type',
    tags: 'tags',
    title: 'title',
    static: 'static'
};


/***/ }),
/* 2 */
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
    text: 'text',
    description: 'description',
    shortDescription: 'shortDescription',
    returns: 'returns'
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var doc_js_parser_options_1 = __webpack_require__(1);
var Common = (function () {
    function Common() {
    }
    Common.prototype.getName = function (obj) {
        return obj[doc_js_parser_options_1.CommonOptions.name] ? obj[doc_js_parser_options_1.CommonOptions.name] : '';
    };
    Common.prototype.getShortDescription = function (obj) {
        var shortDescription = '';
        if (obj[doc_js_parser_options_1.CommonOptions.description] && obj[doc_js_parser_options_1.CommonOptions.description][doc_js_parser_options_1.CommonOptions.children].length) {
            if (obj[doc_js_parser_options_1.CommonOptions.description][doc_js_parser_options_1.CommonOptions.children][0][doc_js_parser_options_1.CommonOptions.children].length) {
                obj[doc_js_parser_options_1.CommonOptions.description][doc_js_parser_options_1.CommonOptions.children][0][doc_js_parser_options_1.CommonOptions.children]
                    .forEach(function (item) {
                    shortDescription += item[doc_js_parser_options_1.CommonOptions.value] + ' ';
                });
            }
            return shortDescription;
        }
        else {
            return '';
        }
    };
    Common.prototype.getDescription = function (obj) {
        var str = '';
        if (obj[doc_js_parser_options_1.CommonOptions.description]) {
            if (obj[doc_js_parser_options_1.CommonOptions.description][doc_js_parser_options_1.CommonOptions.children].length > 1)
                obj[doc_js_parser_options_1.CommonOptions.description][doc_js_parser_options_1.CommonOptions.children]
                    .forEach(function (item) {
                    item[doc_js_parser_options_1.CommonOptions.children]
                        .forEach(function (item) {
                        str += item[doc_js_parser_options_1.CommonOptions.value] + ' ';
                    });
                });
            return str;
        }
        else {
            return '';
        }
    };
    Common.prototype.getKind = function (obj) {
        return obj[doc_js_parser_options_1.CommonOptions.classKind] ? obj[doc_js_parser_options_1.CommonOptions.classKind] : 'class';
    };
    return Common;
}());
exports.Common = Common;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = __webpack_require__(0);
var doc_js_parser_options_1 = __webpack_require__(1);
var GetExamples = (function () {
    function GetExamples() {
    }
    GetExamples.prototype.parseExample = function (obj) {
        return new model_1.Example({
            code: this.getCode(obj),
            description: this.getDescription(obj),
            shortDescription: this.getShortDescription(obj)
        });
    };
    GetExamples.prototype.getCode = function (obj) {
        if (obj[doc_js_parser_options_1.CommonOptions.description]) {
            return obj[doc_js_parser_options_1.CommonOptions.description].split(/```/g)[1];
        }
        else {
            return '';
        }
    };
    GetExamples.prototype.getDescriptionArr = function (obj) {
        var outArr = [];
        if (obj[doc_js_parser_options_1.CommonOptions.description]) {
            var temp = obj[doc_js_parser_options_1.CommonOptions.description].replace(/\r\n\r\n/g, '\n\n').split('\n\n');
            temp.forEach(function (item) {
                if (!/```/g.test(item)) {
                    outArr.push(item);
                }
            });
            return outArr;
        }
        else {
            return [];
        }
    };
    GetExamples.prototype.getDescription = function (obj) {
        return this.getDescriptionArr(obj)[1];
    };
    GetExamples.prototype.getShortDescription = function (obj) {
        return this.getDescriptionArr(obj)[0];
    };
    GetExamples.prototype.getExamples = function (obj) {
        var _this = this;
        if (obj[doc_js_parser_options_1.CommonOptions.examples].length) {
            return obj[doc_js_parser_options_1.CommonOptions.examples].map(function (item) { return _this.parseExample(item); });
        }
        else {
            return [];
        }
    };
    return GetExamples;
}());
exports.GetExamples = GetExamples;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = __webpack_require__(0);
var doc_js_parser_options_1 = __webpack_require__(1);
var common_1 = __webpack_require__(3);
var GetParams = (function () {
    function GetParams() {
        this.common = new common_1.Common();
    }
    GetParams.prototype.parseParam = function (obj) {
        return new model_1.Param({
            name: this.common.getName(obj),
            type: this.getType(obj),
            required: null,
            shortDescription: this.common.getShortDescription(obj),
            description: this.common.getDescription(obj)
        });
    };
    GetParams.prototype.getType = function (obj) {
        return obj[doc_js_parser_options_1.CommonOptions.paramType] ? obj[doc_js_parser_options_1.CommonOptions.paramType][doc_js_parser_options_1.CommonOptions.name] : '';
    };
    GetParams.prototype.getParams = function (obj) {
        var _this = this;
        if (obj[doc_js_parser_options_1.CommonOptions.params] && obj[doc_js_parser_options_1.CommonOptions.params].length) {
            return obj[doc_js_parser_options_1.CommonOptions.params].map(function (item) { return _this.parseParam(item); });
        }
        else {
            return [];
        }
    };
    return GetParams;
}());
exports.GetParams = GetParams;


/***/ }),
/* 7 */
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var getProperties_1 = __webpack_require__(27);
exports.GetProperties = getProperties_1.GetProperties;
var getMethods_1 = __webpack_require__(25);
exports.GetMethods = getMethods_1.GetMethods;
var getStyles_1 = __webpack_require__(28);
exports.GetStyles = getStyles_1.GetStyles;
var getParams_1 = __webpack_require__(26);
exports.GetParams = getParams_1.GetParams;
var getExamples_1 = __webpack_require__(24);
exports.GetExamples = getExamples_1.GetExamples;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(16);


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = __webpack_require__(0);
var doc_js_parser_options_1 = __webpack_require__(1);
var getters_1 = __webpack_require__(15);
var DocJsParser = (function () {
    function DocJsParser() {
        this.styles = new getters_1.GetStyles();
        this.props = new getters_1.GetProperties();
        this.examples = new getters_1.GetExamples();
        this.methods = new getters_1.GetMethods();
        this.common = new getters_1.Common();
    }
    DocJsParser.prototype.parse = function (json, metadata) {
        this.saveJSON(json);
        return new model_1.Model(this.getClasses(this.json), metadata);
    };
    DocJsParser.prototype.saveJSON = function (json) {
        this.json = json;
    };
    DocJsParser.prototype.getClasses = function (json) {
        var _this = this;
        return json
            .filter(function (item) { return item[doc_js_parser_options_1.CommonOptions.classKind] === 'class'; })
            .map(function (item) { return _this.parseClass(item); });
    };
    DocJsParser.prototype.parseClass = function (obj) {
        return new model_1.Class({
            kind: this.common.getKind(obj),
            platform: null,
            examples: this.examples.getExamples(obj),
            props: this.props.getProps(obj),
            methods: this.methods.getMethods(obj),
            name: this.common.getName(obj),
            shortDescription: this.common.getShortDescription(obj),
            description: this.common.getDescription(obj),
            styles: this.styles.getStyles(obj)
        });
    };
    return DocJsParser;
}());
exports.DocJsParser = DocJsParser;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = __webpack_require__(0);
var doc_js_parser_options_1 = __webpack_require__(1);
var getParams_1 = __webpack_require__(6);
var getExamples_1 = __webpack_require__(5);
var common_1 = __webpack_require__(3);
var GetMethods = (function () {
    function GetMethods() {
        this.examples = new getExamples_1.GetExamples();
        this.params = new getParams_1.GetParams();
        this.common = new common_1.Common();
    }
    GetMethods.prototype.parseMethodFromInstance = function (obj) {
        return new model_1.Method({
            examples: this.examples.getExamples(obj),
            params: this.params.getParams(obj),
            platform: null,
            name: this.common.getName(obj),
            type: this.getType(obj),
            isStatic: false,
            shortDescription: this.common.getShortDescription(obj),
            description: this.common.getDescription(obj)
        });
    };
    GetMethods.prototype.parseMethodFromStatic = function (obj) {
        return new model_1.Method({
            examples: this.examples.getExamples(obj),
            params: this.params.getParams(obj),
            platform: null,
            name: this.common.getName(obj),
            type: this.getType(obj),
            isStatic: true,
            shortDescription: this.common.getShortDescription(obj),
            description: this.common.getDescription(obj)
        });
    };
    GetMethods.prototype.getMethodsInstance = function (obj) {
        var _this = this;
        if (obj[doc_js_parser_options_1.CommonOptions.members] && obj[doc_js_parser_options_1.CommonOptions.members][doc_js_parser_options_1.CommonOptions.instance].length) {
            return obj[doc_js_parser_options_1.CommonOptions.members][doc_js_parser_options_1.CommonOptions.instance]
                .filter(function (item) { return item[doc_js_parser_options_1.CommonOptions.kind] === 'function'; })
                .map(function (item) { return _this.parseMethodFromInstance(item); });
        }
        else {
            return [];
        }
    };
    GetMethods.prototype.getMethodsStatic = function (obj) {
        var _this = this;
        if (obj[doc_js_parser_options_1.CommonOptions.members] && obj[doc_js_parser_options_1.CommonOptions.members][doc_js_parser_options_1.CommonOptions.static].length) {
            return obj[doc_js_parser_options_1.CommonOptions.members][doc_js_parser_options_1.CommonOptions.static]
                .filter(function (item) { return item[doc_js_parser_options_1.CommonOptions.kind] === 'function'; })
                .map(function (item) { return _this.parseMethodFromStatic(item); });
        }
        else {
            return [];
        }
    };
    GetMethods.prototype.getMethods = function (obj) {
        return this.getMethodsInstance(obj).concat(this.getMethodsStatic(obj));
    };
    GetMethods.prototype.getType = function (obj) {
        var temp = [];
        if (obj[doc_js_parser_options_1.CommonOptions.methodType] && obj[doc_js_parser_options_1.CommonOptions.methodType].length) {
            obj[doc_js_parser_options_1.CommonOptions.methodType]
                .forEach(function (item) {
                temp.push(item[doc_js_parser_options_1.CommonOptions.type][doc_js_parser_options_1.CommonOptions.type]);
            });
            return temp;
        }
        else {
            return ['void'];
        }
    };
    return GetMethods;
}());
exports.GetMethods = GetMethods;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = __webpack_require__(0);
var common_1 = __webpack_require__(3);
var doc_js_parser_options_1 = __webpack_require__(1);
var GetProperties = (function () {
    function GetProperties() {
        this.common = new common_1.Common();
    }
    GetProperties.prototype.parsePropFromProperties = function (obj) {
        if (this.getShortDescriptionProperties(obj).trim() === this.getDescriptionProperties(obj).trim() ||
            this.getDescriptionProperties(obj).indexOf(this.getShortDescriptionProperties(obj)) != -1) {
            return new model_1.Prop({
                kind: 'prop',
                platform: null,
                isStatic: false,
                type: this.getTypeProperties(obj),
                required: null,
                name: this.common.getName(obj),
                shortDescription: '',
                description: this.getDescriptionProperties(obj)
            });
        }
        else {
            return new model_1.Prop({
                kind: 'prop',
                platform: null,
                isStatic: false,
                type: this.getTypeProperties(obj),
                required: null,
                name: this.common.getName(obj),
                shortDescription: this.getShortDescriptionProperties(obj),
                description: this.getDescriptionProperties(obj)
            });
        }
    };
    GetProperties.prototype.parsePropFromInstance = function (obj) {
        return new model_1.Prop({
            kind: 'property',
            platform: null,
            isStatic: false,
            type: this.getTypeInstance(obj),
            required: null,
            name: this.common.getName(obj),
            shortDescription: this.getShortDescriptionInstance(obj),
            description: this.getDescription(obj)
        });
    };
    GetProperties.prototype.parsePropFromStatic = function (obj) {
        return new model_1.Prop({
            kind: 'property',
            platform: null,
            isStatic: true,
            type: this.getTypeStatic(obj),
            required: null,
            name: this.common.getName(obj),
            shortDescription: this.getDescriptionStatic(obj),
            description: this.getDescriptionStatic(obj)
        });
    };
    GetProperties.prototype.getPropsFromProperties = function (obj) {
        var _this = this;
        if (obj[doc_js_parser_options_1.CommonOptions.properties] && obj[doc_js_parser_options_1.CommonOptions.properties].length) {
            return obj[doc_js_parser_options_1.CommonOptions.properties].map(function (item) { return _this.parsePropFromProperties(item); });
        }
        else {
            return [];
        }
    };
    GetProperties.prototype.getPropsFromInstance = function (obj) {
        var _this = this;
        if (obj[doc_js_parser_options_1.CommonOptions.members] && obj[doc_js_parser_options_1.CommonOptions.members][doc_js_parser_options_1.CommonOptions.instance].length) {
            return obj[doc_js_parser_options_1.CommonOptions.members][doc_js_parser_options_1.CommonOptions.instance]
                .filter(function (item) { return item[doc_js_parser_options_1.CommonOptions.kind] === 'member'; })
                .map(function (item) { return _this.parsePropFromInstance(item); });
        }
        else {
            return [];
        }
    };
    GetProperties.prototype.getPropsFromStatic = function (obj) {
        var _this = this;
        if (obj[doc_js_parser_options_1.CommonOptions.members] && obj[doc_js_parser_options_1.CommonOptions.members][doc_js_parser_options_1.CommonOptions.static].length) {
            return obj[doc_js_parser_options_1.CommonOptions.members][doc_js_parser_options_1.CommonOptions.static]
                .filter(function (item) { return item[doc_js_parser_options_1.CommonOptions.kind] === 'member'; })
                .map(function (item) { return _this.parsePropFromStatic(item); });
        }
        else {
            return [];
        }
    };
    GetProperties.prototype.getProps = function (obj) {
        return this.getPropsFromProperties(obj).concat(this.getPropsFromInstance(obj).concat(this.getPropsFromStatic(obj)));
    };
    GetProperties.prototype.getDescription = function (obj) {
        var str = '';
        if (obj[doc_js_parser_options_1.CommonOptions.description] && obj[doc_js_parser_options_1.CommonOptions.description][doc_js_parser_options_1.CommonOptions.children].length > 1) {
            obj[doc_js_parser_options_1.CommonOptions.description][doc_js_parser_options_1.CommonOptions.children]
                .forEach(function (item) {
                console.log(item[doc_js_parser_options_1.CommonOptions.children]);
                item[doc_js_parser_options_1.CommonOptions.children]
                    .forEach(function (item) {
                    str += item[doc_js_parser_options_1.CommonOptions.value] + ' ';
                });
            });
            return str.split('}')[1].trim();
        }
        else {
            return '';
        }
    };
    GetProperties.prototype.getDescriptionProperties = function (obj) {
        var description = '';
        if (obj && obj[doc_js_parser_options_1.CommonOptions.description] && obj[doc_js_parser_options_1.CommonOptions.description][doc_js_parser_options_1.CommonOptions.children].length) {
            obj[doc_js_parser_options_1.CommonOptions.description][doc_js_parser_options_1.CommonOptions.children][0][doc_js_parser_options_1.CommonOptions.children]
                .forEach(function (item) {
                description += item[doc_js_parser_options_1.CommonOptions.value] + ' ';
            });
            return description;
        }
        else {
            return '';
        }
    };
    GetProperties.prototype.getShortDescriptionProperties = function (obj) {
        if (obj && obj[doc_js_parser_options_1.CommonOptions.description]) {
            return obj[doc_js_parser_options_1.CommonOptions.description][doc_js_parser_options_1.CommonOptions.children][0][doc_js_parser_options_1.CommonOptions.children][0][doc_js_parser_options_1.CommonOptions.value].trim();
        }
        else {
            return '';
        }
    };
    GetProperties.prototype.getShortDescriptionInstance = function (obj) {
        if (obj && obj[doc_js_parser_options_1.CommonOptions.description]) {
            return obj[doc_js_parser_options_1.CommonOptions.description][doc_js_parser_options_1.CommonOptions.children][0][doc_js_parser_options_1.CommonOptions.children][0][doc_js_parser_options_1.CommonOptions.value]
                .split('}')[1].trim();
        }
        else {
            return '';
        }
    };
    GetProperties.prototype.getDescriptionStatic = function (obj) {
        if (obj && obj[doc_js_parser_options_1.CommonOptions.tags]) {
            return obj[doc_js_parser_options_1.CommonOptions.tags][0][doc_js_parser_options_1.CommonOptions.description];
        }
        else {
            return '';
        }
    };
    GetProperties.prototype.getTypeProperties = function (obj) {
        if (obj && obj[doc_js_parser_options_1.CommonOptions.type]) {
            return (obj[doc_js_parser_options_1.CommonOptions.type][doc_js_parser_options_1.CommonOptions.name]);
        }
        else {
            return '';
        }
    };
    GetProperties.prototype.getTypeStatic = function (obj) {
        if (obj && obj[doc_js_parser_options_1.CommonOptions.properties]) {
            return obj[doc_js_parser_options_1.CommonOptions.properties][0][doc_js_parser_options_1.CommonOptions.type][doc_js_parser_options_1.CommonOptions.name];
        }
        else {
            return '';
        }
    };
    GetProperties.prototype.getTypeInstance = function (obj) {
        if (obj && obj[doc_js_parser_options_1.CommonOptions.description]) {
            return obj[doc_js_parser_options_1.CommonOptions.description][doc_js_parser_options_1.CommonOptions.children][0][doc_js_parser_options_1.CommonOptions.children][0][doc_js_parser_options_1.CommonOptions.value]
                .split(' ')[0].replace(/[{}]/g, '');
        }
        else {
            return '';
        }
    };
    return GetProperties;
}());
exports.GetProperties = GetProperties;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = __webpack_require__(0);
var doc_js_parser_options_1 = __webpack_require__(1);
var GetStyles = (function () {
    function GetStyles() {
    }
    GetStyles.prototype.getStyles = function (obj) {
        var _this = this;
        if (obj[doc_js_parser_options_1.CommonOptions.tags] && obj[doc_js_parser_options_1.CommonOptions.tags].length) {
            return obj[doc_js_parser_options_1.CommonOptions.tags]
                .filter(function (item) { return item[doc_js_parser_options_1.CommonOptions.title] === 'styles'; })
                .map(function (item) { return _this.parseStyle(item); });
        }
        else
            return [];
    };
    GetStyles.prototype.parseStyle = function (obj) {
        return new model_1.Style({
            shortDescription: this.getShortDescription(obj),
            styles: this.getStylesOfStyle(obj)
        });
    };
    GetStyles.prototype.getShortDescription = function (obj) {
        if (obj[doc_js_parser_options_1.CommonOptions.description]) {
            return obj[doc_js_parser_options_1.CommonOptions.description].split('\n')[0];
        }
        else {
            return '';
        }
    };
    GetStyles.prototype.getStylesOfStyle = function (obj) {
        if (obj[doc_js_parser_options_1.CommonOptions.description]) {
            var arr = obj[doc_js_parser_options_1.CommonOptions.description].split('\n');
            var arrTemp_1 = [];
            arr.splice(0, 1);
            arr.forEach(function (item) {
                var _a = item.split(':'), key = _a[0], value = _a[1];
                // console.log(item.split(':'));
                var styleObj = {};
                // styleObj[key.replace(/[`-]/g, '').trim()] = value.trim();
                if (key) {
                    styleObj['name'] = key.replace(/[`-]/g, '').trim();
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
                arrTemp_1.push(styleObj);
            });
            return arrTemp_1;
        }
        else {
            return [];
        }
    };
    return GetStyles;
}());
exports.GetStyles = GetStyles;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(3);
exports.Common = common_1.Common;
var getExamples_1 = __webpack_require__(5);
exports.GetExamples = getExamples_1.GetExamples;
var getMethods_1 = __webpack_require__(12);
exports.GetMethods = getMethods_1.GetMethods;
var getParams_1 = __webpack_require__(6);
exports.GetParams = getParams_1.GetParams;
var getProperties_1 = __webpack_require__(13);
exports.GetProperties = getProperties_1.GetProperties;
var getStyles_1 = __webpack_require__(14);
exports.GetStyles = getStyles_1.GetStyles;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var doc_js_parser_1 = __webpack_require__(11);
var typedoc_parser_1 = __webpack_require__(29);
var metadata_1 = __webpack_require__(7);
var fs = __webpack_require__(4);
var Path = __webpack_require__(9);
var program = __webpack_require__(30);
(function main() {
    program
        .version('0.0.1')
        .option('-g, --generator <value>', 'Generator:')
        .option('-f, --framework <value>', 'Framework:')
        .option('-i, --input <value>', 'Path to input file:')
        .option('-o, --output <value>', 'Path to output file: ');
    program.on('--help', function () {
        console.log('You have to specify:');
        console.log('- generator (can be 2 types: typedoc, docjs)');
        console.log('- framework (can be 2 types: angular, react)');
        console.log('- pathes to input and output file (output file will be created)');
        console.log('For example: ');
        console.log('prsr -g typedoc -f angular -i input.json -o output.json');
    });
    program.parse(process.argv);
    if (program['generator'] && program['framework'] && program['input'] && program['output']) {
        create(program['generator'], program['framework'], Path.resolve(program['input']), Path.resolve(program['output']));
    }
    else {
        console.log('You entered the wrong data! Use --help for getting information');
    }
})();
function create(generator, framework, inputPath, outputPath) {
    if (generator === 'docjs' && framework === 'react') {
        selectedParser('docjs', inputPath, outputPath);
    }
    else if (generator === 'typedoc' && framework === 'angular') {
        selectedParser('typedoc', inputPath, outputPath);
    }
    else {
        console.log('You entered the wrong data! Use --help for getting information');
    }
}
function selectedParser(parser, inputPath, outputPath) {
    var newdoc = {};
    fs.readFile(inputPath, function (err, data) {
        if (parser === 'docjs') {
            newdoc = new doc_js_parser_1.DocJsParser().parse(JSON.parse(data), new metadata_1.Metadata('javascript', 'docjs', 'react'));
        }
        else if (parser === 'typedoc') {
            newdoc = new typedoc_parser_1.TypedocParser().parse(JSON.parse(data), new metadata_1.Metadata('typescript', 'typedoc', 'angular'));
        }
        var outputObj = JSON.stringify(newdoc, null, 2);
        fs.writeFile(outputPath, outputObj);
    });
}


/***/ }),
/* 17 */
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
/* 18 */
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
/* 19 */
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
/* 20 */
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
/* 21 */
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
/* 22 */
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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Model = (function () {
    function Model(classes, metadata) {
        this.metadata = metadata;
        this.classes = classes;
    }
    return Model;
}());
exports.Model = Model;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = __webpack_require__(0);
var typedoc_parser_options_1 = __webpack_require__(2);
var GetExamples = (function () {
    function GetExamples() {
    }
    GetExamples.prototype.getExamples = function (obj) {
        var _this = this;
        if (obj && this.isHasExamples(obj)) {
            return obj[typedoc_parser_options_1.CommonOptions.comment][typedoc_parser_options_1.CommonOptions.tags]
                .filter(function (item) { return _this.isExample(item); })
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
    GetExamples.prototype.getDescriptionArr = function (example) {
        var outArr = [];
        if (example && example[typedoc_parser_options_1.CommonOptions.text]) {
            var tempArr = example[typedoc_parser_options_1.CommonOptions.text].replace(/\r\n\r\n/g, '\n\n').split(/\n\n/g);
            tempArr.forEach(function (item) {
                if (!/```/g.test(item)) {
                    outArr.push(item);
                }
            });
            return outArr;
            // return tempArr.filter((item: any) => !/```/g.test(item))
        }
        else {
            return [];
        }
    };
    GetExamples.prototype.getDescription = function (example) {
        if (example && this.getDescriptionArr(example).length && this.getDescriptionArr(example)[1]) {
            return this.getDescriptionArr(example)[1];
        }
        else {
            return '';
        }
    };
    GetExamples.prototype.getShortDescription = function (example) {
        if (example && this.getDescriptionArr(example).length && this.getDescriptionArr(example)[0]) {
            return this.getDescriptionArr(example)[0];
        }
        else {
            return '';
        }
    };
    GetExamples.prototype.getCode = function (obj) {
        if (obj && obj[typedoc_parser_options_1.CommonOptions.text]) {
            return obj[typedoc_parser_options_1.CommonOptions.text].split(/```/g)[1];
        }
        else {
            return '';
        }
    };
    GetExamples.prototype.isHasExamples = function (obj) {
        return obj[typedoc_parser_options_1.CommonOptions.comment] && obj[typedoc_parser_options_1.CommonOptions.comment][typedoc_parser_options_1.CommonOptions.tags] && obj[typedoc_parser_options_1.CommonOptions.comment][typedoc_parser_options_1.CommonOptions.tags].length;
    };
    GetExamples.prototype.isExample = function (obj) {
        return obj[typedoc_parser_options_1.CommonOptions.tag] === 'example';
    };
    return GetExamples;
}());
exports.GetExamples = GetExamples;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = __webpack_require__(0);
var typedoc_parser_options_1 = __webpack_require__(2);
var _1 = __webpack_require__(8);
var GetMethods = (function () {
    function GetMethods() {
        this.params = new _1.GetParams();
        this.examples = new _1.GetExamples();
    }
    GetMethods.prototype.getMethods = function (obj) {
        var _this = this;
        if (obj && obj[typedoc_parser_options_1.CommonOptions.children]) {
            return obj[typedoc_parser_options_1.CommonOptions.children]
                .filter(function (item) { return _this.isMethod(item) || _this.isConstructor(item); })
                .map(function (item) { return _this.parseMethod(item); });
        }
        else {
            return [];
        }
    };
    GetMethods.prototype.parseMethod = function (obj) {
        return new model_1.Method({
            examples: this.examples.getExamples(obj),
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
        if (this.isHasDescription(obj)) {
            return obj[typedoc_parser_options_1.CommonOptions.signatures][0][typedoc_parser_options_1.CommonOptions.comment]['text'];
        }
        else {
            return '';
        }
    };
    GetMethods.prototype.getShortDescription = function (obj) {
        if (this.isHasDescription(obj)) {
            return obj[typedoc_parser_options_1.CommonOptions.signatures][0][typedoc_parser_options_1.CommonOptions.comment]['shortText'];
        }
        else {
            return '';
        }
    };
    GetMethods.prototype.getType = function (obj) {
        var returnsArray = [];
        if (obj && obj[typedoc_parser_options_1.CommonOptions.signatures] && obj[typedoc_parser_options_1.CommonOptions.signatures][0][typedoc_parser_options_1.CommonOptions.comment]) {
            if (obj[typedoc_parser_options_1.CommonOptions.signatures][0][typedoc_parser_options_1.CommonOptions.comment][typedoc_parser_options_1.CommonOptions.returns]) {
                returnsArray.push(obj[typedoc_parser_options_1.CommonOptions.signatures][0][typedoc_parser_options_1.CommonOptions.comment][typedoc_parser_options_1.CommonOptions.returns].replace(/\n/g, ''));
            }
            else {
                return ['void'];
            }
            return returnsArray;
        }
        else if (obj && obj[typedoc_parser_options_1.CommonOptions.signatures] && obj[typedoc_parser_options_1.CommonOptions.signatures][0][typedoc_parser_options_1.CommonOptions.type]) {
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
    GetMethods.prototype.isMethod = function (obj) {
        return obj[typedoc_parser_options_1.CommonOptions.primKind] === 'Method';
    };
    GetMethods.prototype.isConstructor = function (obj) {
        return obj[typedoc_parser_options_1.CommonOptions.primKind] === 'Constructor';
    };
    GetMethods.prototype.isHasDescription = function (obj) {
        return obj && obj[typedoc_parser_options_1.CommonOptions.signatures] && obj[typedoc_parser_options_1.CommonOptions.signatures][0][typedoc_parser_options_1.CommonOptions.comment];
    };
    return GetMethods;
}());
exports.GetMethods = GetMethods;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = __webpack_require__(0);
var typedoc_parser_options_1 = __webpack_require__(2);
var GetParams = (function () {
    function GetParams() {
    }
    GetParams.prototype.getParams = function (obj) {
        var _this = this;
        if (this.isHasParams(obj)) {
            return obj[typedoc_parser_options_1.CommonOptions.signatures][0][typedoc_parser_options_1.CommonOptions.parameters]
                .map(function (item) { return _this.parseParam(item); });
        }
        else {
            return [];
        }
    };
    GetParams.prototype.parseParam = function (obj) {
        return new model_1.Param({
            name: obj[typedoc_parser_options_1.CommonOptions.name],
            type: this.getType(obj),
            required: null,
            shortDescription: this.getShortDescription(obj),
            description: this.getDescription(obj)
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
    GetParams.prototype.getDescription = function (obj) {
        if (obj && obj[typedoc_parser_options_1.CommonOptions.comment]) {
            return obj[typedoc_parser_options_1.CommonOptions.comment]['text'];
        }
        else {
            return '';
        }
    };
    GetParams.prototype.getShortDescription = function (obj) {
        if (obj && obj[typedoc_parser_options_1.CommonOptions.comment]) {
            return obj[typedoc_parser_options_1.CommonOptions.comment]['shortText'];
        }
        else {
            return '';
        }
    };
    GetParams.prototype.isHasParams = function (obj) {
        return obj && obj[typedoc_parser_options_1.CommonOptions.signatures] && obj[typedoc_parser_options_1.CommonOptions.signatures][0][typedoc_parser_options_1.CommonOptions.parameters];
    };
    return GetParams;
}());
exports.GetParams = GetParams;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = __webpack_require__(0);
var typedoc_parser_options_1 = __webpack_require__(2);
var GetProperties = (function () {
    function GetProperties() {
    }
    GetProperties.prototype.getProps = function (obj) {
        var _this = this;
        if (obj && obj[typedoc_parser_options_1.CommonOptions.children]) {
            return obj[typedoc_parser_options_1.CommonOptions.children]
                .filter(function (item) {
                if (item[typedoc_parser_options_1.CommonOptions.primKind] === 'Property' || item[typedoc_parser_options_1.CommonOptions.primKind] === 'Accessor') {
                    return item;
                }
            })
                .filter(function (item) { return item[typedoc_parser_options_1.CommonOptions.comment]; })
                .map(function (item) {
                if (item[typedoc_parser_options_1.CommonOptions.decorators]) {
                    if (item[typedoc_parser_options_1.CommonOptions.decorators][0][typedoc_parser_options_1.CommonOptions.name] === 'Input') {
                        return _this.parseInput(item);
                    }
                    else if (item[typedoc_parser_options_1.CommonOptions.decorators][0][typedoc_parser_options_1.CommonOptions.name] === 'Output') {
                        return _this.parseOutput(item);
                    }
                    else {
                        return _this.parseProperty(item);
                    }
                }
                else if (!item[typedoc_parser_options_1.CommonOptions.decorators]) {
                    return _this.parseProperty(item);
                }
            });
        }
        else {
            return [];
        }
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
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = __webpack_require__(0);
var typedoc_parser_options_1 = __webpack_require__(2);
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
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var typedoc_parser_options_1 = __webpack_require__(2);
var model_1 = __webpack_require__(0);
var getters_1 = __webpack_require__(8);
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
    TypedocParser.prototype.parse = function (json, metadata) {
        this.saveJSON(json);
        return new model_1.Model(this.getClasses(this.json), metadata);
    };
    TypedocParser.prototype.getClasses = function (obj) {
        var _this = this;
        this.findAllClasses(obj);
        var tempClasses = [];
        tempClasses = this.classes //TODO issue about return
            .filter(function (item) { return _this.isClass(item) || _this.isInterface(item); })
            .filter(function (item) { return item[typedoc_parser_options_1.CommonOptions.comment]; })
            .map(function (item) {
            if (item[typedoc_parser_options_1.CommonOptions.decorators]) {
                if (_this.isComponent(item)) {
                    return _this.parseClass(item, 'component');
                }
                else if (_this.isService(item)) {
                    return _this.parseClass(item, 'service');
                }
                else if (_this.isDirective(item)) {
                    return _this.parseClass(item, 'directive');
                }
                else if (_this.isNgModule(item)) {
                    return _this.parseClass(item, 'class');
                }
            }
            else {
                if (_this.isClass(item)) {
                    return _this.parseClass(item, 'class');
                }
                else if (_this.isInterface(item)) {
                    return _this.parseClass(item, 'interface');
                }
            }
        });
        return tempClasses;
    };
    TypedocParser.prototype.findAllClasses = function (obj) {
        var _this = this;
        if (obj && obj[typedoc_parser_options_1.CommonOptions.children]) {
            obj[typedoc_parser_options_1.CommonOptions.children].forEach(function (item) {
                if (_this.isClass(item) || _this.isInterface(item)) {
                    _this.classes.push(item);
                }
                else {
                    _this.findAllClasses(item);
                }
            });
        }
    };
    TypedocParser.prototype.parseClass = function (obj, kind) {
        return new model_1.Class({
            kind: kind,
            platform: null,
            examples: this.examples.getExamples(obj),
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
    TypedocParser.prototype.isClass = function (obj) {
        return obj[typedoc_parser_options_1.CommonOptions.primKind] === 'Class';
    };
    TypedocParser.prototype.isInterface = function (obj) {
        return obj[typedoc_parser_options_1.CommonOptions.primKind] === 'Interface';
    };
    TypedocParser.prototype.isComponent = function (obj) {
        return obj[typedoc_parser_options_1.CommonOptions.decorators][0][typedoc_parser_options_1.CommonOptions.name] === 'Component';
    };
    TypedocParser.prototype.isService = function (obj) {
        return obj[typedoc_parser_options_1.CommonOptions.decorators][0][typedoc_parser_options_1.CommonOptions.name] === 'Injectable';
    };
    TypedocParser.prototype.isDirective = function (obj) {
        return obj[typedoc_parser_options_1.CommonOptions.decorators][0][typedoc_parser_options_1.CommonOptions.name] === 'Directive';
    };
    TypedocParser.prototype.isNgModule = function (obj) {
        return obj[typedoc_parser_options_1.CommonOptions.decorators][0][typedoc_parser_options_1.CommonOptions.name] === 'NgModule';
    };
    return TypedocParser;
}());
exports.TypedocParser = TypedocParser;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */

var EventEmitter = __webpack_require__(33).EventEmitter;
var spawn = __webpack_require__(32).spawn;
var readlink = __webpack_require__(31).readlinkSync;
var path = __webpack_require__(9);
var dirname = path.dirname;
var basename = path.basename;
var fs = __webpack_require__(4);

/**
 * Expose the root command.
 */

exports = module.exports = new Command();

/**
 * Expose `Command`.
 */

exports.Command = Command;

/**
 * Expose `Option`.
 */

exports.Option = Option;

/**
 * Initialize a new `Option` with the given `flags` and `description`.
 *
 * @param {String} flags
 * @param {String} description
 * @api public
 */

function Option(flags, description) {
  this.flags = flags;
  this.required = ~flags.indexOf('<');
  this.optional = ~flags.indexOf('[');
  this.bool = !~flags.indexOf('-no-');
  flags = flags.split(/[ ,|]+/);
  if (flags.length > 1 && !/^[[<]/.test(flags[1])) this.short = flags.shift();
  this.long = flags.shift();
  this.description = description || '';
}

/**
 * Return option name.
 *
 * @return {String}
 * @api private
 */

Option.prototype.name = function() {
  return this.long
    .replace('--', '')
    .replace('no-', '');
};

/**
 * Check if `arg` matches the short or long flag.
 *
 * @param {String} arg
 * @return {Boolean}
 * @api private
 */

Option.prototype.is = function(arg) {
  return arg == this.short || arg == this.long;
};

/**
 * Initialize a new `Command`.
 *
 * @param {String} name
 * @api public
 */

function Command(name) {
  this.commands = [];
  this.options = [];
  this._execs = {};
  this._allowUnknownOption = false;
  this._args = [];
  this._name = name || '';
}

/**
 * Inherit from `EventEmitter.prototype`.
 */

Command.prototype.__proto__ = EventEmitter.prototype;

/**
 * Add command `name`.
 *
 * The `.action()` callback is invoked when the
 * command `name` is specified via __ARGV__,
 * and the remaining arguments are applied to the
 * function for access.
 *
 * When the `name` is "*" an un-matched command
 * will be passed as the first arg, followed by
 * the rest of __ARGV__ remaining.
 *
 * Examples:
 *
 *      program
 *        .version('0.0.1')
 *        .option('-C, --chdir <path>', 'change the working directory')
 *        .option('-c, --config <path>', 'set config path. defaults to ./deploy.conf')
 *        .option('-T, --no-tests', 'ignore test hook')
 *
 *      program
 *        .command('setup')
 *        .description('run remote setup commands')
 *        .action(function() {
 *          console.log('setup');
 *        });
 *
 *      program
 *        .command('exec <cmd>')
 *        .description('run the given remote command')
 *        .action(function(cmd) {
 *          console.log('exec "%s"', cmd);
 *        });
 *
 *      program
 *        .command('teardown <dir> [otherDirs...]')
 *        .description('run teardown commands')
 *        .action(function(dir, otherDirs) {
 *          console.log('dir "%s"', dir);
 *          if (otherDirs) {
 *            otherDirs.forEach(function (oDir) {
 *              console.log('dir "%s"', oDir);
 *            });
 *          }
 *        });
 *
 *      program
 *        .command('*')
 *        .description('deploy the given env')
 *        .action(function(env) {
 *          console.log('deploying "%s"', env);
 *        });
 *
 *      program.parse(process.argv);
  *
 * @param {String} name
 * @param {String} [desc] for git-style sub-commands
 * @return {Command} the new command
 * @api public
 */

Command.prototype.command = function(name, desc, opts) {
  opts = opts || {};
  var args = name.split(/ +/);
  var cmd = new Command(args.shift());

  if (desc) {
    cmd.description(desc);
    this.executables = true;
    this._execs[cmd._name] = true;
    if (opts.isDefault) this.defaultExecutable = cmd._name;
  }

  cmd._noHelp = !!opts.noHelp;
  this.commands.push(cmd);
  cmd.parseExpectedArgs(args);
  cmd.parent = this;

  if (desc) return this;
  return cmd;
};

/**
 * Define argument syntax for the top-level command.
 *
 * @api public
 */

Command.prototype.arguments = function (desc) {
  return this.parseExpectedArgs(desc.split(/ +/));
};

/**
 * Add an implicit `help [cmd]` subcommand
 * which invokes `--help` for the given command.
 *
 * @api private
 */

Command.prototype.addImplicitHelpCommand = function() {
  this.command('help [cmd]', 'display help for [cmd]');
};

/**
 * Parse expected `args`.
 *
 * For example `["[type]"]` becomes `[{ required: false, name: 'type' }]`.
 *
 * @param {Array} args
 * @return {Command} for chaining
 * @api public
 */

Command.prototype.parseExpectedArgs = function(args) {
  if (!args.length) return;
  var self = this;
  args.forEach(function(arg) {
    var argDetails = {
      required: false,
      name: '',
      variadic: false
    };

    switch (arg[0]) {
      case '<':
        argDetails.required = true;
        argDetails.name = arg.slice(1, -1);
        break;
      case '[':
        argDetails.name = arg.slice(1, -1);
        break;
    }

    if (argDetails.name.length > 3 && argDetails.name.slice(-3) === '...') {
      argDetails.variadic = true;
      argDetails.name = argDetails.name.slice(0, -3);
    }
    if (argDetails.name) {
      self._args.push(argDetails);
    }
  });
  return this;
};

/**
 * Register callback `fn` for the command.
 *
 * Examples:
 *
 *      program
 *        .command('help')
 *        .description('display verbose help')
 *        .action(function() {
 *           // output help here
 *        });
 *
 * @param {Function} fn
 * @return {Command} for chaining
 * @api public
 */

Command.prototype.action = function(fn) {
  var self = this;
  var listener = function(args, unknown) {
    // Parse any so-far unknown options
    args = args || [];
    unknown = unknown || [];

    var parsed = self.parseOptions(unknown);

    // Output help if necessary
    outputHelpIfNecessary(self, parsed.unknown);

    // If there are still any unknown options, then we simply
    // die, unless someone asked for help, in which case we give it
    // to them, and then we die.
    if (parsed.unknown.length > 0) {
      self.unknownOption(parsed.unknown[0]);
    }

    // Leftover arguments need to be pushed back. Fixes issue #56
    if (parsed.args.length) args = parsed.args.concat(args);

    self._args.forEach(function(arg, i) {
      if (arg.required && null == args[i]) {
        self.missingArgument(arg.name);
      } else if (arg.variadic) {
        if (i !== self._args.length - 1) {
          self.variadicArgNotLast(arg.name);
        }

        args[i] = args.splice(i);
      }
    });

    // Always append ourselves to the end of the arguments,
    // to make sure we match the number of arguments the user
    // expects
    if (self._args.length) {
      args[self._args.length] = self;
    } else {
      args.push(self);
    }

    fn.apply(self, args);
  };
  var parent = this.parent || this;
  var name = parent === this ? '*' : this._name;
  parent.on(name, listener);
  if (this._alias) parent.on(this._alias, listener);
  return this;
};

/**
 * Define option with `flags`, `description` and optional
 * coercion `fn`.
 *
 * The `flags` string should contain both the short and long flags,
 * separated by comma, a pipe or space. The following are all valid
 * all will output this way when `--help` is used.
 *
 *    "-p, --pepper"
 *    "-p|--pepper"
 *    "-p --pepper"
 *
 * Examples:
 *
 *     // simple boolean defaulting to false
 *     program.option('-p, --pepper', 'add pepper');
 *
 *     --pepper
 *     program.pepper
 *     // => Boolean
 *
 *     // simple boolean defaulting to true
 *     program.option('-C, --no-cheese', 'remove cheese');
 *
 *     program.cheese
 *     // => true
 *
 *     --no-cheese
 *     program.cheese
 *     // => false
 *
 *     // required argument
 *     program.option('-C, --chdir <path>', 'change the working directory');
 *
 *     --chdir /tmp
 *     program.chdir
 *     // => "/tmp"
 *
 *     // optional argument
 *     program.option('-c, --cheese [type]', 'add cheese [marble]');
 *
 * @param {String} flags
 * @param {String} description
 * @param {Function|Mixed} fn or default
 * @param {Mixed} defaultValue
 * @return {Command} for chaining
 * @api public
 */

Command.prototype.option = function(flags, description, fn, defaultValue) {
  var self = this
    , option = new Option(flags, description)
    , oname = option.name()
    , name = camelcase(oname);

  // default as 3rd arg
  if (typeof fn != 'function') {
    if (fn instanceof RegExp) {
      var regex = fn;
      fn = function(val, def) {
        var m = regex.exec(val);
        return m ? m[0] : def;
      }
    }
    else {
      defaultValue = fn;
      fn = null;
    }
  }

  // preassign default value only for --no-*, [optional], or <required>
  if (false == option.bool || option.optional || option.required) {
    // when --no-* we make sure default is true
    if (false == option.bool) defaultValue = true;
    // preassign only if we have a default
    if (undefined !== defaultValue) self[name] = defaultValue;
  }

  // register the option
  this.options.push(option);

  // when it's passed assign the value
  // and conditionally invoke the callback
  this.on(oname, function(val) {
    // coercion
    if (null !== val && fn) val = fn(val, undefined === self[name]
      ? defaultValue
      : self[name]);

    // unassigned or bool
    if ('boolean' == typeof self[name] || 'undefined' == typeof self[name]) {
      // if no value, bool true, and we have a default, then use it!
      if (null == val) {
        self[name] = option.bool
          ? defaultValue || true
          : false;
      } else {
        self[name] = val;
      }
    } else if (null !== val) {
      // reassign
      self[name] = val;
    }
  });

  return this;
};

/**
 * Allow unknown options on the command line.
 *
 * @param {Boolean} arg if `true` or omitted, no error will be thrown
 * for unknown options.
 * @api public
 */
Command.prototype.allowUnknownOption = function(arg) {
    this._allowUnknownOption = arguments.length === 0 || arg;
    return this;
};

/**
 * Parse `argv`, settings options and invoking commands when defined.
 *
 * @param {Array} argv
 * @return {Command} for chaining
 * @api public
 */

Command.prototype.parse = function(argv) {
  // implicit help
  if (this.executables) this.addImplicitHelpCommand();

  // store raw args
  this.rawArgs = argv;

  // guess name
  this._name = this._name || basename(argv[1], '.js');

  // github-style sub-commands with no sub-command
  if (this.executables && argv.length < 3 && !this.defaultExecutable) {
    // this user needs help
    argv.push('--help');
  }

  // process argv
  var parsed = this.parseOptions(this.normalize(argv.slice(2)));
  var args = this.args = parsed.args;

  var result = this.parseArgs(this.args, parsed.unknown);

  // executable sub-commands
  var name = result.args[0];
  if (this._execs[name] && typeof this._execs[name] != "function") {
    return this.executeSubCommand(argv, args, parsed.unknown);
  } else if (this.defaultExecutable) {
    // use the default subcommand
    args.unshift(name = this.defaultExecutable);
    return this.executeSubCommand(argv, args, parsed.unknown);
  }

  return result;
};

/**
 * Execute a sub-command executable.
 *
 * @param {Array} argv
 * @param {Array} args
 * @param {Array} unknown
 * @api private
 */

Command.prototype.executeSubCommand = function(argv, args, unknown) {
  args = args.concat(unknown);

  if (!args.length) this.help();
  if ('help' == args[0] && 1 == args.length) this.help();

  // <cmd> --help
  if ('help' == args[0]) {
    args[0] = args[1];
    args[1] = '--help';
  }

  // executable
  var f = argv[1];
  // name of the subcommand, link `pm-install`
  var bin = basename(f, '.js') + '-' + args[0];


  // In case of globally installed, get the base dir where executable
  //  subcommand file should be located at
  var baseDir
    , link = readlink(f);

  // when symbolink is relative path
  if (link !== f && link.charAt(0) !== '/') {
    link = path.join(dirname(f), link)
  }
  baseDir = dirname(link);

  // prefer local `./<bin>` to bin in the $PATH
  var localBin = path.join(baseDir, bin);

  // whether bin file is a js script with explicit `.js` extension
  var isExplicitJS = false;
  if (exists(localBin + '.js')) {
    bin = localBin + '.js';
    isExplicitJS = true;
  } else if (exists(localBin)) {
    bin = localBin;
  }

  args = args.slice(1);

  var proc;
  if (process.platform !== 'win32') {
    if (isExplicitJS) {
      args.unshift(localBin);
      // add executable arguments to spawn
      args = (process.execArgv || []).concat(args);

      proc = spawn('node', args, { stdio: 'inherit', customFds: [0, 1, 2] });
    } else {
      proc = spawn(bin, args, { stdio: 'inherit', customFds: [0, 1, 2] });
    }
  } else {
    args.unshift(localBin);
    proc = spawn(process.execPath, args, { stdio: 'inherit'});
  }

  proc.on('close', process.exit.bind(process));
  proc.on('error', function(err) {
    if (err.code == "ENOENT") {
      console.error('\n  %s(1) does not exist, try --help\n', bin);
    } else if (err.code == "EACCES") {
      console.error('\n  %s(1) not executable. try chmod or run with root\n', bin);
    }
    process.exit(1);
  });

  // Store the reference to the child process
  this.runningCommand = proc;
};

/**
 * Normalize `args`, splitting joined short flags. For example
 * the arg "-abc" is equivalent to "-a -b -c".
 * This also normalizes equal sign and splits "--abc=def" into "--abc def".
 *
 * @param {Array} args
 * @return {Array}
 * @api private
 */

Command.prototype.normalize = function(args) {
  var ret = []
    , arg
    , lastOpt
    , index;

  for (var i = 0, len = args.length; i < len; ++i) {
    arg = args[i];
    if (i > 0) {
      lastOpt = this.optionFor(args[i-1]);
    }

    if (arg === '--') {
      // Honor option terminator
      ret = ret.concat(args.slice(i));
      break;
    } else if (lastOpt && lastOpt.required) {
      ret.push(arg);
    } else if (arg.length > 1 && '-' == arg[0] && '-' != arg[1]) {
      arg.slice(1).split('').forEach(function(c) {
        ret.push('-' + c);
      });
    } else if (/^--/.test(arg) && ~(index = arg.indexOf('='))) {
      ret.push(arg.slice(0, index), arg.slice(index + 1));
    } else {
      ret.push(arg);
    }
  }

  return ret;
};

/**
 * Parse command `args`.
 *
 * When listener(s) are available those
 * callbacks are invoked, otherwise the "*"
 * event is emitted and those actions are invoked.
 *
 * @param {Array} args
 * @return {Command} for chaining
 * @api private
 */

Command.prototype.parseArgs = function(args, unknown) {
  var name;

  if (args.length) {
    name = args[0];
    if (this.listeners(name).length) {
      this.emit(args.shift(), args, unknown);
    } else {
      this.emit('*', args);
    }
  } else {
    outputHelpIfNecessary(this, unknown);

    // If there were no args and we have unknown options,
    // then they are extraneous and we need to error.
    if (unknown.length > 0) {
      this.unknownOption(unknown[0]);
    }
  }

  return this;
};

/**
 * Return an option matching `arg` if any.
 *
 * @param {String} arg
 * @return {Option}
 * @api private
 */

Command.prototype.optionFor = function(arg) {
  for (var i = 0, len = this.options.length; i < len; ++i) {
    if (this.options[i].is(arg)) {
      return this.options[i];
    }
  }
};

/**
 * Parse options from `argv` returning `argv`
 * void of these options.
 *
 * @param {Array} argv
 * @return {Array}
 * @api public
 */

Command.prototype.parseOptions = function(argv) {
  var args = []
    , len = argv.length
    , literal
    , option
    , arg;

  var unknownOptions = [];

  // parse options
  for (var i = 0; i < len; ++i) {
    arg = argv[i];

    // literal args after --
    if ('--' == arg) {
      literal = true;
      continue;
    }

    if (literal) {
      args.push(arg);
      continue;
    }

    // find matching Option
    option = this.optionFor(arg);

    // option is defined
    if (option) {
      // requires arg
      if (option.required) {
        arg = argv[++i];
        if (null == arg) return this.optionMissingArgument(option);
        this.emit(option.name(), arg);
      // optional arg
      } else if (option.optional) {
        arg = argv[i+1];
        if (null == arg || ('-' == arg[0] && '-' != arg)) {
          arg = null;
        } else {
          ++i;
        }
        this.emit(option.name(), arg);
      // bool
      } else {
        this.emit(option.name());
      }
      continue;
    }

    // looks like an option
    if (arg.length > 1 && '-' == arg[0]) {
      unknownOptions.push(arg);

      // If the next argument looks like it might be
      // an argument for this option, we pass it on.
      // If it isn't, then it'll simply be ignored
      if (argv[i+1] && '-' != argv[i+1][0]) {
        unknownOptions.push(argv[++i]);
      }
      continue;
    }

    // arg
    args.push(arg);
  }

  return { args: args, unknown: unknownOptions };
};

/**
 * Return an object containing options as key-value pairs
 *
 * @return {Object}
 * @api public
 */
Command.prototype.opts = function() {
  var result = {}
    , len = this.options.length;

  for (var i = 0 ; i < len; i++) {
    var key = camelcase(this.options[i].name());
    result[key] = key === 'version' ? this._version : this[key];
  }
  return result;
};

/**
 * Argument `name` is missing.
 *
 * @param {String} name
 * @api private
 */

Command.prototype.missingArgument = function(name) {
  console.error();
  console.error("  error: missing required argument `%s'", name);
  console.error();
  process.exit(1);
};

/**
 * `Option` is missing an argument, but received `flag` or nothing.
 *
 * @param {String} option
 * @param {String} flag
 * @api private
 */

Command.prototype.optionMissingArgument = function(option, flag) {
  console.error();
  if (flag) {
    console.error("  error: option `%s' argument missing, got `%s'", option.flags, flag);
  } else {
    console.error("  error: option `%s' argument missing", option.flags);
  }
  console.error();
  process.exit(1);
};

/**
 * Unknown option `flag`.
 *
 * @param {String} flag
 * @api private
 */

Command.prototype.unknownOption = function(flag) {
  if (this._allowUnknownOption) return;
  console.error();
  console.error("  error: unknown option `%s'", flag);
  console.error();
  process.exit(1);
};

/**
 * Variadic argument with `name` is not the last argument as required.
 *
 * @param {String} name
 * @api private
 */

Command.prototype.variadicArgNotLast = function(name) {
  console.error();
  console.error("  error: variadic arguments must be last `%s'", name);
  console.error();
  process.exit(1);
};

/**
 * Set the program version to `str`.
 *
 * This method auto-registers the "-V, --version" flag
 * which will print the version number when passed.
 *
 * @param {String} str
 * @param {String} flags
 * @return {Command} for chaining
 * @api public
 */

Command.prototype.version = function(str, flags) {
  if (0 == arguments.length) return this._version;
  this._version = str;
  flags = flags || '-V, --version';
  this.option(flags, 'output the version number');
  this.on('version', function() {
    process.stdout.write(str + '\n');
    process.exit(0);
  });
  return this;
};

/**
 * Set the description to `str`.
 *
 * @param {String} str
 * @return {String|Command}
 * @api public
 */

Command.prototype.description = function(str) {
  if (0 === arguments.length) return this._description;
  this._description = str;
  return this;
};

/**
 * Set an alias for the command
 *
 * @param {String} alias
 * @return {String|Command}
 * @api public
 */

Command.prototype.alias = function(alias) {
  if (0 == arguments.length) return this._alias;
  this._alias = alias;
  return this;
};

/**
 * Set / get the command usage `str`.
 *
 * @param {String} str
 * @return {String|Command}
 * @api public
 */

Command.prototype.usage = function(str) {
  var args = this._args.map(function(arg) {
    return humanReadableArgName(arg);
  });

  var usage = '[options]'
    + (this.commands.length ? ' [command]' : '')
    + (this._args.length ? ' ' + args.join(' ') : '');

  if (0 == arguments.length) return this._usage || usage;
  this._usage = str;

  return this;
};

/**
 * Get the name of the command
 *
 * @param {String} name
 * @return {String|Command}
 * @api public
 */

Command.prototype.name = function() {
  return this._name;
};

/**
 * Return the largest option length.
 *
 * @return {Number}
 * @api private
 */

Command.prototype.largestOptionLength = function() {
  return this.options.reduce(function(max, option) {
    return Math.max(max, option.flags.length);
  }, 0);
};

/**
 * Return help for options.
 *
 * @return {String}
 * @api private
 */

Command.prototype.optionHelp = function() {
  var width = this.largestOptionLength();

  // Prepend the help information
  return [pad('-h, --help', width) + '  ' + 'output usage information']
      .concat(this.options.map(function(option) {
        return pad(option.flags, width) + '  ' + option.description;
      }))
      .join('\n');
};

/**
 * Return command help documentation.
 *
 * @return {String}
 * @api private
 */

Command.prototype.commandHelp = function() {
  if (!this.commands.length) return '';

  var commands = this.commands.filter(function(cmd) {
    return !cmd._noHelp;
  }).map(function(cmd) {
    var args = cmd._args.map(function(arg) {
      return humanReadableArgName(arg);
    }).join(' ');

    return [
      cmd._name
        + (cmd._alias ? '|' + cmd._alias : '')
        + (cmd.options.length ? ' [options]' : '')
        + ' ' + args
      , cmd.description()
    ];
  });

  var width = commands.reduce(function(max, command) {
    return Math.max(max, command[0].length);
  }, 0);

  return [
    ''
    , '  Commands:'
    , ''
    , commands.map(function(cmd) {
      var desc = cmd[1] ? '  ' + cmd[1] : '';
      return pad(cmd[0], width) + desc;
    }).join('\n').replace(/^/gm, '    ')
    , ''
  ].join('\n');
};

/**
 * Return program help documentation.
 *
 * @return {String}
 * @api private
 */

Command.prototype.helpInformation = function() {
  var desc = [];
  if (this._description) {
    desc = [
      '  ' + this._description
      , ''
    ];
  }

  var cmdName = this._name;
  if (this._alias) {
    cmdName = cmdName + '|' + this._alias;
  }
  var usage = [
    ''
    ,'  Usage: ' + cmdName + ' ' + this.usage()
    , ''
  ];

  var cmds = [];
  var commandHelp = this.commandHelp();
  if (commandHelp) cmds = [commandHelp];

  var options = [
    '  Options:'
    , ''
    , '' + this.optionHelp().replace(/^/gm, '    ')
    , ''
    , ''
  ];

  return usage
    .concat(cmds)
    .concat(desc)
    .concat(options)
    .join('\n');
};

/**
 * Output help information for this command
 *
 * @api public
 */

Command.prototype.outputHelp = function(cb) {
  if (!cb) {
    cb = function(passthru) {
      return passthru;
    }
  }
  process.stdout.write(cb(this.helpInformation()));
  this.emit('--help');
};

/**
 * Output help information and exit.
 *
 * @api public
 */

Command.prototype.help = function(cb) {
  this.outputHelp(cb);
  process.exit();
};

/**
 * Camel-case the given `flag`
 *
 * @param {String} flag
 * @return {String}
 * @api private
 */

function camelcase(flag) {
  return flag.split('-').reduce(function(str, word) {
    return str + word[0].toUpperCase() + word.slice(1);
  });
}

/**
 * Pad `str` to `width`.
 *
 * @param {String} str
 * @param {Number} width
 * @return {String}
 * @api private
 */

function pad(str, width) {
  var len = Math.max(0, width - str.length);
  return str + Array(len + 1).join(' ');
}

/**
 * Output help information if necessary
 *
 * @param {Command} command to output help for
 * @param {Array} array of options to search for -h or --help
 * @api private
 */

function outputHelpIfNecessary(cmd, options) {
  options = options || [];
  for (var i = 0; i < options.length; i++) {
    if (options[i] == '--help' || options[i] == '-h') {
      cmd.outputHelp();
      process.exit(0);
    }
  }
}

/**
 * Takes an argument an returns its human readable equivalent for help usage.
 *
 * @param {Object} arg
 * @return {String}
 * @api private
 */

function humanReadableArgName(arg) {
  var nameOutput = arg.name + (arg.variadic === true ? '...' : '');

  return arg.required
    ? '<' + nameOutput + '>'
    : '[' + nameOutput + ']'
}

// for versions before node v0.8 when there weren't `fs.existsSync`
function exists(file) {
  try {
    if (fs.statSync(file).isFile()) {
      return true;
    }
  } catch (e) {
    return false;
  }
}



/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var fs = __webpack_require__(4)
  , lstat = fs.lstatSync;

exports.readlinkSync = function (p) {
  if (lstat(p).isSymbolicLink()) {
    return fs.readlinkSync(p);
  } else {
    return p;
  }
};




/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(10);


/***/ })
/******/ ]);