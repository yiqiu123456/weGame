/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/adapter/weapp-adapter.js":
/*!**************************************!*\
  !*** ./src/adapter/weapp-adapter.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs3/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/for-each */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/keys.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/assign */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/assign.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/set-prototype-of.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/get-prototype-of.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/parse-int */ "./node_modules/@babel/runtime-corejs3/core-js-stable/parse-int.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_number_is_nan__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/number/is-nan */ "./node_modules/@babel/runtime-corejs3/core-js-stable/number/is-nan.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_number_is_nan__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_number_is_nan__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find-index */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/find-index.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/splice */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/splice.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_weak_map__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/weak-map */ "./node_modules/@babel/runtime-corejs3/core-js-stable/weak-map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_weak_map__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_weak_map__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/index-of */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/index-of.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/slice */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/slice.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/json/stringify */ "./node_modules/@babel/runtime-corejs3/core-js-stable/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_keys__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/keys */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/keys.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_keys__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_keys__WEBPACK_IMPORTED_MODULE_17__);


















/******/(function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/
  var installedModules = {};

  /******/ // The require function
  /******/
  function __nested_webpack_require_1778__(moduleId) {
    /******/ // Check if module is in cache
    /******/if (installedModules[moduleId]) /******/return installedModules[moduleId].exports;

    /******/ // Create a new module (and put it into the cache)
    /******/
    var module = installedModules[moduleId] = {
      /******/exports: {},
      /******/id: moduleId,
      /******/loaded: false
      /******/
    };

    /******/ // Execute the module function
    /******/
    modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_1778__);

    /******/ // Flag the module as loaded
    /******/
    module.loaded = true;

    /******/ // Return the exports of the module
    /******/
    return module.exports;
    /******/
  }

  /******/ // expose the modules object (__webpack_modules__)
  /******/
  __nested_webpack_require_1778__.m = modules;

  /******/ // expose the module cache
  /******/
  __nested_webpack_require_1778__.c = installedModules;

  /******/ // __webpack_public_path__
  /******/
  __nested_webpack_require_1778__.p = "";

  /******/ // Load entry module and return exports
  /******/
  return __nested_webpack_require_1778__(0);
  /******/
}
/************************************************************************/
/******/)([/* 0 */
/***/function (module, exports, __nested_webpack_require_3043__) {
  'use strict';

  var _window2 = __nested_webpack_require_3043__(1);
  var _window = _interopRequireWildcard(_window2);
  var _HTMLElement = __nested_webpack_require_3043__(5);
  var _HTMLElement2 = _interopRequireDefault(_HTMLElement);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};
      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }
      newObj.default = obj;
      return newObj;
    }
  }
  var global = GameGlobal;
  function inject() {
    _window.addEventListener = function (type, listener) {
      _window.document.addEventListener(type, listener);
    };
    _window.removeEventListener = function (type, listener) {
      _window.document.removeEventListener(type, listener);
    };
    if (_window.canvas) {
      _window.canvas.addEventListener = _window.addEventListener;
      _window.canvas.removeEventListener = _window.removeEventListener;
    }
    var _wx$getSystemInfoSync = wx.getSystemInfoSync(),
      platform = _wx$getSystemInfoSync.platform;

    // 开发者工具无法重定义 window

    if (platform === 'devtools') {
      for (var key in _window) {
        var descriptor = _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1___default()(global, key);
        if (!descriptor || descriptor.configurable === true) {
          _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_2___default()(window, key, {
            value: _window[key]
          });
        }
      }
      for (var _key in _window.document) {
        var _descriptor = _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1___default()(global.document, _key);
        if (!_descriptor || _descriptor.configurable === true) {
          _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_2___default()(global.document, _key, {
            value: _window.document[_key]
          });
        }
      }
      window.parent = window;
    } else {
      for (var _key2 in _window) {
        global[_key2] = _window[_key2];
      }
      global.window = _window;
      window = global;
      window.top = window.parent = window;
    }
  }
  if (!GameGlobal.__isAdapterInjected) {
    GameGlobal.__isAdapterInjected = true;
    inject();
  }

  /***/
}, /* 1 */
/***/function (module, exports, __nested_webpack_require_5370__) {
  'use strict';

  var _context, _context2;
  _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_2___default()(exports, "__esModule", {
    value: true
  });
  exports.cancelAnimationFrame = exports.requestAnimationFrame = exports.clearInterval = exports.clearTimeout = exports.setInterval = exports.setTimeout = exports.canvas = exports.TouchEvent = exports.location = exports.localStorage = exports.HTMLElement = exports.FileReader = exports.Audio = exports.Image = exports.WebSocket = exports.XMLHttpRequest = exports.navigator = exports.document = undefined;
  var _WindowProperties = __nested_webpack_require_5370__(2);
  _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default()(_context = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_4___default()(_WindowProperties)).call(_context, function (key) {
    if (key === "default" || key === "__esModule") return;
    _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_2___default()(exports, key, {
      enumerable: true,
      get: function get() {
        return _WindowProperties[key];
      }
    });
  });
  var _constructor = __nested_webpack_require_5370__(4);
  _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default()(_context2 = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_4___default()(_constructor)).call(_context2, function (key) {
    if (key === "default" || key === "__esModule") return;
    _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_2___default()(exports, key, {
      enumerable: true,
      get: function get() {
        return _constructor[key];
      }
    });
  });
  var _Canvas = __nested_webpack_require_5370__(10);
  var _Canvas2 = _interopRequireDefault(_Canvas);
  var _document2 = __nested_webpack_require_5370__(11);
  var _document3 = _interopRequireDefault(_document2);
  var _navigator2 = __nested_webpack_require_5370__(18);
  var _navigator3 = _interopRequireDefault(_navigator2);
  var _XMLHttpRequest2 = __nested_webpack_require_5370__(19);
  var _XMLHttpRequest3 = _interopRequireDefault(_XMLHttpRequest2);
  var _WebSocket2 = __nested_webpack_require_5370__(20);
  var _WebSocket3 = _interopRequireDefault(_WebSocket2);
  var _Image2 = __nested_webpack_require_5370__(12);
  var _Image3 = _interopRequireDefault(_Image2);
  var _Audio2 = __nested_webpack_require_5370__(13);
  var _Audio3 = _interopRequireDefault(_Audio2);
  var _FileReader2 = __nested_webpack_require_5370__(21);
  var _FileReader3 = _interopRequireDefault(_FileReader2);
  var _HTMLElement2 = __nested_webpack_require_5370__(5);
  var _HTMLElement3 = _interopRequireDefault(_HTMLElement2);
  var _localStorage2 = __nested_webpack_require_5370__(22);
  var _localStorage3 = _interopRequireDefault(_localStorage2);
  var _location2 = __nested_webpack_require_5370__(23);
  var _location3 = _interopRequireDefault(_location2);
  var _TouchEvent2 = __nested_webpack_require_5370__(17);
  var _TouchEvent3 = _interopRequireDefault(_TouchEvent2);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
  exports.document = _document3.default;
  exports.navigator = _navigator3.default;
  exports.XMLHttpRequest = _XMLHttpRequest3.default;
  exports.WebSocket = _WebSocket3.default;
  exports.Image = _Image3.default;
  exports.Audio = _Audio3.default;
  exports.FileReader = _FileReader3.default;
  exports.HTMLElement = _HTMLElement3.default;
  exports.localStorage = _localStorage3.default;
  exports.location = _location3.default;
  exports.TouchEvent = _TouchEvent3.default;

  // 暴露全局的 canvas
  var canvas = new _Canvas2.default();
  exports.canvas = canvas;
  exports.setTimeout = setTimeout;
  exports.setInterval = setInterval;
  exports.clearTimeout = clearTimeout;
  exports.clearInterval = clearInterval;
  exports.requestAnimationFrame = requestAnimationFrame;
  exports.cancelAnimationFrame = cancelAnimationFrame;

  /***/
}, /* 2 */
/***/function (module, exports, __nested_webpack_require_8847__) {
  'use strict';

  _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_2___default()(exports, "__esModule", {
    value: true
  });
  exports.performance = exports.ontouchend = exports.ontouchmove = exports.ontouchstart = exports.screen = exports.devicePixelRatio = exports.innerHeight = exports.innerWidth = undefined;
  var _performance2 = __nested_webpack_require_8847__(3);
  var _performance3 = _interopRequireDefault(_performance2);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
  var _wx$getSystemInfoSync = wx.getSystemInfoSync(),
    screenWidth = _wx$getSystemInfoSync.screenWidth,
    screenHeight = _wx$getSystemInfoSync.screenHeight,
    devicePixelRatio = _wx$getSystemInfoSync.devicePixelRatio;
  var innerWidth = exports.innerWidth = screenWidth;
  var innerHeight = exports.innerHeight = screenHeight;
  exports.devicePixelRatio = devicePixelRatio;
  var screen = exports.screen = {
    availWidth: innerWidth,
    availHeight: innerHeight
  };
  var ontouchstart = exports.ontouchstart = null;
  var ontouchmove = exports.ontouchmove = null;
  var ontouchend = exports.ontouchend = null;
  exports.performance = _performance3.default;

  /***/
}, /* 3 */
/***/function (module, exports) {
  'use strict';

  _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_2___default()(exports, "__esModule", {
    value: true
  });
  var performance = void 0;
  if (wx.getPerformance) {
    var _wx$getSystemInfoSync = wx.getSystemInfoSync(),
      platform = _wx$getSystemInfoSync.platform;
    var wxPerf = wx.getPerformance();
    var initTime = wxPerf.now();
    var clientPerfAdapter = _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_5___default()({}, wxPerf, {
      now: function now() {
        return (wxPerf.now() - initTime) / 1000;
      }
    });
    performance = platform === 'devtools' ? wxPerf : clientPerfAdapter;
  }
  exports.default = performance;

  /***/
}, /* 4 */
/***/function (module, exports, __nested_webpack_require_10721__) {
  'use strict';

  _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_2___default()(exports, "__esModule", {
    value: true
  });
  exports.HTMLCanvasElement = exports.HTMLImageElement = undefined;
  var _HTMLElement2 = __nested_webpack_require_10721__(5);
  var _HTMLElement3 = _interopRequireDefault(_HTMLElement2);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && ((0,_babel_runtime_corejs3_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function") ? call : self;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (0,_babel_runtime_corejs3_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(superClass));
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) (_babel_runtime_corejs3_core_js_stable_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_6___default()) ? _babel_runtime_corejs3_core_js_stable_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_6___default()(subClass, superClass) : subClass.__proto__ = superClass;
  }
  var HTMLImageElement = wx.createImage().constructor;
  var HTMLCanvasElement = function (_HTMLElement) {
    _inherits(HTMLCanvasElement, _HTMLElement);
    function HTMLCanvasElement() {
      _classCallCheck(this, HTMLCanvasElement);
      return _possibleConstructorReturn(this, (HTMLCanvasElement.__proto__ || _babel_runtime_corejs3_core_js_stable_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7___default()(HTMLCanvasElement)).call(this, 'canvas'));
    }
    return HTMLCanvasElement;
  }(_HTMLElement3.default);
  exports.HTMLImageElement = HTMLImageElement;
  exports.HTMLCanvasElement = HTMLCanvasElement;

  /***/
}, /* 5 */
/***/function (module, exports, __nested_webpack_require_12726__) {
  'use strict';

  _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_2___default()(exports, "__esModule", {
    value: true
  });
  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_2___default()(target, descriptor.key, descriptor);
      }
    }
    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();
  var _Element2 = __nested_webpack_require_12726__(6);
  var _Element3 = _interopRequireDefault(_Element2);
  var _util = __nested_webpack_require_12726__(9);
  var _WindowProperties = __nested_webpack_require_12726__(2);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && ((0,_babel_runtime_corejs3_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function") ? call : self;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (0,_babel_runtime_corejs3_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(superClass));
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) (_babel_runtime_corejs3_core_js_stable_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_6___default()) ? _babel_runtime_corejs3_core_js_stable_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_6___default()(subClass, superClass) : subClass.__proto__ = superClass;
  }
  var HTMLElement = function (_Element) {
    _inherits(HTMLElement, _Element);
    function HTMLElement() {
      var tagName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      _classCallCheck(this, HTMLElement);
      var _this = _possibleConstructorReturn(this, (HTMLElement.__proto__ || _babel_runtime_corejs3_core_js_stable_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7___default()(HTMLElement)).call(this));
      _this.className = '';
      _this.childern = [];
      _this.style = {
        width: _WindowProperties.innerWidth + 'px',
        height: _WindowProperties.innerHeight + 'px'
      };
      _this.insertBefore = _util.noop;
      _this.innerHTML = '';
      _this.tagName = tagName.toUpperCase();
      return _this;
    }
    _createClass(HTMLElement, [{
      key: 'setAttribute',
      value: function setAttribute(name, value) {
        this[name] = value;
      }
    }, {
      key: 'getAttribute',
      value: function getAttribute(name) {
        return this[name];
      }
    }, {
      key: 'getBoundingClientRect',
      value: function getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: _WindowProperties.innerWidth,
          height: _WindowProperties.innerHeight
        };
      }
    }, {
      key: 'focus',
      value: function focus() {}
    }, {
      key: 'clientWidth',
      get: function get() {
        var ret = _babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_8___default()(this.style.fontSize, 10) * this.innerHTML.length;
        return _babel_runtime_corejs3_core_js_stable_number_is_nan__WEBPACK_IMPORTED_MODULE_9___default()(ret) ? 0 : ret;
      }
    }, {
      key: 'clientHeight',
      get: function get() {
        var ret = _babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_8___default()(this.style.fontSize, 10);
        return _babel_runtime_corejs3_core_js_stable_number_is_nan__WEBPACK_IMPORTED_MODULE_9___default()(ret) ? 0 : ret;
      }
    }]);
    return HTMLElement;
  }(_Element3.default);
  exports.default = HTMLElement;

  /***/
}, /* 6 */
/***/function (module, exports, __nested_webpack_require_16590__) {
  'use strict';

  _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_2___default()(exports, "__esModule", {
    value: true
  });
  var _Node2 = __nested_webpack_require_16590__(7);
  var _Node3 = _interopRequireDefault(_Node2);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && ((0,_babel_runtime_corejs3_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function") ? call : self;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (0,_babel_runtime_corejs3_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(superClass));
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) (_babel_runtime_corejs3_core_js_stable_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_6___default()) ? _babel_runtime_corejs3_core_js_stable_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_6___default()(subClass, superClass) : subClass.__proto__ = superClass;
  }
  var ELement = function (_Node) {
    _inherits(ELement, _Node);
    function ELement() {
      _classCallCheck(this, ELement);
      var _this = _possibleConstructorReturn(this, (ELement.__proto__ || _babel_runtime_corejs3_core_js_stable_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7___default()(ELement)).call(this));
      _this.className = '';
      _this.children = [];
      return _this;
    }
    return ELement;
  }(_Node3.default);
  exports.default = ELement;

  /***/
}, /* 7 */
/***/function (module, exports, __nested_webpack_require_18363__) {
  'use strict';

  _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_2___default()(exports, "__esModule", {
    value: true
  });
  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_2___default()(target, descriptor.key, descriptor);
      }
    }
    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();
  var _EventTarget2 = __nested_webpack_require_18363__(8);
  var _EventTarget3 = _interopRequireDefault(_EventTarget2);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && ((0,_babel_runtime_corejs3_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function") ? call : self;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (0,_babel_runtime_corejs3_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(superClass));
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) (_babel_runtime_corejs3_core_js_stable_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_6___default()) ? _babel_runtime_corejs3_core_js_stable_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_6___default()(subClass, superClass) : subClass.__proto__ = superClass;
  }
  var Node = function (_EventTarget) {
    _inherits(Node, _EventTarget);
    function Node() {
      _classCallCheck(this, Node);
      var _this = _possibleConstructorReturn(this, (Node.__proto__ || _babel_runtime_corejs3_core_js_stable_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7___default()(Node)).call(this));
      _this.childNodes = [];
      return _this;
    }
    _createClass(Node, [{
      key: 'appendChild',
      value: function appendChild(node) {
        if (node instanceof Node) {
          this.childNodes.push(node);
        } else {
          throw new TypeError('Failed to executed \'appendChild\' on \'Node\': parameter 1 is not of type \'Node\'.');
        }
      }
    }, {
      key: 'cloneNode',
      value: function cloneNode() {
        var copyNode = Object.create(this);
        _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_5___default()(copyNode, this);
        return copyNode;
      }
    }, {
      key: 'removeChild',
      value: function removeChild(node) {
        var _context3;
        var index = _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_10___default()(_context3 = this.childNodes).call(_context3, function (child) {
          return child === node;
        });
        if (index > -1) {
          var _context4;
          return _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_11___default()(_context4 = this.childNodes).call(_context4, index, 1);
        }
        return null;
      }
    }]);
    return Node;
  }(_EventTarget3.default);
  exports.default = Node;

  /***/
}, /* 8 */
/***/function (module, exports) {
  'use strict';

  _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_2___default()(exports, "__esModule", {
    value: true
  });
  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_2___default()(target, descriptor.key, descriptor);
      }
    }
    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  var _events = new (_babel_runtime_corejs3_core_js_stable_weak_map__WEBPACK_IMPORTED_MODULE_12___default())();
  var EventTarget = function () {
    function EventTarget() {
      _classCallCheck(this, EventTarget);
      _events.set(this, {});
    }
    _createClass(EventTarget, [{
      key: 'addEventListener',
      value: function addEventListener(type, listener) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var events = _events.get(this);
        if (!events) {
          events = {};
          _events.set(this, events);
        }
        if (!events[type]) {
          events[type] = [];
        }
        events[type].push(listener);
        if (options.capture) {
          console.warn('EventTarget.addEventListener: options.capture is not implemented.');
        }
        if (options.once) {
          console.warn('EventTarget.addEventListener: options.once is not implemented.');
        }
        if (options.passive) {
          console.warn('EventTarget.addEventListener: options.passive is not implemented.');
        }
      }
    }, {
      key: 'removeEventListener',
      value: function removeEventListener(type, listener) {
        var listeners = _events.get(this)[type];
        if (listeners && listeners.length > 0) {
          for (var i = listeners.length; i--; i > 0) {
            if (listeners[i] === listener) {
              _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_11___default()(listeners).call(listeners, i, 1);
              break;
            }
          }
        }
      }
    }, {
      key: 'dispatchEvent',
      value: function dispatchEvent() {
        var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var listeners = _events.get(this)[event.type];
        if (listeners) {
          for (var i = 0; i < listeners.length; i++) {
            listeners[i](event);
          }
        }
      }
    }]);
    return EventTarget;
  }();
  exports.default = EventTarget;

  /***/
}, /* 9 */
/***/function (module, exports) {
  "use strict";

  _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_2___default()(exports, "__esModule", {
    value: true
  });
  exports.noop = noop;
  function noop() {}

  /***/
}, /* 10 */
/***/function (module, exports, __nested_webpack_require_24810__) {
  'use strict';

  _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_2___default()(exports, "__esModule", {
    value: true
  });
  exports.default = Canvas;
  var _constructor = __nested_webpack_require_24810__(4);
  var _HTMLElement = __nested_webpack_require_24810__(5);
  var _HTMLElement2 = _interopRequireDefault(_HTMLElement);
  var _document = __nested_webpack_require_24810__(11);
  var _document2 = _interopRequireDefault(_document);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
  var hasModifiedCanvasPrototype = false;
  var hasInit2DContextConstructor = false;
  var hasInitWebGLContextConstructor = false;
  function Canvas() {
    var canvas = wx.createCanvas();
    canvas.type = 'canvas';
    canvas.__proto__.__proto__ = new _constructor.HTMLCanvasElement('canvas');
    var _getContext = canvas.getContext;
    canvas.getBoundingClientRect = function () {
      var ret = {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      };
      return ret;
    };
    return canvas;
  }

  /***/
}, /* 11 */
/***/function (module, exports, __nested_webpack_require_25927__) {
  'use strict';

  _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_2___default()(exports, "__esModule", {
    value: true
  });
  var _window = __nested_webpack_require_25927__(1);
  var window = _interopRequireWildcard(_window);
  var _HTMLElement = __nested_webpack_require_25927__(5);
  var _HTMLElement2 = _interopRequireDefault(_HTMLElement);
  var _Image = __nested_webpack_require_25927__(12);
  var _Image2 = _interopRequireDefault(_Image);
  var _Audio = __nested_webpack_require_25927__(13);
  var _Audio2 = _interopRequireDefault(_Audio);
  var _Canvas = __nested_webpack_require_25927__(10);
  var _Canvas2 = _interopRequireDefault(_Canvas);
  __nested_webpack_require_25927__(16);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};
      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }
      newObj.default = obj;
      return newObj;
    }
  }
  var events = {};
  var document = {
    readyState: 'complete',
    visibilityState: 'visible',
    documentElement: window,
    hidden: false,
    style: {},
    location: window.location,
    ontouchstart: null,
    ontouchmove: null,
    ontouchend: null,
    head: new _HTMLElement2.default('head'),
    body: new _HTMLElement2.default('body'),
    createElement: function createElement(tagName) {
      if (tagName === 'canvas') {
        return new _Canvas2.default();
      } else if (tagName === 'audio') {
        return new _Audio2.default();
      } else if (tagName === 'img') {
        return new _Image2.default();
      }
      return new _HTMLElement2.default(tagName);
    },
    getElementById: function getElementById(id) {
      if (id === window.canvas.id) {
        return window.canvas;
      }
      return null;
    },
    getElementsByTagName: function getElementsByTagName(tagName) {
      if (tagName === 'head') {
        return [document.head];
      } else if (tagName === 'body') {
        return [document.body];
      } else if (tagName === 'canvas') {
        return [window.canvas];
      }
      return [];
    },
    getElementsByName: function getElementsByName(tagName) {
      if (tagName === 'head') {
        return [document.head];
      } else if (tagName === 'body') {
        return [document.body];
      } else if (tagName === 'canvas') {
        return [window.canvas];
      }
      return [];
    },
    querySelector: function querySelector(query) {
      if (query === 'head') {
        return document.head;
      } else if (query === 'body') {
        return document.body;
      } else if (query === 'canvas') {
        return window.canvas;
      } else if (query === '#' + window.canvas.id) {
        return window.canvas;
      }
      return null;
    },
    querySelectorAll: function querySelectorAll(query) {
      if (query === 'head') {
        return [document.head];
      } else if (query === 'body') {
        return [document.body];
      } else if (query === 'canvas') {
        return [window.canvas];
      }
      return [];
    },
    addEventListener: function addEventListener(type, listener) {
      if (!events[type]) {
        events[type] = [];
      }
      events[type].push(listener);
    },
    removeEventListener: function removeEventListener(type, listener) {
      var listeners = events[type];
      if (listeners && listeners.length > 0) {
        for (var i = listeners.length; i--; i > 0) {
          if (listeners[i] === listener) {
            _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_11___default()(listeners).call(listeners, i, 1);
            break;
          }
        }
      }
    },
    dispatchEvent: function dispatchEvent(event) {
      var listeners = events[event.type];
      if (listeners) {
        for (var i = 0; i < listeners.length; i++) {
          listeners[i](event);
        }
      }
    }
  };
  exports.default = document;

  /***/
}, /* 12 */
/***/function (module, exports) {
  "use strict";

  _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_2___default()(exports, "__esModule", {
    value: true
  });
  exports.default = Image;
  function Image() {
    var image = wx.createImage();
    return image;
  }

  /***/
}, /* 13 */
/***/function (module, exports, __nested_webpack_require_30205__) {
  'use strict';

  _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_2___default()(exports, "__esModule", {
    value: true
  });
  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_2___default()(target, descriptor.key, descriptor);
      }
    }
    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();
  var _HTMLAudioElement2 = __nested_webpack_require_30205__(14);
  var _HTMLAudioElement3 = _interopRequireDefault(_HTMLAudioElement2);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && ((0,_babel_runtime_corejs3_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function") ? call : self;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (0,_babel_runtime_corejs3_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(superClass));
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) (_babel_runtime_corejs3_core_js_stable_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_6___default()) ? _babel_runtime_corejs3_core_js_stable_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_6___default()(subClass, superClass) : subClass.__proto__ = superClass;
  }
  var HAVE_NOTHING = 0;
  var HAVE_METADATA = 1;
  var HAVE_CURRENT_DATA = 2;
  var HAVE_FUTURE_DATA = 3;
  var HAVE_ENOUGH_DATA = 4;
  var _innerAudioContext = new (_babel_runtime_corejs3_core_js_stable_weak_map__WEBPACK_IMPORTED_MODULE_12___default())();
  var _src = new (_babel_runtime_corejs3_core_js_stable_weak_map__WEBPACK_IMPORTED_MODULE_12___default())();
  var _loop = new (_babel_runtime_corejs3_core_js_stable_weak_map__WEBPACK_IMPORTED_MODULE_12___default())();
  var _autoplay = new (_babel_runtime_corejs3_core_js_stable_weak_map__WEBPACK_IMPORTED_MODULE_12___default())();
  var Audio = function (_HTMLAudioElement) {
    _inherits(Audio, _HTMLAudioElement);
    function Audio(url) {
      _classCallCheck(this, Audio);
      var _this = _possibleConstructorReturn(this, (Audio.__proto__ || _babel_runtime_corejs3_core_js_stable_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7___default()(Audio)).call(this));
      _this.HAVE_NOTHING = HAVE_NOTHING;
      _this.HAVE_METADATA = HAVE_METADATA;
      _this.HAVE_CURRENT_DATA = HAVE_CURRENT_DATA;
      _this.HAVE_FUTURE_DATA = HAVE_FUTURE_DATA;
      _this.HAVE_ENOUGH_DATA = HAVE_ENOUGH_DATA;
      _this.readyState = HAVE_NOTHING;
      _src.set(_this, '');
      var innerAudioContext = wx.createInnerAudioContext();
      _innerAudioContext.set(_this, innerAudioContext);
      innerAudioContext.onCanplay(function () {
        _this.dispatchEvent({
          type: 'load'
        });
        _this.dispatchEvent({
          type: 'loadend'
        });
        _this.dispatchEvent({
          type: 'canplay'
        });
        _this.dispatchEvent({
          type: 'canplaythrough'
        });
        _this.dispatchEvent({
          type: 'loadedmetadata'
        });
        _this.readyState = HAVE_CURRENT_DATA;
      });
      innerAudioContext.onPlay(function () {
        _this.dispatchEvent({
          type: 'play'
        });
      });
      innerAudioContext.onPause(function () {
        _this.dispatchEvent({
          type: 'pause'
        });
      });
      innerAudioContext.onEnded(function () {
        _this.dispatchEvent({
          type: 'ended'
        });
        _this.readyState = HAVE_ENOUGH_DATA;
      });
      innerAudioContext.onError(function () {
        _this.dispatchEvent({
          type: 'error'
        });
      });
      if (url) {
        _innerAudioContext.get(_this).src = url;
      }
      return _this;
    }
    _createClass(Audio, [{
      key: 'load',
      value: function load() {
        console.warn('HTMLAudioElement.load() is not implemented.');
      }
    }, {
      key: 'play',
      value: function play() {
        _innerAudioContext.get(this).play();
      }
    }, {
      key: 'pause',
      value: function pause() {
        _innerAudioContext.get(this).pause();
      }
    }, {
      key: 'canPlayType',
      value: function canPlayType() {
        var mediaType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        if (typeof mediaType !== 'string') {
          return '';
        }
        if (_babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_13___default()(mediaType).call(mediaType, 'audio/mpeg') > -1 || _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_13___default()(mediaType).call(mediaType, 'audio/mp4')) {
          return 'probably';
        }
        return '';
      }
    }, {
      key: 'cloneNode',
      value: function cloneNode() {
        var newAudio = new Audio();
        newAudio.loop = _innerAudioContext.get(this).loop;
        newAudio.autoplay = _innerAudioContext.get(this).autoplay;
        newAudio.src = this.src;
        return newAudio;
      }
    }, {
      key: 'currentTime',
      get: function get() {
        return _innerAudioContext.get(this).currentTime;
      },
      set: function set(value) {
        _innerAudioContext.get(this).seek(value);
      }
    }, {
      key: 'src',
      get: function get() {
        return _src.get(this);
      },
      set: function set(value) {
        _src.set(this, value);
        _innerAudioContext.get(this).src = value;
      }
    }, {
      key: 'loop',
      get: function get() {
        return _innerAudioContext.get(this).loop;
      },
      set: function set(value) {
        _innerAudioContext.get(this).loop = value;
      }
    }, {
      key: 'autoplay',
      get: function get() {
        return _innerAudioContext.get(this).autoplay;
      },
      set: function set(value) {
        _innerAudioContext.get(this).autoplay = value;
      }
    }, {
      key: 'paused',
      get: function get() {
        return _innerAudioContext.get(this).paused;
      }
    }]);
    return Audio;
  }(_HTMLAudioElement3.default);
  exports.default = Audio;

  /***/
}, /* 14 */
/***/function (module, exports, __nested_webpack_require_36518__) {
  'use strict';

  _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_2___default()(exports, "__esModule", {
    value: true
  });
  var _HTMLMediaElement2 = __nested_webpack_require_36518__(15);
  var _HTMLMediaElement3 = _interopRequireDefault(_HTMLMediaElement2);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && ((0,_babel_runtime_corejs3_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function") ? call : self;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (0,_babel_runtime_corejs3_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(superClass));
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) (_babel_runtime_corejs3_core_js_stable_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_6___default()) ? _babel_runtime_corejs3_core_js_stable_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_6___default()(subClass, superClass) : subClass.__proto__ = superClass;
  }
  var HTMLAudioElement = function (_HTMLMediaElement) {
    _inherits(HTMLAudioElement, _HTMLMediaElement);
    function HTMLAudioElement() {
      _classCallCheck(this, HTMLAudioElement);
      return _possibleConstructorReturn(this, (HTMLAudioElement.__proto__ || _babel_runtime_corejs3_core_js_stable_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7___default()(HTMLAudioElement)).call(this, 'audio'));
    }
    return HTMLAudioElement;
  }(_HTMLMediaElement3.default);
  exports.default = HTMLAudioElement;

  /***/
}, /* 15 */
/***/function (module, exports, __nested_webpack_require_38366__) {
  'use strict';

  _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_2___default()(exports, "__esModule", {
    value: true
  });
  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_2___default()(target, descriptor.key, descriptor);
      }
    }
    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();
  var _HTMLElement2 = __nested_webpack_require_38366__(5);
  var _HTMLElement3 = _interopRequireDefault(_HTMLElement2);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && ((0,_babel_runtime_corejs3_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function") ? call : self;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (0,_babel_runtime_corejs3_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(superClass));
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) (_babel_runtime_corejs3_core_js_stable_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_6___default()) ? _babel_runtime_corejs3_core_js_stable_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_6___default()(subClass, superClass) : subClass.__proto__ = superClass;
  }
  var HTMLMediaElement = function (_HTMLElement) {
    _inherits(HTMLMediaElement, _HTMLElement);
    function HTMLMediaElement(type) {
      _classCallCheck(this, HTMLMediaElement);
      return _possibleConstructorReturn(this, (HTMLMediaElement.__proto__ || _babel_runtime_corejs3_core_js_stable_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7___default()(HTMLMediaElement)).call(this, type));
    }
    _createClass(HTMLMediaElement, [{
      key: 'addTextTrack',
      value: function addTextTrack() {}
    }, {
      key: 'captureStream',
      value: function captureStream() {}
    }, {
      key: 'fastSeek',
      value: function fastSeek() {}
    }, {
      key: 'load',
      value: function load() {}
    }, {
      key: 'pause',
      value: function pause() {}
    }, {
      key: 'play',
      value: function play() {}
    }]);
    return HTMLMediaElement;
  }(_HTMLElement3.default);
  exports.default = HTMLMediaElement;

  /***/
}, /* 16 */
/***/function (module, exports, __nested_webpack_require_41282__) {
  'use strict';

  __nested_webpack_require_41282__(17);

  /***/
}, /* 17 */
/***/function (module, exports, __nested_webpack_require_41402__) {
  'use strict';

  _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_2___default()(exports, "__esModule", {
    value: true
  });
  var _window = __nested_webpack_require_41402__(1);
  var window = _interopRequireWildcard(_window);
  var _document = __nested_webpack_require_41402__(11);
  var _document2 = _interopRequireDefault(_document);
  var _util = __nested_webpack_require_41402__(9);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};
      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }
      newObj.default = obj;
      return newObj;
    }
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  var TouchEvent = function TouchEvent(type) {
    _classCallCheck(this, TouchEvent);
    this.target = window.canvas;
    this.currentTarget = window.canvas;
    this.touches = [];
    this.targetTouches = [];
    this.changedTouches = [];
    this.preventDefault = _util.noop;
    this.stopPropagation = _util.noop;
    this.type = type;
  };
  exports.default = TouchEvent;
  function touchEventHandlerFactory(type) {
    return function (event) {
      var touchEvent = new TouchEvent(type);
      touchEvent.touches = event.touches;
      touchEvent.targetTouches = _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_14___default()(Array.prototype).call(event.touches);
      touchEvent.changedTouches = event.changedTouches;
      touchEvent.timeStamp = event.timeStamp;
      _document2.default.dispatchEvent(touchEvent);
    };
  }
  wx.onTouchStart(touchEventHandlerFactory('touchstart'));
  wx.onTouchMove(touchEventHandlerFactory('touchmove'));
  wx.onTouchEnd(touchEventHandlerFactory('touchend'));
  wx.onTouchCancel(touchEventHandlerFactory('touchcancel'));

  /***/
}, /* 18 */
/***/function (module, exports, __nested_webpack_require_43454__) {
  'use strict';

  _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_2___default()(exports, "__esModule", {
    value: true
  });
  var _util = __nested_webpack_require_43454__(9);

  // TODO 需要 wx.getSystemInfo 获取更详细信息
  var _wx$getSystemInfoSync = wx.getSystemInfoSync(),
    platform = _wx$getSystemInfoSync.platform;
  var navigator = {
    platform: platform,
    language: 'zh-cn',
    appVersion: '5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Mobile/14E8301 MicroMessenger/6.6.0 MiniGame NetType/WIFI Language/zh_CN',
    onLine: true,
    // TODO 用 wx.getNetworkStateChange 和 wx.onNetworkStateChange 来返回真实的状态

    // TODO 用 wx.getLocation 来封装 geolocation
    geolocation: {
      getCurrentPosition: _util.noop,
      watchPosition: _util.noop,
      clearWatch: _util.noop
    }
  };
  exports.default = navigator;

  /***/
}, /* 19 */
/***/function (module, exports) {
  'use strict';

  _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_2___default()(exports, "__esModule", {
    value: true
  });
  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_2___default()(target, descriptor.key, descriptor);
      }
    }
    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  var _url = new (_babel_runtime_corejs3_core_js_stable_weak_map__WEBPACK_IMPORTED_MODULE_12___default())();
  var _method = new (_babel_runtime_corejs3_core_js_stable_weak_map__WEBPACK_IMPORTED_MODULE_12___default())();
  var _requestHeader = new (_babel_runtime_corejs3_core_js_stable_weak_map__WEBPACK_IMPORTED_MODULE_12___default())();
  var _responseHeader = new (_babel_runtime_corejs3_core_js_stable_weak_map__WEBPACK_IMPORTED_MODULE_12___default())();
  var _requestTask = new (_babel_runtime_corejs3_core_js_stable_weak_map__WEBPACK_IMPORTED_MODULE_12___default())();
  function _triggerEvent(type) {
    if (typeof this['on' + type] === 'function') {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      this['on' + type].apply(this, args);
    }
  }
  function _changeReadyState(readyState) {
    this.readyState = readyState;
    _triggerEvent.call(this, 'readystatechange');
  }
  var XMLHttpRequest = function () {
    // TODO 没法模拟 HEADERS_RECEIVED 和 LOADING 两个状态
    function XMLHttpRequest() {
      _classCallCheck(this, XMLHttpRequest);
      this.onabort = null;
      this.onerror = null;
      this.onload = null;
      this.onloadstart = null;
      this.onprogress = null;
      this.ontimeout = null;
      this.onloadend = null;
      this.onreadystatechange = null;
      this.readyState = 0;
      this.response = null;
      this.responseText = null;
      this.responseType = '';
      this.responseXML = null;
      this.status = 0;
      this.statusText = '';
      this.upload = {};
      this.withCredentials = false;
      _requestHeader.set(this, {
        'content-type': 'application/x-www-form-urlencoded'
      });
      _responseHeader.set(this, {});
    }

    /*
     * TODO 这一批事件应该是在 XMLHttpRequestEventTarget.prototype 上面的
     */

    _createClass(XMLHttpRequest, [{
      key: 'abort',
      value: function abort() {
        var myRequestTask = _requestTask.get(this);
        if (myRequestTask) {
          myRequestTask.abort();
        }
      }
    }, {
      key: 'getAllResponseHeaders',
      value: function getAllResponseHeaders() {
        var _context5;
        var responseHeader = _responseHeader.get(this);
        return _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_15___default()(_context5 = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_4___default()(responseHeader)).call(_context5, function (header) {
          return header + ': ' + responseHeader[header];
        }).join('\n');
      }
    }, {
      key: 'getResponseHeader',
      value: function getResponseHeader(header) {
        return _responseHeader.get(this)[header];
      }
    }, {
      key: 'open',
      value: function open(method, url /* async, user, password 这几个参数在小程序内不支持*/) {
        _method.set(this, method);
        _url.set(this, url);
        _changeReadyState.call(this, XMLHttpRequest.OPENED);
      }
    }, {
      key: 'overrideMimeType',
      value: function overrideMimeType() {}
    }, {
      key: 'send',
      value: function send() {
        var _this = this;
        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        if (this.readyState !== XMLHttpRequest.OPENED) {
          throw new Error("Failed to execute 'send' on 'XMLHttpRequest': The object's state must be OPENED.");
        } else {
          wx.request({
            data: data,
            url: _url.get(this),
            method: _method.get(this),
            header: _requestHeader.get(this),
            responseType: this.responseType,
            success: function success(_ref) {
              var data = _ref.data,
                statusCode = _ref.statusCode,
                header = _ref.header;
              if (typeof data !== 'string' && !(data instanceof ArrayBuffer)) {
                try {
                  data = _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_16___default()(data);
                } catch (e) {
                  data = data;
                }
              }
              _this.status = statusCode;
              _responseHeader.set(_this, header);
              _triggerEvent.call(_this, 'loadstart');
              _changeReadyState.call(_this, XMLHttpRequest.HEADERS_RECEIVED);
              _changeReadyState.call(_this, XMLHttpRequest.LOADING);
              _this.response = data;
              if (data instanceof ArrayBuffer) {
                _this.responseText = '';
                var bytes = new Uint8Array(data);
                var len = bytes.byteLength;
                for (var i = 0; i < len; i++) {
                  _this.responseText += String.fromCharCode(bytes[i]);
                }
              } else {
                _this.responseText = data;
              }
              _changeReadyState.call(_this, XMLHttpRequest.DONE);
              _triggerEvent.call(_this, 'load');
              _triggerEvent.call(_this, 'loadend');
            },
            fail: function fail(_ref2) {
              var errMsg = _ref2.errMsg;

              // TODO 规范错误
              if (_babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_13___default()(errMsg).call(errMsg, 'abort') !== -1) {
                _triggerEvent.call(_this, 'abort');
              } else {
                _triggerEvent.call(_this, 'error', errMsg);
              }
              _triggerEvent.call(_this, 'loadend');
            }
          });
        }
      }
    }, {
      key: 'setRequestHeader',
      value: function setRequestHeader(header, value) {
        var myHeader = _requestHeader.get(this);
        myHeader[header] = value;
        _requestHeader.set(this, myHeader);
      }
    }]);
    return XMLHttpRequest;
  }();
  XMLHttpRequest.UNSEND = 0;
  XMLHttpRequest.OPENED = 1;
  XMLHttpRequest.HEADERS_RECEIVED = 2;
  XMLHttpRequest.LOADING = 3;
  XMLHttpRequest.DONE = 4;
  exports.default = XMLHttpRequest;

  /***/
}, /* 20 */
/***/function (module, exports) {
  'use strict';

  _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_2___default()(exports, "__esModule", {
    value: true
  });
  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_2___default()(target, descriptor.key, descriptor);
      }
    }
    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  var _socketTask = new (_babel_runtime_corejs3_core_js_stable_weak_map__WEBPACK_IMPORTED_MODULE_12___default())();
  var WebSocket = function () {
    // TODO 更新 binaryType
    // The connection is in the process of closing.
    // The connection is not yet open.
    function WebSocket(url) {
      var _this = this;
      var protocols = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      _classCallCheck(this, WebSocket);
      this.binaryType = '';
      this.bufferedAmount = 0;
      this.extensions = '';
      this.onclose = null;
      this.onerror = null;
      this.onmessage = null;
      this.onopen = null;
      this.protocol = '';
      this.readyState = 3;
      if (typeof url !== 'string' || !/(^ws:\/\/)|(^wss:\/\/)/.test(url)) {
        throw new TypeError('Failed to construct \'WebSocket\': The URL \'' + url + '\' is invalid');
      }
      this.url = url;
      this.readyState = WebSocket.CONNECTING;
      var socketTask = wx.connectSocket({
        url: url,
        protocols: Array.isArray(protocols) ? protocols : [protocols]
      });
      _socketTask.set(this, socketTask);
      socketTask.onClose(function (res) {
        _this.readyState = WebSocket.CLOSED;
        if (typeof _this.onclose === 'function') {
          _this.onclose(res);
        }
      });
      socketTask.onMessage(function (res) {
        if (typeof _this.onmessage === 'function') {
          _this.onmessage(res);
        }
      });
      socketTask.onOpen(function () {
        _this.readyState = WebSocket.OPEN;
        if (typeof _this.onopen === 'function') {
          _this.onopen();
        }
      });
      socketTask.onError(function (res) {
        if (typeof _this.onerror === 'function') {
          _this.onerror(new Error(res.errMsg));
        }
      });
      return this;
    } // TODO 小程序内目前获取不到，实际上需要根据服务器选择的 sub-protocol 返回
    // TODO 更新 bufferedAmount
    // The connection is closed or couldn't be opened.

    // The connection is open and ready to communicate.

    _createClass(WebSocket, [{
      key: 'close',
      value: function close(code, reason) {
        this.readyState = WebSocket.CLOSING;
        var socketTask = _socketTask.get(this);
        socketTask.close({
          code: code,
          reason: reason
        });
      }
    }, {
      key: 'send',
      value: function send(data) {
        if (typeof data !== 'string' && !(data instanceof ArrayBuffer)) {
          throw new TypeError('Failed to send message: The data ' + data + ' is invalid');
        }
        var socketTask = _socketTask.get(this);
        socketTask.send({
          data: data
        });
      }
    }]);
    return WebSocket;
  }();
  WebSocket.CONNECTING = 0;
  WebSocket.OPEN = 1;
  WebSocket.CLOSING = 2;
  WebSocket.CLOSED = 3;
  exports.default = WebSocket;

  /***/
}, /* 21 */
/***/function (module, exports) {
  "use strict";

  _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_2___default()(exports, "__esModule", {
    value: true
  });
  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_2___default()(target, descriptor.key, descriptor);
      }
    }
    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  /*
   * TODO 使用 wx.readFile 来封装 FileReader
   */
  var FileReader = function () {
    function FileReader() {
      _classCallCheck(this, FileReader);
    }
    _createClass(FileReader, [{
      key: "construct",
      value: function construct() {}
    }]);
    return FileReader;
  }();
  exports.default = FileReader;

  /***/
}, /* 22 */
/***/function (module, exports) {
  "use strict";

  _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_2___default()(exports, "__esModule", {
    value: true
  });
  var localStorage = {
    get length() {
      var _wx$getStorageInfoSyn = wx.getStorageInfoSync(),
        keys = _babel_runtime_corejs3_core_js_stable_instance_keys__WEBPACK_IMPORTED_MODULE_17___default()(_wx$getStorageInfoSyn);
      return keys.length;
    },
    key: function key(n) {
      var _wx$getStorageInfoSyn2 = wx.getStorageInfoSync(),
        keys = _babel_runtime_corejs3_core_js_stable_instance_keys__WEBPACK_IMPORTED_MODULE_17___default()(_wx$getStorageInfoSyn2);
      return keys[n];
    },
    getItem: function getItem(key) {
      return wx.getStorageSync(key);
    },
    setItem: function setItem(key, value) {
      return wx.setStorageSync(key, value);
    },
    removeItem: function removeItem(key) {
      wx.removeStorageSync(key);
    },
    clear: function clear() {
      wx.clearStorageSync();
    }
  };
  exports.default = localStorage;

  /***/
}, /* 23 */
/***/function (module, exports) {
  'use strict';

  _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_2___default()(exports, "__esModule", {
    value: true
  });
  var location = {
    href: 'game.js',
    reload: function reload() {}
  };
  exports.default = location;

  /***/
}
/******/]);

/***/ }),

/***/ "./src/game/game.js":
/*!**************************!*\
  !*** ./src/game/game.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Game; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs3/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs3/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs3/helpers/esm/defineProperty.js");
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/index.mjs");
/* harmony import */ var _sprite_scroller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sprite/scroller */ "./src/sprite/scroller.js");





var Game = /*#__PURE__*/function () {
  function Game() {
    (0,_babel_runtime_corejs3_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Game);
    (0,_babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "app", void 0);
    (0,_babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "container", void 0);
    (0,_babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "windowWidth", void 0);
    (0,_babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "windowHeight", void 0);
    (0,_babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "Assets", void 0);
    // 获取适配屏幕大小
    var _wx$getSystemInfoSync = wx.getSystemInfoSync(),
      pixelRatio = _wx$getSystemInfoSync.pixelRatio,
      windowWidth = _wx$getSystemInfoSync.windowWidth,
      windowHeight = _wx$getSystemInfoSync.windowHeight;
    this.windowWidth = windowWidth * pixelRatio;
    this.windowHeight = windowHeight * pixelRatio;
    this.init();
  }
  (0,_babel_runtime_corejs3_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Game, [{
    key: "init",
    value: function init() {
      this.Assets = pixi_js__WEBPACK_IMPORTED_MODULE_3__.Assets;
      this.app = new pixi_js__WEBPACK_IMPORTED_MODULE_3__.Application({
        width: this.windowWidth,
        height: this.windowHeight,
        // background: '#1099bb',
        view: canvas
      });
      this.container = new pixi_js__WEBPACK_IMPORTED_MODULE_3__.Container();
      this.app.stage.addChild(this.container);
    }
  }, {
    key: "run",
    value: function run() {
      var _this = this;
      this.Assets.add('bunny', 'assets/bunny.png');
      this.Assets.add('bg', 'assets/layers/parallax-mountain-bg.png');
      this.Assets.add('foreground_trees', 'assets/layers/parallax-mountain-foreground-trees.png');
      this.Assets.add('montain_far', 'assets/layers/parallax-mountain-montain-far.png');
      this.Assets.add('mountains', 'assets/layers/parallax-mountain-mountains.png');
      this.Assets.add('mountain_trees', 'assets/layers/parallax-mountain-trees.png');
      this.Assets.load(['bg', 'bunny', 'foreground_trees', 'montain_far', 'mountains', 'mountain_trees']).then(function (textures) {
        var backgroundSprite = new pixi_js__WEBPACK_IMPORTED_MODULE_3__.Sprite(textures.bg);
        backgroundSprite.anchor.set(0.5);
        backgroundSprite.scale.set(3.5);
        backgroundSprite.position.x = _this.windowWidth / 2;
        backgroundSprite.position.y = _this.windowHeight / 2;
        _this.container.addChild(backgroundSprite);
        var scroller = new _sprite_scroller__WEBPACK_IMPORTED_MODULE_4__["default"](_this.container, textures);
        _this.app.ticker.add(function () {
          scroller.moveviewportxBy(0.5);
        });
      });
    }
  }, {
    key: "loadTexture",
    value: function loadTexture(textureName, url) {
      this.Assets.add(textureName, url);
      return this.Assets.load([textureName]);
    }
  }, {
    key: "start",
    value: function start() {}
  }, {
    key: "stop",
    value: function stop() {}
  }]);
  return Game;
}();


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pixi_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pixi/core */ "./node_modules/@pixi/core/lib/index.mjs");
/* harmony import */ var _pixi_unsafe_eval__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pixi/unsafe-eval */ "./node_modules/@pixi/unsafe-eval/lib/index.mjs");
/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! whatwg-fetch */ "./node_modules/whatwg-fetch/fetch.js");
/* harmony import */ var _game_game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game/game */ "./src/game/game.js");
__webpack_require__(/*! ./adapter/weapp-adapter */ "./src/adapter/weapp-adapter.js");



// Apply the patch to PIXI
(0,_pixi_unsafe_eval__WEBPACK_IMPORTED_MODULE_1__.install)({
  ShaderSystem: _pixi_core__WEBPACK_IMPORTED_MODULE_0__.ShaderSystem
});

var game = new _game_game__WEBPACK_IMPORTED_MODULE_3__["default"]();
game.run();

/***/ }),

/***/ "./src/sprite/scroller.js":
/*!********************************!*\
  !*** ./src/sprite/scroller.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Scroller; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs3/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs3/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs3/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/for-each */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _scrollerSprite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scrollerSprite */ "./src/sprite/scrollerSprite.js");





// 获取适配屏幕大小
var _wx$getSystemInfoSync = wx.getSystemInfoSync(),
  pixelRatio = _wx$getSystemInfoSync.pixelRatio,
  windowWidth = _wx$getSystemInfoSync.windowWidth,
  windowHeight = _wx$getSystemInfoSync.windowHeight;
var width = pixelRatio * windowWidth,
  height = pixelRatio * windowHeight / 4;
var Scroller = /*#__PURE__*/function () {
  function Scroller(container, textures) {
    (0,_babel_runtime_corejs3_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Scroller);
    (0,_babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "viewportX", void 0);
    (0,_babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "sprites", void 0);
    this.sprites = [];
    this.viewportX = 0;
    debugger;
    var far = new _scrollerSprite__WEBPACK_IMPORTED_MODULE_4__["default"](textures.montain_far, width, height);
    far.anchor.set(0.5);
    far.scale.set(2);
    far.position.set(0, 340);
    far.tilePosition.x = 0;
    far.tilePosition.y = 0;
    container.addChild(far);
    this.sprites.push(far);
    var mountain = new _scrollerSprite__WEBPACK_IMPORTED_MODULE_4__["default"](textures.mountains, width, height);
    mountain.anchor.set(0.5);
    mountain.scale.set(2);
    mountain.position.set(0, 340);
    mountain.tilePosition.x = 0;
    mountain.tilePosition.y = 0;
    container.addChild(mountain);
    this.sprites.push(mountain);
    var foreGroundTree = new _scrollerSprite__WEBPACK_IMPORTED_MODULE_4__["default"](textures.foreground_trees, width, height, 0.64);
    foreGroundTree.scale.set(2);
    foreGroundTree.position.set(0, 200);
    foreGroundTree.tilePosition.x = 0;
    foreGroundTree.tilePosition.y = 0;
    container.addChild(foreGroundTree);
    this.sprites.push(foreGroundTree);
    var tree = new _scrollerSprite__WEBPACK_IMPORTED_MODULE_4__["default"](textures.mountain_trees, width, height, 0.64);
    tree.scale.set(2);
    tree.position.set(0, 200);
    tree.tilePosition.x = 0;
    tree.tilePosition.y = 0;
    container.addChild(tree);
    this.sprites.push(tree);
  }
  (0,_babel_runtime_corejs3_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Scroller, [{
    key: "getViewport",
    value: function getViewport() {
      return this.viewportX;
    }
  }, {
    key: "setViewportX",
    value: function setViewportX(newViewport) {
      this.viewportX = newViewport;
    }
  }, {
    key: "moveviewportxBy",
    value: function moveviewportxBy(units) {
      var _context;
      var newViewport = this.viewportX + units;
      this.setViewportX(newViewport);
      debugger;
      _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default()(_context = this.sprites).call(_context, function (sprite) {
        sprite.setViewportX(newViewport);
      });
    }
  }]);
  return Scroller;
}();


/***/ }),

/***/ "./src/sprite/scrollerSprite.js":
/*!**************************************!*\
  !*** ./src/sprite/scrollerSprite.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ScrollerSprite; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/reflect/construct */ "./node_modules/@babel/runtime-corejs3/core-js-stable/reflect/construct.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs3/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs3/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs3/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs3/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs3/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs3/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs3/helpers/esm/defineProperty.js");
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/index.mjs");








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_corejs3_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_corejs3_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = _babel_runtime_corejs3_core_js_stable_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_corejs3_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !(_babel_runtime_corejs3_core_js_stable_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default())) return false; if ((_babel_runtime_corejs3_core_js_stable_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default().sham)) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_babel_runtime_corejs3_core_js_stable_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ScrollerSprite = /*#__PURE__*/function (_TilingSprite) {
  (0,_babel_runtime_corejs3_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ScrollerSprite, _TilingSprite);
  var _super = _createSuper(ScrollerSprite);
  function ScrollerSprite(textrue, width, height) {
    var _this;
    var delta = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0.128;
    (0,_babel_runtime_corejs3_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ScrollerSprite);
    _this = _super.call(this, textrue, width, height);
    // X轴移动速率
    (0,_babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_corejs3_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "delta_x", void 0);
    // 视窗位置
    (0,_babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_corejs3_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "viewportX", void 0);
    _this.delta_x = delta;
    _this.viewportX = width / 2;
    return _this;
  }

  // 滚动更新
  (0,_babel_runtime_corejs3_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ScrollerSprite, [{
    key: "setViewportX",
    value: function setViewportX(newViewportX) {
      debugger;
      var distanceTravelled = newViewportX - this.viewportX;
      this.viewportX = newViewportX;
      this.tilePosition.x -= distanceTravelled * this.delta_x;
    }
  }]);
  return ScrollerSprite;
}(pixi_js__WEBPACK_IMPORTED_MODULE_8__.TilingSprite);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkgame"] = self["webpackChunkgame"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_whatwg-fetch_fetch_js-node_modules_babel_runtime-corejs3_core-js-stable_-19aaf7"], function() { return __webpack_require__("./src/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map