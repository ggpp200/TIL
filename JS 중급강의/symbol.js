const obj = {
  1: '1입니다',
  false: '거짓'
}

console.log(Object.keys(obj));
console.log(obj['1'])
console.log(obj['false'])

// Symbol() 유일성 보장 식별자
const a = Symbol(); // new 붙이지 않음
const b = Symbol(); // 유일성 보장 식별자
console.log(a === b)
console.log(a == b)
const id = Symbol('id'); // symbol의 인자 'id'는 설명으로 생성에 영향을 미치지 않음
const id2 = Symbol('id');
console.log(id == id2)
console.log(id === id2)