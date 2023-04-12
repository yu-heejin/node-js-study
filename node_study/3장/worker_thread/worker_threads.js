const {
    Worker, isMainThread, parentPort,
} = require('worker_threads');

if (isMainThread) {  // 부모 스레드일 때
    // isMainThread를 통해 현재 코드가 메인 스레드(기존에 동작하던 싱글 스레드를 메인 스레드 또는 부모 스레드라고 부른다.)
    // 에서 실행되는지, 아니면 우리가 생성한 워커 스레드에서 실행되는지 구분한다.
    // 메인 스레드에서는 new Worker를 통해 현재 파일(__filename)을 워커 스레드에서 실행시킨다.
    // 현재 파일의 else 부분만 워커 스레드에서 실행된다.
    const worker = new Worker(__filename);
    worker.on('message', message => console.log('from workder', message));
    // 부모는 worker.on('message')로 메시지를 받는다.
    // 참고로 메세지를 한 번만 받고 싶다면 once('message')를 사용하면 된다.
    worker.on('exit', () => console.log('worker exit'));
    worker.postMessage('ping');
    // 부모에서는 워커 생성 후 worker.postMessage로 워커에 데이터를 보낼 수 있다.
} else {   // 워커 스레드일 때
    parentPort.on('message', (value) => {
        // 워커에서는 parent.on('message') 이벤트 리스너로 부모로부터 메시지를 받는다.
        console.log('from parent', value);
        parentPort.postMessage('pong');
        // parentPort.postMessage로 부모에게 메시지를 보낸다.
        parentPort.close();
    });
    // 워커에서 on 메서드를 사용할 땐 직접 워커를 종료해야 한다.
    // parentPort.close()를 하면 부모와의 연결이 종료된다.
    // 종료될 땐 worker.on('exit')가 실행된다.
}