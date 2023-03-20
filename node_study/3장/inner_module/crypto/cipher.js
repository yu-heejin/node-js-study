const crypto = require('crypto');

const algorithm = 'aes-256-cbc';   // 암호화 알고리즘
// aes-256-cbc 알고리즘의 경우 키는 32바이트, iv는 16바이트
const key = 'abcdefghijklmnopqrstuvwxyz123456';
const iv = '1234567890123456';   // 암호화할 때 사용하는 초기화 백터

// console.log(crypto.getCiphers());
// 사용 가능한 알고리즘 목록은 crypto.getCiphers()를 호출하면 볼 수 있다.

const cipher = crypto.createCipheriv(algorithm, key, iv);
// 암호화 알고리즘과 키, iv를 넣는다.
let result = cipher.update('암호화할 문장', 'utf8', 'base64');
// 암호화할 대상과 대상의 인코딩, 출력 결과물의 인코딩을 넣는다.
// 보통 문자열은 utf8, 암호는 base64를 많이 사용한다.
result += cipher.final('base64');
// 출력 결과물의 인코딩을 넣으면 암호화가 완료된다.
console.log('암호화:', result);

const decipher = crypto.createDecipheriv(algorithm, key, iv);
// 복호화할 때 사용한다. 암호화시 사용했던 알고리즘, 키, iv를 모두 넣어야한다.
let result2 = decipher.update(result, 'base64', 'utf8');
// 암호화된 문장, 문장 인코딩, 복호화할 인코딩을 넣는다.
result2 += decipher.final('utf8');
// 복호화 결과물의 인코딩을 넣는다.
console.log('복호화:', result2);