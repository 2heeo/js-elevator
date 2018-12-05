# 과제 4

유효한 이메일주소인지 확인하고 그에 따른 true나 false로 응답하는 자바스크립트 함수를 개발하세요.

- 문자열에 @ 글자가 있는 것이 필수
- 문자열에 . 글자가 있는 것이 필수
- @ 앞에 글자 한 개라도 있는 것이 필수. 예제: "e@edabit.com" 정확하고 "@edabit.com" 불정확하다.
- .와 @는 적당한 위치에 있는 것이 필수. 예제: "john.smith@email.com" 정확하고 "hello.email@com" 불정확하다.

## 예제

```javascript
console.log(validateEmail('@gmail.com'));
// false
console.log(validateEmail('hello.gmail@com'));
// false
console.log(validateEmail('gmail'));
// false
console.log(validateEmail('hello@gmail'));
// false
console.log(validateEmail('hello@edabit.com'));
// true
```
