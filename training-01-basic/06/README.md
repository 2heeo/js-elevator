# 과제 6

rgb(a) CSS 색깔 문자열을 받고 문자열 구성을 확인하는 자바스크립트 함수를 개발하세요.
문자열 구성이 올바르면 true로 반환하고 그렇지 않으면 false로 반환하세요.

다음 테스트 케이스들로 참고하세요.

## 예제

```javascript
// True tests
console.log(isValidColor('rgb(0,0,0)'));
console.log(isValidColor('rgb(255,255,255)'));
console.log(isValidColor('rgba(0,0,0,0)'));
console.log(isValidColor('rgba(255,255,255,1)'));
console.log(isValidColor('rgba(0,0,0,0.123456789)'));
console.log(isValidColor('rgba(0,0,0,.8)'));
console.log(isValidColor('rgba(	0 , 127	, 255 , 0.1	)'));
console.log(isValidColor('rgb(0%,50%,100%)'));

// False tests
console.log(isValidColor('rgb(0,,0)'));
console.log(isValidColor('rgb (0,0,0)'));
console.log(isValidColor('rgb(0,0,0,0)'));
console.log(isValidColor('rgba(0,0,0)'));
console.log(isValidColor('rgb(-1,0,0)'));
console.log(isValidColor('rgb(255,256,255)'));
console.log(isValidColor('rgb(100%,100%,101%)'));
console.log(isValidColor('rgba(0,0,0,-1)'));
console.log(isValidColor('rgba(0,0,0,1.1)'));
```
