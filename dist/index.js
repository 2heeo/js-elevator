"use strict";

var _Elevator = _interopRequireDefault(require("./modules/Elevator"));

var _Person = _interopRequireDefault(require("./modules/Person"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 다른 방식
// const Elevator = require('./modules/Elevator');
// const Person = require('./modules/Person');
// 엘레베이터 생성
var elevator = new _Elevator["default"]();
elevator.setElevator(); // 사람 생성

var a = new _Person["default"]();
a.setPerson();
var b = new _Person["default"]();
b.setPerson();
var c = new _Person["default"]();
c.setPerson();
var d = new _Person["default"]();
d.setPerson();
var e = new _Person["default"]();
e.setPerson();