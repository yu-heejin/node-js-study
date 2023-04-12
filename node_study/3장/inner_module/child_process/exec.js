const exec = require('child_process').exec;

// const process = exec('dir');   // exec의 첫번째 인수로 명령어를 넣는다. (명령 프롬프트 명령어 dir)
const process = exec('ls');
// 리눅스나 맥이면 exec('ls')를 대신 입력하면 된다.
// 실행 시 현재 폴더의 파일 목록들이 표시된다.

process.stdout.on('data', function(data) {
    console.log(data.toString());
});   // 실행 결과

process.stderr.on('data', function(data) {
    console.error(data.toString());
});  // 실행 에러

// 결과는 stdout(표준 출력)과 stderr(표준 에러)에 붙여둔 data 이벤트 리스너에 버퍼 형태로 전달된다.
// 성공적인 결과는 표준 출력에서, 실패한 결과는 표준 에러에서 표시된다.