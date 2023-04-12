const {
    Worker, isMainThread, parentPort, workerData
} = require('worker_threads');

if (isMainThread) {
    const threads = new Set();

    threads.add(new Worker(__filename, {
        workerData: { start: 1 },  // 두 번째 인수의 workerData 속성으로 원하는 데이터를 보낼 수 있다.
    }));

    threads.add(new Worker(__filename, {
        workerData: { start: 2 },
    }));

    for (let worker of threads) {
        worker.on('message', message => console.log('from worker', message));
        worker.on('exit', () => {
            threads.delete(worker);
            if (threads.size === 0) {
                console.log('job done');
            }
        });
    }
} else {
    const data = workerData;   // 워커에서 workerData로 부모로부터 데이터를 받는다.
    parentPort.postMessage(data.start + 100); // 각 부모로부터 숫자를 받아 100을 더해 돌려주면 워커가 종료되어
    // worker.on('exit')가 실행된다.
}