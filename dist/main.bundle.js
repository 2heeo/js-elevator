/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Elevator/index.js":
/*!*******************************!*\
  !*** ./src/Elevator/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Elevator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Elevator */ \"./src/Elevator/modules/Elevator.js\");\n/* harmony import */ var _modules_Person__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Person */ \"./src/Elevator/modules/Person.js\");\n\n // 다른 방식\n// const Elevator = require('./modules/Elevator');\n// const Person = require('./modules/Person');\n// 엘레베이터 생성\n\nvar elevator = new _modules_Elevator__WEBPACK_IMPORTED_MODULE_0__.default();\nelevator.setElevator(); // 사람 생성\n\nvar a = new _modules_Person__WEBPACK_IMPORTED_MODULE_1__.default();\na.setPerson();\nvar b = new _modules_Person__WEBPACK_IMPORTED_MODULE_1__.default();\nb.setPerson();\nvar c = new _modules_Person__WEBPACK_IMPORTED_MODULE_1__.default();\nc.setPerson();\nvar d = new _modules_Person__WEBPACK_IMPORTED_MODULE_1__.default();\nd.setPerson();\nvar e = new _modules_Person__WEBPACK_IMPORTED_MODULE_1__.default();\ne.setPerson();\n\n//# sourceURL=webpack://javascript-training/./src/Elevator/index.js?");

/***/ }),

/***/ "./src/Elevator/modules/Elevator.js":
/*!******************************************!*\
  !*** ./src/Elevator/modules/Elevator.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Elevator)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Elevator = /*#__PURE__*/function () {\n  function Elevator() {\n    _classCallCheck(this, Elevator);\n\n    this.elevator = Elevator.create();\n    this.NUM_OF_AVAILABLE = 4;\n    this.buttons = _toConsumableArray(document.getElementsByClassName('elevator_floor_buttons')[0].getElementsByTagName('li'));\n    this.building = document.querySelector('.board .building');\n    this.floors = _toConsumableArray(this.building.querySelectorAll('li')).slice().reverse();\n    this.movedElevator = document.importNode(this.elevator, true);\n    this.callElevator();\n  } // 엘레베이터 만들기\n\n\n  _createClass(Elevator, [{\n    key: \"setElevator\",\n    value: // 엘레베이터 객체 생성\n    function setElevator() {\n      var floor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n      this.floors[floor].querySelector('.lift_hole').appendChild(this.elevator);\n    } // 엘레베이터에 사람 태우기(층에서 사람잡지말고 lift_holes 안에 있는 애들은 빼줘야함)\n\n  }, {\n    key: \"pickUpPerson\",\n    value: function pickUpPerson(arrivedFloorIdx, elevator) {\n      var arrivedFloor = this.floors[arrivedFloorIdx];\n      var waitingPersonList = arrivedFloor.querySelectorAll('.person');\n      var innerPersonList = elevator.querySelectorAll('.person');\n      var numOfInnerPerson = innerPersonList.length;\n      var numOfWaitingPerson = waitingPersonList.length;\n      console.log('===================================');\n      console.log(\"\\uB3C4\\uCC29\\uD55C \\uCE35\\uC5D0 \".concat(numOfWaitingPerson, \"\\uBA85\\uC774 \\uAE30\\uB2E4\\uB9AC\\uACE0 \\uC788\\uC74C\"));\n      console.log(\"\\uD604\\uC7AC \\uC5D8\\uB808\\uBCA0\\uC774\\uD130 \\uC548\\uC5D0 \".concat(numOfInnerPerson, \"\\uBA85\\uC774 \\uD0C0\\uACE0 \\uC788\\uC74C\"));\n\n      if (numOfInnerPerson + numOfWaitingPerson > this.NUM_OF_AVAILABLE) {\n        console.log('===================================');\n        console.log('최대 탑승 가능 인원 수 초과');\n        console.log('===================================');\n      } else {\n        var temp = []; // 타고 있던 사람들 다 내리고, 기다리던 사람들 다 태우기      \n\n        temp = innerPersonList;\n        innerPersonList = waitingPersonList;\n        waitingPersonList = temp;\n        innerPersonList.forEach(function (i) {\n          elevator.appendChild(i);\n        });\n        waitingPersonList.forEach(function (w) {\n          arrivedFloor.appendChild(w);\n        });\n        console.log('===================================');\n        console.log(\"\".concat(numOfInnerPerson, \"\\uBA85\\uC774 \\uB0B4\\uB9AC\\uACE0, \").concat(numOfWaitingPerson, \"\\uBA85\\uC774 \\uD0D4\\uC74C\"));\n        console.log('===================================');\n      }\n    } // 엘레베이터 몇 층에 있는지 찾기\n\n  }, {\n    key: \"findElevator\",\n    value: function findElevator() {\n      var liftHoles = _toConsumableArray(this.building.querySelectorAll('.lift_hole')).slice().reverse();\n\n      var currentElevatorFloor = 0;\n      liftHoles.forEach(function (l, idx) {\n        if (l.querySelector('.elevator')) {\n          console.log(\"\\uC5D8\\uB808\\uBCA0\\uC774\\uD130\\uB294 \\uD604\\uC7AC \".concat(idx + 1, \"\\uCE35\\uC5D0 \\uC788\\uC74C\"));\n          currentElevatorFloor = idx;\n          return;\n        }\n      });\n      return currentElevatorFloor;\n    } // 이동하고 싶은 층의 버튼 클릭\n\n  }, {\n    key: \"callElevator\",\n    value: function callElevator() {\n      var _this = this;\n\n      this.buttons.forEach(function (b, idx) {\n        b.addEventListener('click', function (event) {\n          var clickedBtn = event.target;\n          var clickedFloor = Number.parseInt(clickedBtn.innerText);\n          var idxOfclickedBtn = idx; // 누른 버튼 color\n\n          _this.buttons.map(function (b) {\n            return b.querySelector('button').setAttribute('style', 'background: none');\n          });\n\n          clickedBtn.closest('li').querySelector('button').setAttribute('style', 'background:tomato');\n          console.log(\"\".concat(clickedFloor, \"\\uCE35 \\uB204\\uB984\")); // 엘레베이터 이동\n\n          _this.moveElevator(clickedFloor, idxOfclickedBtn);\n        });\n      });\n    } // 엘레베이터 이동\n\n  }, {\n    key: \"moveElevator\",\n    value: function moveElevator(clickdFloor, idxOfclickedBtn) {\n      var _this2 = this;\n\n      var textFloor = document.querySelector('.current_floor');\n      var elevator = this.elevator;\n      var count = this.findElevator();\n\n      if (count >= clickdFloor) {\n        var moveDown = setInterval(function () {\n          // console.log(`count : ${count}, 누른층 : ${clickdFloor}`);\n          _this2.elevator.remove();\n\n          _this2.floors[count].querySelector('.lift_hole').append(_this2.movedElevator);\n\n          textFloor.textContent = \"\".concat(count + 1, \"\\uCE35\");\n\n          if (count + 1 === clickdFloor) {\n            elevator = document.querySelector('.elevator');\n            console.log(\"[\\uB3C4\\uCC29!!!] count : \".concat(count, \", \\uB204\\uB978\\uCE35 : \").concat(clickdFloor));\n\n            _this2.pickUpPerson(count, elevator);\n\n            clearInterval(moveDown);\n          }\n\n          count--;\n        }, 700);\n      } else if (count < clickdFloor) {\n        var moveUp = setInterval(function () {\n          // console.log(`count : ${count}, 누른층 : ${clickdFloor}`);\n          _this2.elevator.remove();\n\n          _this2.floors[count].querySelector('.lift_hole').append(_this2.movedElevator);\n\n          if (count + 1 === clickdFloor) {\n            console.log(\"[\\uB3C4\\uCC29!!!]  count : \".concat(count + 1, \", \\uB204\\uB978\\uCE35 : \").concat(clickdFloor));\n\n            _this2.pickUpPerson(count, _this2.movedElevator);\n\n            clearInterval(moveUp);\n          }\n\n          count++;\n          textFloor.textContent = \"\".concat(count, \"\\uCE35\");\n        }, 700);\n      } else {\n        console.log('현재 층에 엘레베이터가 있음');\n      }\n    }\n  }], [{\n    key: \"create\",\n    value: function create() {\n      var element = document.createElement('div');\n      element.classList.add('elevator');\n      return element;\n    }\n  }]);\n\n  return Elevator;\n}();\n\n\n\n//# sourceURL=webpack://javascript-training/./src/Elevator/modules/Elevator.js?");

/***/ }),

/***/ "./src/Elevator/modules/Person.js":
/*!****************************************!*\
  !*** ./src/Elevator/modules/Person.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Person)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Person = /*#__PURE__*/function () {\n  function Person() {\n    _classCallCheck(this, Person);\n\n    this.element = Person.create();\n  } // 사람 만들기\n\n\n  _createClass(Person, [{\n    key: \"setRandomNumber\",\n    value: //층수선택 및 대기자 명수 랜덤 생성기\n    function setRandomNumber(min, max) {\n      return Number.parseInt(Math.random() * (max - min) + min);\n    } // 사람 놓기\n\n  }, {\n    key: \"setPerson\",\n    value: function setPerson() {\n      var building = document.querySelector('.board .building');\n      var floors = building.querySelectorAll('li');\n      floors[this.setRandomNumber(0, 4)].appendChild(this.element); // 마지막 층에 사람 셋팅\n    }\n  }], [{\n    key: \"create\",\n    value: function create() {\n      var hue = 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';\n      var element = document.createElement('div');\n      element.classList.add('person');\n      element.textContent = '-_-';\n      element.setAttribute('style', 'background:' + hue);\n      return element;\n    }\n  }]);\n\n  return Person;\n}();\n\n\n\n//# sourceURL=webpack://javascript-training/./src/Elevator/modules/Person.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/Elevator/index.js");
/******/ 	
/******/ })()
;