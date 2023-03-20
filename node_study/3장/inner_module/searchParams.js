// URL, URLSearchParams는 모두 노드 내장 객체이므로 require 생략

const myURL = new URL('http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript');
// URL 생성자를 통해 myURL이라는 주소 객체를 만들었다.
// myURL 안에는 searchParams 객체가 있다.
// myURL.searchParams 대신 new URLSearchParams(myURL.search)로도 같은 결과값을 얻을 수 있다.

console.log('searchParams:', myURL.searchParams);
console.log('searchParams.getAll():', myURL.searchParams.getAll('category'));   // getAll(key): 키에 해당하는 모든 값을 가져온다.
console.log('searchParams.get():', myURL.searchParams.get('limit'));   // get(key): 키에 해당하는 첫번째 값만 가져온다.
console.log('searchParams.has():', myURL.searchParams.has('page'));   // has(key): 해당 키가 있는지 없는지를 검사한다.
console.log('searchParams.keys():', myURL.searchParams.keys());   // keys(): searchParams의 모든 키를 반복기(iterator) 객체로 가져온다.
console.log('searchParams.values():', myURL.searchParams.values());   // values(): searchParams의 모든 값을 반복기 객체로 가져온다.

myURL.searchParams.append('filter', 'es3');  // append(key, value): 해당 키를 추가한다. 같은 키의 값이 있으면 유지하고 하나 더 추가한다.
myURL.searchParams.append('filter', 'es5');
console.log(myURL.searchParams.getAll('filter'));

myURL.searchParams.set('filter', 'es6');   // set(key, value): append와 비슷하지만 같은 키의 값들을 모두 지우고 새로 추가한다.
console.log(myURL.searchParams.getAll('filter'));

myURL.searchParams.delete('filter');   // delete(key): 해당 키를 제거한다.
console.log(myURL.searchParams.getAll('filter'));

console.log('searchParams.toString():', myURL.searchParams.toString());   // toString(): 조작한 searchParams 객체를 다시 문자열로 만든다.
myURL.search = myURL.searchParams.toString();   // 해당 문자열을 search에 대입하면 주소 객체에 반영된다.