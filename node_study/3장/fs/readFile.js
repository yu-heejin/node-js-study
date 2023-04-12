const fs = require('fs');

fs.readFile('./readme.txt', (err, data) => {
    // fs 모듈을 불러온 뒤 읽을 파일의 경로를 지정한다.
    // 파일의 경로가 현재 파일 기주이 아니라 node 명령어를 실행하는 콘솔 기준이라는 점을 명시하라.
    // 파일을 읽은 후에 실행될 콜백 함수도 인수로 같이 넣는다.
    if (err) {
        throw err;
    }

    console.log(data);
    console.log(data.toString());
});

/*
    <Buffer ec a0 80 eb a5 bc 20 ec 9d bd ec 96 b4 ec a3 bc ec 84 b8 ec 9a 94 2e>
    저를 읽어주세요.

    console.log(data)결과에 Buffer가 출력된다.
    readFile의 결과물은 버퍼 형식으로 제공된다. (버퍼는 메모리의 데이터이다.)
*/