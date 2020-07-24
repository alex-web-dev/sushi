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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./src/js/common.js":
/*!**************************!*\
  !*** ./src/js/common.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./src/js/main.js");
/* harmony import */ var _corsine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./corsine */ "./src/js/corsine.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// import './functions';
// import './corsine';
 // import './accepted-orders';


var anchors = document.querySelectorAll('a[href*="#"]');

var _iterator = _createForOfIteratorHelper(anchors),
    _step;

try {
  var _loop = function _loop() {
    var anchor = _step.value;
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      var blockID = anchor.getAttribute('href');
      var blockOffsetTop = document.querySelector(blockID).getBoundingClientRect().top;
      window.scrollBy({
        top: blockOffsetTop,
        left: 0,
        behavior: 'smooth'
      });
    });
  };

  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    _loop();
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

/***/ }),

/***/ "./src/js/corsine.js":
/*!***************************!*\
  !*** ./src/js/corsine.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./src/js/functions.js");


 //Отрисовка каталога/отрисовка статуса кнопок каталога в зависимости от corsine localStorage

Object(_functions__WEBPACK_IMPORTED_MODULE_0__["generateCorsine"])();
document.querySelectorAll('.btn_add_corsine').forEach(function (btn) {
  Object(_functions__WEBPACK_IMPORTED_MODULE_0__["btnAddCorsineEvent"])(btn);
});
document.querySelectorAll('.btn_dec_corsine').forEach(function (btn) {
  Object(_functions__WEBPACK_IMPORTED_MODULE_0__["btnDecCorsineEvent"])(btn);
});
document.querySelectorAll('.btn_del_corsine').forEach(function (btn) {
  Object(_functions__WEBPACK_IMPORTED_MODULE_0__["btnDeleteCorsineEvent"])(btn);
});
document.querySelectorAll('.btn_order').forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    Object(_functions__WEBPACK_IMPORTED_MODULE_0__["showOrderMenu"])();
  });
}); // function changePrices() {
//   if(document.querySelectorAll('.corsine').length === 0)
//     return
//   let totalSum = 0;
//   let itemSum = 0;
//   document.querySelectorAll('.corsine__price').forEach((price, i) => {
//     let goodCount = document.querySelectorAll('.count-control__value')[i].innerHTML;
//     itemSum = itemPrices[i] * goodCount;
//     price.innerHTML = itemSum + 'р';
//     totalSum += itemSum;
//   });
//   document.querySelector('.corsine__total-sum-value').innerHTML = totalSum + 'р';
// }

/***/ }),

/***/ "./src/js/functions.js":
/*!*****************************!*\
  !*** ./src/js/functions.js ***!
  \*****************************/
/*! exports provided: showMessage, showChangeNum, validateStreet, validatePhone, validateComment, validateOrderForm, showOrderMenu, eventCloseOrderMenu, eventSendOrder, sendOrder, toggleMainMenu, indexCheckHeaderTop, checkUpToggle, getRandomNum, corsineAdd, corsineDec, corsineDel, corsineGet, corsineRemove, corsineHas, appendCountControl, btnAddCorsineEvent, btnDecCorsineEvent, btnDeleteCorsineEvent, appendDefaultCorsineBtn, generateCorsine, getCorsineFooterBlock, getCorsineItemBlock, appendMessage, getProductInf, addControlToCorsineGoods, updateCorsineBlock, clearCorsineBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showMessage", function() { return showMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showChangeNum", function() { return showChangeNum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateStreet", function() { return validateStreet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validatePhone", function() { return validatePhone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateComment", function() { return validateComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateOrderForm", function() { return validateOrderForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showOrderMenu", function() { return showOrderMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventCloseOrderMenu", function() { return eventCloseOrderMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventSendOrder", function() { return eventSendOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendOrder", function() { return sendOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleMainMenu", function() { return toggleMainMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexCheckHeaderTop", function() { return indexCheckHeaderTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkUpToggle", function() { return checkUpToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomNum", function() { return getRandomNum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "corsineAdd", function() { return corsineAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "corsineDec", function() { return corsineDec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "corsineDel", function() { return corsineDel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "corsineGet", function() { return corsineGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "corsineRemove", function() { return corsineRemove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "corsineHas", function() { return corsineHas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendCountControl", function() { return appendCountControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "btnAddCorsineEvent", function() { return btnAddCorsineEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "btnDecCorsineEvent", function() { return btnDecCorsineEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "btnDeleteCorsineEvent", function() { return btnDeleteCorsineEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendDefaultCorsineBtn", function() { return appendDefaultCorsineBtn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateCorsine", function() { return generateCorsine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCorsineFooterBlock", function() { return getCorsineFooterBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCorsineItemBlock", function() { return getCorsineItemBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendMessage", function() { return appendMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductInf", function() { return getProductInf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addControlToCorsineGoods", function() { return addControlToCorsineGoods; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCorsineBlock", function() { return updateCorsineBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearCorsineBlock", function() { return clearCorsineBlock; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);


function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function showMessage(messageValue, status) {
  var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1200;
  var message = document.createElement('div');
  message.className = 'message message_hide';
  if (status === 'error') message.classList.add('message_error');else if (status === 'warning') message.classList.add('message_warning');
  message.innerHTML = "<p class=\"message__value\">".concat(messageValue, "</p>");
  document.querySelector('.messages').appendChild(message);
  setTimeout(function () {
    message.classList.toggle('message_hide');
  }, 100);
  setTimeout(function () {
    message.classList.toggle('message_hide');
    message.addEventListener('transitionend', function () {
      this.remove();
    });
  }, time);
}
function showChangeNum(num, coords) {
  var block = document.createElement('div');
  var blockStr = '';
  block.className = 'change-num';

  if (num > 0) {
    blockStr = '+' + num;
  } else {
    blockStr = num;
    block.classList.add('change-num_dec');
  }

  block.innerHTML = blockStr;
  var randX = getRandomNum(-5, 5);
  var blockPositionX = coords.x - randX;
  var blockPositionY = coords.y;
  block.style.left = "".concat(blockPositionX, "px");
  block.style.top = "".concat(blockPositionY, "px");
  document.body.appendChild(block);
  setTimeout(function () {
    block.remove();
  }, 1000);
}
function validateStreet(street) {
  if (street.length < 5 || street.length > 50) return false;
  return true;
}
function validatePhone(phone) {
  if (phone.length < 11 || phone.length > 17) return false;
  return true;
}
function validateComment(comment) {
  if (comment.length !== 0 && (comment.length < 5 || comment.length > 300)) return false;
  return true;
}
function validateOrderForm(form) {
  var street = form.querySelector('.order-form__field_street');
  var phoneNumber = form.querySelector('.order-form__field_number');
  var comment = form.querySelector('.order-form__field_comment');
  street.classList.remove('order-form__field_error');
  phoneNumber.classList.remove('order-form__field_error');
  comment.classList.remove('order-form__field_error');

  if (validateStreet(street.value) && validatePhone(phoneNumber.value) && validateComment(comment)) {
    return true;
  } else {
    showMessage('Неверная информация или заполнены не все поля!', 'error', 2000);

    if (!validateStreet(street.value)) {
      street.classList.add('order-form__field_error');
    }

    if (!validatePhone(phoneNumber.value)) {
      phoneNumber.classList.add('order-form__field_error');
    }

    if (!validateComment(comment.value)) {
      comment.classList.add('order-form__field_error');
    }

    return false;
  }
}
function showOrderMenu() {
  var order = document.createElement('div');
  order.className = 'order';
  order.innerHTML = "\n    <div class=\"wrapper\">\n      <div class=\"order__content\">\n        <h1 class=\"title title_black order__title\">\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435 \u0437\u0430\u043A\u0430\u0437\u0430</h1>\n        <div class=\"order-form\">\n          <div class=\"order-form__item\">\n            <input type=\"text\" name=\"street\" class=\"order-form__field order-form__field_street\" autocomplete=\"off\" placeholder=\"\u0423\u043B\u0438\u0446\u0430\">\n          </div>\n          <div class=\"order-form__item\">\n            <input type=\"text\" name=\"phone-number\" class=\"order-form__field order-form__field_number\" autocomplete=\"off\" placeholder=\"\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430\">\n          </div>\n          <div class=\"order-form__item\">\n            <textarea name=\"comment\" class=\"order-form__field order-form__field_comment\" cols=\"40\" rows=\"5\" placeholder=\"\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 (\u043D\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E)\" resize=\"no\"></textarea>\n          </div>\n          <input type=\"button\" class=\"btn order-form__submit\" value=\"\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C \u0430\u0434\u0440\u0435\u0441\">\n        </div>\n        <button class=\"btn-dlt order__close-btn\"></button>\n        <div class=\"messages\"></div>\n      </div>\n    </div>";
  document.body.appendChild(order);
  eventCloseOrderMenu();
  eventSendOrder();
}
function eventCloseOrderMenu() {
  if (document.querySelectorAll('.order').length !== 0) {
    document.querySelector('.order').addEventListener('click', function (e) {
      var elemClass = e.target.className;

      if (elemClass === 'order' || elemClass === 'btn-dlt order__close-btn') {
        document.querySelector('.order').remove();
      }
    });
  }
}
function eventSendOrder() {
  document.querySelector('.order-form__submit').addEventListener('click', function () {
    var form = document.querySelector('.order-form');
    var street = form.querySelector('.order-form__field_street');
    var phoneNumber = form.querySelector('.order-form__field_number');
    var comment = form.querySelector('.order-form__field_comment');

    if (!validateOrderForm(form)) {
      return;
    }

    var corsineData = corsineGet();

    if (corsineData === null) {
      showMessage('Ваша корзина пуста', 'error');
      return;
    }

    sendOrder();
    setTimeout(function () {
      clearCorsineBlock();
      corsineRemove();
    }, 2000);
  });
}
function sendOrder() {
  var isOrder = document.querySelectorAll('.order').length !== 0;
  if (!isOrder) return;
  var $orderForm = document.querySelector('.order-form');
  $orderForm.remove();
  var $loader = document.createElement('div');
  $loader.className = 'loader';
  document.body.appendChild($loader);
  setTimeout(function () {
    var $orderContent = document.querySelector('.order__content');
    appendMessage('Ваша заявка успешно отправлена! Ожидайте звонка.', $orderContent);
    $loader.remove();
  }, 2000);
}
function toggleMainMenu() {
  var toggle = document.querySelector('.menu-toggle');
  var menuList = document.querySelector('.nav-menu__list');

  if (menuList.style.display === 'flex') {
    setTimeout(function () {
      menuList.style.display = '';
    }, 200);
    toggle.classList.remove('menu-toggle_active');
  } else {
    setTimeout(function () {
      menuList.style.display = 'flex';
    }, 200);
    toggle.classList.add('menu-toggle_active');
  }
}
function indexCheckHeaderTop() {
  var isIndexFile = document.querySelectorAll('.header__center').length !== 0;
  if (!isIndexFile) return;
  var scrollValue = window.pageYOffset || document.documentElement.scrollTop;
  var headerTopClass = document.querySelector('.header__top').className;

  if (scrollValue >= 60 && headerTopClass === 'header__top') {
    document.querySelector('.header__top').classList.add('header__top_fixed');
  } else if (scrollValue <= 30 && headerTopClass !== 'header__top') {
    document.querySelector('.header__top').classList.remove('header__top_fixed');
  }
}
function checkUpToggle() {
  var isUp = document.querySelectorAll('.up').length !== 0;
  if (!isUp) return;
  var up = document.querySelector('.up');

  if (window.pageYOffset < 1000 && up.className === 'up') {
    up.classList.add('up_hide');
  } else if (window.pageYOffset > 1000) {
    up.classList.remove('up_hide');
  }
}
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function corsineAdd(goodId) {
  if (!goodId) return;
  var corsineData = corsineGet();

  if (corsineData === null) {
    var newCorsineData = [{
      id: goodId,
      count: 1
    }];
    localStorage.setItem('corsine', JSON.stringify(newCorsineData));
    return;
  }

  var _iterator = _createForOfIteratorHelper(corsineData.entries()),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_step.value, 2),
          i = _step$value[0],
          corsineItem = _step$value[1];

      if (corsineItem.id === goodId) {
        corsineData[i].count++;
        localStorage.setItem('corsine', JSON.stringify(corsineData));
        return;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var newCorsineItem = {
    id: goodId,
    count: 1
  };
  corsineData.push(newCorsineItem);
  localStorage.setItem('corsine', JSON.stringify(corsineData));
}
function corsineDec(goodId) {
  if (!goodId) return;
  var corsineData = corsineGet();
  if (corsineData === null) return;

  var _iterator2 = _createForOfIteratorHelper(corsineData.entries()),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _step2$value = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_step2.value, 2),
          i = _step2$value[0],
          corsineItem = _step2$value[1];

      if (corsineItem.id === goodId) {
        if (corsineItem.count > 1) corsineData[i].count--;else corsineData.splice(i, 1);
        if (corsineData.length === 0) corsineRemove();else localStorage.setItem('corsine', JSON.stringify(corsineData));
        return;
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}
function corsineDel(goodId) {
  if (!goodId) return;
  var corsineData = corsineGet();
  if (corsineData === null) return;

  var _iterator3 = _createForOfIteratorHelper(corsineData.entries()),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var _step3$value = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_step3.value, 2),
          i = _step3$value[0],
          corsineItem = _step3$value[1];

      if (corsineItem.id === goodId) {
        corsineData.splice(i, 1);
        if (corsineData.length === 0) corsineRemove();else localStorage.setItem('corsine', JSON.stringify(corsineData));
        return;
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
}
function corsineGet() {
  return JSON.parse(localStorage.getItem('corsine'));
}
function corsineRemove() {
  localStorage.removeItem('corsine');
}
function corsineHas(goodId) {
  var corsineData = corsineGet();
  if (corsineData === null) return false;

  var _iterator4 = _createForOfIteratorHelper(corsineData),
      _step4;

  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var corsineItem = _step4.value;
      if (corsineItem.id === goodId) return true;
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }

  return false;
}
function appendCountControl(elem) {
  var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  elem.querySelector('.btn_add_corsine').remove();
  var countControl = document.createElement('div');
  countControl.className = 'count-control goods__count-control';
  countControl.innerHTML = "\n    <button type=\"button\" class=\"count-control__btn count-control__btn_up btn_add_corsine\">\n      <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n    </button>\n    <span class=\"count-control__value\">".concat(count, "</span>\n    <button type=\"button\" class=\"count-control__btn count-control__btn_down btn_dec_corsine\">\n      <i class=\"fa fa-minus\" aria-hidden=\"true\"></i>\n    </button>");
  elem.append(countControl);
}
function btnAddCorsineEvent(btn) {
  btn.addEventListener('click', function (e) {
    console.log(corsineGet());
    var good = btn.closest('.product-item');
    var goodId = +good.getAttribute('data-id');
    corsineAdd(goodId);
    var mouseCoords = {
      x: e.pageX,
      y: e.pageY
    };
    showChangeNum(1, mouseCoords);
    var isCorsineItem = good.className.includes('corsine__item');
    var isGoodHasControl = good.querySelector('.count-control') || null;

    if (isGoodHasControl) {
      var controlValue = +good.querySelector('.count-control__value').innerHTML;
      good.querySelector('.count-control__value').innerHTML = controlValue + 1;
      if (isCorsineItem) updateCorsineBlock();
      return;
    }

    var goodBuy = good.querySelector('.goods__buy');
    appendCountControl(goodBuy);
    goodBuy.querySelectorAll('.btn_add_corsine').forEach(function (btn) {
      btnAddCorsineEvent(btn);
    });
    goodBuy.querySelectorAll('.btn_dec_corsine').forEach(function (btn) {
      btnDecCorsineEvent(btn);
    });
    if (isCorsineItem) updateCorsineBlock();
  });
}
function btnDecCorsineEvent(btn) {
  btn.addEventListener('click', function (e) {
    console.log(corsineGet());
    var good = btn.closest('.product-item');
    var goodId = +good.getAttribute('data-id');
    corsineDec(goodId);
    var mouseCoords = {
      x: e.pageX,
      y: e.pageY
    };
    showChangeNum(-1, mouseCoords);
    var isCorsineItem = good.className.includes('corsine__item');
    var controlValue = +good.querySelector('.count-control__value').innerHTML;

    if (controlValue > 1) {
      good.querySelector('.count-control__value').innerHTML = controlValue - 1;
    } else {
      if (isCorsineItem) {
        good.remove();
      } else {
        var countControl = good.querySelector('.count-control');
        countControl.remove();
        var goodBuy = good.querySelector('.goods__buy');
        appendDefaultCorsineBtn(goodBuy);
      }
    }

    if (isCorsineItem) updateCorsineBlock();
  });
}
function btnDeleteCorsineEvent(btn) {
  btn.addEventListener('click', function (e) {
    var good = btn.closest('.product-item');
    var goodId = +good.getAttribute('data-id');
    corsineRemove(goodId);
    var mouseCoords = {
      x: e.pageX,
      y: e.pageY
    };
    showChangeNum(-1, mouseCoords);
    var controlValue = +good.querySelector('.count-control__value').innerHTML;
    var isCorsineItem = good.className.includes('corsine__item');

    if (isCorsineItem) {
      good.remove();
      updateCorsineBlock();
    }
  });
}
function appendDefaultCorsineBtn(elem) {
  var btn = document.createElement('input');
  btn.setAttribute('type', 'button');
  btn.className = 'btn_add_corsine goods__add-corsine-btn';
  btn.value = "В корзину";
  btnAddCorsineEvent(btn);
  elem.append(btn);
}
function generateCorsine() {
  var isCorsineFile = document.querySelectorAll('.corsine').length !== 0;
  if (!isCorsineFile) return;
  var corsineData = corsineGet();
  var corsineContent = document.querySelector('.corsine__content');

  if (corsineData === null) {
    appendMessage('Ваша корзина пуста!', corsineContent);

    var _footerBlock = getCorsineFooterBlock(0);

    corsineContent.append(_footerBlock);
    return;
  }

  var corsineListBlock = document.querySelector('.corsine__items');
  corsineData.forEach(function (corsineItem) {
    var corsineItemBlock = getCorsineItemBlock(corsineItem);
    corsineListBlock.append(corsineItemBlock);
  }); // corsineListBlock.querySelectorAll('.btn_add_corsine').forEach(function(btn) {
  //   btnAddCorsineEvent(btn);
  // });
  // corsineListBlock.querySelectorAll('.btn_dec_corsine').forEach(function(btn) {
  //   btnDecCorsineEvent(btn);
  // });

  var totalValue = 0;
  document.querySelectorAll('.corsine__price-value').forEach(function (priceValue) {
    totalValue += +priceValue.innerHTML;
  });
  var footerBlock = getCorsineFooterBlock(totalValue);
  corsineContent.append(footerBlock);
}
function getCorsineFooterBlock(sum) {
  var allSumBlock = document.createElement('p');
  allSumBlock.className = 'corsine__total-sum';
  allSumBlock.innerHTML = "\u041E\u0431\u0449\u0430\u044F \u0441\u0443\u043C\u043C\u0430: <span class=\"corsine__total-sum-value\">".concat(sum, "</span> \u0440\u0443\u0431.");
  var corsineBtns = document.createElement('div');
  corsineBtns.className = 'corsine__btns';

  if (sum > 0) {
    corsineBtns.innerHTML = "\n    <a href=\"/\" class=\"btn btn_green corsine__btn-return\">\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u0432 \u043C\u0435\u043D\u044E</a>\n    <button class=\"btn order-link corsine__btn-order btn_order\">\u0421\u0434\u0435\u043B\u0430\u0442\u044C \u0437\u0430\u043A\u0430\u0437</button>";
  } else {
    corsineBtns.innerHTML = "\n    <a href=\"/\" class=\"btn btn_green corsine__btn-return\">\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u0432 \u043C\u0435\u043D\u044E</a>\n    <button class=\"btn btn_disabled order-link\">\u0421\u0434\u0435\u043B\u0430\u0442\u044C \u0437\u0430\u043A\u0430\u0437</button>";
  }

  var footerBlock = document.createElement('div');
  footerBlock.className = 'corsine__footer';
  footerBlock.appendChild(allSumBlock);
  footerBlock.appendChild(corsineBtns);
  return footerBlock;
}
function getCorsineItemBlock(corsineItem) {
  var productInf = getProductInf(corsineItem.id);
  var corsineItemSum = corsineItem.count * +productInf.price;
  var corsineItemBlock = document.createElement('div');
  corsineItemBlock.className = 'corsine__item product-item';
  corsineItemBlock.setAttribute('data-id', corsineItem.id);
  corsineItemBlock.innerHTML = "\n    <div class=\"corsine__bg\">\n      <img src=\"dist/img/goods/".concat(productInf.id, ".jpg\" alt=\"\" class=\"corsine__img\">\n    </div>\n    <div class=\"corsine__main\">\n      <p class=\"corsine__name\">").concat(productInf.name, "</p>\n      <p class=\"corsine__item-price\"><span class=\"corsine__item-price-value\">").concat(productInf.price, "</span> \u0440\u0443\u0431.</p>\n    </div>\n    <div class=\"count-control corsine__count-control\">\n      <button type=\"button\" class=\"count-control__btn count-control__btn_up btn_add_corsine\">\n        <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n      </button>\n      <span class=\"count-control__value\">").concat(corsineItem.count, "</span>\n      <button type=\"button\" class=\"count-control__btn count-control__btn_down btn_dec_corsine\">\n        <i class=\"fa fa-minus\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n    <p class=\"corsine__price\"><span class=\"corsine__price-value\">").concat(corsineItemSum, "</span> \u0440\u0443\u0431.</p>\n    <input type=\"button\" class=\"btn-dlt corsine__btn-dlt btn_del_corsine\" value=\"X\" title=\"\u0423\u0431\u0440\u0430\u0442\u044C \u0438\u0437 \u043A\u043E\u0440\u0437\u0438\u043D\u044B\">");
  return corsineItemBlock;
}
function appendMessage(message, elem) {
  var messageBlock = document.createElement('p');
  messageBlock.className = 'text-message';
  messageBlock.innerHTML = message;
  elem.append(messageBlock);
}
function getProductInf(id) {
  var products = [{
    "id": "1",
    "name": "Калифорния тунец",
    "struct": "Рис, нори, огурец, сыр, авокадо, тунец, фирменный соус, кунжут, тобико",
    "price": "290",
    "category": "roll"
  }, {
    "id": "2",
    "name": "Калифорния угорь",
    "struct": "Рис, нори, огурец, майонез, авокадо, угорь, тобико",
    "price": "270",
    "category": "roll"
  }, {
    "id": "3",
    "name": "Тобико угорь",
    "struct": "Рис, нори, огурец, сыр \"Филадельфия\", тобико, зеленый лук",
    "price": "270",
    "category": ""
  }, {
    "id": "4",
    "name": "Филадельфия",
    "struct": "Рис, нори, сыр \"Филадельфия\", огурец, лосось",
    "price": "250",
    "category": "roll"
  }, {
    "id": "5",
    "name": "Сакура",
    "struct": "Рис, лист тофу, сыр \"Филадельфия\", угорь",
    "price": "270",
    "category": "roll"
  }, {
    "id": "6",
    "name": "Пирамида",
    "struct": "Рис, нори, сыр \"Филадельфия\", омлет, тобико, угорь, лосось",
    "price": "270",
    "category": "roll"
  }, {
    "id": "7",
    "name": "Лосось",
    "struct": "рис, лосось",
    "price": "50",
    "category": "sushi"
  }, {
    "id": "8",
    "name": "Копченный лосось",
    "struct": "рис, копченый лосось",
    "price": "60",
    "category": "sushi"
  }, {
    "id": "9",
    "name": "Креветка",
    "struct": "рис, креветка",
    "price": "60",
    "category": "sushi"
  }, {
    "id": "10",
    "name": "Спайси лосось",
    "struct": "нори, рис, спайси соус, лосось",
    "price": "50",
    "category": "sushi"
  }, {
    "id": "11",
    "name": "Спайси угорь",
    "struct": "нори, рис, спайси соус, угорь",
    "price": "50",
    "category": "sushi"
  }, {
    "id": "12",
    "name": "Спайси мидии",
    "struct": "нори, рис, спайси соус, мидии",
    "price": "50",
    "category": "sushi"
  }, {
    "id": "13",
    "name": "Дункан икура",
    "struct": "нори, рис, икра лосося",
    "price": "70",
    "category": "sushi"
  }, {
    "id": "14",
    "name": "Дункан чука",
    "struct": "нори, рис, чука салат",
    "price": "35",
    "category": "sushi"
  }, {
    "id": "15",
    "name": "Пицца Пепперони",
    "struct": "сыр моцарелла, соус, салями пепперони, томаты черри, чеснок, острый перец",
    "price": "380",
    "category": "pizza"
  }, {
    "id": "16",
    "name": "Пицца Карбонара",
    "struct": "Соус томатный, сыр моцарелла, бекон, ветчина, колбаски баварские, сыр пармезан, яйцо куриное",
    "price": "370",
    "category": "pizza"
  }, {
    "id": "17",
    "name": "Пицца Маргарита",
    "struct": "сыр моцарелла, соус, базилик",
    "price": "240",
    "category": "pizza"
  }, {
    "id": "18",
    "name": "Пицца Цезарь",
    "struct": "сыр моцарелла, соус, куриное филе, томаты черри, капуста пекинская,соус цезарь,сыр пармезан.",
    "price": "390",
    "category": "pizza"
  }, {
    "id": "19",
    "name": "Бобовая лапша",
    "struct": "Лапша бобовая, овощной микс, морепродукты, тигровая креветка, терияки соус, фирменный соус ",
    "price": "240",
    "category": "pasta"
  }, {
    "id": "20",
    "name": "Лапша Карбонара",
    "struct": "Лапша удон, сливочно-чесночный соус, бекон, яичный желток, сыр пармезан",
    "price": "240",
    "category": "pasta"
  }, {
    "id": "21",
    "name": "Набор Овощной",
    "struct": "Лапша фунчоза, овощи",
    "price": "120",
    "category": "pasta"
  }, {
    "id": "22",
    "name": "Набор яичный",
    "struct": "Лапша яичная, курица, сливочно-чесночный соус",
    "price": "220",
    "category": "pasta"
  }, {
    "id": "23",
    "name": "Креветочный с авокадо",
    "struct": "коктейльные креветки, помидоры, огурцы, авокадо, тобико,японский майонез.",
    "price": "250",
    "category": "salad"
  }, {
    "id": "24",
    "name": "Греческий",
    "struct": "капуста пекинская, помидоры, огурцы, перец болгарский, сыр греческий, маслины, зелень.",
    "price": "180",
    "category": "salad"
  }, {
    "id": "25",
    "name": "Цезарь с креветками",
    "struct": "капуста пекинская ,соус цезарь, чесночные гренки, томаты черри, яйцо перепелиное, сыр пармезан, тигровые креветки.",
    "price": "280",
    "category": "salad"
  }, {
    "id": "26",
    "name": "Цезарь с курицей",
    "struct": "капуста пекинская ,соус цезарь, чесночные гренки, томаты черри, яйцо перепелиное, сыр пармезан, куриное филе.",
    "price": "250",
    "category": "salad"
  }];

  for (var _i = 0, _products = products; _i < _products.length; _i++) {
    var productItem = _products[_i];
    if (productItem.id == id) return productItem;
  }

  return false;
}
function addControlToCorsineGoods() {
  var isGoodsSection = document.querySelectorAll('.goods').length !== 0;
  if (!isGoodsSection) return;
  var goods = document.querySelectorAll('.goods__item');
  goods.forEach(function (good) {
    var goodId = +good.getAttribute('data-id');
    var corsineData = corsineGet();
    if (corsineData === null) return;

    var _iterator5 = _createForOfIteratorHelper(corsineData),
        _step5;

    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var corsineItem = _step5.value;

        if (corsineItem.id === goodId) {
          var goodBuy = good.querySelector('.goods__buy');
          appendCountControl(goodBuy, corsineItem.count);
        }
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
  });
}
function updateCorsineBlock() {
  var totalValue = 0;
  var corsineItems = document.querySelectorAll('.corsine__item');
  corsineItems.forEach(function (item) {
    var itemPrice = +item.querySelector('.corsine__item-price-value').innerHTML;
    var itemCount = +item.querySelector('.count-control__value').innerHTML;
    var itemSum = itemPrice * itemCount;
    var $itemTotal = item.querySelector('.corsine__price-value');
    console.log($itemTotal);
    $itemTotal.innerHTML = itemSum;
    totalValue += itemSum;
  });
  var $total = document.querySelector('.corsine__total-sum-value');
  $total.innerHTML = totalValue;
}
function clearCorsineBlock() {
  var isCorsine = document.querySelectorAll('.corsine').length !== 0;
  if (!isCorsine) return;
  var $corsineItems = document.querySelector('.corsine__items');
  $corsineItems.innerHTML = '';
  var $corsineFooter = document.querySelector('.corsine__footer');
  $corsineFooter.remove();
  var $corsineContent = document.querySelector('.corsine__content');
  appendMessage('Ваша корзина пуста!', $corsineContent);
  var $newCorsineFooter = getCorsineFooterBlock(0);
  $corsineContent.append($newCorsineFooter);
} // clearCorsineBlock();

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./src/js/functions.js");


if (document.querySelectorAll('.btn_disabled').length !== 0) {
  document.querySelector('.btn_disabled').addEventListener('click', function (e) {
    e.preventDefault();
  });
}

document.querySelector('.menu-toggle').addEventListener('click', function () {
  Object(_functions__WEBPACK_IMPORTED_MODULE_0__["toggleMainMenu"])();
});
window.addEventListener('scroll', function () {
  Object(_functions__WEBPACK_IMPORTED_MODULE_0__["checkUpToggle"])();
});
Object(_functions__WEBPACK_IMPORTED_MODULE_0__["indexCheckHeaderTop"])();
window.addEventListener('scroll', function () {
  Object(_functions__WEBPACK_IMPORTED_MODULE_0__["indexCheckHeaderTop"])();
});
Object(_functions__WEBPACK_IMPORTED_MODULE_0__["addControlToCorsineGoods"])();

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./src/js/common.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Sites\sushies-web-dev.github.io\src\js\common.js */"./src/js/common.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVJlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tbW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb3JzaW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21haW4uanMiXSwibmFtZXMiOlsiX2FycmF5TGlrZVRvQXJyYXkiLCJhcnIiLCJsZW4iLCJsZW5ndGgiLCJpIiwiYXJyMiIsIkFycmF5IiwibW9kdWxlIiwiZXhwb3J0cyIsIl9hcnJheVdpdGhIb2xlcyIsImlzQXJyYXkiLCJfaXRlcmFibGVUb0FycmF5TGltaXQiLCJTeW1ib2wiLCJpdGVyYXRvciIsIk9iamVjdCIsIl9hcnIiLCJfbiIsIl9kIiwiX2UiLCJ1bmRlZmluZWQiLCJfaSIsIl9zIiwibmV4dCIsImRvbmUiLCJwdXNoIiwidmFsdWUiLCJlcnIiLCJfbm9uSXRlcmFibGVSZXN0IiwiVHlwZUVycm9yIiwiYXJyYXlXaXRoSG9sZXMiLCJyZXF1aXJlIiwiaXRlcmFibGVUb0FycmF5TGltaXQiLCJ1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIm5vbkl0ZXJhYmxlUmVzdCIsIl9zbGljZWRUb0FycmF5IiwiYXJyYXlMaWtlVG9BcnJheSIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIm8iLCJtaW5MZW4iLCJuIiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJjYWxsIiwic2xpY2UiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJmcm9tIiwidGVzdCIsImFuY2hvcnMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhbmNob3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiYmxvY2tJRCIsImdldEF0dHJpYnV0ZSIsImJsb2NrT2Zmc2V0VG9wIiwicXVlcnlTZWxlY3RvciIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsIndpbmRvdyIsInNjcm9sbEJ5IiwibGVmdCIsImJlaGF2aW9yIiwiZ2VuZXJhdGVDb3JzaW5lIiwiZm9yRWFjaCIsImJ0biIsImJ0bkFkZENvcnNpbmVFdmVudCIsImJ0bkRlY0NvcnNpbmVFdmVudCIsImJ0bkRlbGV0ZUNvcnNpbmVFdmVudCIsInNob3dPcmRlck1lbnUiLCJzaG93TWVzc2FnZSIsIm1lc3NhZ2VWYWx1ZSIsInN0YXR1cyIsInRpbWUiLCJtZXNzYWdlIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImNsYXNzTGlzdCIsImFkZCIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwic2V0VGltZW91dCIsInRvZ2dsZSIsInJlbW92ZSIsInNob3dDaGFuZ2VOdW0iLCJudW0iLCJjb29yZHMiLCJibG9jayIsImJsb2NrU3RyIiwicmFuZFgiLCJnZXRSYW5kb21OdW0iLCJibG9ja1Bvc2l0aW9uWCIsIngiLCJibG9ja1Bvc2l0aW9uWSIsInkiLCJzdHlsZSIsImJvZHkiLCJ2YWxpZGF0ZVN0cmVldCIsInN0cmVldCIsInZhbGlkYXRlUGhvbmUiLCJwaG9uZSIsInZhbGlkYXRlQ29tbWVudCIsImNvbW1lbnQiLCJ2YWxpZGF0ZU9yZGVyRm9ybSIsImZvcm0iLCJwaG9uZU51bWJlciIsIm9yZGVyIiwiZXZlbnRDbG9zZU9yZGVyTWVudSIsImV2ZW50U2VuZE9yZGVyIiwiZWxlbUNsYXNzIiwidGFyZ2V0IiwiY29yc2luZURhdGEiLCJjb3JzaW5lR2V0Iiwic2VuZE9yZGVyIiwiY2xlYXJDb3JzaW5lQmxvY2siLCJjb3JzaW5lUmVtb3ZlIiwiaXNPcmRlciIsIiRvcmRlckZvcm0iLCIkbG9hZGVyIiwiJG9yZGVyQ29udGVudCIsImFwcGVuZE1lc3NhZ2UiLCJ0b2dnbGVNYWluTWVudSIsIm1lbnVMaXN0IiwiZGlzcGxheSIsImluZGV4Q2hlY2tIZWFkZXJUb3AiLCJpc0luZGV4RmlsZSIsInNjcm9sbFZhbHVlIiwicGFnZVlPZmZzZXQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJoZWFkZXJUb3BDbGFzcyIsImNoZWNrVXBUb2dnbGUiLCJpc1VwIiwidXAiLCJtaW4iLCJtYXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJjb3JzaW5lQWRkIiwiZ29vZElkIiwibmV3Q29yc2luZURhdGEiLCJpZCIsImNvdW50IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJlbnRyaWVzIiwiY29yc2luZUl0ZW0iLCJuZXdDb3JzaW5lSXRlbSIsImNvcnNpbmVEZWMiLCJzcGxpY2UiLCJjb3JzaW5lRGVsIiwicGFyc2UiLCJnZXRJdGVtIiwicmVtb3ZlSXRlbSIsImNvcnNpbmVIYXMiLCJhcHBlbmRDb3VudENvbnRyb2wiLCJlbGVtIiwiY291bnRDb250cm9sIiwiYXBwZW5kIiwiY29uc29sZSIsImxvZyIsImdvb2QiLCJjbG9zZXN0IiwibW91c2VDb29yZHMiLCJwYWdlWCIsInBhZ2VZIiwiaXNDb3JzaW5lSXRlbSIsImluY2x1ZGVzIiwiaXNHb29kSGFzQ29udHJvbCIsImNvbnRyb2xWYWx1ZSIsInVwZGF0ZUNvcnNpbmVCbG9jayIsImdvb2RCdXkiLCJhcHBlbmREZWZhdWx0Q29yc2luZUJ0biIsInNldEF0dHJpYnV0ZSIsImlzQ29yc2luZUZpbGUiLCJjb3JzaW5lQ29udGVudCIsImZvb3RlckJsb2NrIiwiZ2V0Q29yc2luZUZvb3RlckJsb2NrIiwiY29yc2luZUxpc3RCbG9jayIsImNvcnNpbmVJdGVtQmxvY2siLCJnZXRDb3JzaW5lSXRlbUJsb2NrIiwidG90YWxWYWx1ZSIsInByaWNlVmFsdWUiLCJzdW0iLCJhbGxTdW1CbG9jayIsImNvcnNpbmVCdG5zIiwicHJvZHVjdEluZiIsImdldFByb2R1Y3RJbmYiLCJjb3JzaW5lSXRlbVN1bSIsInByaWNlIiwibWVzc2FnZUJsb2NrIiwicHJvZHVjdHMiLCJwcm9kdWN0SXRlbSIsImFkZENvbnRyb2xUb0NvcnNpbmVHb29kcyIsImlzR29vZHNTZWN0aW9uIiwiZ29vZHMiLCJjb3JzaW5lSXRlbXMiLCJpdGVtIiwiaXRlbVByaWNlIiwiaXRlbUNvdW50IiwiaXRlbVN1bSIsIiRpdGVtVG90YWwiLCIkdG90YWwiLCJpc0NvcnNpbmUiLCIkY29yc2luZUl0ZW1zIiwiJGNvcnNpbmVGb290ZXIiLCIkY29yc2luZUNvbnRlbnQiLCIkbmV3Q29yc2luZUZvb3RlciJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlD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aUIsR0FBRzlCLHFCQUFxQixDQUFDLENBQUQsQ0FBL0M7QUFDQTZCLGlCQUFlLENBQUNoRCxNQUFoQixDQUF1QmlELGlCQUF2QjtBQUNELEMsQ0FFRCx1Qjs7Ozs7Ozs7Ozs7O0FDL21CQTtBQUFBO0FBQUE7O0FBSUEsSUFBR25LLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsZUFBMUIsRUFBMkMvQyxNQUEzQyxLQUFzRCxDQUF6RCxFQUE0RDtBQUMxRDhDLFVBQVEsQ0FBQ1MsYUFBVCxDQUF1QixlQUF2QixFQUF3Q04sZ0JBQXhDLENBQXlELE9BQXpELEVBQWtFLFVBQVNDLENBQVQsRUFBWTtBQUM1RUEsS0FBQyxDQUFDQyxjQUFGO0FBQ0QsR0FGRDtBQUdEOztBQUVETCxRQUFRLENBQUNTLGFBQVQsQ0FBdUIsY0FBdkIsRUFBdUNOLGdCQUF2QyxDQUF3RCxPQUF4RCxFQUFpRSxZQUFXO0FBQzFFdUUsbUVBQWM7QUFDZixDQUZEO0FBSUE5RCxNQUFNLENBQUNULGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLFlBQU07QUFDdENpRixrRUFBYTtBQUNkLENBRkQ7QUFJQVAsc0VBQW1CO0FBQ25CakUsTUFBTSxDQUFDVCxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxZQUFNO0FBQ3RDMEUsd0VBQW1CO0FBQ3BCLENBRkQ7QUFJQXdFLDJFQUF3QixHIiwiZmlsZSI6ImNvbW1vbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlMaWtlVG9BcnJheTsiLCJmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aEhvbGVzOyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47XG4gIHZhciBfYXJyID0gW107XG4gIHZhciBfbiA9IHRydWU7XG4gIHZhciBfZCA9IGZhbHNlO1xuICB2YXIgX2UgPSB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZCA9IHRydWU7XG4gICAgX2UgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2Fycjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5TGltaXQ7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVSZXN0OyIsInZhciBhcnJheVdpdGhIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aEhvbGVzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5TGltaXQgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXlMaW1pdFwiKTtcblxudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciBub25JdGVyYWJsZVJlc3QgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVJlc3RcIik7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgbm9uSXRlcmFibGVSZXN0KCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NsaWNlZFRvQXJyYXk7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5XCIpO1xuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheTsiLCIvLyBpbXBvcnQgJy4vZnVuY3Rpb25zJztcclxuLy8gaW1wb3J0ICcuL2NvcnNpbmUnO1xyXG5pbXBvcnQgJy4vbWFpbic7XHJcbi8vIGltcG9ydCAnLi9hY2NlcHRlZC1vcmRlcnMnO1xyXG5pbXBvcnQgJy4vY29yc2luZSc7XHJcblxyXG52YXIgYW5jaG9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2FbaHJlZio9XCIjXCJdJyk7XHJcbmZvciAobGV0IGFuY2hvciBvZiBhbmNob3JzKSB7XHJcbiAgYW5jaG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgXHJcbiAgICBjb25zdCBibG9ja0lEID0gYW5jaG9yLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xyXG4gICAgY29uc3QgYmxvY2tPZmZzZXRUb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJsb2NrSUQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcclxuICAgIHdpbmRvdy5zY3JvbGxCeSh7IHRvcDogKGJsb2NrT2Zmc2V0VG9wKSwgbGVmdDogMCwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xyXG4gIH0pXHJcbn0iLCIndXNlIHN0cmljdCc7XHJcbmltcG9ydCB7IGJ0bkFkZENvcnNpbmVFdmVudCwgYnRuRGVjQ29yc2luZUV2ZW50LCBidG5EZWxldGVDb3JzaW5lRXZlbnQsXHJcbiAgICAgICAgIGdlbmVyYXRlQ29yc2luZSwgc2hvd09yZGVyTWVudSB9IGZyb20gJy4vZnVuY3Rpb25zJztcclxuLy/QntGC0YDQuNGB0L7QstC60LAg0LrQsNGC0LDQu9C+0LPQsC/QvtGC0YDQuNGB0L7QstC60LAg0YHRgtCw0YLRg9GB0LAg0LrQvdC+0L/QvtC6INC60LDRgtCw0LvQvtCz0LAg0LIg0LfQsNCy0LjRgdC40LzQvtGB0YLQuCDQvtGCIGNvcnNpbmUgbG9jYWxTdG9yYWdlXHJcbmdlbmVyYXRlQ29yc2luZSgpO1xyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bl9hZGRfY29yc2luZScpLmZvckVhY2goZnVuY3Rpb24gKGJ0bikge1xyXG4gIGJ0bkFkZENvcnNpbmVFdmVudChidG4pO1xyXG59KTtcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG5fZGVjX2NvcnNpbmUnKS5mb3JFYWNoKGZ1bmN0aW9uIChidG4pIHtcclxuICBidG5EZWNDb3JzaW5lRXZlbnQoYnRuKTtcclxufSk7XHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuX2RlbF9jb3JzaW5lJykuZm9yRWFjaChmdW5jdGlvbiAoYnRuKSB7XHJcbiAgYnRuRGVsZXRlQ29yc2luZUV2ZW50KGJ0bik7XHJcbn0pO1xyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bl9vcmRlcicpLmZvckVhY2goZnVuY3Rpb24oYnRuKSB7XHJcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIHNob3dPcmRlck1lbnUoKTtcclxuICB9KTtcclxufSk7XHJcblxyXG5cclxuLy8gZnVuY3Rpb24gY2hhbmdlUHJpY2VzKCkge1xyXG4vLyAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JzaW5lJykubGVuZ3RoID09PSAwKVxyXG4vLyAgICAgcmV0dXJuXHJcblxyXG4vLyAgIGxldCB0b3RhbFN1bSA9IDA7XHJcbi8vICAgbGV0IGl0ZW1TdW0gPSAwO1xyXG4vLyAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JzaW5lX19wcmljZScpLmZvckVhY2goKHByaWNlLCBpKSA9PiB7XHJcbi8vICAgICBsZXQgZ29vZENvdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvdW50LWNvbnRyb2xfX3ZhbHVlJylbaV0uaW5uZXJIVE1MO1xyXG4vLyAgICAgaXRlbVN1bSA9IGl0ZW1QcmljZXNbaV0gKiBnb29kQ291bnQ7XHJcbi8vICAgICBwcmljZS5pbm5lckhUTUwgPSBpdGVtU3VtICsgJ9GAJztcclxuLy8gICAgIHRvdGFsU3VtICs9IGl0ZW1TdW07XHJcbi8vICAgfSk7XHJcbi8vICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvcnNpbmVfX3RvdGFsLXN1bS12YWx1ZScpLmlubmVySFRNTCA9IHRvdGFsU3VtICsgJ9GAJztcclxuLy8gfSIsImV4cG9ydCBmdW5jdGlvbiBzaG93TWVzc2FnZShtZXNzYWdlVmFsdWUsIHN0YXR1cywgdGltZSA9IDEyMDApIHtcclxuICBsZXQgbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG1lc3NhZ2UuY2xhc3NOYW1lID0gJ21lc3NhZ2UgbWVzc2FnZV9oaWRlJztcclxuXHJcbiAgaWYoc3RhdHVzID09PSAnZXJyb3InKVxyXG4gICAgbWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdtZXNzYWdlX2Vycm9yJyk7XHJcbiAgZWxzZSBpZihzdGF0dXMgPT09ICd3YXJuaW5nJylcclxuICAgIG1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnbWVzc2FnZV93YXJuaW5nJyk7XHJcblxyXG4gIG1lc3NhZ2UuaW5uZXJIVE1MID0gYDxwIGNsYXNzPVwibWVzc2FnZV9fdmFsdWVcIj4ke21lc3NhZ2VWYWx1ZX08L3A+YDtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVzc2FnZXMnKS5hcHBlbmRDaGlsZChtZXNzYWdlKTtcclxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgbWVzc2FnZS5jbGFzc0xpc3QudG9nZ2xlKCdtZXNzYWdlX2hpZGUnKTtcclxuICB9LCAxMDApO1xyXG4gIFxyXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICBtZXNzYWdlLmNsYXNzTGlzdC50b2dnbGUoJ21lc3NhZ2VfaGlkZScpO1xyXG4gICAgbWVzc2FnZS5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICB9KVxyXG4gIH0sIHRpbWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2hvd0NoYW5nZU51bShudW0sIGNvb3Jkcykge1xyXG4gIGxldCBibG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGxldCBibG9ja1N0ciA9ICcnO1xyXG4gIGJsb2NrLmNsYXNzTmFtZSA9ICdjaGFuZ2UtbnVtJztcclxuXHJcbiAgaWYobnVtID4gMCkge1xyXG4gICAgYmxvY2tTdHIgPSAnKycgKyBudW07XHJcbiAgfSBlbHNlIHtcclxuICAgIGJsb2NrU3RyID0gbnVtO1xyXG4gICAgYmxvY2suY2xhc3NMaXN0LmFkZCgnY2hhbmdlLW51bV9kZWMnKTtcclxuICB9XHJcblxyXG4gIGJsb2NrLmlubmVySFRNTCA9IGJsb2NrU3RyO1xyXG5cclxuICBsZXQgcmFuZFggPSBnZXRSYW5kb21OdW0oLTUsIDUpO1xyXG4gIGNvbnN0IGJsb2NrUG9zaXRpb25YID0gY29vcmRzLnggLSByYW5kWDtcclxuICBjb25zdCBibG9ja1Bvc2l0aW9uWSA9IGNvb3Jkcy55O1xyXG4gIGJsb2NrLnN0eWxlLmxlZnQgPSBgJHtibG9ja1Bvc2l0aW9uWH1weGA7XHJcbiAgYmxvY2suc3R5bGUudG9wID0gYCR7YmxvY2tQb3NpdGlvbll9cHhgO1xyXG5cclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGJsb2NrKTtcclxuXHJcbiAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgIGJsb2NrLnJlbW92ZSgpO1xyXG4gIH0sIDEwMDApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVTdHJlZXQoc3RyZWV0KSB7XHJcbiAgaWYoc3RyZWV0Lmxlbmd0aCA8IDUgfHwgc3RyZWV0Lmxlbmd0aCA+IDUwKVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVQaG9uZShwaG9uZSkge1xyXG4gIGlmKHBob25lLmxlbmd0aCA8IDExIHx8IHBob25lLmxlbmd0aCA+IDE3KVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVDb21tZW50KGNvbW1lbnQpIHtcclxuICBpZiggY29tbWVudC5sZW5ndGggIT09IDAgJiYgKGNvbW1lbnQubGVuZ3RoIDwgNSB8fCBjb21tZW50Lmxlbmd0aCA+IDMwMCkgKVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVPcmRlckZvcm0oZm9ybSkge1xyXG4gIGNvbnN0IHN0cmVldCA9IGZvcm0ucXVlcnlTZWxlY3RvcignLm9yZGVyLWZvcm1fX2ZpZWxkX3N0cmVldCcpO1xyXG4gIGNvbnN0IHBob25lTnVtYmVyID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcub3JkZXItZm9ybV9fZmllbGRfbnVtYmVyJyk7XHJcbiAgY29uc3QgY29tbWVudCA9IGZvcm0ucXVlcnlTZWxlY3RvcignLm9yZGVyLWZvcm1fX2ZpZWxkX2NvbW1lbnQnKTtcclxuXHJcbiAgc3RyZWV0LmNsYXNzTGlzdC5yZW1vdmUoJ29yZGVyLWZvcm1fX2ZpZWxkX2Vycm9yJyk7XHJcbiAgcGhvbmVOdW1iZXIuY2xhc3NMaXN0LnJlbW92ZSgnb3JkZXItZm9ybV9fZmllbGRfZXJyb3InKTtcclxuICBjb21tZW50LmNsYXNzTGlzdC5yZW1vdmUoJ29yZGVyLWZvcm1fX2ZpZWxkX2Vycm9yJyk7XHJcblxyXG4gIGlmKHZhbGlkYXRlU3RyZWV0KHN0cmVldC52YWx1ZSkgJiYgdmFsaWRhdGVQaG9uZShwaG9uZU51bWJlci52YWx1ZSkgJiYgdmFsaWRhdGVDb21tZW50KGNvbW1lbnQpKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9IGVsc2Uge1xyXG4gICAgc2hvd01lc3NhZ2UoJ9Cd0LXQstC10YDQvdCw0Y8g0LjQvdGE0L7RgNC80LDRhtC40Y8g0LjQu9C4INC30LDQv9C+0LvQvdC10L3RiyDQvdC1INCy0YHQtSDQv9C+0LvRjyEnLCAnZXJyb3InLCAyMDAwKTtcclxuICAgIFxyXG4gICAgaWYoIXZhbGlkYXRlU3RyZWV0KHN0cmVldC52YWx1ZSkpIHtcclxuICAgICAgc3RyZWV0LmNsYXNzTGlzdC5hZGQoJ29yZGVyLWZvcm1fX2ZpZWxkX2Vycm9yJyk7XHJcbiAgICB9XHJcbiAgICBpZighdmFsaWRhdGVQaG9uZShwaG9uZU51bWJlci52YWx1ZSkpIHtcclxuICAgICAgcGhvbmVOdW1iZXIuY2xhc3NMaXN0LmFkZCgnb3JkZXItZm9ybV9fZmllbGRfZXJyb3InKTtcclxuICAgIH1cclxuICAgIGlmKCF2YWxpZGF0ZUNvbW1lbnQoY29tbWVudC52YWx1ZSkpIHtcclxuICAgICAgY29tbWVudC5jbGFzc0xpc3QuYWRkKCdvcmRlci1mb3JtX19maWVsZF9lcnJvcicpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93T3JkZXJNZW51KCkge1xyXG4gIGxldCBvcmRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG9yZGVyLmNsYXNzTmFtZSA9ICdvcmRlcic7XHJcbiAgb3JkZXIuaW5uZXJIVE1MID0gYFxyXG4gICAgPGRpdiBjbGFzcz1cIndyYXBwZXJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm9yZGVyX19jb250ZW50XCI+XHJcbiAgICAgICAgPGgxIGNsYXNzPVwidGl0bGUgdGl0bGVfYmxhY2sgb3JkZXJfX3RpdGxlXCI+0J7RhNC+0YDQvNC70LXQvdC40LUg0LfQsNC60LDQt9CwPC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwib3JkZXItZm9ybVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm9yZGVyLWZvcm1fX2l0ZW1cIj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInN0cmVldFwiIGNsYXNzPVwib3JkZXItZm9ybV9fZmllbGQgb3JkZXItZm9ybV9fZmllbGRfc3RyZWV0XCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgcGxhY2Vob2xkZXI9XCLQo9C70LjRhtCwXCI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJvcmRlci1mb3JtX19pdGVtXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJwaG9uZS1udW1iZXJcIiBjbGFzcz1cIm9yZGVyLWZvcm1fX2ZpZWxkIG9yZGVyLWZvcm1fX2ZpZWxkX251bWJlclwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIHBsYWNlaG9sZGVyPVwi0J3QvtC80LXRgCDRgtC10LvQtdGE0L7QvdCwXCI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJvcmRlci1mb3JtX19pdGVtXCI+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwiY29tbWVudFwiIGNsYXNzPVwib3JkZXItZm9ybV9fZmllbGQgb3JkZXItZm9ybV9fZmllbGRfY29tbWVudFwiIGNvbHM9XCI0MFwiIHJvd3M9XCI1XCIgcGxhY2Vob2xkZXI9XCLQmtC+0LzQvNC10L3RgtCw0YDQuNC5ICjQvdC1INC+0LHRj9C30LDRgtC10LvRjNC90L4pXCIgcmVzaXplPVwibm9cIj48L3RleHRhcmVhPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIG9yZGVyLWZvcm1fX3N1Ym1pdFwiIHZhbHVlPVwi0J/QvtC00YLQstC10YDQtNC40YLRjCDQsNC00YDQtdGBXCI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bi1kbHQgb3JkZXJfX2Nsb3NlLWJ0blwiPjwvYnV0dG9uPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZXNzYWdlc1wiPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PmA7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvcmRlcik7XHJcblxyXG4gIGV2ZW50Q2xvc2VPcmRlck1lbnUoKTtcclxuICBldmVudFNlbmRPcmRlcigpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZXZlbnRDbG9zZU9yZGVyTWVudSgpIHtcclxuICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcub3JkZXInKS5sZW5ndGggIT09IDApIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcmRlcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICBsZXQgZWxlbUNsYXNzID0gZS50YXJnZXQuY2xhc3NOYW1lO1xyXG4gICAgICBpZihlbGVtQ2xhc3MgPT09ICdvcmRlcicgfHwgZWxlbUNsYXNzID09PSAnYnRuLWRsdCBvcmRlcl9fY2xvc2UtYnRuJykge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcmRlcicpLnJlbW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBldmVudFNlbmRPcmRlcigpIHtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3JkZXItZm9ybV9fc3VibWl0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3JkZXItZm9ybScpOyAgICBcclxuICAgIGNvbnN0IHN0cmVldCA9IGZvcm0ucXVlcnlTZWxlY3RvcignLm9yZGVyLWZvcm1fX2ZpZWxkX3N0cmVldCcpO1xyXG4gICAgY29uc3QgcGhvbmVOdW1iZXIgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5vcmRlci1mb3JtX19maWVsZF9udW1iZXInKTtcclxuICAgIGNvbnN0IGNvbW1lbnQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5vcmRlci1mb3JtX19maWVsZF9jb21tZW50Jyk7XHJcbiAgICBpZighdmFsaWRhdGVPcmRlckZvcm0oZm9ybSkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNvcnNpbmVEYXRhID0gY29yc2luZUdldCgpO1xyXG4gICAgaWYoY29yc2luZURhdGEgPT09IG51bGwpIHtcclxuICAgICAgc2hvd01lc3NhZ2UoJ9CS0LDRiNCwINC60L7RgNC30LjQvdCwINC/0YPRgdGC0LAnLCAnZXJyb3InKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbmRPcmRlcigpO1xyXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNsZWFyQ29yc2luZUJsb2NrKCk7XHJcbiAgICAgICAgY29yc2luZVJlbW92ZSgpO1xyXG4gICAgICB9LCAyMDAwKTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlbmRPcmRlcigpIHtcclxuICBjb25zdCBpc09yZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm9yZGVyJykubGVuZ3RoICE9PSAwO1xyXG4gIGlmKCFpc09yZGVyKVxyXG4gICAgcmV0dXJuO1xyXG4gIFxyXG4gIGNvbnN0ICRvcmRlckZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3JkZXItZm9ybScpO1xyXG4gICRvcmRlckZvcm0ucmVtb3ZlKCk7XHJcblxyXG4gIGNvbnN0ICRsb2FkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAkbG9hZGVyLmNsYXNzTmFtZSA9ICdsb2FkZXInO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoJGxvYWRlcik7XHJcblxyXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zdCAkb3JkZXJDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9yZGVyX19jb250ZW50Jyk7XHJcbiAgICBhcHBlbmRNZXNzYWdlKCfQktCw0YjQsCDQt9Cw0Y/QstC60LAg0YPRgdC/0LXRiNC90L4g0L7RgtC/0YDQsNCy0LvQtdC90LAhINCe0LbQuNC00LDQudGC0LUg0LfQstC+0L3QutCwLicsICRvcmRlckNvbnRlbnQpO1xyXG4gICAgJGxvYWRlci5yZW1vdmUoKTtcclxuICB9LCAyMDAwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZU1haW5NZW51KCkge1xyXG4gIGxldCB0b2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS10b2dnbGUnKTtcclxuICBsZXQgbWVudUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LW1lbnVfX2xpc3QnKTtcclxuICBpZihtZW51TGlzdC5zdHlsZS5kaXNwbGF5ID09PSAnZmxleCcpIHtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgIG1lbnVMaXN0LnN0eWxlLmRpc3BsYXkgPSAnJztcclxuICAgIH0sIDIwMCk7XHJcbiAgICB0b2dnbGUuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS10b2dnbGVfYWN0aXZlJyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgIG1lbnVMaXN0LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICB9LCAyMDApO1xyXG4gICAgdG9nZ2xlLmNsYXNzTGlzdC5hZGQoJ21lbnUtdG9nZ2xlX2FjdGl2ZScpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluZGV4Q2hlY2tIZWFkZXJUb3AoKSB7XHJcbiAgY29uc3QgaXNJbmRleEZpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhZGVyX19jZW50ZXInKS5sZW5ndGggIT09IDA7XHJcbiAgaWYoIWlzSW5kZXhGaWxlKVxyXG4gICAgcmV0dXJuO1xyXG5cclxuICBsZXQgc2Nyb2xsVmFsdWUgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcclxuICBsZXQgaGVhZGVyVG9wQ2xhc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX190b3AnKS5jbGFzc05hbWU7XHJcbiAgaWYoc2Nyb2xsVmFsdWUgPj0gNjAgJiYgIGhlYWRlclRvcENsYXNzID09PSAnaGVhZGVyX190b3AnKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX190b3AnKS5jbGFzc0xpc3QuYWRkKCdoZWFkZXJfX3RvcF9maXhlZCcpO1xyXG4gIH0gZWxzZSBpZihzY3JvbGxWYWx1ZSA8PSAzMCAmJiBoZWFkZXJUb3BDbGFzcyAhPT0gJ2hlYWRlcl9fdG9wJykge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fdG9wJykuY2xhc3NMaXN0LnJlbW92ZSgnaGVhZGVyX190b3BfZml4ZWQnKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja1VwVG9nZ2xlKCkge1xyXG4gIGNvbnN0IGlzVXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudXAnKS5sZW5ndGggIT09IDA7XHJcbiAgaWYoIWlzVXApXHJcbiAgICByZXR1cm5cclxuXHJcbiAgY29uc3QgdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXAnKTtcclxuICBpZih3aW5kb3cucGFnZVlPZmZzZXQgPCAxMDAwICYmIHVwLmNsYXNzTmFtZSA9PT0gJ3VwJykge1xyXG4gICAgdXAuY2xhc3NMaXN0LmFkZCgndXBfaGlkZScpO1xyXG4gIH0gZWxzZSBpZih3aW5kb3cucGFnZVlPZmZzZXQgPiAxMDAwKXtcclxuICAgIHVwLmNsYXNzTGlzdC5yZW1vdmUoJ3VwX2hpZGUnKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21OdW0obWluLCBtYXgpIHtcclxuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvcnNpbmVBZGQoZ29vZElkKSB7XHJcbiAgaWYgKCFnb29kSWQpXHJcbiAgICByZXR1cm47XHJcblxyXG4gIGxldCBjb3JzaW5lRGF0YSA9IGNvcnNpbmVHZXQoKTtcclxuICBpZiAoY29yc2luZURhdGEgPT09IG51bGwpIHtcclxuICAgIGNvbnN0IG5ld0NvcnNpbmVEYXRhID0gW3tcclxuICAgICAgaWQ6IGdvb2RJZCxcclxuICAgICAgY291bnQ6IDFcclxuICAgIH1dO1xyXG5cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjb3JzaW5lJywgSlNPTi5zdHJpbmdpZnkobmV3Q29yc2luZURhdGEpKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGZvciAobGV0IFtpLCBjb3JzaW5lSXRlbV0gb2YgY29yc2luZURhdGEuZW50cmllcygpKSB7XHJcbiAgICBpZiAoY29yc2luZUl0ZW0uaWQgPT09IGdvb2RJZCkge1xyXG4gICAgICBjb3JzaW5lRGF0YVtpXS5jb3VudCsrO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY29yc2luZScsIEpTT04uc3RyaW5naWZ5KGNvcnNpbmVEYXRhKSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IG5ld0NvcnNpbmVJdGVtID0ge1xyXG4gICAgaWQ6IGdvb2RJZCxcclxuICAgIGNvdW50OiAxXHJcbiAgfVxyXG5cclxuICBjb3JzaW5lRGF0YS5wdXNoKG5ld0NvcnNpbmVJdGVtKTtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY29yc2luZScsIEpTT04uc3RyaW5naWZ5KGNvcnNpbmVEYXRhKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb3JzaW5lRGVjKGdvb2RJZCkge1xyXG4gIGlmICghZ29vZElkKVxyXG4gICAgcmV0dXJuO1xyXG5cclxuICBsZXQgY29yc2luZURhdGEgPSBjb3JzaW5lR2V0KCk7XHJcbiAgaWYgKGNvcnNpbmVEYXRhID09PSBudWxsKVxyXG4gICAgcmV0dXJuO1xyXG5cclxuICBmb3IgKGxldCBbaSwgY29yc2luZUl0ZW1dIG9mIGNvcnNpbmVEYXRhLmVudHJpZXMoKSkge1xyXG4gICAgaWYgKGNvcnNpbmVJdGVtLmlkID09PSBnb29kSWQpIHtcclxuICAgICAgaWYgKGNvcnNpbmVJdGVtLmNvdW50ID4gMSlcclxuICAgICAgICBjb3JzaW5lRGF0YVtpXS5jb3VudC0tO1xyXG4gICAgICBlbHNlXHJcbiAgICAgICAgY29yc2luZURhdGEuc3BsaWNlKGksIDEpO1xyXG5cclxuICAgICAgaWYgKGNvcnNpbmVEYXRhLmxlbmd0aCA9PT0gMClcclxuICAgICAgICBjb3JzaW5lUmVtb3ZlKCk7XHJcbiAgICAgIGVsc2VcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY29yc2luZScsIEpTT04uc3RyaW5naWZ5KGNvcnNpbmVEYXRhKSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb3JzaW5lRGVsKGdvb2RJZCkge1xyXG4gIGlmICghZ29vZElkKVxyXG4gICAgcmV0dXJuO1xyXG5cclxuICBsZXQgY29yc2luZURhdGEgPSBjb3JzaW5lR2V0KCk7XHJcbiAgaWYgKGNvcnNpbmVEYXRhID09PSBudWxsKVxyXG4gICAgcmV0dXJuO1xyXG5cclxuICBmb3IgKGxldCBbaSwgY29yc2luZUl0ZW1dIG9mIGNvcnNpbmVEYXRhLmVudHJpZXMoKSkge1xyXG4gICAgaWYgKGNvcnNpbmVJdGVtLmlkID09PSBnb29kSWQpIHtcclxuICAgICAgY29yc2luZURhdGEuc3BsaWNlKGksIDEpO1xyXG5cclxuICAgICAgaWYgKGNvcnNpbmVEYXRhLmxlbmd0aCA9PT0gMClcclxuICAgICAgICBjb3JzaW5lUmVtb3ZlKCk7XHJcbiAgICAgIGVsc2VcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY29yc2luZScsIEpTT04uc3RyaW5naWZ5KGNvcnNpbmVEYXRhKSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb3JzaW5lR2V0KCkge1xyXG4gIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb3JzaW5lJykpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29yc2luZVJlbW92ZSgpIHtcclxuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnY29yc2luZScpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29yc2luZUhhcyhnb29kSWQpIHtcclxuICBjb25zdCBjb3JzaW5lRGF0YSA9IGNvcnNpbmVHZXQoKTtcclxuXHJcbiAgaWYoY29yc2luZURhdGEgPT09IG51bGwpXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gIGZvcihsZXQgY29yc2luZUl0ZW0gb2YgY29yc2luZURhdGEpIHtcclxuICAgIGlmKGNvcnNpbmVJdGVtLmlkID09PSBnb29kSWQpXHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kQ291bnRDb250cm9sKGVsZW0sIGNvdW50ID0gMSkge1xyXG4gIGVsZW0ucXVlcnlTZWxlY3RvcignLmJ0bl9hZGRfY29yc2luZScpLnJlbW92ZSgpO1xyXG5cclxuICBjb25zdCBjb3VudENvbnRyb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb3VudENvbnRyb2wuY2xhc3NOYW1lID0gJ2NvdW50LWNvbnRyb2wgZ29vZHNfX2NvdW50LWNvbnRyb2wnO1xyXG4gIGNvdW50Q29udHJvbC5pbm5lckhUTUwgPSBgXHJcbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNvdW50LWNvbnRyb2xfX2J0biBjb3VudC1jb250cm9sX19idG5fdXAgYnRuX2FkZF9jb3JzaW5lXCI+XHJcbiAgICAgIDxpIGNsYXNzPVwiZmEgZmEtcGx1c1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgIDwvYnV0dG9uPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJjb3VudC1jb250cm9sX192YWx1ZVwiPiR7Y291bnR9PC9zcGFuPlxyXG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjb3VudC1jb250cm9sX19idG4gY291bnQtY29udHJvbF9fYnRuX2Rvd24gYnRuX2RlY19jb3JzaW5lXCI+XHJcbiAgICAgIDxpIGNsYXNzPVwiZmEgZmEtbWludXNcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcbiAgICA8L2J1dHRvbj5gO1xyXG5cclxuICBlbGVtLmFwcGVuZChjb3VudENvbnRyb2wpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYnRuQWRkQ29yc2luZUV2ZW50KGJ0bikge1xyXG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhjb3JzaW5lR2V0KCkpO1xyXG5cclxuICAgIGNvbnN0IGdvb2QgPSBidG4uY2xvc2VzdCgnLnByb2R1Y3QtaXRlbScpO1xyXG4gICAgY29uc3QgZ29vZElkID0gK2dvb2QuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XHJcblxyXG4gICAgY29yc2luZUFkZChnb29kSWQpO1xyXG5cclxuICAgIGNvbnN0IG1vdXNlQ29vcmRzID0ge1xyXG4gICAgICB4OiBlLnBhZ2VYLFxyXG4gICAgICB5OiBlLnBhZ2VZXHJcbiAgICB9XHJcbiAgICBzaG93Q2hhbmdlTnVtKDEsIG1vdXNlQ29vcmRzKTtcclxuXHJcbiAgICBjb25zdCBpc0NvcnNpbmVJdGVtID0gZ29vZC5jbGFzc05hbWUuaW5jbHVkZXMoJ2NvcnNpbmVfX2l0ZW0nKTtcclxuICAgIGNvbnN0IGlzR29vZEhhc0NvbnRyb2wgPSBnb29kLnF1ZXJ5U2VsZWN0b3IoJy5jb3VudC1jb250cm9sJykgfHwgbnVsbDtcclxuICAgIGlmIChpc0dvb2RIYXNDb250cm9sKSB7XHJcbiAgICAgIGNvbnN0IGNvbnRyb2xWYWx1ZSA9ICtnb29kLnF1ZXJ5U2VsZWN0b3IoJy5jb3VudC1jb250cm9sX192YWx1ZScpLmlubmVySFRNTDtcclxuICAgICAgZ29vZC5xdWVyeVNlbGVjdG9yKCcuY291bnQtY29udHJvbF9fdmFsdWUnKS5pbm5lckhUTUwgPSBjb250cm9sVmFsdWUgKyAxO1xyXG4gICAgICBpZihpc0NvcnNpbmVJdGVtKVxyXG4gICAgICAgIHVwZGF0ZUNvcnNpbmVCbG9jaygpO1xyXG5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdvb2RCdXkgPSBnb29kLnF1ZXJ5U2VsZWN0b3IoJy5nb29kc19fYnV5Jyk7XHJcbiAgICBhcHBlbmRDb3VudENvbnRyb2woZ29vZEJ1eSk7XHJcbiAgICBcclxuICAgIGdvb2RCdXkucXVlcnlTZWxlY3RvckFsbCgnLmJ0bl9hZGRfY29yc2luZScpLmZvckVhY2goZnVuY3Rpb24gKGJ0bikge1xyXG4gICAgICBidG5BZGRDb3JzaW5lRXZlbnQoYnRuKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGdvb2RCdXkucXVlcnlTZWxlY3RvckFsbCgnLmJ0bl9kZWNfY29yc2luZScpLmZvckVhY2goZnVuY3Rpb24gKGJ0bikge1xyXG4gICAgICBidG5EZWNDb3JzaW5lRXZlbnQoYnRuKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmKGlzQ29yc2luZUl0ZW0pXHJcbiAgICAgIHVwZGF0ZUNvcnNpbmVCbG9jaygpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYnRuRGVjQ29yc2luZUV2ZW50KGJ0bikge1xyXG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhjb3JzaW5lR2V0KCkpO1xyXG5cclxuICAgIGNvbnN0IGdvb2QgPSBidG4uY2xvc2VzdCgnLnByb2R1Y3QtaXRlbScpO1xyXG4gICAgY29uc3QgZ29vZElkID0gK2dvb2QuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XHJcblxyXG4gICAgY29yc2luZURlYyhnb29kSWQpO1xyXG4gICAgY29uc3QgbW91c2VDb29yZHMgPSB7XHJcbiAgICAgIHg6IGUucGFnZVgsXHJcbiAgICAgIHk6IGUucGFnZVlcclxuICAgIH1cclxuICAgIHNob3dDaGFuZ2VOdW0oLTEsIG1vdXNlQ29vcmRzKTtcclxuXHJcbiAgICBjb25zdCBpc0NvcnNpbmVJdGVtID0gZ29vZC5jbGFzc05hbWUuaW5jbHVkZXMoJ2NvcnNpbmVfX2l0ZW0nKTtcclxuICAgIGNvbnN0IGNvbnRyb2xWYWx1ZSA9ICtnb29kLnF1ZXJ5U2VsZWN0b3IoJy5jb3VudC1jb250cm9sX192YWx1ZScpLmlubmVySFRNTDtcclxuICAgIGlmIChjb250cm9sVmFsdWUgPiAxKSB7XHJcbiAgICAgIGdvb2QucXVlcnlTZWxlY3RvcignLmNvdW50LWNvbnRyb2xfX3ZhbHVlJykuaW5uZXJIVE1MID0gY29udHJvbFZhbHVlIC0gMTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmKGlzQ29yc2luZUl0ZW0pIHtcclxuICAgICAgICBnb29kLnJlbW92ZSgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IGNvdW50Q29udHJvbCA9IGdvb2QucXVlcnlTZWxlY3RvcignLmNvdW50LWNvbnRyb2wnKTtcclxuICAgICAgICBjb3VudENvbnRyb2wucmVtb3ZlKCk7XHJcbiAgICAgICAgY29uc3QgZ29vZEJ1eSA9IGdvb2QucXVlcnlTZWxlY3RvcignLmdvb2RzX19idXknKTtcclxuICAgICAgICBhcHBlbmREZWZhdWx0Q29yc2luZUJ0bihnb29kQnV5KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmKGlzQ29yc2luZUl0ZW0pXHJcbiAgICAgIHVwZGF0ZUNvcnNpbmVCbG9jaygpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYnRuRGVsZXRlQ29yc2luZUV2ZW50KGJ0bikge1xyXG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBjb25zdCBnb29kID0gYnRuLmNsb3Nlc3QoJy5wcm9kdWN0LWl0ZW0nKTtcclxuICAgIGNvbnN0IGdvb2RJZCA9ICtnb29kLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xyXG5cclxuICAgIGNvcnNpbmVSZW1vdmUoZ29vZElkKTtcclxuXHJcbiAgICBjb25zdCBtb3VzZUNvb3JkcyA9IHtcclxuICAgICAgeDogZS5wYWdlWCxcclxuICAgICAgeTogZS5wYWdlWVxyXG4gICAgfVxyXG4gICAgc2hvd0NoYW5nZU51bSgtMSwgbW91c2VDb29yZHMpO1xyXG5cclxuICAgIGNvbnN0IGNvbnRyb2xWYWx1ZSA9ICtnb29kLnF1ZXJ5U2VsZWN0b3IoJy5jb3VudC1jb250cm9sX192YWx1ZScpLmlubmVySFRNTDtcclxuICAgIGNvbnN0IGlzQ29yc2luZUl0ZW0gPSBnb29kLmNsYXNzTmFtZS5pbmNsdWRlcygnY29yc2luZV9faXRlbScpO1xyXG4gICAgaWYoaXNDb3JzaW5lSXRlbSkge1xyXG4gICAgICBnb29kLnJlbW92ZSgpO1xyXG4gICAgICB1cGRhdGVDb3JzaW5lQmxvY2soKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZERlZmF1bHRDb3JzaW5lQnRuKGVsZW0pIHtcclxuICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XHJcbiAgYnRuLmNsYXNzTmFtZSA9ICdidG5fYWRkX2NvcnNpbmUgZ29vZHNfX2FkZC1jb3JzaW5lLWJ0bic7XHJcbiAgYnRuLnZhbHVlID0gXCLQkiDQutC+0YDQt9C40L3Rg1wiO1xyXG5cclxuICBidG5BZGRDb3JzaW5lRXZlbnQoYnRuKTtcclxuXHJcbiAgZWxlbS5hcHBlbmQoYnRuKTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUNvcnNpbmUoKSB7XHJcbiAgY29uc3QgaXNDb3JzaW5lRmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JzaW5lJykubGVuZ3RoICE9PSAwO1xyXG4gIGlmICghaXNDb3JzaW5lRmlsZSlcclxuICAgIHJldHVybjtcclxuXHJcbiAgY29uc3QgY29yc2luZURhdGEgPSBjb3JzaW5lR2V0KCk7XHJcbiAgY29uc3QgY29yc2luZUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29yc2luZV9fY29udGVudCcpO1xyXG5cclxuICBpZiAoY29yc2luZURhdGEgPT09IG51bGwpIHtcclxuICAgIGFwcGVuZE1lc3NhZ2UoJ9CS0LDRiNCwINC60L7RgNC30LjQvdCwINC/0YPRgdGC0LAhJywgY29yc2luZUNvbnRlbnQpO1xyXG4gICAgY29uc3QgZm9vdGVyQmxvY2sgPSBnZXRDb3JzaW5lRm9vdGVyQmxvY2soMCk7XHJcbiAgICBjb3JzaW5lQ29udGVudC5hcHBlbmQoZm9vdGVyQmxvY2spO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY29yc2luZUxpc3RCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3JzaW5lX19pdGVtcycpO1xyXG4gIGNvcnNpbmVEYXRhLmZvckVhY2goZnVuY3Rpb24gKGNvcnNpbmVJdGVtKSB7XHJcbiAgICBjb25zdCBjb3JzaW5lSXRlbUJsb2NrID0gZ2V0Q29yc2luZUl0ZW1CbG9jayhjb3JzaW5lSXRlbSk7XHJcbiAgICBjb3JzaW5lTGlzdEJsb2NrLmFwcGVuZChjb3JzaW5lSXRlbUJsb2NrKTtcclxuICB9KTtcclxuXHJcbiAgLy8gY29yc2luZUxpc3RCbG9jay5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuX2FkZF9jb3JzaW5lJykuZm9yRWFjaChmdW5jdGlvbihidG4pIHtcclxuICAvLyAgIGJ0bkFkZENvcnNpbmVFdmVudChidG4pO1xyXG4gIC8vIH0pO1xyXG4gIC8vIGNvcnNpbmVMaXN0QmxvY2sucXVlcnlTZWxlY3RvckFsbCgnLmJ0bl9kZWNfY29yc2luZScpLmZvckVhY2goZnVuY3Rpb24oYnRuKSB7XHJcbiAgLy8gICBidG5EZWNDb3JzaW5lRXZlbnQoYnRuKTtcclxuICAvLyB9KTtcclxuXHJcbiAgbGV0IHRvdGFsVmFsdWUgPSAwO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JzaW5lX19wcmljZS12YWx1ZScpLmZvckVhY2goZnVuY3Rpb24ocHJpY2VWYWx1ZSkge1xyXG4gICAgdG90YWxWYWx1ZSArPSArcHJpY2VWYWx1ZS5pbm5lckhUTUw7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGZvb3RlckJsb2NrID0gZ2V0Q29yc2luZUZvb3RlckJsb2NrKHRvdGFsVmFsdWUpO1xyXG4gIGNvcnNpbmVDb250ZW50LmFwcGVuZChmb290ZXJCbG9jayk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDb3JzaW5lRm9vdGVyQmxvY2soc3VtKSB7XHJcbiAgY29uc3QgYWxsU3VtQmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgYWxsU3VtQmxvY2suY2xhc3NOYW1lID0gJ2NvcnNpbmVfX3RvdGFsLXN1bSc7XHJcbiAgYWxsU3VtQmxvY2suaW5uZXJIVE1MID0gYNCe0LHRidCw0Y8g0YHRg9C80LzQsDogPHNwYW4gY2xhc3M9XCJjb3JzaW5lX190b3RhbC1zdW0tdmFsdWVcIj4ke3N1bX08L3NwYW4+INGA0YPQsS5gO1xyXG5cclxuXHJcbiAgY29uc3QgY29yc2luZUJ0bnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb3JzaW5lQnRucy5jbGFzc05hbWUgPSAnY29yc2luZV9fYnRucyc7XHJcbiAgXHJcbiAgaWYoc3VtID4gMCkge1xyXG4gICAgY29yc2luZUJ0bnMuaW5uZXJIVE1MID0gYFxyXG4gICAgPGEgaHJlZj1cIi9cIiBjbGFzcz1cImJ0biBidG5fZ3JlZW4gY29yc2luZV9fYnRuLXJldHVyblwiPtCS0LXRgNC90YPRgtGM0YHRjyDQsiDQvNC10L3RjjwvYT5cclxuICAgIDxidXR0b24gY2xhc3M9XCJidG4gb3JkZXItbGluayBjb3JzaW5lX19idG4tb3JkZXIgYnRuX29yZGVyXCI+0KHQtNC10LvQsNGC0Ywg0LfQsNC60LDQtzwvYnV0dG9uPmA7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvcnNpbmVCdG5zLmlubmVySFRNTCA9IGBcclxuICAgIDxhIGhyZWY9XCIvXCIgY2xhc3M9XCJidG4gYnRuX2dyZWVuIGNvcnNpbmVfX2J0bi1yZXR1cm5cIj7QktC10YDQvdGD0YLRjNGB0Y8g0LIg0LzQtdC90Y48L2E+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bl9kaXNhYmxlZCBvcmRlci1saW5rXCI+0KHQtNC10LvQsNGC0Ywg0LfQsNC60LDQtzwvYnV0dG9uPmA7XHJcbiAgfVxyXG5cclxuXHJcbiAgY29uc3QgZm9vdGVyQmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBmb290ZXJCbG9jay5jbGFzc05hbWUgPSAnY29yc2luZV9fZm9vdGVyJztcclxuICBmb290ZXJCbG9jay5hcHBlbmRDaGlsZChhbGxTdW1CbG9jayk7XHJcbiAgZm9vdGVyQmxvY2suYXBwZW5kQ2hpbGQoY29yc2luZUJ0bnMpO1xyXG5cclxuICByZXR1cm4gZm9vdGVyQmxvY2s7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDb3JzaW5lSXRlbUJsb2NrKGNvcnNpbmVJdGVtKSB7XHJcbiAgY29uc3QgcHJvZHVjdEluZiA9IGdldFByb2R1Y3RJbmYoY29yc2luZUl0ZW0uaWQpO1xyXG4gIGNvbnN0IGNvcnNpbmVJdGVtU3VtID0gY29yc2luZUl0ZW0uY291bnQgKiArcHJvZHVjdEluZi5wcmljZTtcclxuICBjb25zdCBjb3JzaW5lSXRlbUJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29yc2luZUl0ZW1CbG9jay5jbGFzc05hbWUgPSAnY29yc2luZV9faXRlbSBwcm9kdWN0LWl0ZW0nO1xyXG4gIGNvcnNpbmVJdGVtQmxvY2suc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgY29yc2luZUl0ZW0uaWQpO1xyXG4gIGNvcnNpbmVJdGVtQmxvY2suaW5uZXJIVE1MID0gYFxyXG4gICAgPGRpdiBjbGFzcz1cImNvcnNpbmVfX2JnXCI+XHJcbiAgICAgIDxpbWcgc3JjPVwiZGlzdC9pbWcvZ29vZHMvJHtwcm9kdWN0SW5mLmlkfS5qcGdcIiBhbHQ9XCJcIiBjbGFzcz1cImNvcnNpbmVfX2ltZ1wiPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29yc2luZV9fbWFpblwiPlxyXG4gICAgICA8cCBjbGFzcz1cImNvcnNpbmVfX25hbWVcIj4ke3Byb2R1Y3RJbmYubmFtZX08L3A+XHJcbiAgICAgIDxwIGNsYXNzPVwiY29yc2luZV9faXRlbS1wcmljZVwiPjxzcGFuIGNsYXNzPVwiY29yc2luZV9faXRlbS1wcmljZS12YWx1ZVwiPiR7cHJvZHVjdEluZi5wcmljZX08L3NwYW4+INGA0YPQsS48L3A+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb3VudC1jb250cm9sIGNvcnNpbmVfX2NvdW50LWNvbnRyb2xcIj5cclxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjb3VudC1jb250cm9sX19idG4gY291bnQtY29udHJvbF9fYnRuX3VwIGJ0bl9hZGRfY29yc2luZVwiPlxyXG4gICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtcGx1c1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiY291bnQtY29udHJvbF9fdmFsdWVcIj4ke2NvcnNpbmVJdGVtLmNvdW50fTwvc3Bhbj5cclxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjb3VudC1jb250cm9sX19idG4gY291bnQtY29udHJvbF9fYnRuX2Rvd24gYnRuX2RlY19jb3JzaW5lXCI+XHJcbiAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1taW51c1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxwIGNsYXNzPVwiY29yc2luZV9fcHJpY2VcIj48c3BhbiBjbGFzcz1cImNvcnNpbmVfX3ByaWNlLXZhbHVlXCI+JHtjb3JzaW5lSXRlbVN1bX08L3NwYW4+INGA0YPQsS48L3A+XHJcbiAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuLWRsdCBjb3JzaW5lX19idG4tZGx0IGJ0bl9kZWxfY29yc2luZVwiIHZhbHVlPVwiWFwiIHRpdGxlPVwi0KPQsdGA0LDRgtGMINC40Lcg0LrQvtGA0LfQuNC90YtcIj5gO1xyXG5cclxuICByZXR1cm4gY29yc2luZUl0ZW1CbG9jaztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZE1lc3NhZ2UobWVzc2FnZSwgZWxlbSkge1xyXG4gIGNvbnN0IG1lc3NhZ2VCbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBtZXNzYWdlQmxvY2suY2xhc3NOYW1lID0gJ3RleHQtbWVzc2FnZSc7XHJcbiAgbWVzc2FnZUJsb2NrLmlubmVySFRNTCA9IG1lc3NhZ2U7XHJcblxyXG4gIGVsZW0uYXBwZW5kKG1lc3NhZ2VCbG9jayk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9kdWN0SW5mKGlkKSB7XHJcbiAgY29uc3QgcHJvZHVjdHMgPSBbe1wiaWRcIjpcIjFcIixcIm5hbWVcIjpcItCa0LDQu9C40YTQvtGA0L3QuNGPINGC0YPQvdC10YZcIixcInN0cnVjdFwiOlwi0KDQuNGBLCDQvdC+0YDQuCwg0L7Qs9GD0YDQtdGGLCDRgdGL0YAsINCw0LLQvtC60LDQtNC+LCDRgtGD0L3QtdGGLCDRhNC40YDQvNC10L3QvdGL0Lkg0YHQvtGD0YEsINC60YPQvdC20YPRgiwg0YLQvtCx0LjQutC+XCIsXCJwcmljZVwiOlwiMjkwXCIsXCJjYXRlZ29yeVwiOlwicm9sbFwifSx7XCJpZFwiOlwiMlwiLFwibmFtZVwiOlwi0JrQsNC70LjRhNC+0YDQvdC40Y8g0YPQs9C+0YDRjFwiLFwic3RydWN0XCI6XCLQoNC40YEsINC90L7RgNC4LCDQvtCz0YPRgNC10YYsINC80LDQudC+0L3QtdC3LCDQsNCy0L7QutCw0LTQviwg0YPQs9C+0YDRjCwg0YLQvtCx0LjQutC+XCIsXCJwcmljZVwiOlwiMjcwXCIsXCJjYXRlZ29yeVwiOlwicm9sbFwifSx7XCJpZFwiOlwiM1wiLFwibmFtZVwiOlwi0KLQvtCx0LjQutC+INGD0LPQvtGA0YxcIixcInN0cnVjdFwiOlwi0KDQuNGBLCDQvdC+0YDQuCwg0L7Qs9GD0YDQtdGGLCDRgdGL0YAgXFxcItCk0LjQu9Cw0LTQtdC70YzRhNC40Y9cXFwiLCDRgtC+0LHQuNC60L4sINC30LXQu9C10L3Ri9C5INC70YPQulwiLFwicHJpY2VcIjpcIjI3MFwiLFwiY2F0ZWdvcnlcIjpcIlwifSx7XCJpZFwiOlwiNFwiLFwibmFtZVwiOlwi0KTQuNC70LDQtNC10LvRjNGE0LjRj1wiLFwic3RydWN0XCI6XCLQoNC40YEsINC90L7RgNC4LCDRgdGL0YAgXFxcItCk0LjQu9Cw0LTQtdC70YzRhNC40Y9cXFwiLCDQvtCz0YPRgNC10YYsINC70L7RgdC+0YHRjFwiLFwicHJpY2VcIjpcIjI1MFwiLFwiY2F0ZWdvcnlcIjpcInJvbGxcIn0se1wiaWRcIjpcIjVcIixcIm5hbWVcIjpcItCh0LDQutGD0YDQsFwiLFwic3RydWN0XCI6XCLQoNC40YEsINC70LjRgdGCINGC0L7RhNGDLCDRgdGL0YAgXFxcItCk0LjQu9Cw0LTQtdC70YzRhNC40Y9cXFwiLCDRg9Cz0L7RgNGMXCIsXCJwcmljZVwiOlwiMjcwXCIsXCJjYXRlZ29yeVwiOlwicm9sbFwifSx7XCJpZFwiOlwiNlwiLFwibmFtZVwiOlwi0J/QuNGA0LDQvNC40LTQsFwiLFwic3RydWN0XCI6XCLQoNC40YEsINC90L7RgNC4LCDRgdGL0YAgXFxcItCk0LjQu9Cw0LTQtdC70YzRhNC40Y9cXFwiLCDQvtC80LvQtdGCLCDRgtC+0LHQuNC60L4sINGD0LPQvtGA0YwsINC70L7RgdC+0YHRjFwiLFwicHJpY2VcIjpcIjI3MFwiLFwiY2F0ZWdvcnlcIjpcInJvbGxcIn0se1wiaWRcIjpcIjdcIixcIm5hbWVcIjpcItCb0L7RgdC+0YHRjFwiLFwic3RydWN0XCI6XCLRgNC40YEsINC70L7RgdC+0YHRjFwiLFwicHJpY2VcIjpcIjUwXCIsXCJjYXRlZ29yeVwiOlwic3VzaGlcIn0se1wiaWRcIjpcIjhcIixcIm5hbWVcIjpcItCa0L7Qv9GH0LXQvdC90YvQuSDQu9C+0YHQvtGB0YxcIixcInN0cnVjdFwiOlwi0YDQuNGBLCDQutC+0L/Rh9C10L3Ri9C5INC70L7RgdC+0YHRjFwiLFwicHJpY2VcIjpcIjYwXCIsXCJjYXRlZ29yeVwiOlwic3VzaGlcIn0se1wiaWRcIjpcIjlcIixcIm5hbWVcIjpcItCa0YDQtdCy0LXRgtC60LBcIixcInN0cnVjdFwiOlwi0YDQuNGBLCDQutGA0LXQstC10YLQutCwXCIsXCJwcmljZVwiOlwiNjBcIixcImNhdGVnb3J5XCI6XCJzdXNoaVwifSx7XCJpZFwiOlwiMTBcIixcIm5hbWVcIjpcItCh0L/QsNC50YHQuCDQu9C+0YHQvtGB0YxcIixcInN0cnVjdFwiOlwi0L3QvtGA0LgsINGA0LjRgSwg0YHQv9Cw0LnRgdC4INGB0L7Rg9GBLCDQu9C+0YHQvtGB0YxcIixcInByaWNlXCI6XCI1MFwiLFwiY2F0ZWdvcnlcIjpcInN1c2hpXCJ9LHtcImlkXCI6XCIxMVwiLFwibmFtZVwiOlwi0KHQv9Cw0LnRgdC4INGD0LPQvtGA0YxcIixcInN0cnVjdFwiOlwi0L3QvtGA0LgsINGA0LjRgSwg0YHQv9Cw0LnRgdC4INGB0L7Rg9GBLCDRg9Cz0L7RgNGMXCIsXCJwcmljZVwiOlwiNTBcIixcImNhdGVnb3J5XCI6XCJzdXNoaVwifSx7XCJpZFwiOlwiMTJcIixcIm5hbWVcIjpcItCh0L/QsNC50YHQuCDQvNC40LTQuNC4XCIsXCJzdHJ1Y3RcIjpcItC90L7RgNC4LCDRgNC40YEsINGB0L/QsNC50YHQuCDRgdC+0YPRgSwg0LzQuNC00LjQuFwiLFwicHJpY2VcIjpcIjUwXCIsXCJjYXRlZ29yeVwiOlwic3VzaGlcIn0se1wiaWRcIjpcIjEzXCIsXCJuYW1lXCI6XCLQlNGD0L3QutCw0L0g0LjQutGD0YDQsFwiLFwic3RydWN0XCI6XCLQvdC+0YDQuCwg0YDQuNGBLCDQuNC60YDQsCDQu9C+0YHQvtGB0Y9cIixcInByaWNlXCI6XCI3MFwiLFwiY2F0ZWdvcnlcIjpcInN1c2hpXCJ9LHtcImlkXCI6XCIxNFwiLFwibmFtZVwiOlwi0JTRg9C90LrQsNC9INGH0YPQutCwXCIsXCJzdHJ1Y3RcIjpcItC90L7RgNC4LCDRgNC40YEsINGH0YPQutCwINGB0LDQu9Cw0YJcIixcInByaWNlXCI6XCIzNVwiLFwiY2F0ZWdvcnlcIjpcInN1c2hpXCJ9LHtcImlkXCI6XCIxNVwiLFwibmFtZVwiOlwi0J/QuNGG0YbQsCDQn9C10L/Qv9C10YDQvtC90LhcIixcInN0cnVjdFwiOlwi0YHRi9GAINC80L7RhtCw0YDQtdC70LvQsCwg0YHQvtGD0YEsINGB0LDQu9GP0LzQuCDQv9C10L/Qv9C10YDQvtC90LgsINGC0L7QvNCw0YLRiyDRh9C10YDRgNC4LCDRh9C10YHQvdC+0LosINC+0YHRgtGA0YvQuSDQv9C10YDQtdGGXCIsXCJwcmljZVwiOlwiMzgwXCIsXCJjYXRlZ29yeVwiOlwicGl6emFcIn0se1wiaWRcIjpcIjE2XCIsXCJuYW1lXCI6XCLQn9C40YbRhtCwINCa0LDRgNCx0L7QvdCw0YDQsFwiLFwic3RydWN0XCI6XCLQodC+0YPRgSDRgtC+0LzQsNGC0L3Ri9C5LCDRgdGL0YAg0LzQvtGG0LDRgNC10LvQu9CwLCDQsdC10LrQvtC9LCDQstC10YLRh9C40L3QsCwg0LrQvtC70LHQsNGB0LrQuCDQsdCw0LLQsNGA0YHQutC40LUsINGB0YvRgCDQv9Cw0YDQvNC10LfQsNC9LCDRj9C50YbQviDQutGD0YDQuNC90L7QtVwiLFwicHJpY2VcIjpcIjM3MFwiLFwiY2F0ZWdvcnlcIjpcInBpenphXCJ9LHtcImlkXCI6XCIxN1wiLFwibmFtZVwiOlwi0J/QuNGG0YbQsCDQnNCw0YDQs9Cw0YDQuNGC0LBcIixcInN0cnVjdFwiOlwi0YHRi9GAINC80L7RhtCw0YDQtdC70LvQsCwg0YHQvtGD0YEsINCx0LDQt9C40LvQuNC6XCIsXCJwcmljZVwiOlwiMjQwXCIsXCJjYXRlZ29yeVwiOlwicGl6emFcIn0se1wiaWRcIjpcIjE4XCIsXCJuYW1lXCI6XCLQn9C40YbRhtCwINCm0LXQt9Cw0YDRjFwiLFwic3RydWN0XCI6XCLRgdGL0YAg0LzQvtGG0LDRgNC10LvQu9CwLCDRgdC+0YPRgSwg0LrRg9GA0LjQvdC+0LUg0YTQuNC70LUsINGC0L7QvNCw0YLRiyDRh9C10YDRgNC4LCDQutCw0L/Rg9GB0YLQsCDQv9C10LrQuNC90YHQutCw0Y8s0YHQvtGD0YEg0YbQtdC30LDRgNGMLNGB0YvRgCDQv9Cw0YDQvNC10LfQsNC9LlwiLFwicHJpY2VcIjpcIjM5MFwiLFwiY2F0ZWdvcnlcIjpcInBpenphXCJ9LHtcImlkXCI6XCIxOVwiLFwibmFtZVwiOlwi0JHQvtCx0L7QstCw0Y8g0LvQsNC/0YjQsFwiLFwic3RydWN0XCI6XCLQm9Cw0L/RiNCwINCx0L7QsdC+0LLQsNGPLCDQvtCy0L7RidC90L7QuSDQvNC40LrRgSwg0LzQvtGA0LXQv9GA0L7QtNGD0LrRgtGLLCDRgtC40LPRgNC+0LLQsNGPINC60YDQtdCy0LXRgtC60LAsINGC0LXRgNC40Y/QutC4INGB0L7Rg9GBLCDRhNC40YDQvNC10L3QvdGL0Lkg0YHQvtGD0YEgXCIsXCJwcmljZVwiOlwiMjQwXCIsXCJjYXRlZ29yeVwiOlwicGFzdGFcIn0se1wiaWRcIjpcIjIwXCIsXCJuYW1lXCI6XCLQm9Cw0L/RiNCwINCa0LDRgNCx0L7QvdCw0YDQsFwiLFwic3RydWN0XCI6XCLQm9Cw0L/RiNCwINGD0LTQvtC9LCDRgdC70LjQstC+0YfQvdC+LdGH0LXRgdC90L7Rh9C90YvQuSDRgdC+0YPRgSwg0LHQtdC60L7QvSwg0Y/QuNGH0L3Ri9C5INC20LXQu9GC0L7Quiwg0YHRi9GAINC/0LDRgNC80LXQt9Cw0L1cIixcInByaWNlXCI6XCIyNDBcIixcImNhdGVnb3J5XCI6XCJwYXN0YVwifSx7XCJpZFwiOlwiMjFcIixcIm5hbWVcIjpcItCd0LDQsdC+0YAg0J7QstC+0YnQvdC+0LlcIixcInN0cnVjdFwiOlwi0JvQsNC/0YjQsCDRhNGD0L3Rh9C+0LfQsCwg0L7QstC+0YnQuFwiLFwicHJpY2VcIjpcIjEyMFwiLFwiY2F0ZWdvcnlcIjpcInBhc3RhXCJ9LHtcImlkXCI6XCIyMlwiLFwibmFtZVwiOlwi0J3QsNCx0L7RgCDRj9C40YfQvdGL0LlcIixcInN0cnVjdFwiOlwi0JvQsNC/0YjQsCDRj9C40YfQvdCw0Y8sINC60YPRgNC40YbQsCwg0YHQu9C40LLQvtGH0L3Qvi3Rh9C10YHQvdC+0YfQvdGL0Lkg0YHQvtGD0YFcIixcInByaWNlXCI6XCIyMjBcIixcImNhdGVnb3J5XCI6XCJwYXN0YVwifSx7XCJpZFwiOlwiMjNcIixcIm5hbWVcIjpcItCa0YDQtdCy0LXRgtC+0YfQvdGL0Lkg0YEg0LDQstC+0LrQsNC00L5cIixcInN0cnVjdFwiOlwi0LrQvtC60YLQtdC50LvRjNC90YvQtSDQutGA0LXQstC10YLQutC4LCDQv9C+0LzQuNC00L7RgNGLLCDQvtCz0YPRgNGG0YssINCw0LLQvtC60LDQtNC+LCDRgtC+0LHQuNC60L4s0Y/Qv9C+0L3RgdC60LjQuSDQvNCw0LnQvtC90LXQty5cIixcInByaWNlXCI6XCIyNTBcIixcImNhdGVnb3J5XCI6XCJzYWxhZFwifSx7XCJpZFwiOlwiMjRcIixcIm5hbWVcIjpcItCT0YDQtdGH0LXRgdC60LjQuVwiLFwic3RydWN0XCI6XCLQutCw0L/Rg9GB0YLQsCDQv9C10LrQuNC90YHQutCw0Y8sINC/0L7QvNC40LTQvtGA0YssINC+0LPRg9GA0YbRiywg0L/QtdGA0LXRhiDQsdC+0LvQs9Cw0YDRgdC60LjQuSwg0YHRi9GAINCz0YDQtdGH0LXRgdC60LjQuSwg0LzQsNGB0LvQuNC90YssINC30LXQu9C10L3RjC5cIixcInByaWNlXCI6XCIxODBcIixcImNhdGVnb3J5XCI6XCJzYWxhZFwifSx7XCJpZFwiOlwiMjVcIixcIm5hbWVcIjpcItCm0LXQt9Cw0YDRjCDRgSDQutGA0LXQstC10YLQutCw0LzQuFwiLFwic3RydWN0XCI6XCLQutCw0L/Rg9GB0YLQsCDQv9C10LrQuNC90YHQutCw0Y8gLNGB0L7Rg9GBINGG0LXQt9Cw0YDRjCwg0YfQtdGB0L3QvtGH0L3Ri9C1INCz0YDQtdC90LrQuCwg0YLQvtC80LDRgtGLINGH0LXRgNGA0LgsINGP0LnRhtC+INC/0LXRgNC10L/QtdC70LjQvdC+0LUsINGB0YvRgCDQv9Cw0YDQvNC10LfQsNC9LCDRgtC40LPRgNC+0LLRi9C1INC60YDQtdCy0LXRgtC60LguXCIsXCJwcmljZVwiOlwiMjgwXCIsXCJjYXRlZ29yeVwiOlwic2FsYWRcIn0se1wiaWRcIjpcIjI2XCIsXCJuYW1lXCI6XCLQptC10LfQsNGA0Ywg0YEg0LrRg9GA0LjRhtC10LlcIixcInN0cnVjdFwiOlwi0LrQsNC/0YPRgdGC0LAg0L/QtdC60LjQvdGB0LrQsNGPICzRgdC+0YPRgSDRhtC10LfQsNGA0YwsINGH0LXRgdC90L7Rh9C90YvQtSDQs9GA0LXQvdC60LgsINGC0L7QvNCw0YLRiyDRh9C10YDRgNC4LCDRj9C50YbQviDQv9C10YDQtdC/0LXQu9C40L3QvtC1LCDRgdGL0YAg0L/QsNGA0LzQtdC30LDQvSwg0LrRg9GA0LjQvdC+0LUg0YTQuNC70LUuXCIsXCJwcmljZVwiOlwiMjUwXCIsXCJjYXRlZ29yeVwiOlwic2FsYWRcIn1dO1xyXG5cclxuICBmb3IobGV0IHByb2R1Y3RJdGVtIG9mIHByb2R1Y3RzKSB7XHJcbiAgICBpZihwcm9kdWN0SXRlbS5pZCA9PSBpZClcclxuICAgICAgcmV0dXJuIHByb2R1Y3RJdGVtO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkQ29udHJvbFRvQ29yc2luZUdvb2RzKCkge1xyXG4gIGNvbnN0IGlzR29vZHNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdvb2RzJykubGVuZ3RoICE9PSAwO1xyXG4gIGlmKCFpc0dvb2RzU2VjdGlvbilcclxuICAgIHJldHVybjtcclxuXHJcbiAgY29uc3QgZ29vZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ29vZHNfX2l0ZW0nKTtcclxuICBnb29kcy5mb3JFYWNoKGZ1bmN0aW9uKGdvb2QpIHtcclxuICAgIGNvbnN0IGdvb2RJZCA9ICtnb29kLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xyXG4gICAgY29uc3QgY29yc2luZURhdGEgPSBjb3JzaW5lR2V0KCk7XHJcblxyXG4gICAgaWYoY29yc2luZURhdGEgPT09IG51bGwpXHJcbiAgICAgIHJldHVybjtcclxuICAgIGZvcihsZXQgY29yc2luZUl0ZW0gb2YgY29yc2luZURhdGEpIHtcclxuICAgICAgaWYoY29yc2luZUl0ZW0uaWQgPT09IGdvb2RJZCkge1xyXG4gICAgICAgIGNvbnN0IGdvb2RCdXkgPSBnb29kLnF1ZXJ5U2VsZWN0b3IoJy5nb29kc19fYnV5Jyk7XHJcbiAgICAgICAgYXBwZW5kQ291bnRDb250cm9sKGdvb2RCdXksIGNvcnNpbmVJdGVtLmNvdW50KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQ29yc2luZUJsb2NrKCkge1xyXG4gIGxldCB0b3RhbFZhbHVlID0gMDtcclxuICBjb25zdCBjb3JzaW5lSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29yc2luZV9faXRlbScpO1xyXG4gIGNvcnNpbmVJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgIGNvbnN0IGl0ZW1QcmljZSA9ICtpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5jb3JzaW5lX19pdGVtLXByaWNlLXZhbHVlJykuaW5uZXJIVE1MO1xyXG4gICAgY29uc3QgaXRlbUNvdW50ID0gK2l0ZW0ucXVlcnlTZWxlY3RvcignLmNvdW50LWNvbnRyb2xfX3ZhbHVlJykuaW5uZXJIVE1MO1xyXG4gICAgY29uc3QgaXRlbVN1bSA9IGl0ZW1QcmljZSAqIGl0ZW1Db3VudDtcclxuXHJcbiAgICBjb25zdCAkaXRlbVRvdGFsID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuY29yc2luZV9fcHJpY2UtdmFsdWUnKTtcclxuICAgIGNvbnNvbGUubG9nKCRpdGVtVG90YWwpO1xyXG4gICAgJGl0ZW1Ub3RhbC5pbm5lckhUTUwgPSBpdGVtU3VtO1xyXG5cclxuICAgIHRvdGFsVmFsdWUgKz0gaXRlbVN1bTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgJHRvdGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvcnNpbmVfX3RvdGFsLXN1bS12YWx1ZScpO1xyXG4gICR0b3RhbC5pbm5lckhUTUwgPSB0b3RhbFZhbHVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJDb3JzaW5lQmxvY2soKSB7XHJcbiAgY29uc3QgaXNDb3JzaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvcnNpbmUnKS5sZW5ndGggIT09IDA7XHJcbiAgaWYoIWlzQ29yc2luZSlcclxuICAgIHJldHVybjtcclxuICBcclxuICBjb25zdCAkY29yc2luZUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvcnNpbmVfX2l0ZW1zJyk7XHJcbiAgJGNvcnNpbmVJdGVtcy5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgY29uc3QgJGNvcnNpbmVGb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29yc2luZV9fZm9vdGVyJyk7XHJcbiAgJGNvcnNpbmVGb290ZXIucmVtb3ZlKCk7XHJcblxyXG4gIGNvbnN0ICRjb3JzaW5lQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3JzaW5lX19jb250ZW50Jyk7XHJcbiAgYXBwZW5kTWVzc2FnZSgn0JLQsNGI0LAg0LrQvtGA0LfQuNC90LAg0L/Rg9GB0YLQsCEnLCAkY29yc2luZUNvbnRlbnQpO1xyXG5cclxuICBjb25zdCAkbmV3Q29yc2luZUZvb3RlciA9IGdldENvcnNpbmVGb290ZXJCbG9jaygwKTtcclxuICAkY29yc2luZUNvbnRlbnQuYXBwZW5kKCRuZXdDb3JzaW5lRm9vdGVyKTtcclxufVxyXG5cclxuLy8gY2xlYXJDb3JzaW5lQmxvY2soKTsiLCJpbXBvcnQgeyBjaGVja1VwVG9nZ2xlLCB0b2dnbGVNYWluTWVudSwgaW5kZXhDaGVja0hlYWRlclRvcCxcclxuICAgICAgICAgY29yc2luZUdldCwgY29yc2luZUhhcywgYXBwZW5kQ291bnRDb250cm9sLFxyXG4gICAgICAgICBhZGRDb250cm9sVG9Db3JzaW5lR29vZHN9IGZyb20gJy4vZnVuY3Rpb25zJztcclxuXHJcbmlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG5fZGlzYWJsZWQnKS5sZW5ndGggIT09IDApIHtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuX2Rpc2FibGVkJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LXRvZ2dsZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgdG9nZ2xlTWFpbk1lbnUoKTtcclxufSk7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xyXG4gIGNoZWNrVXBUb2dnbGUoKTtcclxufSk7XHJcblxyXG5pbmRleENoZWNrSGVhZGVyVG9wKCk7XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XHJcbiAgaW5kZXhDaGVja0hlYWRlclRvcCgpO1xyXG59KTtcclxuXHJcbmFkZENvbnRyb2xUb0NvcnNpbmVHb29kcygpOyJdLCJzb3VyY2VSb290IjoiIn0=