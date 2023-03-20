const crypto = require('crypto');

crypto.randomBytes(64, (err, buf) => {   // randomBytes 메서드로 64바이트 길이의 문자열을 생생하는데, 이것이 salt가 된다.
    const salt = buf.toString('base64');
    console.log('salt:', salt);
    crypto.pbkdf2('비밀번호', salt, 100000, 64, 'sha512', (err, key) => {
        // pbkdf2 메서드에는 순서대로 비밀번호, salt, 반복 횟수, 출력 바이트, 해시 알고리즘을 인수로 넣는다.
        // 이 코드는 10만번 반복해서 적용하는데, 즉 sha512로 변환한 결괏값을 다시 sha512로 변환하는 과정을 10만번 반복한다.
        console.log('password:', key.toString('base64'));
    });
});

// 10만번 반복하는 것이 많아보일 수 있지만 1초 정도 소요된다.
// 컴퓨터 성능에 따라 반복 횟수를 조절한다.
// 싱글 스레드 프로그래밍을 할 때 1초 동안 블로킹되는 것은 아닌지 걱정할 수 있지만,
// crypto.randomBytes와 crypto.pbkdf2 함수는 내부적으로 스레드 풀을 사용해 멀티 스레딩으로 동작한다.

// randomBytes는 매번 실행할 때마다 결과가 달라진다. 따라서 salt를 잘 보관하고 있어야 비밀번호를 찾을 수 있다.
// pbkdf2는 간단하지만 bcrypt나 scrypt보다 취약하기 때문에 더 나은 보안이 필요하면 bcrypt, scrypt 방식을 사용한다.