# Exercise 3

Write a JavaScript function to humanized number (Formats a number to a human-readable string) with the correct suffix such as 1st, 2nd, 3rd or 4th.

참고:
1st, 2nd, 3rd, 4th, 5th,
6th, 7th, 8th, 9th, 10th,
11th, 12th, 13th, 14th, 15th,
16th, 17th, 18th, 19th, 20th,
21st, 22nd, 23rd, 24th, 25th,
31st, 42nd, 53rd, 61st, 72nd,
73rd, 101st, 102nd, 103rd, 104th,
111th, 112th, 113th, 121st, 131st,
132nd, 133rd, 210th, 211th, 212th,
222nd, 1000th, 1001st, 1011th, 1021st

## Example

```javascript
console.log(humanizeFormat(1));
// 1st
console.log(humanizeFormat(8));
// 8th
console.log(humanizeFormat(101));
// 101st
console.log(humanizeFormat(101));
// 111th
console.log(humanizeFormat(121));
// 121st
```
