console.log('require가 가장 위에 오지 않아도 됩니다.');

module.exports = '저를 찾아보세요.';

require('./var');

console.log('require.cache 입니다.');
console.log(require.cache);
console.log('require.main 입니다.');
console.log(require.main === module);  // 현재 파일이 첫 모듈인지 알아보려면 다음과 같이 구성한다.
console.log(require.main.filename);
console.log(require.main);  // 첫 모듈의 파일 이름

// require가 반드시 파일 최상단에 위치할 필요가 없고, module.exports도 최하단에 위치할 필요 없이 아무곳에서나 사용 가능하다.
// require.cache 객체에 require.js나 var.js 같은 파일 이름이 속성명으로 들어있다.
// 속성 값으로는 각 파일의 모듈 객체가 들어 있다.
// '/Users/hee/Desktop/repo/node-js-study/node_study/3장/commonjs_module/require.js': Module {
// 한번 require한 파일은 require.cache에 저장되므로, 다음번에 require할 땐 새로 불러오지 않고 require.cache에 있는 것이 재사용된다.
// 만약 새로 require하길 원한다면 require.cache의 속성을 제거하면 된다. (동작이 꼬일 수 있으므로 권장되진 않음)

// require.main은 노드 실행 시 첫 모듈을 가리킨다.
// 현재 node require로 실행했기 때문에 require.js가 require.main이 된다.
// require.main 객체의 모양은 require.cache의 모듈 객체와 같다.
// node require로 실행한 경우, var.js에서 require.main === module을 실행하면 false