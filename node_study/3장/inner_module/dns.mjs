import dns from 'dns/promises';

const ip = await dns.lookup('gilbut.co.kr');
// ip 주소는 간단하게 dns.lookup이나 dns.resolve(도메인)으로 얻을 수 있다.
console.log('IP', ip);

/*
    A(ipv4 주소), AAAA(ipv6 주소), NS(네임서버), SOA(도메인 정보), CNAME(별칭, 주로 www가 붙은 주소는 별칭인 경우가 많다), 
    MX(메일 서버) 등은 레코드라고 부르는데, 해당 레코드에 대한 정보는 dns.resolve(도메인, 레코드 이름)으로 조회하면 된다.
*/
const a = await dns.resolve('gitbut.co.kr', 'A');
console.log('A', a);

const mx = await dns.resolve('gilbut.co.kr', 'MX');
console.log('MX', mx);

const cname = await dns.resolve('www.gilbut.co.kr', 'CNAME');
console.log('CNAME', cname);

const any = await dns.resolve('gilbut.co.kr', 'ANY');
console.log('ANY', any);