import { setTimeout, setInterval } from 'timers/promises';

await setTimeout(3000);
console.log('3초 뒤 실행');

for await (const startTime of setInterval(1000, Date.now())) {
    console.log('1초마다 실행', new Date(startTime));
}

// promise 기반이므로 then 대신 await를 사용하기 위해 ES 모듈을 사용하고, timers/promises 라는 모듈에서
// setTimeout, setInterval을 새롭게 제공한다.
// setTimeout(밀리초)로 몇 밀리초를 기다릴지 정할 수 있고, setInterval(밀리초, 시작값)은 
// for await of 문법과 함께 사용할 수 있다.
// 시작값은 필수가 아니므로 굳이 안 넣어도 된다.

/*
    Cannot find package 'timers' imported 오류는 Node.js 버전에 따라 발생할 수 있습니다. 
    timers 모듈은 Node.js 버전 15 이상에서 지원됩니다. 
    따라서, 이 오류가 발생한다면 Node.js 버전을 업그레이드하시면 해결될 수 있습니다.

    만약 Node.js 버전이 최신 버전이라면, 
    코드에서 import { setTimeout, setInterval } from 'timers/promises'; 라인을 제거하고, 
    기존의 setTimeout와 setInterval 함수를 사용하시면 됩니다.
*/