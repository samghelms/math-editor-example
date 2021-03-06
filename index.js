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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pdftex = __webpack_require__(1);

var _pdftex2 = _interopRequireDefault(_pdftex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var delta2tex = __webpack_require__(2);
var Formula = Quill.import('formats/formula');

var FormulaAligned = function (_Formula) {
  _inherits(FormulaAligned, _Formula);

  function FormulaAligned() {
    _classCallCheck(this, FormulaAligned);

    return _possibleConstructorReturn(this, (FormulaAligned.__proto__ || Object.getPrototypeOf(FormulaAligned)).apply(this, arguments));
  }

  _createClass(FormulaAligned, [{
    key: 'preprocessor',
    value: function preprocessor(value) {
      console.log("\\begin{aligned}" + value + "\\end{aligned}");
      return "\\begin{aligned}" + value + "\\end{aligned}";
    }
  }]);

  return FormulaAligned;
}(Formula);

FormulaAligned.blotName = 'formula-aligned';
FormulaAligned.className = 'ql-formula-aligned';
FormulaAligned.tagName = 'SPAN';

Quill.register('formats/formula-aligned', FormulaAligned, true);

var bindings = {

  // There is no default binding named 'custom'
  // so this will be added without overwriting anything
  math: {
    key: 192,
    handler: function handler(range, context) {
      // console.log("math")
      var index = range.index + range.length;
      var value = ' ';

      quill.insertEmbed(index, "formula", value, "user");
      quill.insertText(index + 1, " ", "user");

      var _quill$getLeaf = quill.getLeaf(index + 1),
          _quill$getLeaf2 = _slicedToArray(_quill$getLeaf, 1),
          eq = _quill$getLeaf2[0];

      eq.enter([index, "initial"]);
    }
  }
};

var toolbarOptions = [['bold', 'italic', 'underline', 'strike', 'link'], // toggled buttons
['blockquote', 'code-block'], ['video', 'formula', 'image'], [{ 'header': 1 }, { 'header': 2 }], // custom button values
[{ 'list': 'ordered' }, { 'list': 'bullet' }], [{ 'script': 'sub' }, { 'script': 'super' }], // superscript/subscript
[{ 'indent': '-1' }, { 'indent': '+1' }], // outdent/indent
[{ 'direction': 'rtl' }], // text direction

[{ 'size': ['small', false, 'large', 'huge'] }], // custom dropdown
[{ 'header': [1, 2, 3, 4, 5, 6, false] }], [{ 'font': [] }], [{ 'align': [] }], ['clean'], ['mathblock'], ['export'] // remove formatting button
];

var quill = new Quill('#snow-container', {
  placeholder: 'Compose an epic...',
  theme: 'snow',
  modules: {
    keyboard: {
      bindings: bindings
    },
    toolbar: toolbarOptions
  }
});

window.quill = quill;

var toolbar = quill.getModule('toolbar');
toolbar.addHandler('mathblock', function () {
  return console.log("toolbar");
});
var customButton = document.querySelector('.ql-mathblock');

customButton.addEventListener('click', function () {
  var range = quill.getSelection(true);
  // for some reason, insert embed doesn't like empty strings
  var value = ' ';
  if (range != null) {
    var index = range.index + range.length;
    quill.insertEmbed(index, "formula-aligned", value, "user");
    quill.insertText(index + 1, value, "user");

    var _quill$getLeaf3 = quill.getLeaf(index + 1),
        _quill$getLeaf4 = _slicedToArray(_quill$getLeaf3, 1),
        eq = _quill$getLeaf4[0];

    eq.enter([index, "initial"]);
  }
});

// function download(filename, text) {
//     var element = document.createElement('a');
//     element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
//     element.setAttribute('download', filename);

//     element.style.display = 'none';
//     document.body.appendChild(element);

//     element.click();

//     document.body.removeChild(element);
// }

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', text);
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

function exportEditor() {
  var delta = quill.getContents();
  console.log(delta);
  var tex = delta2tex.parse(delta);

  var pdftex = new _pdftex2.default("pdftex-worker.js");
  // var latex_code = "" + 
  //   "\\documentclass{article}" + 
  //   "\\begin{document}" + 
  //   "\\LaTeX is great!" + 
  //   "$E = mc^2$" + 
  //   "\\end{document}"; 

  pdftex.compile(tex).then(function (pdf) {
    download("example.pdf", pdf);
  });

  // download("example.tex", tex)
}

toolbar.addHandler('export', function () {
  return "test";
});

var customButton2 = document.querySelector('.ql-export');

customButton2.addEventListener('click', function () {
  var delta = quill.getContents();
  exportEditor();
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var PDFTeX = function PDFTeX(opt_workerPath) {
  if (!opt_workerPath) {
    opt_workerPath = 'pdftex-worker.js';
  }
  var worker = new Worker(opt_workerPath);
  var self = this;
  var initialized = false;

  self.on_stdout = function (msg) {
    console.log(msg);
  };

  self.on_stderr = function (msg) {
    console.log(msg);
  };

  worker.onmessage = function (ev) {
    var data = JSON.parse(ev.data);
    var msg_id;

    if (!('command' in data)) console.log("missing command!", data);
    switch (data['command']) {
      case 'ready':
        onready.done(true);
        break;
      case 'stdout':
      case 'stderr':
        self['on_' + data['command']](data['contents']);
        break;
      default:
        //console.debug('< received', data);
        msg_id = data['msg_id'];
        if ('msg_id' in data && msg_id in promises) {
          promises[msg_id].done(data['result']);
        } else console.warn('Unknown worker message ' + msg_id + '!');
    }
  };

  var onready = new promise.Promise();
  var promises = [];
  var chunkSize = undefined;

  var sendCommand = function sendCommand(cmd) {
    var p = new promise.Promise();
    var msg_id = promises.push(p) - 1;

    onready.then(function () {
      cmd['msg_id'] = msg_id;
      //console.debug('> sending', cmd);
      worker.postMessage(JSON.stringify(cmd));
    });

    return p;
  };

  var determineChunkSize = function determineChunkSize() {
    var size = 1024;
    var max = undefined;
    var min = undefined;
    var delta = size;
    var success = true;
    var buf;

    while (Math.abs(delta) > 100) {
      if (success) {
        min = size;
        if (typeof max === 'undefined') delta = size;else delta = (max - size) / 2;
      } else {
        max = size;
        if (typeof min === 'undefined') delta = -1 * size / 2;else delta = -1 * (size - min) / 2;
      }
      size += delta;

      success = true;
      try {
        buf = String.fromCharCode.apply(null, new Uint8Array(size));
        sendCommand({
          command: 'test',
          data: buf
        });
      } catch (e) {
        success = false;
      }
    }

    return size;
  };

  var createCommand = function createCommand(command) {
    self[command] = function () {
      var args = [].concat.apply([], arguments);

      return sendCommand({
        'command': command,
        'arguments': args
      });
    };
  };
  createCommand('FS_createDataFile'); // parentPath, filename, data, canRead, canWrite
  createCommand('FS_readFile'); // filename
  createCommand('FS_unlink'); // filename
  createCommand('FS_createFolder'); // parent, name, canRead, canWrite
  createCommand('FS_createPath'); // parent, name, canRead, canWrite
  createCommand('FS_createLazyFile'); // parent, name, canRead, canWrite
  createCommand('FS_createLazyFilesFromList'); // parent, list, parent_url, canRead, canWrite
  createCommand('set_TOTAL_MEMORY'); // size

  var curry = function curry(obj, fn, args) {
    return function () {
      return obj[fn].apply(obj, args);
    };
  };

  self.compile = function (source_code) {
    var p = new promise.Promise();

    self.compileRaw(source_code).then(function (binary_pdf) {
      if (binary_pdf === false) return p.done(false);

      var pdf_dataurl = 'data:application/pdf;charset=binary;base64,' + window.btoa(binary_pdf);

      return p.done(pdf_dataurl);
    });
    return p;
  };

  self.compileRaw = function (source_code) {
    if (typeof chunkSize === "undefined") chunkSize = determineChunkSize();

    var commands;
    if (initialized) commands = [curry(self, 'FS_unlink', ['/input.tex'])];else commands = [curry(self, 'FS_createDataFile', ['/', 'input.tex', source_code, true, true]), curry(self, 'FS_createLazyFilesFromList', ['/', 'texlive.lst', './texlive', true, true])];

    var sendCompile = function sendCompile() {
      initialized = true;
      return sendCommand({
        'command': 'run',
        'arguments': ['-interaction=nonstopmode', '-output-format', 'pdf', 'input.tex']
        //        'arguments': ['-debug-format', '-output-format', 'pdf', '&latex', 'input.tex'],
      });
    };

    var getPDF = function getPDF() {
      console.log(arguments);
      return self.FS_readFile('/input.pdf');
    };

    return promise.chain(commands).then(sendCompile).then(getPDF);
  };
};

exports.default = PDFTeX;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function webpackUniversalModuleDefinition(root, factory) {
	if (( false ? 'undefined' : _typeof2(exports)) === 'object' && ( false ? 'undefined' : _typeof2(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof2(exports)) === 'object') exports["delta2tex"] = factory();else root["delta2tex"] = factory();
})(typeof self !== 'undefined' ? self : undefined, function () {
	return (/******/function (modules) {
			// webpackBootstrap
			/******/ // The module cache
			/******/var installedModules = {};
			/******/
			/******/ // The require function
			/******/function __webpack_require__(moduleId) {
				/******/
				/******/ // Check if module is in cache
				/******/if (installedModules[moduleId]) {
					/******/return installedModules[moduleId].exports;
					/******/
				}
				/******/ // Create a new module (and put it into the cache)
				/******/var module = installedModules[moduleId] = {
					/******/i: moduleId,
					/******/l: false,
					/******/exports: {}
					/******/ };
				/******/
				/******/ // Execute the module function
				/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
				/******/
				/******/ // Flag the module as loaded
				/******/module.l = true;
				/******/
				/******/ // Return the exports of the module
				/******/return module.exports;
				/******/
			}
			/******/
			/******/
			/******/ // expose the modules object (__webpack_modules__)
			/******/__webpack_require__.m = modules;
			/******/
			/******/ // expose the module cache
			/******/__webpack_require__.c = installedModules;
			/******/
			/******/ // define getter function for harmony exports
			/******/__webpack_require__.d = function (exports, name, getter) {
				/******/if (!__webpack_require__.o(exports, name)) {
					/******/Object.defineProperty(exports, name, {
						/******/configurable: false,
						/******/enumerable: true,
						/******/get: getter
						/******/ });
					/******/
				}
				/******/
			};
			/******/
			/******/ // getDefaultExport function for compatibility with non-harmony modules
			/******/__webpack_require__.n = function (module) {
				/******/var getter = module && module.__esModule ?
				/******/function getDefault() {
					return module['default'];
				} :
				/******/function getModuleExports() {
					return module;
				};
				/******/__webpack_require__.d(getter, 'a', getter);
				/******/return getter;
				/******/
			};
			/******/
			/******/ // Object.prototype.hasOwnProperty.call
			/******/__webpack_require__.o = function (object, property) {
				return Object.prototype.hasOwnProperty.call(object, property);
			};
			/******/
			/******/ // __webpack_public_path__
			/******/__webpack_require__.p = "";
			/******/
			/******/ // Load entry module and return exports
			/******/return __webpack_require__(__webpack_require__.s = 2);
			/******/
		}(
		/************************************************************************/
		/******/[
		/* 0 */
		/***/function (module, exports, __webpack_require__) {

			"use strict";

			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			var actions = {
				SHIFT: "SHIFT",
				COMBINE: "COMBINE",
				FINAL: "FINAL",
				CREATE_BLOCK: "CREATE_BLOCK"
			};

			exports.default = actions;

			/***/
		},
		/* 1 */
		/***/function (module, exports, __webpack_require__) {

			"use strict";

			Object.defineProperty(exports, "__esModule", {
				value: true
			});

			var _slicedToArray = function () {
				function sliceIterator(arr, i) {
					var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
						for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
							_arr.push(_s.value);if (i && _arr.length === i) break;
						}
					} catch (err) {
						_d = true;_e = err;
					} finally {
						try {
							if (!_n && _i["return"]) _i["return"]();
						} finally {
							if (_d) throw _e;
						}
					}return _arr;
				}return function (arr, i) {
					if (Array.isArray(arr)) {
						return arr;
					} else if (Symbol.iterator in Object(arr)) {
						return sliceIterator(arr, i);
					} else {
						throw new TypeError("Invalid attempt to destructure non-iterable instance");
					}
				};
			}();

			var _createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			}();

			function _toConsumableArray(arr) {
				if (Array.isArray(arr)) {
					for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
						arr2[i] = arr[i];
					}return arr2;
				} else {
					return Array.from(arr);
				}
			}

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}

			// import {attributeTypes} from './types'
			var Formatter = exports.Formatter = function () {
				/*
    TODO: add a method to make sure identical functions don't get added. This
    method will also allow the ability to check whether or not two sections can be combined 
    later on.
    */
				function Formatter() {
					var fnList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [["none", [function (el, argss) {
						return el;
					}, "none"]]];

					_classCallCheck(this, Formatter);

					this.fns = {};
					var _iteratorNormalCompletion = true;
					var _didIteratorError = false;
					var _iteratorError = undefined;

					try {
						for (var _iterator = fnList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
							var el = _step.value;

							var _el = _slicedToArray(el, 2),
							    name = _el[0],
							    fmtrArgs = _el[1];

							var _fmtrArgs = _slicedToArray(fmtrArgs, 2),
							    fmtr = _fmtrArgs[0],
							    args = _fmtrArgs[1];

							this.fns[name] = [fmtr, args];
						}
					} catch (err) {
						_didIteratorError = true;
						_iteratorError = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion && _iterator.return) {
								_iterator.return();
							}
						} finally {
							if (_didIteratorError) {
								throw _iteratorError;
							}
						}
					}
				}

				_createClass(Formatter, [{
					key: "merge",
					value: function merge(otherFmtr) {
						var fns = [].concat(_toConsumableArray(Object.entries(this.fns)), _toConsumableArray(Object.entries(otherFmtr.fns)));
						return new Formatter(fns);
					}
				}, {
					key: "add",
					value: function add(fn) {
						this.fns = [].concat(_toConsumableArray(this.fns), [fn]);
					}
				}, {
					key: "formatInline",
					value: function formatInline(text) {
						var _iteratorNormalCompletion2 = true;
						var _didIteratorError2 = false;
						var _iteratorError2 = undefined;

						try {
							for (var _iterator2 = Object.keys(this.fns)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
								var name = _step2.value;

								var _fns$name = _slicedToArray(this.fns[name], 2),
								    fn = _fns$name[0],
								    args = _fns$name[1];

								text = fn(text, args);
							}
						} catch (err) {
							_didIteratorError2 = true;
							_iteratorError2 = err;
						} finally {
							try {
								if (!_iteratorNormalCompletion2 && _iterator2.return) {
									_iterator2.return();
								}
							} finally {
								if (_didIteratorError2) {
									throw _iteratorError2;
								}
							}
						}

						return text;
					}
				}, {
					key: "formatBlock",
					value: function formatBlock(text, pos) {
						var _iteratorNormalCompletion3 = true;
						var _didIteratorError3 = false;
						var _iteratorError3 = undefined;

						try {
							for (var _iterator3 = Object.keys(this.fns)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
								var name = _step3.value;

								var _fns$name2 = _slicedToArray(this.fns[name], 2),
								    fn = _fns$name2[0],
								    args = _fns$name2[1];

								text = fn(text, args, pos);
							}
						} catch (err) {
							_didIteratorError3 = true;
							_iteratorError3 = err;
						} finally {
							try {
								if (!_iteratorNormalCompletion3 && _iterator3.return) {
									_iterator3.return();
								}
							} finally {
								if (_didIteratorError3) {
									throw _iteratorError3;
								}
							}
						}

						return text;
					}
				}, {
					key: "subtract",
					value: function subtract(otherFmtr) {
						/*
      Takes formatters in the other formatter out of this one.
      */
						var filtered = Object.entries(this.fns).filter(function (el) {
							var _el2 = _slicedToArray(el, 2),
							    k = _el2[0],
							    v = _el2[1];

							return !otherFmtr.fns.hasOwnProperty(k);
						});
						var newFmtr = new Formatter(filtered);
						return newFmtr;
					}
				}]);

				return Formatter;
			}();

			var codeBlockFormatter = function codeBlockFormatter(text, args, pos) {
				console.log("code block");
				if (pos === "start") {
					console.log("start called");
					return "\\begin{lstlisting}\n" + text;
				} else {
					return text + " \n\\end{lstlisting}";
				}
			};

			var scriptFormatter = function scriptFormatter(text, args) {
				if (args === "super") {
					return "\\textsuperscript{" + text + "}";
				} else if (args === "sub") {
					return "\\textsubscript{" + text + "}";
				} else {
					throw new Error("unknown argument " + args + " to scriptFormatter");
				}
			};

			var headerFormatter = function headerFormatter(text, args) {
				return "HEADER" + text + "HEADER";
			};

			var extractVals = function extractVals(val) {
				var entries = Object.entries(val);
				if (entries.length !== 1) {
					throw new Error("invalid val passed to Formatter");
				}
				return entries[0];
			};

			var formatters = {
				formula: function formula(value) {
					return "$$ " + value + " $$";
				},
				'code-block': function codeBlock(value) {
					var _extractVals = extractVals(value),
					    _extractVals2 = _slicedToArray(_extractVals, 2),
					    name = _extractVals2[0],
					    args = _extractVals2[1];

					return new Formatter([[name, [codeBlockFormatter, args]]]);
				},
				script: function script(value) {
					var _extractVals3 = extractVals(value),
					    _extractVals4 = _slicedToArray(_extractVals3, 2),
					    name = _extractVals4[0],
					    args = _extractVals4[1];

					return new Formatter([[name, [scriptFormatter, args]]]);
				},
				header: function header(value) {
					var _extractVals5 = extractVals(value),
					    _extractVals6 = _slicedToArray(_extractVals5, 2),
					    name = _extractVals6[0],
					    args = _extractVals6[1];

					return new Formatter([[name, [headerFormatter, args]]]);
				}

			};

			var formatter = exports.formatter = function formatter(key) {
				if (formatters.hasOwnProperty(key)) {
					return formatters[key];
				} else {
					throw "cannot format type " + key;
				}
			};

			var newlineFormatters = {
				/*
    Define special rules for spacing within blocks here
    */
				'_default-space-provider': function _defaultSpaceProvider(newlineNumber) {
					return "\n\\vspace{" + newlineNumber + "mm}\n";
				},
				'code-block': function codeBlock(newlineNumber) {
					return Array.from({ length: newlineNumber }, function (x, i) {
						return "\n";
					}).join("");
				}

			};

			var getSpaceFormatting = exports.getSpaceFormatting = function getSpaceFormatting(keys) {
				/*
    TODO: update this for nested space formatters (probably not going to be an issue)
    */
				var key = void 0;
				var keysFiltered = keys.filter(function (k) {
					return newlineFormatters.hasOwnProperty(k);
				});
				if (keysFiltered.length > 1) {
					throw new Error("error, have not implemented nested space formatters for getSpaceFormatting() yet");
				} else if (keysFiltered.length === 1) {
					key = keys[0];
				} else {
					key = "_default-space-provider";
				}
				if (newlineFormatters.hasOwnProperty(key)) {
					return newlineFormatters[key];
				} else {
					throw new Error("error, with getSpaceFormatting(), check newlineFormatters and program logic");
				}
			};

			/***/
		},
		/* 2 */
		/***/function (module, exports, __webpack_require__) {

			"use strict";

			var _slicedToArray = function () {
				function sliceIterator(arr, i) {
					var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
						for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
							_arr.push(_s.value);if (i && _arr.length === i) break;
						}
					} catch (err) {
						_d = true;_e = err;
					} finally {
						try {
							if (!_n && _i["return"]) _i["return"]();
						} finally {
							if (_d) throw _e;
						}
					}return _arr;
				}return function (arr, i) {
					if (Array.isArray(arr)) {
						return arr;
					} else if (Symbol.iterator in Object(arr)) {
						return sliceIterator(arr, i);
					} else {
						throw new TypeError("Invalid attempt to destructure non-iterable instance");
					}
				};
			}();

			var _transitionParser = __webpack_require__(3);

			var _transitionParser2 = _interopRequireDefault(_transitionParser);

			var _preprocessor = __webpack_require__(6);

			var _headers = __webpack_require__(8);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			var parse = function parse(delta) {
				var deltaCleaned = delta["ops"].flatMap(function (el) {
					return Object.entries(el).flatMap(_preprocessor.parserPrep);
				});
				deltaCleaned.push(["endfile", ""]);
				var parsed = (0, _transitionParser2.default)(deltaCleaned);

				var _parsed$ = _slicedToArray(parsed[0], 2),
				    label = _parsed$[0],
				    text = _parsed$[1];

				return _headers.header.data + text + _headers.footer.data;
			};

			module.exports = {
				parse: parse
			};

			/***/
		},
		/* 3 */
		/***/function (module, exports, __webpack_require__) {

			"use strict";

			Object.defineProperty(exports, "__esModule", {
				value: true
			});

			var _slicedToArray = function () {
				function sliceIterator(arr, i) {
					var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
						for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
							_arr.push(_s.value);if (i && _arr.length === i) break;
						}
					} catch (err) {
						_d = true;_e = err;
					} finally {
						try {
							if (!_n && _i["return"]) _i["return"]();
						} finally {
							if (_d) throw _e;
						}
					}return _arr;
				}return function (arr, i) {
					if (Array.isArray(arr)) {
						return arr;
					} else if (Symbol.iterator in Object(arr)) {
						return sliceIterator(arr, i);
					} else {
						throw new TypeError("Invalid attempt to destructure non-iterable instance");
					}
				};
			}();

			var _grammar = __webpack_require__(4);

			var _transitionTable = __webpack_require__(5);

			var _actions = __webpack_require__(0);

			var _actions2 = _interopRequireDefault(_actions);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			var oracle = function oracle(state) {
				/*
    Returns the correct action to take
    */

				if (state.q.length < 2) {
					if (state.delta.length < 1) {
						return _actions2.default.END;
					}
					return _actions2.default.SHIFT;
				}

				var _state$q = _slicedToArray(state.q[state.q.length - 1], 1),
				    topType = _state$q[0];

				var _state$q2 = _slicedToArray(state.q[state.q.length - 2], 1),
				    prevType = _state$q2[0];

				// if (state.delta.length < 1) {
				// 	if (topType === "block" && prevType === "block") {
				// 		return actions.END
				// 	}
				// }

				return (0, _grammar.grammar)(prevType, topType);
			};

			var apply_t = function apply_t(state, transition) {
				/*
    Returns the correct action to take
    */

				return _transitionTable.transitionTable[transition](state);
			};

			var parser = function parser(delta) {
				// TODO: find a more elegent way of dealing with the root
				var state = { q: [["block", { text: '', newlineCt: 0 }]], delta: delta, finalFlag: false };
				var transition = void 0;
				var i = 0;
				while (!state.finalFlag) {
					transition = oracle(state);
					state = apply_t(state, transition);
				}

				return state["q"];
			};

			exports.default = parser;

			/***/
		},
		/* 4 */
		/***/function (module, exports, __webpack_require__) {

			"use strict";

			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.grammar = undefined;

			var _actions = __webpack_require__(0);

			var _actions2 = _interopRequireDefault(_actions);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			var grammarObj = {
				block: {
					block: _actions2.default.COMBINE,
					newline: _actions2.default.COMBINE,
					insert: _actions2.default.SHIFT,
					attributes_block: _actions2.default.COMBINE,
					attributes_inline: _actions2.default.COMBINE,
					endfile: _actions2.default.END
				},
				insert: {
					insert: _actions2.default.COMBINE,
					attributes_block: _actions2.default.COMBINE,
					newline: _actions2.default.COMBINE,
					endfile: _actions2.default.COMBINE,
					attributes_inline: _actions2.default.COMBINE
				},
				attributes_inline: {
					insert: _actions2.default.COMBINE,
					attributes_inline: _actions2.default.COMBINE
				}

			};

			var grammar = exports.grammar = function grammar(label1, label2) {
				if (grammarObj.hasOwnProperty(label1)) {
					var inner = grammarObj[label1];
					if (inner.hasOwnProperty(label2)) {
						return grammarObj[label1][label2];
					}
				}
				throw new Error("sequence [" + label1 + ", " + label2 + "] not in grammar");
				return null;
			};

			/***/
		},
		/* 5 */
		/***/function (module, exports, __webpack_require__) {

			"use strict";

			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.transitionTable = undefined;

			var _transitionTable;

			var _slicedToArray = function () {
				function sliceIterator(arr, i) {
					var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
						for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
							_arr.push(_s.value);if (i && _arr.length === i) break;
						}
					} catch (err) {
						_d = true;_e = err;
					} finally {
						try {
							if (!_n && _i["return"]) _i["return"]();
						} finally {
							if (_d) throw _e;
						}
					}return _arr;
				}return function (arr, i) {
					if (Array.isArray(arr)) {
						return arr;
					} else if (Symbol.iterator in Object(arr)) {
						return sliceIterator(arr, i);
					} else {
						throw new TypeError("Invalid attempt to destructure non-iterable instance");
					}
				};
			}();

			var _extends = Object.assign || function (target) {
				for (var i = 1; i < arguments.length; i++) {
					var source = arguments[i];for (var key in source) {
						if (Object.prototype.hasOwnProperty.call(source, key)) {
							target[key] = source[key];
						}
					}
				}return target;
			};

			var _actions = __webpack_require__(0);

			var _actions2 = _interopRequireDefault(_actions);

			var _formatter = __webpack_require__(1);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			function _defineProperty(obj, key, value) {
				if (key in obj) {
					Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
				} else {
					obj[key] = value;
				}return obj;
			}

			var concatObj = {
				insert: {
					insert: function insert(atomNext, atomTop) {
						return ["insert", atomNext + atomTop];
					},
					newline: function newline(atomNext, atomTop) {
						return ["block", { text: atomNext, newlineCt: 1 }];
					},
					attributes_block: function attributes_block(atomNext, atomTop) {
						return ["block", { text: atomNext, formatters: atomTop, newlineCt: 0 }];
					},
					endfile: function endfile(atomNext, atomTop) {
						return ["block", { text: atomNext, newlineCt: 0 }];
					},
					attributes_inline: function attributes_inline(atomNext, atomTop) {
						return ["insert", atomTop.formatInline(atomNext)];
					}
				},
				block: {
					newline: function newline(atomNext, atomTop) {
						return ["block", _extends({}, atomNext, { newlineCt: atomNext.newlineCt + 1 })];
					},
					attributes_block: function attributes_block(atomNext, atomTop) {
						return ["block", _extends({}, atomNext, { text: atomNext.text, formatters: atomNext.formatters.merge(atomTop) })];
					},
					attributes_inline: function attributes_inline(atomNext, atomTop) {
						return ["block", atomTop.formatInline(atomNext)];
					},
					block: function block(atomNext, atomTop) {
						var nxtFmtr = atomNext.formatters ? atomNext.formatters : new _formatter.Formatter();
						var topFmtr = atomTop.formatters ? atomTop.formatters : new _formatter.Formatter();
						// topFmtr needs to know if it is inside of something already, and nxtFmtr needs to know whether to end blocks or not
						// if inside of something, don't place a new start (remove the formatter)
						var startFmtr = topFmtr.subtract(nxtFmtr);
						// We don't need to place an end statement if the top is a continutation
						var endFmtr = nxtFmtr.subtract(topFmtr);

						var blockLabels = Object.keys(topFmtr.fns).filter(function (k) {
							return nxtFmtr.fns.hasOwnProperty(k);
						});
						var sep = (0, _formatter.getSpaceFormatting)(blockLabels)(atomNext.newlineCt);

						var text = endFmtr.formatBlock(atomNext.text, "end") + sep + startFmtr.formatBlock(atomTop.text, "start");

						return ["block", { text: text, formatters: topFmtr, newlineCt: atomTop.newlineCt }];
					}
				},

				attributes_inline: {
					attributes_inline: function attributes_inline(atomNext, atomTop) {
						return ["attributes_inline", atomNext.merge(atomTop)];
					},
					insert: function insert(atomNext, atomTop) {
						return ["insert", atomNext.formatInline(atomTop)];
					}
				}
			};

			var concat = function concat(nextType, topType) {
				if (concatObj.hasOwnProperty(nextType)) {
					var inner = concatObj[nextType];
					if (inner.hasOwnProperty(topType)) {
						return concatObj[nextType][topType];
					}
				}
				throw new Error("sequence [" + nextType + ", " + topType + "] not in concat rules");
				return null;
			};

			var combine = function combine(state) {
				var _state$q$pop = state.q.pop(),
				    _state$q$pop2 = _slicedToArray(_state$q$pop, 2),
				    topType = _state$q$pop2[0],
				    atomTop = _state$q$pop2[1];

				var _state$q$pop3 = state.q.pop(),
				    _state$q$pop4 = _slicedToArray(_state$q$pop3, 2),
				    nextType = _state$q$pop4[0],
				    atomNext = _state$q$pop4[1];

				var combined = concat(nextType, topType)(atomNext, atomTop);
				state.q.push(combined);
				return _extends({}, state);
			};

			var shift = function shift(state) {
				var newAtom = state.delta.shift();
				state.q.push(newAtom);
				return _extends({}, state);
			};

			var end = function end(state) {
				var _state$q$pop5 = state.q.pop(),
				    _state$q$pop6 = _slicedToArray(_state$q$pop5, 2),
				    lastType = _state$q$pop6[0],
				    lastAtom = _state$q$pop6[1];

				if (lastType === "endfile") {
					var _state$q$pop7 = state.q.pop();

					var _state$q$pop8 = _slicedToArray(_state$q$pop7, 2);

					lastType = _state$q$pop8[0];
					lastAtom = _state$q$pop8[1];
				}
				if (lastType !== "block") {
					throw new Error("last type should be block, incorrect parsing");
				}

				var endFmtr = lastAtom.formatters ? lastAtom.formatters : new _formatter.Formatter();
				var finalText = endFmtr.formatBlock(lastAtom.text, "end");
				state.q.push(["final", finalText]);

				state.finalFlag = true;
				return _extends({}, state);
			};

			var transitionTable = exports.transitionTable = (_transitionTable = {}, _defineProperty(_transitionTable, _actions2.default.COMBINE, combine), _defineProperty(_transitionTable, _actions2.default.SHIFT, shift), _defineProperty(_transitionTable, _actions2.default.END, end), _transitionTable);

			/***/
		},
		/* 6 */
		/***/function (module, exports, __webpack_require__) {

			"use strict";

			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.parserPrep = undefined;

			var _slicedToArray = function () {
				function sliceIterator(arr, i) {
					var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
						for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
							_arr.push(_s.value);if (i && _arr.length === i) break;
						}
					} catch (err) {
						_d = true;_e = err;
					} finally {
						try {
							if (!_n && _i["return"]) _i["return"]();
						} finally {
							if (_d) throw _e;
						}
					}return _arr;
				}return function (arr, i) {
					if (Array.isArray(arr)) {
						return arr;
					} else if (Symbol.iterator in Object(arr)) {
						return sliceIterator(arr, i);
					} else {
						throw new TypeError("Invalid attempt to destructure non-iterable instance");
					}
				};
			}();

			var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
				return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
			} : function (obj) {
				return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
			};

			var _formatter = __webpack_require__(1);

			var _mappings = __webpack_require__(7);

			function _toConsumableArray(arr) {
				if (Array.isArray(arr)) {
					for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
						arr2[i] = arr[i];
					}return arr2;
				} else {
					return Array.from(arr);
				}
			}

			Array.prototype.flatMap = function (lambda) {
				return Array.prototype.concat.apply([], this.map(lambda));
			};

			var handleNewLines = function handleNewLines(split) {
				var ret = [];
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = split.slice(0, split.length - 1)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var s = _step.value;

						if (s !== "") {
							ret.push(["insert", s]);
						}
						ret.push(["newline", ""]);
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}

				if (split[split.length - 1] !== "") {
					ret.push(["insert", split[split.length - 1]]);
				}
				return ret;
			};

			var processAtom = function processAtom(key, val) {
				if (key === "insert") {
					if (typeof val === "string") {
						if (val.includes("\n")) {
							var split = val.split(/\n/g);
							return handleNewLines(split);
						} else {
							return [[key, val]];
						}
					} else if ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === "object") {
						if (Object.entries(val).length !== 1) {
							throw new Error("cannot handle insert type "); // TODO: state insert type
						}

						var _Object$entries$ = _slicedToArray(Object.entries(val)[0], 2),
						    objKey = _Object$entries$[0],
						    objVal = _Object$entries$[1];

						return [[key, (0, _formatter.formatter)(objKey)(objVal)]];
					}
				} else if (key === "attributes" && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === "object") {
					var _Object$keys = Object.keys(val),
					    _Object$keys2 = _slicedToArray(_Object$keys, 2),
					    inner_key = _Object$keys2[0],
					    _ = _Object$keys2[1];

					return [[(0, _mappings.mappings)(inner_key), (0, _formatter.formatter)(inner_key)(val)]];
				}

				throw new Error("unkown type of atom");
			};

			var parserPrep = exports.parserPrep = function parserPrep(el) {
				el = processAtom.apply(undefined, _toConsumableArray(el));
				return el;
			};

			/***/
		},
		/* 7 */
		/***/function (module, exports, __webpack_require__) {

			"use strict";

			Object.defineProperty(exports, "__esModule", {
				value: true
			});

			var mapping = {
				"code-block": "attributes_block",
				list: "attributes_block"
			};

			var mappings = exports.mappings = function mappings(label) {
				if (mapping.hasOwnProperty(label)) {
					return mapping[label];
				} else {
					return "attributes_inline";
				}
			};

			/***/
		},
		/* 8 */
		/***/function (module, exports, __webpack_require__) {

			"use strict";

			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			var footer = exports.footer = { data: "\n\\end{document}" };
			var header = exports.header = {
				data: '\\documentclass[12pt]{article}\n\\usepackage[margin=1in]{geometry} \n\\usepackage{amsmath,amsthm,amssymb,amsfonts}\n\\usepackage{listings}\n%If you want to title your bold things something different just make another thing exactly like this but replace "problem" with the name of the thing you want, like theorem or lemma or whatever\n \n\\begin{document}\n'

			};

			/***/
		}]
		/******/)
	);
});
//# sourceMappingURL=delta2tex.min.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map