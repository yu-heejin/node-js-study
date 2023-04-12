const fs = require('fs').promises;

console.log('시작');

fs.readFile('./readme2.txt')
.then((data) => {
    console.log('1번', data.toString());
    return fs.readFile('./readme2.txt');
})
.then((data) => {
    console.log('2번', data.toString());
    return fs.readFile('./readme2.txt');
})
.then((data) => {
    console.log('3번', data.toString());
    console.log('끝');
})
.catch((err) => {
    console.error(err);
});

// 콜백 지옥을 Promise, async/await로 어느정도 해결할 수 있다.