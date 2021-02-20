import Elevator from './modules/Elevator';
import Person from './modules/Person';
// import {add, subtract} from './modules/Util';


// add(1,2);
// subtract(5,2);

// const Elevator = require('./modules/Elevator');
// const Person = require('./modules/Person');

// 엘레베이터 생성
const elevator = new Elevator();
elevator.setElevator();

// 사람 생성
const a = new Person();
a.setPerson();
const b = new Person();
b.setPerson();
const c = new Person();
c.setPerson();
const d = new Person();
d.setPerson();
const e = new Person();
e.setPerson();