const timeout = setTimeout(() => {  // 3. 1.5초 후 콜백 실행
    console.log('1.5초 후 실행');
}, 1500);

const interval = setInterval(() => {  // 2. 1초 후 콜백 실행
    console.log('1초마다 실행');
}, 1000);

const timeout2 = setTimeout(() => {   // 2.5초 후 취소했으므로 실행되지 않음
    console.log('실행되지 않습니다.');
}, 3000);

setTimeout(() => {   // 4. 2.5초 후 취소 실행
    clearTimeout(timeout2);
    clearInterval(interval);
}, 2500);

const immediate = setImmediate(() => {  // 1. 가장 먼저 실행된다.
    console.log('즉시 실행');
});

const immediate2 = setImmediate(() => {  // 아래 clearImmediate를 사용해 취소했으므로 실행되지 않는다.
    console.log('실행되지 않습니다.');
});

clearImmediate(immediate2);