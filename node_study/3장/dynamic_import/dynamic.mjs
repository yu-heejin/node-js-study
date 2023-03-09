// const a = false;

// if (a) {
//     // import '../ecma_module/func.mjs';  오류 발생
// }

// console.log('성공');

// es 모듈은 if문 안에서 import하는 것이 불가능하다.

// 다음과 같이 수정할 수 있다.
const a = true;

if (a) {
    const m1 = await import('../ecma_module/func.mjs');
    console.log(m1);

    const m2 = await import('../ecma_module/var.mjs');
    console.log(m2);
}