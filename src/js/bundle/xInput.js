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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/xInput.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */\r\nmodule.exports = __webpack_amd_options__;\r\n\n/* WEBPACK VAR INJECTION */}.call(this, {}))\n\n//# sourceURL=webpack:///(webpack)/buildin/amd-options.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ }),

/***/ "./src/js/inputHandler.js":
/*!********************************!*\
  !*** ./src/js/inputHandler.js ***!
  \********************************/
/*! exports provided: InputHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"InputHandler\", function() { return InputHandler; });\nclass InputHandler {\n\n    constructor(options) {\n\n        // 默认配置参数\n        const defaults = {\n            // 【必选】表单元素\n            ele: '',\n            // 是否去头尾空格\n            isTrim: true,\n            // 是否限制字符数\n            isMax: true,\n            // 最大字符数\n            max: null,\n            // 是否转换非英文字符\n            isX2En: true,\n\n            onCutOut: () => {},\n            onX2En: () => {},\n            // 删除无法转换字符后回调\n            onRmLast: () => {},\n\n            // 非英文不包含特殊符号\n            pattern: '[^\\x00-\\x9f\\xa1-\\xff\\u0000-\\u009f\\u00a1-\\u00ff\\u0021-\\u002c\\u002e\\u002f\\u003a-\\u0040\\u0043\\u0046\\u005b-\\u0060\\u007b-\\u007d\\u00a1-\\u00ac\\u00ae-\\u0113\\u0116-\\u0122\\u0124-\\u012b\\u012e-\\u014d\\u0150-\\u017e\\u0192\\u01b5\\u01f5\\u0237\\u02c6\\u02c7\\u02d8-\\u02dd\\u0311\\u0391-\\u03a1\\u03a3-\\u03a9\\u03b1-\\u03c9\\u03d1\\u03d2\\u03d5\\u03d6\\u03dc\\u03dd\\u03f0\\u03f1\\u03f5\\u03f6\\u0401-\\u040c\\u040e-\\u044f\\u0451-\\u045c\\u045e\\u045f\\u2010\\u2013\\u2015\\u2016\\u2018-\\u201a\\u201c-\\u201e\\u2020-\\u2022\\u2025\\u2026\\u2030-\\u2035\\u2039\\u203a\\u203e\\u2041\\u2043\\u2044\\u20ac\\u20db\\u20dc\\u2102\\u2105\\u210a-\\u2113\\u2115-\\u211e\\u2122\\u2124\\u2127-\\u2129\\u212c\\u212d\\u212f-\\u2131\\u2133-\\u2138\\u2153-\\u215e\\u2190-\\u219b\\u219d-\\u21a7\\u21a9-\\u21ae\\u21b0-\\u21b3\\u21b5-\\u21b7\\u21ba-\\u21db\\u21dd\\u21e4\\u21e5\\u2200-\\u2205\\u2207-\\u2209\\u220b\\u220c\\u220f-\\u2214\\u2216-\\u2218\\u221a\\u221d-\\u2238\\u223a-\\u2257\\u2259\\u225a\\u225c\\u225f-\\u2262\\u2264-\\u228b\\u228d-\\u229b\\u229d-\\u22a5\\u22a7-\\u22b0\\u22b2-\\u22bb\\u22bd-\\u22db\\u22de-\\u22e3\\u22e6-\\u22f1\\u2305\\u2306\\u2308-\\u2310\\u2312\\u2313\\u2315\\u2316\\u231c-\\u231f\\u2322\\u2323\\u232d\\u232e\\u2336\\u233d\\u233f\\u2423\\u24c8\\u2500\\u2502\\u250c\\u2510\\u2514\\u2518\\u251c\\u2524\\u252c\\u2534\\u253c\\u2550-\\u256c\\u2580\\u2584\\u2588\\u2591-\\u2593\\u25aa\\u25ab\\u25ad\\u25ae\\u25b1\\u25b3-\\u25b5\\u25b8\\u25b9\\u25bd-\\u25bf\\u25c2\\u25c3\\u25ca\\u25cb\\u25ec\\u25ef\\u2605\\u2606\\u260e\\u2640\\u2642\\u2660\\u2663\\u2665\\u2666\\u266a\\u266d-\\u266f\\u2713\\u2717\\u2720\\u2736\\u2758\\u2772\\u2773\\u2935\\u2985\\u2986\\u29bf\\u2a00-\\u2a02\\u2a04\\u2a06\\u2a0c\\u2a0d\\u2a10-\\u2a17\\u2a22-\\u2a27\\u2a29\\u2a2a\\u2a2d-\\u2a31\\u2a33-\\u2a3c\\u2a3f\\u2a40\\u2a42-\\u2a4d\\u2a50\\u2a53-\\u2a58\\u2a5a-\\u2a5d\\u2a5f\\u2a66\\u2a6a\\u2a6d-\\u2a75\\u2a77-\\u2a9a\\u2a9d-\\u2aa2\\u2aa4-\\u2ab0\\u2ab3-\\u2ac8\\u2acb\\u2acc\\u2acf-\\u2adb\\u2ae4\\u2ae6-\\u2ae9\\u2aeb-\\u2af3\\u2afd\\ufb00-\\ufb04]'\n        };\n\n        options = Object.assign(defaults, options);\n        this.ele = options.ele;\n        this.isTrim = options.isTrim;\n        this.isMax = options.isMax;\n        this.max = options.max;\n        this.isX2En = options.isX2En;\n        this.onCutOut = options.onCutOut;\n        this.onX2En = options.onX2En;\n        this.onRmLast = options.onRmLast;\n        this.pattern = options.pattern;\n\n        if (!this.ele) {\n            throw new Error('InputHandler: ele is not found!');\n        }\n        if (typeof this.onCutOut !== 'function') {\n            throw new Error('InputHandler: onCutOut is not function!');\n        }\n        if (typeof this.onX2En !== 'function') {\n            throw new Error('InputHandler: onX2En is not function!');\n        }\n        if (typeof this.onRmLast !== 'function') {\n            throw new Error('InputHandler: onRmLast is not function!');\n        }\n\n        this.init();\n\n    }\n\n    init() {\n        this.$ele = $(this.ele);\n    }\n    // 去头尾空格\n    _trim() {\n        this.value = $.trim(this.value);\n    }\n\n    // 非英文及全角转英文及半角\n    _x2En() {\n        let replaceString = new Array(/｀/g, \"`\", /～/g, \"~\", /！/g, \"!\", /＃/g, \"#\", /＄/g, \"$\", /％/g, \"%\", /（/g, \"(\", /）/g, \")\", /“/g, \"\\\"\", /”/g, \"\\\"\", /；/g, \";\", /：/g, \":\", /，/g, \",\", /。|．/g, \".\", /？/g, \"?\", / /g, \" \", /＇/g, \"'\", /‘/g, \"'\", /’/g, \"'\", /／/g, \"/\", /＂/g, \"\\\"\", /＜/g, \"<\", /＞/g, \">\", /＊/g, \"*\", /＆/g, \"&\", /＠/g, \"@\", /＾/g, \"^\", /＋/g, \"+\", /｜/g, \"|\", /＼/g, \"\\\\\", /．/g, \".\", /＿/g, \"_\", /＝/g, \"=\", /－/g, \"-\", /……/g, \"...\", /１/g, \"1\", /２/g, \"2\", /３/g, \"3\", /４/g, \"4\", /５/g, \"5\", /６/g, \"6\", /７/g, \"7\", /８/g, \"8\", /９/g, \"9\", /０/g, \"0\", /、/g, \",\", /｛/g, \"{\", /｝/g, \"}\", /［/g, \"[\", /］/g, \"]\", /Ａ/g, \"A\", /Ｂ/g, \"B\", /Ｃ/g, \"C\", /Ｄ/g, \"D\", /Ｅ/g, \"E\", /Ｆ/g, \"F\", /Ｇ/g, \"G\", /Ｈ/g, \"H\", /Ｉ/g, \"I\", /Ｊ/g, \"J\", /Ｋ/g, \"K\", /Ｌ/g, \"L\", /Ｍ/g, \"M\", /Ｎ/g, \"N\", /Ｏ/g, \"O\", /Ｐ/g, \"P\", /Ｑ/g, \"Q\", /Ｒ/g, \"R\", /Ｓ/g, \"S\", /Ｔ/g, \"T\", /Ｕ/g, \"U\", /Ｖ/g, \"V\", /Ｗ/g, \"W\", /Ｘ/g, \"X\", /Ｙ/g, \"Y\", /Ｚ/g, \"Z\", /ａ/g, \"a\", /ｂ/g, \"b\", /ｃ/g, \"c\", /ｄ/g, \"d\", /ｅ/g, \"e\", /ｆ/g, \"f\", /ｇ/g, \"g\", /ｈ/g, \"h\", /ｉ/g, \"i\", /ｊ/g, \"j\", /ｋ/g, \"k\", /ｌ/g, \"l\", /ｍ/g, \"m\", /ｎ/g, \"n\", /ｏ/g, \"o\", /ｐ/g, \"p\", /ｑ/g, \"q\", /ｒ/g, \"r\", /ｓ/g, \"s\", /ｔ/g, \"t\", /ｕ/g, \"u\", /ｖ/g, \"v\", /ｗ/g, \"w\", /ｘ/g, \"x\", /ｙ/g, \"y\", /ｚ/g, \"z\", /—/g, \"-\", /–/g, \"-\");\n        for (let i = 0; i < replaceString.length; i = i + 2) {\n            this.value = this.value.replace(replaceString[i], replaceString[i + 1]);\n        }  \n\n        if (new RegExp(this.pattern).test(this.value)) {\n            // 有无法转换的非英文字符\n            this.hasLast = true;\n        }\n        // 转换完成后回调\n        this.onX2En(this);\n    }\n    // 截取\n    _cutOut() {\n        this.value = this.value.substr(0, this.max);\n        // 截取完成后回调\n        this.onCutOut(this);\n    }\n    // 处理文本\n    deal() {\n        this.value = this.$ele.val();\n        if (this.isTrim) {\n            this._trim();\n        }\n        if (this.isMax && this.value.length > parseInt(this.max)) {\n            this._cutOut();   \n        }\n        if (this.isX2En) {\n            this._x2En();        \n        }\n        this.$ele.val(this.value);\n    }\n    // 删除无法转换的非英文字符\n    rmLast() {\n        var reg = new RegExp(this.pattern, 'g');\n        this.value = this.value.replace(reg, '');     \n        this.$ele.val(this.value);\n        this.hasLast = false;\n        this.onRmLast();\n    }\n\n}\n\nInputHandler.use = (options) => {\n    if (!options.ele) {\n        throw new Error('InputHandler: ele is not found!');\n    }\n    \n    $(options.ele).each(function(index, element){\n        let options = Object.assign(options, {'ele': element});\n        new InputHandler(options);\n    })\n}\n\n\n\n\n//# sourceURL=webpack:///./src/js/inputHandler.js?");

/***/ }),

/***/ "./src/js/tip.js":
/*!***********************!*\
  !*** ./src/js/tip.js ***!
  \***********************/
/*! exports provided: Tip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Tip\", function() { return Tip; });\nclass Tip {\n    constructor(options) {\n        const defaults = {\n            // alert confirm\n            type: 'alert',\n            // 提示框文本\n            // ['The system will help you to delete non-English characters. Are you sure to continue?', '系统将帮您删除非英文字符，确定继续操作吗？']\n            tipTxt: '系统将帮您删除非英文字符，确定继续操作吗？',\n            // 提示框确认按钮文本['Confirm', '确定']\n            confirmBtnTxt: '确定',\n            // 提示框取消按钮文本['Cancel', '取消']\n            cancelBtnTxt: '取消',\n            confirmBtn: '.J-confirm-btn',\n            cancelBtn: '.J-cancel-btn',\n            onConfirm: (tip) => {\n                tip.hideTip();\n            },\n            onCancel: (tip) => {\n                tip.hideTip();\n            }\n        };\n\n        options = Object.assign(defaults, options);\n        this.type = options.type;\n        this.tipTxt = options.tipTxt;\n        this.confirmBtnTxt = options.confirmBtnTxt;\n        this.cancelBtnTxt = options.cancelBtnTxt;\n        this.confirmBtn = options.confirmBtn;\n        this.cancelBtn = options.cancelBtn;\n        this.onConfirm = options.onConfirm;\n        this.onCancel = options.onCancel;\n\n        if (typeof this.onConfirm !== 'function') {\n            throw new Error('Tip: onConfirm is not function!');\n        }\n        if (typeof this.onCancel !== 'function') {\n            throw new Error('Tip: onCancel is not function!');\n        }\n\n        this.init();\n    }\n    init() {\n\n        let alertHtml = '' +\n            '<div class=\"m-tip arrow-left limit-tip J-limit-tip\">' +\n            '<div class=\"tip-con\">' +\n            this.tipTxt + '<br>' +\n            '<a href=\"javascript:void(0);\" class=\"confirm-btn J-confirm-btn\">' + this.confirmBtnTxt + '</a>' +\n            '</div>' +\n            '<div class=\"arrow arrow-out\">' +\n            '<span class=\"arrow arrow-in\"></span>' +\n            '</div>' +\n            '</div>';\n\n        let confirmHtml = '' +\n            '<div class=\"m-tip arrow-bottom x2en-tip J-x2en-tip\">' +\n            '<div class=\"tip-con\">' +\n            this.tipTxt + '<br>' +\n            '<a href=\"javascript:void(0);\" class=\"btn btn-main J-confirm-btn\" style=\"margin-right: 8px;margin-top: 10px;\">' + this.confirmBtnTxt + '</a>' +\n            '<a href=\"javascript:void(0);\" class=\"btn J-cancel-btn\" style=\"margin-top: 10px;\">' + this.cancelBtnTxt + '</a>' +\n            '</div>' +\n            '<div class=\"arrow arrow-out J-arrow-out\">' +\n            '<span class=\"arrow arrow-in\"></span>' +\n            '</div>' +\n            '</div>';\n\n        if (this.type === 'alert') {\n            this.tipHtml = alertHtml;\n        } else {\n            this.tipHtml = confirmHtml;\n        }\n        this.$tip = $(this.tipHtml);\n        this.$confirmBtn = this.$tip.find(this.confirmBtn);\n        this.$cancelBtn = this.$tip.find(this.cancelBtn);\n\n        this._bind();\n    }\n    _bind() {\n        this.$confirmBtn.on('click', () => {\n            this.onConfirm(this);\n        })\n        this.$cancelBtn.on('click', () => {\n            this.onCancel(this);\n        })\n    }\n    showTip() {\n        this.$tip.show();\n    }\n    hideTip() {\n        this.$tip.hide();\n    }\n}\n\n\n\n\n//# sourceURL=webpack:///./src/js/tip.js?");

/***/ }),

/***/ "./src/js/xInput.js":
/*!**************************!*\
  !*** ./src/js/xInput.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _tip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tip */ \"./src/js/tip.js\");\n/* harmony import */ var _inputHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inputHandler */ \"./src/js/inputHandler.js\");\n\n\n\nclass XInput {\n    constructor(options) {\n        const defaults = {\n            // 【必选】表单元素\n            ele: '',\n            // 是否去头尾空格\n            isTrim: true,\n            // 是否限制字符数\n            isMax: true,\n            // 最大字数\n            maxlength: null,\n            // 是否转换非英文字符\n            isX2En: true,\n\n            // 提示自动消失延迟时间\n            delay: 5000,\n\n            // 自动定位提示框\n            autoPosition: true,\n\n            // alert/ confirm\n            type: 'alert',\n            // 提示框文本\n            tipTxtMax: '您粘贴的内容已超过<span class=\"J-max\"></span>个字符，超出部分已被系统自动删除，请检查。',\n            confirmBtnTxtMax: '我知道了',\n            onConfirmMax: (tip) => {\n                tip.hideTip();\n            },\n\n            // ['The system will help you to delete non-English characters. Are you sure to continue?', '系统将帮您删除非英文字符，确定继续操作吗？']\n            tipTxtX2En: '系统将帮您删除非英文字符，确定继续操作吗？',\n            // 提示框确认按钮文本['Confirm', '确定']\n            confirmBtnTxtX2En: '确定',\n            // 提示框取消按钮文本['Cancel', '取消']\n            cancelBtnTxtX2En: '取消',\n            onConfirmX2En: (tip) => {\n                tip.hideTip();\n            },\n            onCancelX2En: (tip) => {\n                tip.hideTip();\n            },\n\n            confirmBtn: '.J-confirm-btn',\n            cancelBtn: '.J-cancel-btn'\n\n        };\n\n        options = Object.assign(defaults, options);\n        this.ele = options.ele;\n        this.maxlength = options.maxlength;\n        this.delay = options.delay;\n\n        this.autoPosition = options.autoPosition;\n\n        this.isMax = options.isMax;\n        this.isX2En = options.isX2En;\n\n        this.confirmBtn = options.confirmBtn;\n        this.cancelBtn = options.cancelBtn;\n\n\n        this.type = options.type;\n\n        this.tipTxtMax = options.tipTxtMax;\n        this.confirmBtnTxtMax = options.confirmBtnTxtMax;\n        this.onConfirmMax = options.onConfirmMax;\n\n        this.tipTxtX2En = options.tipTxtX2En;\n        this.confirmBtnTxtX2En = options.confirmBtnTxtX2En;\n        this.cancelBtnTxtX2En = options.cancelBtnTxtX2En;\n        this.onConfirmX2En = options.onConfirmX2En;\n        this.onCancelX2En = options.onCancelX2En;\n\n\n        if (!this.ele) {\n            throw new Error('XInput: ele is not found!');\n        }\n        this.init();\n    }\n    init() {\n        this.$ele = $(this.ele);\n        if (this.isMax) {\n            this._getMax();\n        }\n\n        this.inputHandler = new _inputHandler__WEBPACK_IMPORTED_MODULE_1__[\"InputHandler\"]({\n            'ele': this.ele,\n            'isMax': this.isMax,\n            'max': this.max,\n            'isX2En': this.isX2En,\n            'onCutOut': () => {\n                this._cutOut();\n            },\n            'onX2En': () => {\n                this._x2En();\n            },\n            'onRmLast': () => {\n                this._rmLast();\n            }\n        });\n\n        this._bind();\n    }\n    _bind() {\n        // 黏贴自动截断及非英文转换\n        this.$ele.on('paste', () => {\n            // 删除maxlength属性\n            if (this.isMax && this.$ele.attr('maxlength')) {\n                this.hasMaxlength = true;\n                this.$ele.removeAttr('maxlength');\n            }\n            setTimeout(() => {\n                this.$ele.blur();\n            });\n\n        });\n        // 失焦非英文转换\n        this.$ele.on('blur', () => {\n            this.inputHandler.deal();\n        })\n    }\n    // 获得最大字符数\n    _getMax() {\n        this.max = this.maxlength ? this.maxlength : this.$ele.attr('maxlength');\n        if (!this.max) {\n            throw new Error('XInput: maxlength is not found!')\n        }\n    }\n\n    _cutOut() {\n        if (this.hasMaxlength) {\n            this.$ele.attr('maxlength', this.max);\n        }\n\n        this.maxTip = new _tip__WEBPACK_IMPORTED_MODULE_0__[\"Tip\"]({\n            type: 'alert',\n            tipTxt: this.tipTxtMax,\n            confirmBtnTxt: this.confirmBtnTxtMax,\n            onConfirm: (tip) => {\n                this.onConfirmMax(tip);\n            }\n        });\n        let $tip = this.maxTip.$tip;\n\n        $tip.find('.J-max').text(this.max);\n\n        this.$ele.parent().append($tip);\n        // 提示框定位\n        if (this.autoPosition) {\n            var left = this.$ele.position().left,\n                top = this.$ele.position().top,\n                width = this.$ele.outerWidth(),\n                height = this.$ele.outerHeight();\n\n            if ($(window).width() > 768) {\n                $tip.css({\n                    'left': left + width + 10,\n                    'top': top\n                });\n            } else {\n                $tip.removeClass('arrow-left').addClass('arrow-bottom');\n                $tip.css({\n                    'position': 'absolute',\n                    'top': -height - 2,\n                    'width': '100%',\n                    'margin': 0,\n                    'box-sizing': 'border-box'\n                });\n            }\n        }\n\n\n        this.maxTip.showTip();\n        setTimeout(() => {\n            this.maxTip.hideTip();\n        }, this.delay);\n\n    }\n    _x2En() {\n\n        if (this.inputHandler.hasLast) {\n\n            // console.log('存在无法转换的非英文字符，直接删除方法：rmLast');\n            let wrapforVal = this.$ele.attr('name') ? this.$ele.attr('name') : this.$ele.attr('id');\n            this.$feedbackBlock = $('.feedback-block[wrapfor=' + wrapforVal + ']');\n\n            if (this.$feedbackBlock.length < 1) { //该表单元素对应的feedback-block元素不存在\n                let feedbackHtml = '<div class=\"feedback-block x2en-feedback-block\" wrapfor=\"' + wrapforVal + '\"><label for=\"' + wrapforVal + '\" generated=\"true\" class=\"error\">不支持输入非英文字符。<a href=\"javascript:void(0)\" class=\"J-show-btn\">没找到？</a></label></div>';\n                this.$ele.parent().append(feedbackHtml);\n                this.$feedbackBlock = this.$ele.parent().find('.feedback-block[wrapfor=' + wrapforVal + ']');\n            }\n\n            this.$feedbackBlock.show();\n            this.$feedbackBlock.find('.J-show-btn').on('click', () => {\n\n                this.x2EnTip = new _tip__WEBPACK_IMPORTED_MODULE_0__[\"Tip\"]({\n                    type: 'confirm',\n                    tipTxt: this.tipTxtX2En,\n                    onConfirm: (tip) => {\n                        this.inputHandler.rmLast();\n                        this.onConfirmX2En(tip);\n                    },\n                    onCancel: (tip) => {\n                        this.onCancelX2En(tip);\n                    }\n                });\n                let $tip = this.x2EnTip.$tip;\n                this.$feedbackBlock.append($tip);\n                // 提示框定位\n                if (this.autoPosition) {\n                    this.$feedbackBlock.css('position', 'relative');\n                    var $this = this.$feedbackBlock.find('.J-show-btn'),\n                        left = $this.position().left,\n                        width = $this.outerWidth();\n\n                    if ($(window).width() > 768) {\n                        $tip.find('.J-arrow-out').css({\n                            'left': width / 2 - 8\n                        });\n                        $tip.css({\n                            'left': left,\n                            'top': 'auto',\n                            'bottom': '25px'\n                        });\n                    } else {\n                        $tip.find('.J-arrow-out').css({\n                            'left': left + width / 2 - 8\n                        });\n                        $tip.css({\n                            'left': 'auto',\n                            'top': 'auto',\n                            'bottom': '25px'\n                        });\n                    }\n                }\n\n                this.x2EnTip.showTip();\n            })\n        }\n    }\n    _rmLast() {\n        this.$feedbackBlock.hide();\n    }\n\n}\n\nXInput.use = (options) => {\n    if (!options.ele) {\n        throw new Error('XInput: ele is not found!');\n    }\n\n    Array.prototype.slice.call(document.querySelectorAll(options.ele)).forEach(element => {\n        options = Object.assign({}, options, {\n            'ele': element\n        });\n        new XInput(options);\n    });\n}\n\nif (typeof module !== \"undefined\" && module.exports) {\n    module.exports = XInput;\n} else if (typeof define === \"function\" && __webpack_require__(/*! !webpack amd options */ \"./node_modules/webpack/buildin/amd-options.js\")) {\n    define(function () {\n        return XInput;\n    });\n} else {\n    (function(){ return this || (0,eval)('this'); }()).XInput = XInput;\n}\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/js/xInput.js?");

/***/ })

/******/ });