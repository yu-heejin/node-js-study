const odd = 'CJS 홀수입니다.';
const even = 'CJS 짝수입니다.';

// module.exports = {
//     odd,
//     even,
// };

// 해당 파일은 모듈로서 기능한다.
// 변수들을 모아놓은 모듈이 된다.
// 다른 파일에서 이 파일을 불러오면 module.exports에 대입된 값을 사용할 수 있다.

// 모듈을 다음과 같이 설정해도 괜찮다. (exports 객체)
exports.odd = 'CJS 홀수입니다.';
exports.even = 'CJS 짝수입니다.';
// module.exports와 동일하게 동작하는 이유는 module.exports와 exports가 같은 객체를 참조하기 때문이다.
// 실제로도 console.log(module.exports === exports)를 하면 true가 나온다.