const crypto = require('crypto');

console.log('base64:', crypto.createHash('sha512').update('비밀번호').digest('base64'));
console.log('hex:', crypto.createHash('sha512').update('비밀번호').digest('hex'));
console.log('base64:', crypto.createHash('sha512').update('다른 비밀번호').digest('base64'));

// createHash(알고리즘): 사용할 해시 알고리즘을 넣는다.
// md5, sha1, sha256, sha512 등이 가능하지만, md5와 sha1의 취약점이 발견되어 현재는 sha512를 많이 사용한다.