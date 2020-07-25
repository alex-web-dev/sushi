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
  order.innerHTML = "\n    <div class=\"wrapper\">\n      <div class=\"order__content\">\n        <h1 class=\"title title_black order__title\">\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435 \u0437\u0430\u043A\u0430\u0437\u0430</h1>\n        <div class=\"order-form\">\n          <div class=\"order-form__item\">\n            <input type=\"text\" name=\"street\" class=\"order-form__field order-form__field_street\" autocomplete=\"off\" placeholder=\"\u0423\u043B\u0438\u0446\u0430\">\n          </div>\n          <div class=\"order-form__item\">\n            <input type=\"text\" name=\"phone-number\" class=\"order-form__field order-form__field_number\" autocomplete=\"off\" placeholder=\"\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430\">\n          </div>\n          <div class=\"order-form__item\">\n            <textarea name=\"comment\" class=\"order-form__field order-form__field_comment\" cols=\"40\" rows=\"5\" placeholder=\"\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 (\u043D\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E)\" resize=\"no\"></textarea>\n          </div>\n          <input type=\"button\" class=\"btn order-form__submit\" value=\"\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C \u0430\u0434\u0440\u0435\u0441\">\n        </div>\n        <button class=\"btn-dlt order__close-btn\"></button>\n      </div>\n    </div>";
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
  toggle.classList.toggle('menu-toggle_active');
  menuList.classList.toggle('nav-menu__list_active');
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
  corsineItemBlock.innerHTML = "\n    <header class=\"corsine__item-header\">\n      <div class=\"corsine__bg\">\n        <img src=\"dist/img/goods/".concat(productInf.id, ".jpg\" alt=\"\" class=\"corsine__img\">\n      </div>\n      <div class=\"corsine__main\">\n        <p class=\"corsine__name\">").concat(productInf.name, "</p>\n        <p class=\"corsine__item-price\"><span class=\"corsine__item-price-value\">").concat(productInf.price, "</span> \u0440\u0443\u0431.</p>\n      </div>\n    </header>\n    <div class=\"count-control corsine__count-control\">\n      <button type=\"button\" class=\"count-control__btn count-control__btn_up btn_add_corsine\">\n        <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n      </button>\n      <span class=\"count-control__value\">").concat(corsineItem.count, "</span>\n      <button type=\"button\" class=\"count-control__btn count-control__btn_down btn_dec_corsine\">\n        <i class=\"fa fa-minus\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n    <p class=\"corsine__price\"><span class=\"corsine__price-value\">").concat(corsineItemSum, "</span> \u0440\u0443\u0431.</p>\n    <input type=\"button\" class=\"btn-dlt corsine__btn-dlt btn_del_corsine\" value=\"X\" title=\"\u0423\u0431\u0440\u0430\u0442\u044C \u0438\u0437 \u043A\u043E\u0440\u0437\u0438\u043D\u044B\">");
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

module.exports = __webpack_require__(/*! D:\Sites\sushi\src\js\common.js */"./src/js/common.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVJlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tbW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb3JzaW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21haW4uanMiXSwibmFtZXMiOlsiX2FycmF5TGlrZVRvQXJyYXkiLCJhcnIiLCJsZW4iLCJsZW5ndGgiLCJpIiwiYXJyMiIsIkFycmF5IiwibW9kdWxlIiwiZXhwb3J0cyIsIl9hcnJheVdpdGhIb2xlcyIsImlzQXJyYXkiLCJfaXRlcmFibGVUb0FycmF5TGltaXQiLCJTeW1ib2wiLCJpdGVyYXRvciIsIk9iamVjdCIsIl9hcnIiLCJfbiIsIl9kIiwiX2UiLCJ1bmRlZmluZWQiLCJfaSIsIl9zIiwibmV4dCIsImRvbmUiLCJwdXNoIiwidmFsdWUiLCJlcnIiLCJfbm9uSXRlcmFibGVSZXN0IiwiVHlwZUVycm9yIiwiYXJyYXlXaXRoSG9sZXMiLCJyZXF1aXJlIiwiaXRlcmFibGVUb0FycmF5TGltaXQiLCJ1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIm5vbkl0ZXJhYmxlUmVzdCIsIl9zbGljZWRUb0FycmF5IiwiYXJyYXlMaWtlVG9BcnJheSIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIm8iLCJtaW5MZW4iLCJuIiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJjYWxsIiwic2xpY2UiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJmcm9tIiwidGVzdCIsImFuY2hvcnMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhbmNob3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiYmxvY2tJRCIsImdldEF0dHJpYnV0ZSIsImJsb2NrT2Zmc2V0VG9wIiwicXVlcnlTZWxlY3RvciIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsIndpbmRvdyIsInNjcm9sbEJ5IiwibGVmdCIsImJlaGF2aW9yIiwiZ2VuZXJhdGVDb3JzaW5lIiwiZm9yRWFjaCIsImJ0biIsImJ0bkFkZENvcnNpbmVFdmVudCIsImJ0bkRlY0NvcnNpbmVFdmVudCIsImJ0bkRlbGV0ZUNvcnNpbmVFdmVudCIsInNob3dPcmRlck1lbnUiLCJzaG93TWVzc2FnZSIsIm1lc3NhZ2VWYWx1ZSIsInN0YXR1cyIsInRpbWUiLCJtZXNzYWdlIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImNsYXNzTGlzdCIsImFkZCIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwic2V0VGltZW91dCIsInRvZ2dsZSIsInJlbW92ZSIsInNob3dDaGFuZ2VOdW0iLCJudW0iLCJjb29yZHMiLCJibG9jayIsImJsb2NrU3RyIiwicmFuZFgiLCJnZXRSYW5kb21OdW0iLCJibG9ja1Bvc2l0aW9uWCIsIngiLCJibG9ja1Bvc2l0aW9uWSIsInkiLCJzdHlsZSIsImJvZHkiLCJ2YWxpZGF0ZVN0cmVldCIsInN0cmVldCIsInZhbGlkYXRlUGhvbmUiLCJwaG9uZSIsInZhbGlkYXRlQ29tbWVudCIsImNvbW1lbnQiLCJ2YWxpZGF0ZU9yZGVyRm9ybSIsImZvcm0iLCJwaG9uZU51bWJlciIsIm9yZGVyIiwiZXZlbnRDbG9zZU9yZGVyTWVudSIsImV2ZW50U2VuZE9yZGVyIiwiZWxlbUNsYXNzIiwidGFyZ2V0IiwiY29yc2luZURhdGEiLCJjb3JzaW5lR2V0Iiwic2VuZE9yZGVyIiwiY2xlYXJDb3JzaW5lQmxvY2siLCJjb3JzaW5lUmVtb3ZlIiwiaXNPcmRlciIsIiRvcmRlckZvcm0iLCIkbG9hZGVyIiwiJG9yZGVyQ29udGVudCIsImFwcGVuZE1lc3NhZ2UiLCJ0b2dnbGVNYWluTWVudSIsIm1lbnVMaXN0IiwiaW5kZXhDaGVja0hlYWRlclRvcCIsImlzSW5kZXhGaWxlIiwic2Nyb2xsVmFsdWUiLCJwYWdlWU9mZnNldCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCIsImhlYWRlclRvcENsYXNzIiwiY2hlY2tVcFRvZ2dsZSIsImlzVXAiLCJ1cCIsIm1pbiIsIm1heCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImNvcnNpbmVBZGQiLCJnb29kSWQiLCJuZXdDb3JzaW5lRGF0YSIsImlkIiwiY291bnQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImVudHJpZXMiLCJjb3JzaW5lSXRlbSIsIm5ld0NvcnNpbmVJdGVtIiwiY29yc2luZURlYyIsInNwbGljZSIsImNvcnNpbmVEZWwiLCJwYXJzZSIsImdldEl0ZW0iLCJyZW1vdmVJdGVtIiwiY29yc2luZUhhcyIsImFwcGVuZENvdW50Q29udHJvbCIsImVsZW0iLCJjb3VudENvbnRyb2wiLCJhcHBlbmQiLCJjb25zb2xlIiwibG9nIiwiZ29vZCIsImNsb3Nlc3QiLCJtb3VzZUNvb3JkcyIsInBhZ2VYIiwicGFnZVkiLCJpc0NvcnNpbmVJdGVtIiwiaW5jbHVkZXMiLCJpc0dvb2RIYXNDb250cm9sIiwiY29udHJvbFZhbHVlIiwidXBkYXRlQ29yc2luZUJsb2NrIiwiZ29vZEJ1eSIsImFwcGVuZERlZmF1bHRDb3JzaW5lQnRuIiwic2V0QXR0cmlidXRlIiwiaXNDb3JzaW5lRmlsZSIsImNvcnNpbmVDb250ZW50IiwiZm9vdGVyQmxvY2siLCJnZXRDb3JzaW5lRm9vdGVyQmxvY2siLCJjb3JzaW5lTGlzdEJsb2NrIiwiY29yc2luZUl0ZW1CbG9jayIsImdldENvcnNpbmVJdGVtQmxvY2siLCJ0b3RhbFZhbHVlIiwicHJpY2VWYWx1ZSIsInN1bSIsImFsbFN1bUJsb2NrIiwiY29yc2luZUJ0bnMiLCJwcm9kdWN0SW5mIiwiZ2V0UHJvZHVjdEluZiIsImNvcnNpbmVJdGVtU3VtIiwicHJpY2UiLCJtZXNzYWdlQmxvY2siLCJwcm9kdWN0cyIsInByb2R1Y3RJdGVtIiwiYWRkQ29udHJvbFRvQ29yc2luZUdvb2RzIiwiaXNHb29kc1NlY3Rpb24iLCJnb29kcyIsImNvcnNpbmVJdGVtcyIsIml0ZW0iLCJpdGVtUHJpY2UiLCJpdGVtQ291bnQiLCJpdGVtU3VtIiwiJGl0ZW1Ub3RhbCIsIiR0b3RhbCIsImlzQ29yc2luZSIsIiRjb3JzaW5lSXRlbXMiLCIkY29yc2luZUZvb3RlciIsIiRjb3JzaW5lQ29udGVudCIsIiRuZXdDb3JzaW5lRm9vdGVyIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFF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LEtBQUMsQ0FBQ0MsY0FBRjtBQUNELEdBRkQ7QUFHRDs7QUFFREwsUUFBUSxDQUFDUyxhQUFULENBQXVCLGNBQXZCLEVBQXVDTixnQkFBdkMsQ0FBd0QsT0FBeEQsRUFBaUUsWUFBVztBQUMxRXVFLG1FQUFjO0FBQ2YsQ0FGRDtBQUlBOUQsTUFBTSxDQUFDVCxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxZQUFNO0FBQ3RDZ0Ysa0VBQWE7QUFDZCxDQUZEO0FBSUFQLHNFQUFtQjtBQUNuQmhFLE1BQU0sQ0FBQ1QsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsWUFBTTtBQUN0Q3lFLHdFQUFtQjtBQUNwQixDQUZEO0FBSUF3RSwyRUFBd0IsRyIsImZpbGUiOiJjb21tb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5TGlrZVRvQXJyYXk7IiwiZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhIb2xlczsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuO1xuICB2YXIgX2FyciA9IFtdO1xuICB2YXIgX24gPSB0cnVlO1xuICB2YXIgX2QgPSBmYWxzZTtcbiAgdmFyIF9lID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2QgPSB0cnVlO1xuICAgIF9lID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9hcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheUxpbWl0OyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlUmVzdDsiLCJ2YXIgYXJyYXlXaXRoSG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhIb2xlc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheUxpbWl0ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5TGltaXRcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgbm9uSXRlcmFibGVSZXN0ID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVSZXN0XCIpO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgcmV0dXJuIGFycmF5V2l0aEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IG5vbkl0ZXJhYmxlUmVzdCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zbGljZWRUb0FycmF5OyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheVwiKTtcblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXk7IiwiLy8gaW1wb3J0ICcuL2Z1bmN0aW9ucyc7XHJcbi8vIGltcG9ydCAnLi9jb3JzaW5lJztcclxuaW1wb3J0ICcuL21haW4nO1xyXG4vLyBpbXBvcnQgJy4vYWNjZXB0ZWQtb3JkZXJzJztcclxuaW1wb3J0ICcuL2NvcnNpbmUnO1xyXG5cclxudmFyIGFuY2hvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhW2hyZWYqPVwiI1wiXScpO1xyXG5mb3IgKGxldCBhbmNob3Igb2YgYW5jaG9ycykge1xyXG4gIGFuY2hvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIFxyXG4gICAgY29uc3QgYmxvY2tJRCA9IGFuY2hvci5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcclxuICAgIGNvbnN0IGJsb2NrT2Zmc2V0VG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihibG9ja0lEKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XHJcbiAgICB3aW5kb3cuc2Nyb2xsQnkoeyB0b3A6IChibG9ja09mZnNldFRvcCksIGxlZnQ6IDAsIGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcclxuICB9KVxyXG59IiwiJ3VzZSBzdHJpY3QnO1xyXG5pbXBvcnQgeyBidG5BZGRDb3JzaW5lRXZlbnQsIGJ0bkRlY0NvcnNpbmVFdmVudCwgYnRuRGVsZXRlQ29yc2luZUV2ZW50LFxyXG4gICAgICAgICBnZW5lcmF0ZUNvcnNpbmUsIHNob3dPcmRlck1lbnUgfSBmcm9tICcuL2Z1bmN0aW9ucyc7XHJcbi8v0J7RgtGA0LjRgdC+0LLQutCwINC60LDRgtCw0LvQvtCz0LAv0L7RgtGA0LjRgdC+0LLQutCwINGB0YLQsNGC0YPRgdCwINC60L3QvtC/0L7QuiDQutCw0YLQsNC70L7Qs9CwINCyINC30LDQstC40YHQuNC80L7RgdGC0Lgg0L7RgiBjb3JzaW5lIGxvY2FsU3RvcmFnZVxyXG5nZW5lcmF0ZUNvcnNpbmUoKTtcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG5fYWRkX2NvcnNpbmUnKS5mb3JFYWNoKGZ1bmN0aW9uIChidG4pIHtcclxuICBidG5BZGRDb3JzaW5lRXZlbnQoYnRuKTtcclxufSk7XHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuX2RlY19jb3JzaW5lJykuZm9yRWFjaChmdW5jdGlvbiAoYnRuKSB7XHJcbiAgYnRuRGVjQ29yc2luZUV2ZW50KGJ0bik7XHJcbn0pO1xyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bl9kZWxfY29yc2luZScpLmZvckVhY2goZnVuY3Rpb24gKGJ0bikge1xyXG4gIGJ0bkRlbGV0ZUNvcnNpbmVFdmVudChidG4pO1xyXG59KTtcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG5fb3JkZXInKS5mb3JFYWNoKGZ1bmN0aW9uKGJ0bikge1xyXG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBzaG93T3JkZXJNZW51KCk7XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuXHJcbi8vIGZ1bmN0aW9uIGNoYW5nZVByaWNlcygpIHtcclxuLy8gICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29yc2luZScpLmxlbmd0aCA9PT0gMClcclxuLy8gICAgIHJldHVyblxyXG5cclxuLy8gICBsZXQgdG90YWxTdW0gPSAwO1xyXG4vLyAgIGxldCBpdGVtU3VtID0gMDtcclxuLy8gICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29yc2luZV9fcHJpY2UnKS5mb3JFYWNoKChwcmljZSwgaSkgPT4ge1xyXG4vLyAgICAgbGV0IGdvb2RDb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3VudC1jb250cm9sX192YWx1ZScpW2ldLmlubmVySFRNTDtcclxuLy8gICAgIGl0ZW1TdW0gPSBpdGVtUHJpY2VzW2ldICogZ29vZENvdW50O1xyXG4vLyAgICAgcHJpY2UuaW5uZXJIVE1MID0gaXRlbVN1bSArICfRgCc7XHJcbi8vICAgICB0b3RhbFN1bSArPSBpdGVtU3VtO1xyXG4vLyAgIH0pO1xyXG4vLyAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3JzaW5lX190b3RhbC1zdW0tdmFsdWUnKS5pbm5lckhUTUwgPSB0b3RhbFN1bSArICfRgCc7XHJcbi8vIH0iLCJleHBvcnQgZnVuY3Rpb24gc2hvd01lc3NhZ2UobWVzc2FnZVZhbHVlLCBzdGF0dXMsIHRpbWUgPSAxMjAwKSB7XHJcbiAgbGV0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBtZXNzYWdlLmNsYXNzTmFtZSA9ICdtZXNzYWdlIG1lc3NhZ2VfaGlkZSc7XHJcblxyXG4gIGlmKHN0YXR1cyA9PT0gJ2Vycm9yJylcclxuICAgIG1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnbWVzc2FnZV9lcnJvcicpO1xyXG4gIGVsc2UgaWYoc3RhdHVzID09PSAnd2FybmluZycpXHJcbiAgICBtZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ21lc3NhZ2Vfd2FybmluZycpO1xyXG5cclxuICBtZXNzYWdlLmlubmVySFRNTCA9IGA8cCBjbGFzcz1cIm1lc3NhZ2VfX3ZhbHVlXCI+JHttZXNzYWdlVmFsdWV9PC9wPmA7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lc3NhZ2VzJykuYXBwZW5kQ2hpbGQobWVzc2FnZSk7XHJcbiAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgIG1lc3NhZ2UuY2xhc3NMaXN0LnRvZ2dsZSgnbWVzc2FnZV9oaWRlJyk7XHJcbiAgfSwgMTAwKTtcclxuICBcclxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgbWVzc2FnZS5jbGFzc0xpc3QudG9nZ2xlKCdtZXNzYWdlX2hpZGUnKTtcclxuICAgIG1lc3NhZ2UuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICB0aGlzLnJlbW92ZSgpO1xyXG4gICAgfSlcclxuICB9LCB0aW1lKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dDaGFuZ2VOdW0obnVtLCBjb29yZHMpIHtcclxuICBsZXQgYmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBsZXQgYmxvY2tTdHIgPSAnJztcclxuICBibG9jay5jbGFzc05hbWUgPSAnY2hhbmdlLW51bSc7XHJcblxyXG4gIGlmKG51bSA+IDApIHtcclxuICAgIGJsb2NrU3RyID0gJysnICsgbnVtO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBibG9ja1N0ciA9IG51bTtcclxuICAgIGJsb2NrLmNsYXNzTGlzdC5hZGQoJ2NoYW5nZS1udW1fZGVjJyk7XHJcbiAgfVxyXG5cclxuICBibG9jay5pbm5lckhUTUwgPSBibG9ja1N0cjtcclxuXHJcbiAgbGV0IHJhbmRYID0gZ2V0UmFuZG9tTnVtKC01LCA1KTtcclxuICBjb25zdCBibG9ja1Bvc2l0aW9uWCA9IGNvb3Jkcy54IC0gcmFuZFg7XHJcbiAgY29uc3QgYmxvY2tQb3NpdGlvblkgPSBjb29yZHMueTtcclxuICBibG9jay5zdHlsZS5sZWZ0ID0gYCR7YmxvY2tQb3NpdGlvblh9cHhgO1xyXG4gIGJsb2NrLnN0eWxlLnRvcCA9IGAke2Jsb2NrUG9zaXRpb25ZfXB4YDtcclxuXHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChibG9jayk7XHJcblxyXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICBibG9jay5yZW1vdmUoKTtcclxuICB9LCAxMDAwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlU3RyZWV0KHN0cmVldCkge1xyXG4gIGlmKHN0cmVldC5sZW5ndGggPCA1IHx8IHN0cmVldC5sZW5ndGggPiA1MClcclxuICAgIHJldHVybiBmYWxzZTtcclxuICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlUGhvbmUocGhvbmUpIHtcclxuICBpZihwaG9uZS5sZW5ndGggPCAxMSB8fCBwaG9uZS5sZW5ndGggPiAxNylcclxuICAgIHJldHVybiBmYWxzZTtcclxuICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlQ29tbWVudChjb21tZW50KSB7XHJcbiAgaWYoIGNvbW1lbnQubGVuZ3RoICE9PSAwICYmIChjb21tZW50Lmxlbmd0aCA8IDUgfHwgY29tbWVudC5sZW5ndGggPiAzMDApIClcclxuICAgIHJldHVybiBmYWxzZTtcclxuICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlT3JkZXJGb3JtKGZvcm0pIHtcclxuICBjb25zdCBzdHJlZXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5vcmRlci1mb3JtX19maWVsZF9zdHJlZXQnKTtcclxuICBjb25zdCBwaG9uZU51bWJlciA9IGZvcm0ucXVlcnlTZWxlY3RvcignLm9yZGVyLWZvcm1fX2ZpZWxkX251bWJlcicpO1xyXG4gIGNvbnN0IGNvbW1lbnQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5vcmRlci1mb3JtX19maWVsZF9jb21tZW50Jyk7XHJcblxyXG4gIHN0cmVldC5jbGFzc0xpc3QucmVtb3ZlKCdvcmRlci1mb3JtX19maWVsZF9lcnJvcicpO1xyXG4gIHBob25lTnVtYmVyLmNsYXNzTGlzdC5yZW1vdmUoJ29yZGVyLWZvcm1fX2ZpZWxkX2Vycm9yJyk7XHJcbiAgY29tbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdvcmRlci1mb3JtX19maWVsZF9lcnJvcicpO1xyXG5cclxuICBpZih2YWxpZGF0ZVN0cmVldChzdHJlZXQudmFsdWUpICYmIHZhbGlkYXRlUGhvbmUocGhvbmVOdW1iZXIudmFsdWUpICYmIHZhbGlkYXRlQ29tbWVudChjb21tZW50KSkge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSBlbHNlIHtcclxuICAgIHNob3dNZXNzYWdlKCfQndC10LLQtdGA0L3QsNGPINC40L3RhNC+0YDQvNCw0YbQuNGPINC40LvQuCDQt9Cw0L/QvtC70L3QtdC90Ysg0L3QtSDQstGB0LUg0L/QvtC70Y8hJywgJ2Vycm9yJywgMjAwMCk7XHJcbiAgICBcclxuICAgIGlmKCF2YWxpZGF0ZVN0cmVldChzdHJlZXQudmFsdWUpKSB7XHJcbiAgICAgIHN0cmVldC5jbGFzc0xpc3QuYWRkKCdvcmRlci1mb3JtX19maWVsZF9lcnJvcicpO1xyXG4gICAgfVxyXG4gICAgaWYoIXZhbGlkYXRlUGhvbmUocGhvbmVOdW1iZXIudmFsdWUpKSB7XHJcbiAgICAgIHBob25lTnVtYmVyLmNsYXNzTGlzdC5hZGQoJ29yZGVyLWZvcm1fX2ZpZWxkX2Vycm9yJyk7XHJcbiAgICB9XHJcbiAgICBpZighdmFsaWRhdGVDb21tZW50KGNvbW1lbnQudmFsdWUpKSB7XHJcbiAgICAgIGNvbW1lbnQuY2xhc3NMaXN0LmFkZCgnb3JkZXItZm9ybV9fZmllbGRfZXJyb3InKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2hvd09yZGVyTWVudSgpIHtcclxuICBsZXQgb3JkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBvcmRlci5jbGFzc05hbWUgPSAnb3JkZXInO1xyXG4gIG9yZGVyLmlubmVySFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJ3cmFwcGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJvcmRlcl9fY29udGVudFwiPlxyXG4gICAgICAgIDxoMSBjbGFzcz1cInRpdGxlIHRpdGxlX2JsYWNrIG9yZGVyX190aXRsZVwiPtCe0YTQvtGA0LzQu9C10L3QuNC1INC30LDQutCw0LfQsDwvaDE+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm9yZGVyLWZvcm1cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJvcmRlci1mb3JtX19pdGVtXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJzdHJlZXRcIiBjbGFzcz1cIm9yZGVyLWZvcm1fX2ZpZWxkIG9yZGVyLWZvcm1fX2ZpZWxkX3N0cmVldFwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIHBsYWNlaG9sZGVyPVwi0KPQu9C40YbQsFwiPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwib3JkZXItZm9ybV9faXRlbVwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicGhvbmUtbnVtYmVyXCIgY2xhc3M9XCJvcmRlci1mb3JtX19maWVsZCBvcmRlci1mb3JtX19maWVsZF9udW1iZXJcIiBhdXRvY29tcGxldGU9XCJvZmZcIiBwbGFjZWhvbGRlcj1cItCd0L7QvNC10YAg0YLQtdC70LXRhNC+0L3QsFwiPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwib3JkZXItZm9ybV9faXRlbVwiPlxyXG4gICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cImNvbW1lbnRcIiBjbGFzcz1cIm9yZGVyLWZvcm1fX2ZpZWxkIG9yZGVyLWZvcm1fX2ZpZWxkX2NvbW1lbnRcIiBjb2xzPVwiNDBcIiByb3dzPVwiNVwiIHBsYWNlaG9sZGVyPVwi0JrQvtC80LzQtdC90YLQsNGA0LjQuSAo0L3QtSDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+KVwiIHJlc2l6ZT1cIm5vXCI+PC90ZXh0YXJlYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBvcmRlci1mb3JtX19zdWJtaXRcIiB2YWx1ZT1cItCf0L7QtNGC0LLQtdGA0LTQuNGC0Ywg0LDQtNGA0LXRgVwiPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4tZGx0IG9yZGVyX19jbG9zZS1idG5cIj48L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5gO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3JkZXIpO1xyXG5cclxuICBldmVudENsb3NlT3JkZXJNZW51KCk7XHJcbiAgZXZlbnRTZW5kT3JkZXIoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGV2ZW50Q2xvc2VPcmRlck1lbnUoKSB7XHJcbiAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm9yZGVyJykubGVuZ3RoICE9PSAwKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3JkZXInKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgbGV0IGVsZW1DbGFzcyA9IGUudGFyZ2V0LmNsYXNzTmFtZTtcclxuICAgICAgaWYoZWxlbUNsYXNzID09PSAnb3JkZXInIHx8IGVsZW1DbGFzcyA9PT0gJ2J0bi1kbHQgb3JkZXJfX2Nsb3NlLWJ0bicpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3JkZXInKS5yZW1vdmUoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZXZlbnRTZW5kT3JkZXIoKSB7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9yZGVyLWZvcm1fX3N1Ym1pdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9yZGVyLWZvcm0nKTsgICAgXHJcbiAgICBjb25zdCBzdHJlZXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5vcmRlci1mb3JtX19maWVsZF9zdHJlZXQnKTtcclxuICAgIGNvbnN0IHBob25lTnVtYmVyID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcub3JkZXItZm9ybV9fZmllbGRfbnVtYmVyJyk7XHJcbiAgICBjb25zdCBjb21tZW50ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcub3JkZXItZm9ybV9fZmllbGRfY29tbWVudCcpO1xyXG4gICAgaWYoIXZhbGlkYXRlT3JkZXJGb3JtKGZvcm0pKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjb3JzaW5lRGF0YSA9IGNvcnNpbmVHZXQoKTtcclxuICAgIGlmKGNvcnNpbmVEYXRhID09PSBudWxsKSB7XHJcbiAgICAgIHNob3dNZXNzYWdlKCfQktCw0YjQsCDQutC+0YDQt9C40L3QsCDQv9GD0YHRgtCwJywgJ2Vycm9yJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBzZW5kT3JkZXIoKTtcclxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICBjbGVhckNvcnNpbmVCbG9jaygpO1xyXG4gICAgICAgIGNvcnNpbmVSZW1vdmUoKTtcclxuICAgICAgfSwgMjAwMCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZW5kT3JkZXIoKSB7XHJcbiAgY29uc3QgaXNPcmRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5vcmRlcicpLmxlbmd0aCAhPT0gMDtcclxuICBpZighaXNPcmRlcilcclxuICAgIHJldHVybjtcclxuICBcclxuICBjb25zdCAkb3JkZXJGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9yZGVyLWZvcm0nKTtcclxuICAkb3JkZXJGb3JtLnJlbW92ZSgpO1xyXG5cclxuICBjb25zdCAkbG9hZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgJGxvYWRlci5jbGFzc05hbWUgPSAnbG9hZGVyJztcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKCRsb2FkZXIpO1xyXG5cclxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc3QgJG9yZGVyQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcmRlcl9fY29udGVudCcpO1xyXG4gICAgYXBwZW5kTWVzc2FnZSgn0JLQsNGI0LAg0LfQsNGP0LLQutCwINGD0YHQv9C10YjQvdC+INC+0YLQv9GA0LDQstC70LXQvdCwISDQntC20LjQtNCw0LnRgtC1INC30LLQvtC90LrQsC4nLCAkb3JkZXJDb250ZW50KTtcclxuICAgICRsb2FkZXIucmVtb3ZlKCk7XHJcbiAgfSwgMjAwMCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVNYWluTWVudSgpIHtcclxuICBsZXQgdG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtdG9nZ2xlJyk7XHJcbiAgbGV0IG1lbnVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi1tZW51X19saXN0Jyk7XHJcbiAgdG9nZ2xlLmNsYXNzTGlzdC50b2dnbGUoJ21lbnUtdG9nZ2xlX2FjdGl2ZScpO1xyXG4gIG1lbnVMaXN0LmNsYXNzTGlzdC50b2dnbGUoJ25hdi1tZW51X19saXN0X2FjdGl2ZScpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5kZXhDaGVja0hlYWRlclRvcCgpIHtcclxuICBjb25zdCBpc0luZGV4RmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWFkZXJfX2NlbnRlcicpLmxlbmd0aCAhPT0gMDtcclxuICBpZighaXNJbmRleEZpbGUpXHJcbiAgICByZXR1cm47XHJcblxyXG4gIGxldCBzY3JvbGxWYWx1ZSA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xyXG4gIGxldCBoZWFkZXJUb3BDbGFzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX3RvcCcpLmNsYXNzTmFtZTtcclxuICBpZihzY3JvbGxWYWx1ZSA+PSA2MCAmJiAgaGVhZGVyVG9wQ2xhc3MgPT09ICdoZWFkZXJfX3RvcCcpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX3RvcCcpLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcl9fdG9wX2ZpeGVkJyk7XHJcbiAgfSBlbHNlIGlmKHNjcm9sbFZhbHVlIDw9IDMwICYmIGhlYWRlclRvcENsYXNzICE9PSAnaGVhZGVyX190b3AnKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX190b3AnKS5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXJfX3RvcF9maXhlZCcpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrVXBUb2dnbGUoKSB7XHJcbiAgY29uc3QgaXNVcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy51cCcpLmxlbmd0aCAhPT0gMDtcclxuICBpZighaXNVcClcclxuICAgIHJldHVyblxyXG5cclxuICBjb25zdCB1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51cCcpO1xyXG4gIGlmKHdpbmRvdy5wYWdlWU9mZnNldCA8IDEwMDAgJiYgdXAuY2xhc3NOYW1lID09PSAndXAnKSB7XHJcbiAgICB1cC5jbGFzc0xpc3QuYWRkKCd1cF9oaWRlJyk7XHJcbiAgfSBlbHNlIGlmKHdpbmRvdy5wYWdlWU9mZnNldCA+IDEwMDApe1xyXG4gICAgdXAuY2xhc3NMaXN0LnJlbW92ZSgndXBfaGlkZScpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRvbU51bShtaW4sIG1heCkge1xyXG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29yc2luZUFkZChnb29kSWQpIHtcclxuICBpZiAoIWdvb2RJZClcclxuICAgIHJldHVybjtcclxuXHJcbiAgbGV0IGNvcnNpbmVEYXRhID0gY29yc2luZUdldCgpO1xyXG4gIGlmIChjb3JzaW5lRGF0YSA9PT0gbnVsbCkge1xyXG4gICAgY29uc3QgbmV3Q29yc2luZURhdGEgPSBbe1xyXG4gICAgICBpZDogZ29vZElkLFxyXG4gICAgICBjb3VudDogMVxyXG4gICAgfV07XHJcblxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NvcnNpbmUnLCBKU09OLnN0cmluZ2lmeShuZXdDb3JzaW5lRGF0YSkpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgZm9yIChsZXQgW2ksIGNvcnNpbmVJdGVtXSBvZiBjb3JzaW5lRGF0YS5lbnRyaWVzKCkpIHtcclxuICAgIGlmIChjb3JzaW5lSXRlbS5pZCA9PT0gZ29vZElkKSB7XHJcbiAgICAgIGNvcnNpbmVEYXRhW2ldLmNvdW50Kys7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjb3JzaW5lJywgSlNPTi5zdHJpbmdpZnkoY29yc2luZURhdGEpKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgbmV3Q29yc2luZUl0ZW0gPSB7XHJcbiAgICBpZDogZ29vZElkLFxyXG4gICAgY291bnQ6IDFcclxuICB9XHJcblxyXG4gIGNvcnNpbmVEYXRhLnB1c2gobmV3Q29yc2luZUl0ZW0pO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjb3JzaW5lJywgSlNPTi5zdHJpbmdpZnkoY29yc2luZURhdGEpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvcnNpbmVEZWMoZ29vZElkKSB7XHJcbiAgaWYgKCFnb29kSWQpXHJcbiAgICByZXR1cm47XHJcblxyXG4gIGxldCBjb3JzaW5lRGF0YSA9IGNvcnNpbmVHZXQoKTtcclxuICBpZiAoY29yc2luZURhdGEgPT09IG51bGwpXHJcbiAgICByZXR1cm47XHJcblxyXG4gIGZvciAobGV0IFtpLCBjb3JzaW5lSXRlbV0gb2YgY29yc2luZURhdGEuZW50cmllcygpKSB7XHJcbiAgICBpZiAoY29yc2luZUl0ZW0uaWQgPT09IGdvb2RJZCkge1xyXG4gICAgICBpZiAoY29yc2luZUl0ZW0uY291bnQgPiAxKVxyXG4gICAgICAgIGNvcnNpbmVEYXRhW2ldLmNvdW50LS07XHJcbiAgICAgIGVsc2VcclxuICAgICAgICBjb3JzaW5lRGF0YS5zcGxpY2UoaSwgMSk7XHJcblxyXG4gICAgICBpZiAoY29yc2luZURhdGEubGVuZ3RoID09PSAwKVxyXG4gICAgICAgIGNvcnNpbmVSZW1vdmUoKTtcclxuICAgICAgZWxzZVxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjb3JzaW5lJywgSlNPTi5zdHJpbmdpZnkoY29yc2luZURhdGEpKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvcnNpbmVEZWwoZ29vZElkKSB7XHJcbiAgaWYgKCFnb29kSWQpXHJcbiAgICByZXR1cm47XHJcblxyXG4gIGxldCBjb3JzaW5lRGF0YSA9IGNvcnNpbmVHZXQoKTtcclxuICBpZiAoY29yc2luZURhdGEgPT09IG51bGwpXHJcbiAgICByZXR1cm47XHJcblxyXG4gIGZvciAobGV0IFtpLCBjb3JzaW5lSXRlbV0gb2YgY29yc2luZURhdGEuZW50cmllcygpKSB7XHJcbiAgICBpZiAoY29yc2luZUl0ZW0uaWQgPT09IGdvb2RJZCkge1xyXG4gICAgICBjb3JzaW5lRGF0YS5zcGxpY2UoaSwgMSk7XHJcblxyXG4gICAgICBpZiAoY29yc2luZURhdGEubGVuZ3RoID09PSAwKVxyXG4gICAgICAgIGNvcnNpbmVSZW1vdmUoKTtcclxuICAgICAgZWxzZVxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjb3JzaW5lJywgSlNPTi5zdHJpbmdpZnkoY29yc2luZURhdGEpKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvcnNpbmVHZXQoKSB7XHJcbiAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NvcnNpbmUnKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb3JzaW5lUmVtb3ZlKCkge1xyXG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdjb3JzaW5lJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb3JzaW5lSGFzKGdvb2RJZCkge1xyXG4gIGNvbnN0IGNvcnNpbmVEYXRhID0gY29yc2luZUdldCgpO1xyXG5cclxuICBpZihjb3JzaW5lRGF0YSA9PT0gbnVsbClcclxuICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgZm9yKGxldCBjb3JzaW5lSXRlbSBvZiBjb3JzaW5lRGF0YSkge1xyXG4gICAgaWYoY29yc2luZUl0ZW0uaWQgPT09IGdvb2RJZClcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRDb3VudENvbnRyb2woZWxlbSwgY291bnQgPSAxKSB7XHJcbiAgZWxlbS5xdWVyeVNlbGVjdG9yKCcuYnRuX2FkZF9jb3JzaW5lJykucmVtb3ZlKCk7XHJcblxyXG4gIGNvbnN0IGNvdW50Q29udHJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvdW50Q29udHJvbC5jbGFzc05hbWUgPSAnY291bnQtY29udHJvbCBnb29kc19fY291bnQtY29udHJvbCc7XHJcbiAgY291bnRDb250cm9sLmlubmVySFRNTCA9IGBcclxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY291bnQtY29udHJvbF9fYnRuIGNvdW50LWNvbnRyb2xfX2J0bl91cCBidG5fYWRkX2NvcnNpbmVcIj5cclxuICAgICAgPGkgY2xhc3M9XCJmYSBmYS1wbHVzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgPC9idXR0b24+XHJcbiAgICA8c3BhbiBjbGFzcz1cImNvdW50LWNvbnRyb2xfX3ZhbHVlXCI+JHtjb3VudH08L3NwYW4+XHJcbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNvdW50LWNvbnRyb2xfX2J0biBjb3VudC1jb250cm9sX19idG5fZG93biBidG5fZGVjX2NvcnNpbmVcIj5cclxuICAgICAgPGkgY2xhc3M9XCJmYSBmYS1taW51c1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgIDwvYnV0dG9uPmA7XHJcblxyXG4gIGVsZW0uYXBwZW5kKGNvdW50Q29udHJvbCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBidG5BZGRDb3JzaW5lRXZlbnQoYnRuKSB7XHJcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGNvbnNvbGUubG9nKGNvcnNpbmVHZXQoKSk7XHJcblxyXG4gICAgY29uc3QgZ29vZCA9IGJ0bi5jbG9zZXN0KCcucHJvZHVjdC1pdGVtJyk7XHJcbiAgICBjb25zdCBnb29kSWQgPSArZ29vZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcclxuXHJcbiAgICBjb3JzaW5lQWRkKGdvb2RJZCk7XHJcblxyXG4gICAgY29uc3QgbW91c2VDb29yZHMgPSB7XHJcbiAgICAgIHg6IGUucGFnZVgsXHJcbiAgICAgIHk6IGUucGFnZVlcclxuICAgIH1cclxuICAgIHNob3dDaGFuZ2VOdW0oMSwgbW91c2VDb29yZHMpO1xyXG5cclxuICAgIGNvbnN0IGlzQ29yc2luZUl0ZW0gPSBnb29kLmNsYXNzTmFtZS5pbmNsdWRlcygnY29yc2luZV9faXRlbScpO1xyXG4gICAgY29uc3QgaXNHb29kSGFzQ29udHJvbCA9IGdvb2QucXVlcnlTZWxlY3RvcignLmNvdW50LWNvbnRyb2wnKSB8fCBudWxsO1xyXG4gICAgaWYgKGlzR29vZEhhc0NvbnRyb2wpIHtcclxuICAgICAgY29uc3QgY29udHJvbFZhbHVlID0gK2dvb2QucXVlcnlTZWxlY3RvcignLmNvdW50LWNvbnRyb2xfX3ZhbHVlJykuaW5uZXJIVE1MO1xyXG4gICAgICBnb29kLnF1ZXJ5U2VsZWN0b3IoJy5jb3VudC1jb250cm9sX192YWx1ZScpLmlubmVySFRNTCA9IGNvbnRyb2xWYWx1ZSArIDE7XHJcbiAgICAgIGlmKGlzQ29yc2luZUl0ZW0pXHJcbiAgICAgICAgdXBkYXRlQ29yc2luZUJsb2NrKCk7XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ29vZEJ1eSA9IGdvb2QucXVlcnlTZWxlY3RvcignLmdvb2RzX19idXknKTtcclxuICAgIGFwcGVuZENvdW50Q29udHJvbChnb29kQnV5KTtcclxuICAgIFxyXG4gICAgZ29vZEJ1eS5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuX2FkZF9jb3JzaW5lJykuZm9yRWFjaChmdW5jdGlvbiAoYnRuKSB7XHJcbiAgICAgIGJ0bkFkZENvcnNpbmVFdmVudChidG4pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZ29vZEJ1eS5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuX2RlY19jb3JzaW5lJykuZm9yRWFjaChmdW5jdGlvbiAoYnRuKSB7XHJcbiAgICAgIGJ0bkRlY0NvcnNpbmVFdmVudChidG4pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYoaXNDb3JzaW5lSXRlbSlcclxuICAgICAgdXBkYXRlQ29yc2luZUJsb2NrKCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBidG5EZWNDb3JzaW5lRXZlbnQoYnRuKSB7XHJcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGNvbnNvbGUubG9nKGNvcnNpbmVHZXQoKSk7XHJcblxyXG4gICAgY29uc3QgZ29vZCA9IGJ0bi5jbG9zZXN0KCcucHJvZHVjdC1pdGVtJyk7XHJcbiAgICBjb25zdCBnb29kSWQgPSArZ29vZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcclxuXHJcbiAgICBjb3JzaW5lRGVjKGdvb2RJZCk7XHJcbiAgICBjb25zdCBtb3VzZUNvb3JkcyA9IHtcclxuICAgICAgeDogZS5wYWdlWCxcclxuICAgICAgeTogZS5wYWdlWVxyXG4gICAgfVxyXG4gICAgc2hvd0NoYW5nZU51bSgtMSwgbW91c2VDb29yZHMpO1xyXG5cclxuICAgIGNvbnN0IGlzQ29yc2luZUl0ZW0gPSBnb29kLmNsYXNzTmFtZS5pbmNsdWRlcygnY29yc2luZV9faXRlbScpO1xyXG4gICAgY29uc3QgY29udHJvbFZhbHVlID0gK2dvb2QucXVlcnlTZWxlY3RvcignLmNvdW50LWNvbnRyb2xfX3ZhbHVlJykuaW5uZXJIVE1MO1xyXG4gICAgaWYgKGNvbnRyb2xWYWx1ZSA+IDEpIHtcclxuICAgICAgZ29vZC5xdWVyeVNlbGVjdG9yKCcuY291bnQtY29udHJvbF9fdmFsdWUnKS5pbm5lckhUTUwgPSBjb250cm9sVmFsdWUgLSAxO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYoaXNDb3JzaW5lSXRlbSkge1xyXG4gICAgICAgIGdvb2QucmVtb3ZlKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgY291bnRDb250cm9sID0gZ29vZC5xdWVyeVNlbGVjdG9yKCcuY291bnQtY29udHJvbCcpO1xyXG4gICAgICAgIGNvdW50Q29udHJvbC5yZW1vdmUoKTtcclxuICAgICAgICBjb25zdCBnb29kQnV5ID0gZ29vZC5xdWVyeVNlbGVjdG9yKCcuZ29vZHNfX2J1eScpO1xyXG4gICAgICAgIGFwcGVuZERlZmF1bHRDb3JzaW5lQnRuKGdvb2RCdXkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYoaXNDb3JzaW5lSXRlbSlcclxuICAgICAgdXBkYXRlQ29yc2luZUJsb2NrKCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBidG5EZWxldGVDb3JzaW5lRXZlbnQoYnRuKSB7XHJcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGNvbnN0IGdvb2QgPSBidG4uY2xvc2VzdCgnLnByb2R1Y3QtaXRlbScpO1xyXG4gICAgY29uc3QgZ29vZElkID0gK2dvb2QuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XHJcblxyXG4gICAgY29yc2luZVJlbW92ZShnb29kSWQpO1xyXG5cclxuICAgIGNvbnN0IG1vdXNlQ29vcmRzID0ge1xyXG4gICAgICB4OiBlLnBhZ2VYLFxyXG4gICAgICB5OiBlLnBhZ2VZXHJcbiAgICB9XHJcbiAgICBzaG93Q2hhbmdlTnVtKC0xLCBtb3VzZUNvb3Jkcyk7XHJcblxyXG4gICAgY29uc3QgY29udHJvbFZhbHVlID0gK2dvb2QucXVlcnlTZWxlY3RvcignLmNvdW50LWNvbnRyb2xfX3ZhbHVlJykuaW5uZXJIVE1MO1xyXG4gICAgY29uc3QgaXNDb3JzaW5lSXRlbSA9IGdvb2QuY2xhc3NOYW1lLmluY2x1ZGVzKCdjb3JzaW5lX19pdGVtJyk7XHJcbiAgICBpZihpc0NvcnNpbmVJdGVtKSB7XHJcbiAgICAgIGdvb2QucmVtb3ZlKCk7XHJcbiAgICAgIHVwZGF0ZUNvcnNpbmVCbG9jaygpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kRGVmYXVsdENvcnNpbmVCdG4oZWxlbSkge1xyXG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgYnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcclxuICBidG4uY2xhc3NOYW1lID0gJ2J0bl9hZGRfY29yc2luZSBnb29kc19fYWRkLWNvcnNpbmUtYnRuJztcclxuICBidG4udmFsdWUgPSBcItCSINC60L7RgNC30LjQvdGDXCI7XHJcblxyXG4gIGJ0bkFkZENvcnNpbmVFdmVudChidG4pO1xyXG5cclxuICBlbGVtLmFwcGVuZChidG4pO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlQ29yc2luZSgpIHtcclxuICBjb25zdCBpc0NvcnNpbmVGaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvcnNpbmUnKS5sZW5ndGggIT09IDA7XHJcbiAgaWYgKCFpc0NvcnNpbmVGaWxlKVxyXG4gICAgcmV0dXJuO1xyXG5cclxuICBjb25zdCBjb3JzaW5lRGF0YSA9IGNvcnNpbmVHZXQoKTtcclxuICBjb25zdCBjb3JzaW5lQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3JzaW5lX19jb250ZW50Jyk7XHJcblxyXG4gIGlmIChjb3JzaW5lRGF0YSA9PT0gbnVsbCkge1xyXG4gICAgYXBwZW5kTWVzc2FnZSgn0JLQsNGI0LAg0LrQvtGA0LfQuNC90LAg0L/Rg9GB0YLQsCEnLCBjb3JzaW5lQ29udGVudCk7XHJcbiAgICBjb25zdCBmb290ZXJCbG9jayA9IGdldENvcnNpbmVGb290ZXJCbG9jaygwKTtcclxuICAgIGNvcnNpbmVDb250ZW50LmFwcGVuZChmb290ZXJCbG9jayk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBjb25zdCBjb3JzaW5lTGlzdEJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvcnNpbmVfX2l0ZW1zJyk7XHJcbiAgY29yc2luZURhdGEuZm9yRWFjaChmdW5jdGlvbiAoY29yc2luZUl0ZW0pIHtcclxuICAgIGNvbnN0IGNvcnNpbmVJdGVtQmxvY2sgPSBnZXRDb3JzaW5lSXRlbUJsb2NrKGNvcnNpbmVJdGVtKTtcclxuICAgIGNvcnNpbmVMaXN0QmxvY2suYXBwZW5kKGNvcnNpbmVJdGVtQmxvY2spO1xyXG4gIH0pO1xyXG5cclxuICAvLyBjb3JzaW5lTGlzdEJsb2NrLnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG5fYWRkX2NvcnNpbmUnKS5mb3JFYWNoKGZ1bmN0aW9uKGJ0bikge1xyXG4gIC8vICAgYnRuQWRkQ29yc2luZUV2ZW50KGJ0bik7XHJcbiAgLy8gfSk7XHJcbiAgLy8gY29yc2luZUxpc3RCbG9jay5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuX2RlY19jb3JzaW5lJykuZm9yRWFjaChmdW5jdGlvbihidG4pIHtcclxuICAvLyAgIGJ0bkRlY0NvcnNpbmVFdmVudChidG4pO1xyXG4gIC8vIH0pO1xyXG5cclxuICBsZXQgdG90YWxWYWx1ZSA9IDA7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvcnNpbmVfX3ByaWNlLXZhbHVlJykuZm9yRWFjaChmdW5jdGlvbihwcmljZVZhbHVlKSB7XHJcbiAgICB0b3RhbFZhbHVlICs9ICtwcmljZVZhbHVlLmlubmVySFRNTDtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgZm9vdGVyQmxvY2sgPSBnZXRDb3JzaW5lRm9vdGVyQmxvY2sodG90YWxWYWx1ZSk7XHJcbiAgY29yc2luZUNvbnRlbnQuYXBwZW5kKGZvb3RlckJsb2NrKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENvcnNpbmVGb290ZXJCbG9jayhzdW0pIHtcclxuICBjb25zdCBhbGxTdW1CbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBhbGxTdW1CbG9jay5jbGFzc05hbWUgPSAnY29yc2luZV9fdG90YWwtc3VtJztcclxuICBhbGxTdW1CbG9jay5pbm5lckhUTUwgPSBg0J7QsdGJ0LDRjyDRgdGD0LzQvNCwOiA8c3BhbiBjbGFzcz1cImNvcnNpbmVfX3RvdGFsLXN1bS12YWx1ZVwiPiR7c3VtfTwvc3Bhbj4g0YDRg9CxLmA7XHJcblxyXG5cclxuICBjb25zdCBjb3JzaW5lQnRucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvcnNpbmVCdG5zLmNsYXNzTmFtZSA9ICdjb3JzaW5lX19idG5zJztcclxuICBcclxuICBpZihzdW0gPiAwKSB7XHJcbiAgICBjb3JzaW5lQnRucy5pbm5lckhUTUwgPSBgXHJcbiAgICA8YSBocmVmPVwiL1wiIGNsYXNzPVwiYnRuIGJ0bl9ncmVlbiBjb3JzaW5lX19idG4tcmV0dXJuXCI+0JLQtdGA0L3Rg9GC0YzRgdGPINCyINC80LXQvdGOPC9hPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBvcmRlci1saW5rIGNvcnNpbmVfX2J0bi1vcmRlciBidG5fb3JkZXJcIj7QodC00LXQu9Cw0YLRjCDQt9Cw0LrQsNC3PC9idXR0b24+YDtcclxuICB9IGVsc2Uge1xyXG4gICAgY29yc2luZUJ0bnMuaW5uZXJIVE1MID0gYFxyXG4gICAgPGEgaHJlZj1cIi9cIiBjbGFzcz1cImJ0biBidG5fZ3JlZW4gY29yc2luZV9fYnRuLXJldHVyblwiPtCS0LXRgNC90YPRgtGM0YHRjyDQsiDQvNC10L3RjjwvYT5cclxuICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuX2Rpc2FibGVkIG9yZGVyLWxpbmtcIj7QodC00LXQu9Cw0YLRjCDQt9Cw0LrQsNC3PC9idXR0b24+YDtcclxuICB9XHJcblxyXG5cclxuICBjb25zdCBmb290ZXJCbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGZvb3RlckJsb2NrLmNsYXNzTmFtZSA9ICdjb3JzaW5lX19mb290ZXInO1xyXG4gIGZvb3RlckJsb2NrLmFwcGVuZENoaWxkKGFsbFN1bUJsb2NrKTtcclxuICBmb290ZXJCbG9jay5hcHBlbmRDaGlsZChjb3JzaW5lQnRucyk7XHJcblxyXG4gIHJldHVybiBmb290ZXJCbG9jaztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENvcnNpbmVJdGVtQmxvY2soY29yc2luZUl0ZW0pIHtcclxuICBjb25zdCBwcm9kdWN0SW5mID0gZ2V0UHJvZHVjdEluZihjb3JzaW5lSXRlbS5pZCk7XHJcbiAgY29uc3QgY29yc2luZUl0ZW1TdW0gPSBjb3JzaW5lSXRlbS5jb3VudCAqICtwcm9kdWN0SW5mLnByaWNlO1xyXG4gIGNvbnN0IGNvcnNpbmVJdGVtQmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb3JzaW5lSXRlbUJsb2NrLmNsYXNzTmFtZSA9ICdjb3JzaW5lX19pdGVtIHByb2R1Y3QtaXRlbSc7XHJcbiAgY29yc2luZUl0ZW1CbG9jay5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBjb3JzaW5lSXRlbS5pZCk7XHJcbiAgY29yc2luZUl0ZW1CbG9jay5pbm5lckhUTUwgPSBgXHJcbiAgICA8aGVhZGVyIGNsYXNzPVwiY29yc2luZV9faXRlbS1oZWFkZXJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvcnNpbmVfX2JnXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCJkaXN0L2ltZy9nb29kcy8ke3Byb2R1Y3RJbmYuaWR9LmpwZ1wiIGFsdD1cIlwiIGNsYXNzPVwiY29yc2luZV9faW1nXCI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29yc2luZV9fbWFpblwiPlxyXG4gICAgICAgIDxwIGNsYXNzPVwiY29yc2luZV9fbmFtZVwiPiR7cHJvZHVjdEluZi5uYW1lfTwvcD5cclxuICAgICAgICA8cCBjbGFzcz1cImNvcnNpbmVfX2l0ZW0tcHJpY2VcIj48c3BhbiBjbGFzcz1cImNvcnNpbmVfX2l0ZW0tcHJpY2UtdmFsdWVcIj4ke3Byb2R1Y3RJbmYucHJpY2V9PC9zcGFuPiDRgNGD0LEuPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvaGVhZGVyPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvdW50LWNvbnRyb2wgY29yc2luZV9fY291bnQtY29udHJvbFwiPlxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNvdW50LWNvbnRyb2xfX2J0biBjb3VudC1jb250cm9sX19idG5fdXAgYnRuX2FkZF9jb3JzaW5lXCI+XHJcbiAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1wbHVzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJjb3VudC1jb250cm9sX192YWx1ZVwiPiR7Y29yc2luZUl0ZW0uY291bnR9PC9zcGFuPlxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNvdW50LWNvbnRyb2xfX2J0biBjb3VudC1jb250cm9sX19idG5fZG93biBidG5fZGVjX2NvcnNpbmVcIj5cclxuICAgICAgICA8aSBjbGFzcz1cImZhIGZhLW1pbnVzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPHAgY2xhc3M9XCJjb3JzaW5lX19wcmljZVwiPjxzcGFuIGNsYXNzPVwiY29yc2luZV9fcHJpY2UtdmFsdWVcIj4ke2NvcnNpbmVJdGVtU3VtfTwvc3Bhbj4g0YDRg9CxLjwvcD5cclxuICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4tZGx0IGNvcnNpbmVfX2J0bi1kbHQgYnRuX2RlbF9jb3JzaW5lXCIgdmFsdWU9XCJYXCIgdGl0bGU9XCLQo9Cx0YDQsNGC0Ywg0LjQtyDQutC+0YDQt9C40L3Ri1wiPmA7XHJcblxyXG4gIHJldHVybiBjb3JzaW5lSXRlbUJsb2NrO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kTWVzc2FnZShtZXNzYWdlLCBlbGVtKSB7XHJcbiAgY29uc3QgbWVzc2FnZUJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIG1lc3NhZ2VCbG9jay5jbGFzc05hbWUgPSAndGV4dC1tZXNzYWdlJztcclxuICBtZXNzYWdlQmxvY2suaW5uZXJIVE1MID0gbWVzc2FnZTtcclxuXHJcbiAgZWxlbS5hcHBlbmQobWVzc2FnZUJsb2NrKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb2R1Y3RJbmYoaWQpIHtcclxuICBjb25zdCBwcm9kdWN0cyA9IFt7XCJpZFwiOlwiMVwiLFwibmFtZVwiOlwi0JrQsNC70LjRhNC+0YDQvdC40Y8g0YLRg9C90LXRhlwiLFwic3RydWN0XCI6XCLQoNC40YEsINC90L7RgNC4LCDQvtCz0YPRgNC10YYsINGB0YvRgCwg0LDQstC+0LrQsNC00L4sINGC0YPQvdC10YYsINGE0LjRgNC80LXQvdC90YvQuSDRgdC+0YPRgSwg0LrRg9C90LbRg9GCLCDRgtC+0LHQuNC60L5cIixcInByaWNlXCI6XCIyOTBcIixcImNhdGVnb3J5XCI6XCJyb2xsXCJ9LHtcImlkXCI6XCIyXCIsXCJuYW1lXCI6XCLQmtCw0LvQuNGE0L7RgNC90LjRjyDRg9Cz0L7RgNGMXCIsXCJzdHJ1Y3RcIjpcItCg0LjRgSwg0L3QvtGA0LgsINC+0LPRg9GA0LXRhiwg0LzQsNC50L7QvdC10LcsINCw0LLQvtC60LDQtNC+LCDRg9Cz0L7RgNGMLCDRgtC+0LHQuNC60L5cIixcInByaWNlXCI6XCIyNzBcIixcImNhdGVnb3J5XCI6XCJyb2xsXCJ9LHtcImlkXCI6XCIzXCIsXCJuYW1lXCI6XCLQotC+0LHQuNC60L4g0YPQs9C+0YDRjFwiLFwic3RydWN0XCI6XCLQoNC40YEsINC90L7RgNC4LCDQvtCz0YPRgNC10YYsINGB0YvRgCBcXFwi0KTQuNC70LDQtNC10LvRjNGE0LjRj1xcXCIsINGC0L7QsdC40LrQviwg0LfQtdC70LXQvdGL0Lkg0LvRg9C6XCIsXCJwcmljZVwiOlwiMjcwXCIsXCJjYXRlZ29yeVwiOlwiXCJ9LHtcImlkXCI6XCI0XCIsXCJuYW1lXCI6XCLQpNC40LvQsNC00LXQu9GM0YTQuNGPXCIsXCJzdHJ1Y3RcIjpcItCg0LjRgSwg0L3QvtGA0LgsINGB0YvRgCBcXFwi0KTQuNC70LDQtNC10LvRjNGE0LjRj1xcXCIsINC+0LPRg9GA0LXRhiwg0LvQvtGB0L7RgdGMXCIsXCJwcmljZVwiOlwiMjUwXCIsXCJjYXRlZ29yeVwiOlwicm9sbFwifSx7XCJpZFwiOlwiNVwiLFwibmFtZVwiOlwi0KHQsNC60YPRgNCwXCIsXCJzdHJ1Y3RcIjpcItCg0LjRgSwg0LvQuNGB0YIg0YLQvtGE0YMsINGB0YvRgCBcXFwi0KTQuNC70LDQtNC10LvRjNGE0LjRj1xcXCIsINGD0LPQvtGA0YxcIixcInByaWNlXCI6XCIyNzBcIixcImNhdGVnb3J5XCI6XCJyb2xsXCJ9LHtcImlkXCI6XCI2XCIsXCJuYW1lXCI6XCLQn9C40YDQsNC80LjQtNCwXCIsXCJzdHJ1Y3RcIjpcItCg0LjRgSwg0L3QvtGA0LgsINGB0YvRgCBcXFwi0KTQuNC70LDQtNC10LvRjNGE0LjRj1xcXCIsINC+0LzQu9C10YIsINGC0L7QsdC40LrQviwg0YPQs9C+0YDRjCwg0LvQvtGB0L7RgdGMXCIsXCJwcmljZVwiOlwiMjcwXCIsXCJjYXRlZ29yeVwiOlwicm9sbFwifSx7XCJpZFwiOlwiN1wiLFwibmFtZVwiOlwi0JvQvtGB0L7RgdGMXCIsXCJzdHJ1Y3RcIjpcItGA0LjRgSwg0LvQvtGB0L7RgdGMXCIsXCJwcmljZVwiOlwiNTBcIixcImNhdGVnb3J5XCI6XCJzdXNoaVwifSx7XCJpZFwiOlwiOFwiLFwibmFtZVwiOlwi0JrQvtC/0YfQtdC90L3Ri9C5INC70L7RgdC+0YHRjFwiLFwic3RydWN0XCI6XCLRgNC40YEsINC60L7Qv9GH0LXQvdGL0Lkg0LvQvtGB0L7RgdGMXCIsXCJwcmljZVwiOlwiNjBcIixcImNhdGVnb3J5XCI6XCJzdXNoaVwifSx7XCJpZFwiOlwiOVwiLFwibmFtZVwiOlwi0JrRgNC10LLQtdGC0LrQsFwiLFwic3RydWN0XCI6XCLRgNC40YEsINC60YDQtdCy0LXRgtC60LBcIixcInByaWNlXCI6XCI2MFwiLFwiY2F0ZWdvcnlcIjpcInN1c2hpXCJ9LHtcImlkXCI6XCIxMFwiLFwibmFtZVwiOlwi0KHQv9Cw0LnRgdC4INC70L7RgdC+0YHRjFwiLFwic3RydWN0XCI6XCLQvdC+0YDQuCwg0YDQuNGBLCDRgdC/0LDQudGB0Lgg0YHQvtGD0YEsINC70L7RgdC+0YHRjFwiLFwicHJpY2VcIjpcIjUwXCIsXCJjYXRlZ29yeVwiOlwic3VzaGlcIn0se1wiaWRcIjpcIjExXCIsXCJuYW1lXCI6XCLQodC/0LDQudGB0Lgg0YPQs9C+0YDRjFwiLFwic3RydWN0XCI6XCLQvdC+0YDQuCwg0YDQuNGBLCDRgdC/0LDQudGB0Lgg0YHQvtGD0YEsINGD0LPQvtGA0YxcIixcInByaWNlXCI6XCI1MFwiLFwiY2F0ZWdvcnlcIjpcInN1c2hpXCJ9LHtcImlkXCI6XCIxMlwiLFwibmFtZVwiOlwi0KHQv9Cw0LnRgdC4INC80LjQtNC40LhcIixcInN0cnVjdFwiOlwi0L3QvtGA0LgsINGA0LjRgSwg0YHQv9Cw0LnRgdC4INGB0L7Rg9GBLCDQvNC40LTQuNC4XCIsXCJwcmljZVwiOlwiNTBcIixcImNhdGVnb3J5XCI6XCJzdXNoaVwifSx7XCJpZFwiOlwiMTNcIixcIm5hbWVcIjpcItCU0YPQvdC60LDQvSDQuNC60YPRgNCwXCIsXCJzdHJ1Y3RcIjpcItC90L7RgNC4LCDRgNC40YEsINC40LrRgNCwINC70L7RgdC+0YHRj1wiLFwicHJpY2VcIjpcIjcwXCIsXCJjYXRlZ29yeVwiOlwic3VzaGlcIn0se1wiaWRcIjpcIjE0XCIsXCJuYW1lXCI6XCLQlNGD0L3QutCw0L0g0YfRg9C60LBcIixcInN0cnVjdFwiOlwi0L3QvtGA0LgsINGA0LjRgSwg0YfRg9C60LAg0YHQsNC70LDRglwiLFwicHJpY2VcIjpcIjM1XCIsXCJjYXRlZ29yeVwiOlwic3VzaGlcIn0se1wiaWRcIjpcIjE1XCIsXCJuYW1lXCI6XCLQn9C40YbRhtCwINCf0LXQv9C/0LXRgNC+0L3QuFwiLFwic3RydWN0XCI6XCLRgdGL0YAg0LzQvtGG0LDRgNC10LvQu9CwLCDRgdC+0YPRgSwg0YHQsNC70Y/QvNC4INC/0LXQv9C/0LXRgNC+0L3QuCwg0YLQvtC80LDRgtGLINGH0LXRgNGA0LgsINGH0LXRgdC90L7Quiwg0L7RgdGC0YDRi9C5INC/0LXRgNC10YZcIixcInByaWNlXCI6XCIzODBcIixcImNhdGVnb3J5XCI6XCJwaXp6YVwifSx7XCJpZFwiOlwiMTZcIixcIm5hbWVcIjpcItCf0LjRhtGG0LAg0JrQsNGA0LHQvtC90LDRgNCwXCIsXCJzdHJ1Y3RcIjpcItCh0L7Rg9GBINGC0L7QvNCw0YLQvdGL0LksINGB0YvRgCDQvNC+0YbQsNGA0LXQu9C70LAsINCx0LXQutC+0L0sINCy0LXRgtGH0LjQvdCwLCDQutC+0LvQsdCw0YHQutC4INCx0LDQstCw0YDRgdC60LjQtSwg0YHRi9GAINC/0LDRgNC80LXQt9Cw0L0sINGP0LnRhtC+INC60YPRgNC40L3QvtC1XCIsXCJwcmljZVwiOlwiMzcwXCIsXCJjYXRlZ29yeVwiOlwicGl6emFcIn0se1wiaWRcIjpcIjE3XCIsXCJuYW1lXCI6XCLQn9C40YbRhtCwINCc0LDRgNCz0LDRgNC40YLQsFwiLFwic3RydWN0XCI6XCLRgdGL0YAg0LzQvtGG0LDRgNC10LvQu9CwLCDRgdC+0YPRgSwg0LHQsNC30LjQu9C40LpcIixcInByaWNlXCI6XCIyNDBcIixcImNhdGVnb3J5XCI6XCJwaXp6YVwifSx7XCJpZFwiOlwiMThcIixcIm5hbWVcIjpcItCf0LjRhtGG0LAg0KbQtdC30LDRgNGMXCIsXCJzdHJ1Y3RcIjpcItGB0YvRgCDQvNC+0YbQsNGA0LXQu9C70LAsINGB0L7Rg9GBLCDQutGD0YDQuNC90L7QtSDRhNC40LvQtSwg0YLQvtC80LDRgtGLINGH0LXRgNGA0LgsINC60LDQv9GD0YHRgtCwINC/0LXQutC40L3RgdC60LDRjyzRgdC+0YPRgSDRhtC10LfQsNGA0Yws0YHRi9GAINC/0LDRgNC80LXQt9Cw0L0uXCIsXCJwcmljZVwiOlwiMzkwXCIsXCJjYXRlZ29yeVwiOlwicGl6emFcIn0se1wiaWRcIjpcIjE5XCIsXCJuYW1lXCI6XCLQkdC+0LHQvtCy0LDRjyDQu9Cw0L/RiNCwXCIsXCJzdHJ1Y3RcIjpcItCb0LDQv9GI0LAg0LHQvtCx0L7QstCw0Y8sINC+0LLQvtGJ0L3QvtC5INC80LjQutGBLCDQvNC+0YDQtdC/0YDQvtC00YPQutGC0YssINGC0LjQs9GA0L7QstCw0Y8g0LrRgNC10LLQtdGC0LrQsCwg0YLQtdGA0LjRj9C60Lgg0YHQvtGD0YEsINGE0LjRgNC80LXQvdC90YvQuSDRgdC+0YPRgSBcIixcInByaWNlXCI6XCIyNDBcIixcImNhdGVnb3J5XCI6XCJwYXN0YVwifSx7XCJpZFwiOlwiMjBcIixcIm5hbWVcIjpcItCb0LDQv9GI0LAg0JrQsNGA0LHQvtC90LDRgNCwXCIsXCJzdHJ1Y3RcIjpcItCb0LDQv9GI0LAg0YPQtNC+0L0sINGB0LvQuNCy0L7Rh9C90L4t0YfQtdGB0L3QvtGH0L3Ri9C5INGB0L7Rg9GBLCDQsdC10LrQvtC9LCDRj9C40YfQvdGL0Lkg0LbQtdC70YLQvtC6LCDRgdGL0YAg0L/QsNGA0LzQtdC30LDQvVwiLFwicHJpY2VcIjpcIjI0MFwiLFwiY2F0ZWdvcnlcIjpcInBhc3RhXCJ9LHtcImlkXCI6XCIyMVwiLFwibmFtZVwiOlwi0J3QsNCx0L7RgCDQntCy0L7RidC90L7QuVwiLFwic3RydWN0XCI6XCLQm9Cw0L/RiNCwINGE0YPQvdGH0L7Qt9CwLCDQvtCy0L7RidC4XCIsXCJwcmljZVwiOlwiMTIwXCIsXCJjYXRlZ29yeVwiOlwicGFzdGFcIn0se1wiaWRcIjpcIjIyXCIsXCJuYW1lXCI6XCLQndCw0LHQvtGAINGP0LjRh9C90YvQuVwiLFwic3RydWN0XCI6XCLQm9Cw0L/RiNCwINGP0LjRh9C90LDRjywg0LrRg9GA0LjRhtCwLCDRgdC70LjQstC+0YfQvdC+LdGH0LXRgdC90L7Rh9C90YvQuSDRgdC+0YPRgVwiLFwicHJpY2VcIjpcIjIyMFwiLFwiY2F0ZWdvcnlcIjpcInBhc3RhXCJ9LHtcImlkXCI6XCIyM1wiLFwibmFtZVwiOlwi0JrRgNC10LLQtdGC0L7Rh9C90YvQuSDRgSDQsNCy0L7QutCw0LTQvlwiLFwic3RydWN0XCI6XCLQutC+0LrRgtC10LnQu9GM0L3Ri9C1INC60YDQtdCy0LXRgtC60LgsINC/0L7QvNC40LTQvtGA0YssINC+0LPRg9GA0YbRiywg0LDQstC+0LrQsNC00L4sINGC0L7QsdC40LrQvizRj9C/0L7QvdGB0LrQuNC5INC80LDQudC+0L3QtdC3LlwiLFwicHJpY2VcIjpcIjI1MFwiLFwiY2F0ZWdvcnlcIjpcInNhbGFkXCJ9LHtcImlkXCI6XCIyNFwiLFwibmFtZVwiOlwi0JPRgNC10YfQtdGB0LrQuNC5XCIsXCJzdHJ1Y3RcIjpcItC60LDQv9GD0YHRgtCwINC/0LXQutC40L3RgdC60LDRjywg0L/QvtC80LjQtNC+0YDRiywg0L7Qs9GD0YDRhtGLLCDQv9C10YDQtdGGINCx0L7Qu9Cz0LDRgNGB0LrQuNC5LCDRgdGL0YAg0LPRgNC10YfQtdGB0LrQuNC5LCDQvNCw0YHQu9C40L3Riywg0LfQtdC70LXQvdGMLlwiLFwicHJpY2VcIjpcIjE4MFwiLFwiY2F0ZWdvcnlcIjpcInNhbGFkXCJ9LHtcImlkXCI6XCIyNVwiLFwibmFtZVwiOlwi0KbQtdC30LDRgNGMINGBINC60YDQtdCy0LXRgtC60LDQvNC4XCIsXCJzdHJ1Y3RcIjpcItC60LDQv9GD0YHRgtCwINC/0LXQutC40L3RgdC60LDRjyAs0YHQvtGD0YEg0YbQtdC30LDRgNGMLCDRh9C10YHQvdC+0YfQvdGL0LUg0LPRgNC10L3QutC4LCDRgtC+0LzQsNGC0Ysg0YfQtdGA0YDQuCwg0Y/QudGG0L4g0L/QtdGA0LXQv9C10LvQuNC90L7QtSwg0YHRi9GAINC/0LDRgNC80LXQt9Cw0L0sINGC0LjQs9GA0L7QstGL0LUg0LrRgNC10LLQtdGC0LrQuC5cIixcInByaWNlXCI6XCIyODBcIixcImNhdGVnb3J5XCI6XCJzYWxhZFwifSx7XCJpZFwiOlwiMjZcIixcIm5hbWVcIjpcItCm0LXQt9Cw0YDRjCDRgSDQutGD0YDQuNGG0LXQuVwiLFwic3RydWN0XCI6XCLQutCw0L/Rg9GB0YLQsCDQv9C10LrQuNC90YHQutCw0Y8gLNGB0L7Rg9GBINGG0LXQt9Cw0YDRjCwg0YfQtdGB0L3QvtGH0L3Ri9C1INCz0YDQtdC90LrQuCwg0YLQvtC80LDRgtGLINGH0LXRgNGA0LgsINGP0LnRhtC+INC/0LXRgNC10L/QtdC70LjQvdC+0LUsINGB0YvRgCDQv9Cw0YDQvNC10LfQsNC9LCDQutGD0YDQuNC90L7QtSDRhNC40LvQtS5cIixcInByaWNlXCI6XCIyNTBcIixcImNhdGVnb3J5XCI6XCJzYWxhZFwifV07XHJcblxyXG4gIGZvcihsZXQgcHJvZHVjdEl0ZW0gb2YgcHJvZHVjdHMpIHtcclxuICAgIGlmKHByb2R1Y3RJdGVtLmlkID09IGlkKVxyXG4gICAgICByZXR1cm4gcHJvZHVjdEl0ZW07XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRDb250cm9sVG9Db3JzaW5lR29vZHMoKSB7XHJcbiAgY29uc3QgaXNHb29kc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ29vZHMnKS5sZW5ndGggIT09IDA7XHJcbiAgaWYoIWlzR29vZHNTZWN0aW9uKVxyXG4gICAgcmV0dXJuO1xyXG5cclxuICBjb25zdCBnb29kcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nb29kc19faXRlbScpO1xyXG4gIGdvb2RzLmZvckVhY2goZnVuY3Rpb24oZ29vZCkge1xyXG4gICAgY29uc3QgZ29vZElkID0gK2dvb2QuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XHJcbiAgICBjb25zdCBjb3JzaW5lRGF0YSA9IGNvcnNpbmVHZXQoKTtcclxuXHJcbiAgICBpZihjb3JzaW5lRGF0YSA9PT0gbnVsbClcclxuICAgICAgcmV0dXJuO1xyXG4gICAgZm9yKGxldCBjb3JzaW5lSXRlbSBvZiBjb3JzaW5lRGF0YSkge1xyXG4gICAgICBpZihjb3JzaW5lSXRlbS5pZCA9PT0gZ29vZElkKSB7XHJcbiAgICAgICAgY29uc3QgZ29vZEJ1eSA9IGdvb2QucXVlcnlTZWxlY3RvcignLmdvb2RzX19idXknKTtcclxuICAgICAgICBhcHBlbmRDb3VudENvbnRyb2woZ29vZEJ1eSwgY29yc2luZUl0ZW0uY291bnQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVDb3JzaW5lQmxvY2soKSB7XHJcbiAgbGV0IHRvdGFsVmFsdWUgPSAwO1xyXG4gIGNvbnN0IGNvcnNpbmVJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JzaW5lX19pdGVtJyk7XHJcbiAgY29yc2luZUl0ZW1zLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgY29uc3QgaXRlbVByaWNlID0gK2l0ZW0ucXVlcnlTZWxlY3RvcignLmNvcnNpbmVfX2l0ZW0tcHJpY2UtdmFsdWUnKS5pbm5lckhUTUw7XHJcbiAgICBjb25zdCBpdGVtQ291bnQgPSAraXRlbS5xdWVyeVNlbGVjdG9yKCcuY291bnQtY29udHJvbF9fdmFsdWUnKS5pbm5lckhUTUw7XHJcbiAgICBjb25zdCBpdGVtU3VtID0gaXRlbVByaWNlICogaXRlbUNvdW50O1xyXG5cclxuICAgIGNvbnN0ICRpdGVtVG90YWwgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5jb3JzaW5lX19wcmljZS12YWx1ZScpO1xyXG4gICAgY29uc29sZS5sb2coJGl0ZW1Ub3RhbCk7XHJcbiAgICAkaXRlbVRvdGFsLmlubmVySFRNTCA9IGl0ZW1TdW07XHJcblxyXG4gICAgdG90YWxWYWx1ZSArPSBpdGVtU3VtO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCAkdG90YWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29yc2luZV9fdG90YWwtc3VtLXZhbHVlJyk7XHJcbiAgJHRvdGFsLmlubmVySFRNTCA9IHRvdGFsVmFsdWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbGVhckNvcnNpbmVCbG9jaygpIHtcclxuICBjb25zdCBpc0NvcnNpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29yc2luZScpLmxlbmd0aCAhPT0gMDtcclxuICBpZighaXNDb3JzaW5lKVxyXG4gICAgcmV0dXJuO1xyXG4gIFxyXG4gIGNvbnN0ICRjb3JzaW5lSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29yc2luZV9faXRlbXMnKTtcclxuICAkY29yc2luZUl0ZW1zLmlubmVySFRNTCA9ICcnO1xyXG5cclxuICBjb25zdCAkY29yc2luZUZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3JzaW5lX19mb290ZXInKTtcclxuICAkY29yc2luZUZvb3Rlci5yZW1vdmUoKTtcclxuXHJcbiAgY29uc3QgJGNvcnNpbmVDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvcnNpbmVfX2NvbnRlbnQnKTtcclxuICBhcHBlbmRNZXNzYWdlKCfQktCw0YjQsCDQutC+0YDQt9C40L3QsCDQv9GD0YHRgtCwIScsICRjb3JzaW5lQ29udGVudCk7XHJcblxyXG4gIGNvbnN0ICRuZXdDb3JzaW5lRm9vdGVyID0gZ2V0Q29yc2luZUZvb3RlckJsb2NrKDApO1xyXG4gICRjb3JzaW5lQ29udGVudC5hcHBlbmQoJG5ld0NvcnNpbmVGb290ZXIpO1xyXG59XHJcblxyXG4vLyBjbGVhckNvcnNpbmVCbG9jaygpOyIsImltcG9ydCB7IGNoZWNrVXBUb2dnbGUsIHRvZ2dsZU1haW5NZW51LCBpbmRleENoZWNrSGVhZGVyVG9wLFxyXG4gICAgICAgICBjb3JzaW5lR2V0LCBjb3JzaW5lSGFzLCBhcHBlbmRDb3VudENvbnRyb2wsXHJcbiAgICAgICAgIGFkZENvbnRyb2xUb0NvcnNpbmVHb29kc30gZnJvbSAnLi9mdW5jdGlvbnMnO1xyXG5cclxuaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bl9kaXNhYmxlZCcpLmxlbmd0aCAhPT0gMCkge1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG5fZGlzYWJsZWQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9KTtcclxufVxyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtdG9nZ2xlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICB0b2dnbGVNYWluTWVudSgpO1xyXG59KTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XHJcbiAgY2hlY2tVcFRvZ2dsZSgpO1xyXG59KTtcclxuXHJcbmluZGV4Q2hlY2tIZWFkZXJUb3AoKTtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcclxuICBpbmRleENoZWNrSGVhZGVyVG9wKCk7XHJcbn0pO1xyXG5cclxuYWRkQ29udHJvbFRvQ29yc2luZUdvb2RzKCk7Il0sInNvdXJjZVJvb3QiOiIifQ==