const buffer = Buffer.from('저를 버퍼로 바꿔보세요');   // from(문자열): 문자열을 버퍼로 바꿀 수 있다.

console.log('from():', buffer);
console.log('length:', buffer.length);   // length 속성은 버퍼의 크기를 반환하며, 바이트 단위이다.
console.log('toString():', buffer.toString());   // toString(): 버퍼를 다시 문자열로 바꿀 수 있다.
// base64나 hex를 인수로 넣으면 해당 인코딩으로도 변환 가능하다.

const array = [Buffer.from('띄엄 '), Buffer.from('띄엄 '), Buffer.from('띄어쓰기')];
const buffer2 = Buffer.concat(array);   // concat(array): 배열 안에 든 버퍼들을 하나로 합친다.
console.log('concat():', buffer2.toString());

const buffer3 = Buffer.alloc(5);   // alloc(byte): 빈 버퍼를 생성한다.
// 바이트를 인수로 넣으면 해당 크기의 버퍼가 생성된다.
console.log('alloc():', buffer3);