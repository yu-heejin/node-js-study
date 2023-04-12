const spawn = require('child_process').spawn;

const process = spawn('python', ['test.py']);   // 파이썬 코드를 실행하는 명령어를 spawn을 통해 실행
// spawn의 첫번째 인수로 명령어, 두번째 인수로 옵션 배열을 넣으면 된다.

process.stdout.on('data', function(data) {
    console.log(data.toString());
});

process.stderr.on('data', function(data) {
    console.error(data.toString());
});