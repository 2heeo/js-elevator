# Exercise 6

Given an RGB(A) CSS color, determine whether its format is valid or not. Create a function that takes a string (e.g. "rgb(0, 0, 0)") and return true if it's format is correct, otherwise return false.
There are a few edge cases.

## Example

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
