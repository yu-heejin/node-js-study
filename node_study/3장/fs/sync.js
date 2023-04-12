// 순서대로 출력하고 싶다면 다음 메서드를 사용할 수 있다.

const fs = require('fs');

console.log('시작');
let data = fs.readFileSync('./readme2.txt');
console.log('1번', data.toString());
data = fs.readFileSync('./readme2.txt');
console.log('2번', data.toString());
data = fs.readFileSync('./readme2.txt');
console.log('3번', data.toString());
console.log('끝');

// readFileSync를 사용하면 콜백함수를 넣는 대신 직접 리턴 값을 받아온다.
// 해당 값을 다음 줄부터 바로 사용할 수 있다.