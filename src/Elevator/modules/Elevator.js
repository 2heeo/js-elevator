export default class Elevator {
  constructor() {
    this.elevator = Elevator.create();
    this.NUM_OF_AVAILABLE = 4;
    this.buttons = [...document.getElementsByClassName('elevator_floor_buttons')[0].getElementsByTagName('li')];
    this.building = document.querySelector('.board .building');
    this.floors = [...this.building.querySelectorAll('li')].slice().reverse();
    this.movedElevator = document.importNode(this.elevator,true);

    this.callElevator();
  }

  // 엘레베이터 만들기
  static create() {
    const element = document.createElement('div');
    element.classList.add('elevator');

    return element;
  }

  // 엘레베이터 객체 생성
  setElevator(floor = 0) {    
    this.floors[floor].querySelector('.lift_hole').appendChild(this.elevator);
  }

  // 엘레베이터에 사람 태우기
  pickUpPerson(arrivedFloorIdx, elevator) {
    const arrivedFloor = this.floors[arrivedFloorIdx];
    let waitingPersonList = arrivedFloor.querySelectorAll('.person');
    let innerPersonList = elevator.querySelectorAll('.person');
    let numOfInnerPerson = innerPersonList.length;
    let numOfWaitingPerson = waitingPersonList.length;

    console.log('===================================');
    console.log(`도착한 층에 ${numOfWaitingPerson}명이 기다리고 있음`);
    console.log(`현재 엘레베이터 안에 ${numOfInnerPerson}명이 타고 있음`);

    if(numOfInnerPerson + numOfWaitingPerson > this.NUM_OF_AVAILABLE) {
      console.log('===================================');
      console.log('최대 탑승 가능 인원 수 초과');
      console.log(numOfInnerPerson);
      console.log(numOfWaitingPerson);
      console.log('===================================');
    } else {      
      let temp = [];
      // 타고 있던 사람들 다 내리고, 기다리던 사람들 다 태우기      
      temp = innerPersonList;
      innerPersonList = waitingPersonList;
      waitingPersonList = [];
      waitingPersonList = temp;
      temp = [];

      innerPersonList.forEach(i => {
        elevator.appendChild(i);  
      });

      waitingPersonList.forEach(w => {
        arrivedFloor.appendChild(w);
      });      
      waitingPersonList = [];

      console.log('===================================');
      console.log(`${numOfInnerPerson}명이 내리고, ${numOfWaitingPerson}명이 탔음`);
      console.log(waitingPersonList);
      console.log('===================================');
    }
  }

  // 엘레베이터 몇 층에 있는지 찾기
  findElevator() {
    let liftHoles = [...this.building.querySelectorAll('.lift_hole')].slice().reverse();
    let currentElevatorFloor = 0;

    liftHoles.forEach((l, idx) => {
      if(l.querySelector('.elevator')){
        console.log(`엘레베이터는 현재 ${idx+1}층에 있음`);
        currentElevatorFloor = idx;
        return;
      }
    });
    return currentElevatorFloor;
  }

  // 이동하고 싶은 층의 버튼 클릭
  callElevator() {
    this.buttons.forEach((b, idx) => {
      b.addEventListener('click', (event) => {
        const clickedBtn = event.target;
        const clickedFloor = Number.parseInt(clickedBtn.innerText);
        const idxOfclickedBtn = idx;
      
        // 누른 버튼 color
        this.buttons.map(b => b.querySelector('button').setAttribute('style','background: none'));
        clickedBtn.closest('li').querySelector('button').setAttribute('style','background:tomato');
  
        console.log(`${clickedFloor}층 누름`);

        // 엘레베이터 이동
        this.moveElevator(clickedFloor,idxOfclickedBtn);
      })
    });
  }

  // 엘레베이터 이동
  moveElevator(clickdFloor, idxOfclickedBtn) {
    const textFloor = document.querySelector('.current_floor');
    let elevator = this.elevator;
    let count = this.findElevator();

    if(count >= clickdFloor) {
      const moveDown = setInterval(() => {
        // console.log(`count : ${count}, 누른층 : ${clickdFloor}`);
  
        this.elevator.remove();
        this.floors[count].querySelector('.lift_hole').append(this.movedElevator);
        textFloor.textContent = `${count+1}층`;
    
        if(count+1 === clickdFloor){
          elevator = document.querySelector('.elevator');
          console.log(`[도착!!!] count : ${count}, 누른층 : ${clickdFloor}`);
          this.pickUpPerson(count, elevator);
          clearInterval(moveDown);
        }  
        count--;
      }, 700);
    } else if (count < clickdFloor) {
        const moveUp = setInterval(() => {
          // console.log(`count : ${count}, 누른층 : ${clickdFloor}`);
  
          this.elevator.remove();
          this.floors[count].querySelector('.lift_hole').append(this.movedElevator);
        
          if(count+1 === clickdFloor){  
            console.log(`[도착!!!]  count : ${count+1}, 누른층 : ${clickdFloor}`);            
            this.pickUpPerson(count, this.movedElevator);
            clearInterval(moveUp);
          }  
          count++;
          textFloor.textContent = `${count}층`;  
      }, 700);
    } else {
      console.log('현재 층에 엘레베이터가 있음');
    }
  }
}
