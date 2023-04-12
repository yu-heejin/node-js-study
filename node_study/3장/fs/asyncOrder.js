const fs = require('fs');

console.log('시작');

fs.readFile('./readme2.txt', (err, data) => {
    if (err) {
        throw err;
    }

    console.log('1번', data.toString());

    fs.readFile('./readme2.txt', (err, data) => {
        if (err) {
            throw err;
        }
    
        console.log('2번', data.toString());

        fs.readFile('./readme2.txt', (err, data) => {
            if (err) {
                throw err;
            }
        
            console.log('3번', data.toString());
            console.log('끝');
        });
    });
});

// 비동기 방식으로 하되 순서를 유지한다.
// 콜백 지옥이 평쳐지지만 적어도 순서가 어긋나는 일은 없다.