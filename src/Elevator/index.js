/*  
  * @param {} floors - 층수 리스트
  * @param {} buttons - 층수 버튼 리스트
  * @param {} elevator - 엘레베이터
  * @param {} movedElevator - 복제된 엘레베이터(새로 생성되며 움직이는 역할 하는 엘레베이터)
  * @param {} textFloor - 나의 현재 층수 알림 텍스트
  * @param {} clickedBtn - 가려고 누른 층 수
  * @param {} idxOfclickedBtn - 가려고 누른 층 수의 실제 인덱스 값
  * @param {} asIsFloorIdx - 현재 엘레베이터가있는 층의 실제 인덱스
 */

let floors = [...document.getElementsByClassName('building')[0].getElementsByTagName('li')];
let buttons = [...document.getElementsByClassName('elevator_floor_buttons')[0].getElementsByTagName('li')];

const elevator = document.querySelector('.elevator');
const movedElevator = document.importNode(elevator,true);

buttons.forEach((b, idx) => {
  b.addEventListener('click', (event) => {
    const textFloor = document.querySelector('.current_floor');
    const clickedBtn = event.target;
    const clickedFloor = clickedBtn.innerText;
    const idxOfclickedBtn = idx;
    
    // 누른 버튼 color
    buttons.map(b => b.querySelector('button').setAttribute('style','background: none'));
    clickedBtn.closest('li').querySelector('button').setAttribute('style','background:tomato');

    console.log(`${clickedFloor}층 누름`);
    
    // 엘레베이터 이동
    moveElevator(clickedFloor,idxOfclickedBtn);
  });
});


  const moveElevator = ((clickdFloor, idxOfclickedBtn) => {
  
    // const asIsFloorIdx = floors.indexOf(elevator.closest('li'));
    // let count = 3;
  let count = 3;

  if(count > idxOfclickedBtn) {
    const moveUp = setInterval(() => {
      console.log(`count : ${count}, 누른층 : ${idxOfclickedBtn}`);

      elevator.remove();
      floors[count].querySelector('.lift_hole').append(movedElevator)
      
      if(count === idxOfclickedBtn){
        clearInterval(moveUp);
        console.log(`[도착!!!] count : ${count}, 누른층 : ${idxOfclickedBtn}`);
      }  
      count--;
      }, 700);
  } else if (count < idxOfclickedBtn) {
    const moveDown = setInterval(() => {
      console.log(`count : ${count}, 누른층 : ${idxOfclickedBtn}`);

      elevator.remove();
      floors[count].querySelector('.lift_hole').append(movedElevator)
      
      if(count === idxOfclickedBtn){        
        console.log(`[도착!!!]  count : ${count}, 누른층 : ${idxOfclickedBtn}`);
        clearInterval(moveDown);
      }  
      count++;
    }, 700);
  } else {
    console.log('현재 층에 엘레베이터가 있음 또는 에러');
  }
  
});