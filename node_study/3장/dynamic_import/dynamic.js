const a = false;

if (a) {
    require('./func');
}

console.log('성공');

// dynamic.js에서 require 함수는 실행되지 않는다.
// if 문이 false이기 때문이다.
// 이처럼 조건부로 모듈을 불러오는 것을 다이내믹 임포트라고 한다.