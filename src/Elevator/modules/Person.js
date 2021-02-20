export default class Person {
  constructor() {
    this.element = Person.create();  
  }

  // 사람 만들기
  static create() {
    const hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    const element = document.createElement('div');
    element.classList.add('person');
    element.textContent = '-_-';
    element.setAttribute('style','background:' + hue);

    return element;
  }

  //층수선택 및 대기자 명수 랜덤 생성기
  setRandomNumber(min, max) {
    return Number.parseInt(Math.random() * (max - min) + min);
  }

  // 사람 놓기
  setPerson() {
    const building = document.querySelector('.board .building');
    const floors = building.querySelectorAll('li');
    floors[this.setRandomNumber(0,4)].appendChild(this.element); // 마지막 층에 사람 셋팅
  }
}