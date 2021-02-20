/**  
  * @param {object} floors - 층 리스트
  * @param {object} buttons - 층수 버튼 리스트
  * @param {object} liftHoles - 엘레베이터가 위치한 층을 알아내기 위한 층(lift hole)리스트
  * @param {object} elevator - 엘레베이터
  * @param {object} movedElevator - 복제된 엘레베이터(새로 생성되며 움직이는 역할 하는 엘레베이터)
  * @param {object} textFloor - 나의 현재 층수 알림 텍스트
  * @param {object} clickedBtn - 가려고 누른 층 버튼
  * @param {number} clickedFloor - 가려고 누른 층 수
  * @param {number} idxOfclickedBtn - 가려고 누른 층 수의 실제 인덱스 값
 */

let floors = [...document.getElementsByClassName('building')[0].getElementsByTagName('li')].slice().reverse();
let buttons = [...document.getElementsByClassName('elevator_floor_buttons')[0].getElementsByTagName('li')];

const elevator = document.querySelector('.elevator');
const movedElevator = document.importNode(elevator,true);

const callElevator = (() => {
  buttons.forEach((b, idx) => {
    b.addEventListener('click', (event) => {
      const clickedBtn = event.target;
      const clickedFloor = Number.parseInt(clickedBtn.innerText);
      const idxOfclickedBtn = idx;
      
      // 누른 버튼 color
      buttons.map(b => b.querySelector('button').setAttribute('style','background: none'));
      clickedBtn.closest('li').querySelector('button').setAttribute('style','background:tomato');
  
      console.log(`${clickedFloor}층 누름`);
      
      // 엘레베이터 이동
      moveElevator(clickedFloor,idxOfclickedBtn);
    }, {
      once: true,
    });
  });
});

const findElevator = (() => {
  let liftHoles = [...document.getElementsByClassName('building')[0].getElementsByClassName('lift_hole')];
  liftHoles = liftHoles.slice().reverse();

  let currentElevatorFloor = 0;

  liftHoles.forEach((l, idx) => {
    if(l.querySelector('.elevator')){
      console.log(`엘레베이터는 현재 ${idx+1}층에 있음`);
      currentElevatorFloor = idx;
      return;
    } else {
      // console.log('현재 층에 엘레베이터가 없음 ');
    }
  });
  return currentElevatorFloor;
});

const moveElevator = ((clickdFloor, idxOfclickedBtn) => {
  const textFloor = document.querySelector('.current_floor');
  let count = findElevator();

  if(count >= clickdFloor) {
    const moveDown = setInterval(() => {
      console.log(`count : ${count}, 누른층 : ${clickdFloor}`);

      elevator.remove();
      floors[count].querySelector('.lift_hole').append(movedElevator);
      textFloor.innerHTML = `${count+1}층`;
  
      if(count+1 === clickdFloor){
        console.log(`[도착!!!] count : ${count}, 누른층 : ${clickdFloor}`);
        clearInterval(moveDown);
      }  
      count--;
    }, 700);
  } else if (count < clickdFloor) {
      const moveUp = setInterval(() => {
        console.log(`count : ${count}, 누른층 : ${clickdFloor}`);

        elevator.remove();
        floors[count].querySelector('.lift_hole').append(movedElevator);
      
        if(count+1 === clickdFloor){  
          console.log(`[도착!!!]  count : ${count}, 누른층 : ${clickdFloor}`);
          clearInterval(moveUp);
        }  
        count++;
        textFloor.innerHTML = `${count}층`;  
    }, 700);
  } else {
    console.log('현재 층에 엘레베이터가 있음');
  }
});

callElevator();