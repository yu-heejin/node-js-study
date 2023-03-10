const path = require('path');

const string = __filename;   // 현재 파일명과 현재 파일의 경로

// __filename, __dirname은 각각 현재 파일과 현재 폴더의 경로를 표시한다.

console.log('path.sep: ', path.sep);   // 경로 구분자, 윈도우 \ POSIX /
console.log('path.delimiter:', path.delimiter);  // 환경 변수의 구분자, process.env.PATH를 입력하면 여러 개의 경로가 이 구분자로 구분되어있다.
// 환경변수 구분자는 윈도우는 ;, POSIX는 :
console.log('---------------------------');
console.log('path.dirname():', path.dirname(string));   // 파일이 위치한 폴더 경로
console.log('path.extname():', path.extname(string));  // 파일의 확장자를 보여준다.
console.log('path.basename():', path.basename(string));  // (경로, 확장자): 파일의 이름(확장자 포함)을 표시한다.
// 파일의 이름만 표시하고 싶다면 basename의 두번째 인수로 파일의 확장자를 넣으면 된다.
console.log('path.basename - extname:', path.basename(string, path.extname(string)));
console.log('----------------------------');
console.log('path.parse()', path.parse(string));   // 파일의 경로를 root, dir, base, ext, name으로 분리한다.
console.log('path.format():', path.format({
    dir: '/Users/hee/Desktop/repo/node-js-study/node_study/3장/',
    name: 'path',
    ext: 'js',
}));   // path.parse()한 객체를 파일 경로로 합친다.
console.log('path.normalize():', path.normalize('/Users/hee/Desktop/repo/node-js-study/node_study/3장/path.js'));  // \, /를 실수로 여러번 사용했거나 혼용했을 때 정상적인 경로로 변환한다.
console.log('----------------------------');
console.log('path.isAbsolute(c:\\):', path.isAbsolute('c:\\'));   // 파일의 경로가 절대 경로인지 상대 경로인지를 true/false로 알려준다.
console.log('path.isAbsolute(./home):', path.isAbsolute('./home'));
console.log('----------------------------');
console.log('path.relative():', path.relative('/Users/hee/Desktop/repo/node-js-study/node_study/3장/path.js', '/Users'));   // 경로를 2개 넣으면 첫번째 경로에서 두번째 경로로 가는 방법을 알려준다.
console.log('path.join():', path.join(__dirname, '..', '..', '/node-js-study', '.', '/3장'));   // 여러 인수를 넣으면 하나의 경로로 합친다. (상대 경로도 처리)
console.log('path.resolve():', path.resolve(__dirname, '..', 'node_study', '/3장'));   // path.join()과 비슷하지만 차이가 있다.
