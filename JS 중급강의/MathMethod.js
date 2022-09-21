// 진수 변환 toString(x)
// x진수로 표현
let num = 10;
// console.log(num.toString(2)) // 2진수
let num2 = 255
// console.log(num2.toString(16)) // 16진수


//원주율 Math.PI
// console.log(Math.PI)


//올림 Math.ceil()
let num3 = 5.1;
let num4 = 5.7;
// console.log(Math.ceil(num3))
// console.log(Math.ceil(num4))


//내림 Math.floor()
// console.log(Math.floor(num3))
// console.log(Math.floor(num4))


//반올림 Math.round()
// console.log(Math.round(num3))
// console.log(Math.round(num4))


//소수점 자리 수 표현 toFixed(자릿수) //자릿수가 0이면 소수점없음
//혹은 10의 배수를 곱해서 사용해야함
// ## 유의사항 : 문자열로 반환하기 때문에 다시 숫자로 변환해줘야함
let userRate = 30.1234;
// console.log(userRate.toFixed(2))
// console.log(typeof(userRate.toFixed(2)))
// console.log(typeof(Number(userRate.toFixed(2))))


//NaN인지 확인 isNaN()
let x = Number('x')
// console.log(isNaN(x))
// console.log(NaN == NaN) // NaN은 자기자신과도 같지 않다고 판단한다.
//그래서 isNaN()을 사용하지 않으면 NaN인지 확인불가


//문자를 숫자로 반환(글이 함께있어도) parseInt(문자, x진수)
// 16진수 이상 변환시 이용하면 좋음
let redColor = 'f3';
// console.log(parseInt(redColor)) // 2번쨰 인수인 진수가 없으면 글자가 NaN으로 표시
// console.log(parseInt(redColor,16))


//문자 -> 숫자 다만 실수로  parseFloat()
let padding = '18.5%';
// console.log(parseInt(padding))
// console.log(parseFloat(padding))


//랜덤 값 Math.random()
//0~1사이 무작위 반환  // 범위는 숫자 곱해서 늘려야함
// console.log(Math.random())


// 최대 최소 Math.max() Math.min()
// console.log(Math.max(1, 4, -1, 5, 10))
// console.log(Math.min(1, 4, -1, 5, 10))


// 절댓값 Math.abs()
// console.log(Math.abs(-1))


// 제곱 Math.pow9(n, m) n의 m제곱
// console.log(Math.pow(2,10))


// 제곱근 Math.sqrt()
console.log(Math.sqrt(16))