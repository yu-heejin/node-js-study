const { odd, even } = require('./var');   // 구조 분해 할당 문법
// require 함수 안에 불러올 모듈의 경로를 적는다.
// 파일 경로에서 js, json 같은 확장자는 생략할 수 있다.
// index.js도 생략 가능한데, 예를 들어 ./routes/index.js를 불러오고 싶으면 require('./routes')
// require 함수로 var.js에 있던 값들을 불러오고 있다.
// const obj = require('./var'); 로 객체를 통째로 불러온 후 obj.odd, obj.even처럼 접근할 수도 있다.

function checkOddOrEven(num) {
    if (num % 2) {  // 홀수이면
        return odd;
    }

    return even;
}

module.exports = checkOddOrEven;
// 다른 모듈을 사용하는 파일을 다시 모듈로 만들 수 있다.