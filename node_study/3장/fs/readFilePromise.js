// fs는 기본적으로 콜백 형식의 모듈이므로 사용하기 불편하다.
// 따라서 모듈을 프로미스 형식으로 바꿔주는 방식을 사용한다.

const fs = require('fs').promises;

fs.readFile('./readme.txt')
.then((data) => {
    console.log(data);
    console.log(data.toString());
})
.catch((err) => {
    console.error(err);
});