const dep1 = require('./dep1');
const dep2 = require('./dep2');
// 코드는 위에서부터 실행되므로 require(dep1)이 먼저 실행된다.
// dep1.js에서는 제일 먼저 require(dep2)가 실행되며, dep2.js에서는 require(dep1) 이 실행된다.
// 따라서 이러한 과정이 계속 반복된다. -> 순환 참조

dep1();   // 출력 결과 {} 빈 객체
dep2();

// 순환 참조는 순환 참조되는 대상을 빈 객체로 만든다.