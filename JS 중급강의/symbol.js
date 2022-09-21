// Symbol()은 다른 개발자가 작업한 변수에 내가 property를 추가하여 사용할 때 사용
const obj = {
  1: '1입니다',
  false: '거짓'
}

// console.log(Object.keys(obj));
// console.log(obj['1'])
// console.log(obj['false'])

// Symbol() 유일성 보장 식별자
const a = Symbol(); // new 붙이지 않음
const b = Symbol(); // 유일성 보장 식별자
// console.log(a === b)
// console.log(a == b)


const id = Symbol('id'); // symbol의 인자 'id'는 설명으로 생성에 영향을 미치지 않음
const id2 = Symbol('id');
// console.log(id == id2)
// console.log(id === id2)


// Symbol()을 객체의 키로 사용해보기

const user = {
  name: 'MIKE',
  age: 30,
  [id]: 'myid'
}
// Symbol()은 key나 value 반환이 안됨 (비밀 프로퍼티 추가)
// console.log(console.log(Object.keys(user)))
// console.log(console.log(Object.values(user)))
// console.log(console.log(Object.entries(user)))


// Symbol.for('키'): 전역 심볼
// 키를 통해 같은 심볼 공유
const id_for_1 = Symbol.for('id');
const id_for_2 = Symbol.for('id');
// console.log(id_for_1 == id_for_2)

// key얻을때는 Symbol.keyfor(심볼)
// console.log(Symbol.keyFor(id_for_1))
// console.log(Symbol.keyFor(id_for_2))

// 일반 심볼은 설명(key)를 보기위해 심볼.description; 사용
// console.log(id.description);


// 객체의 심볼들만 모아서 보는 법 Object.getOwnPropertySymbols(객체);
// console.log(Object.getOwnPropertySymbols(user))

// 객체의 심볼들과 기본 키들 보는 법 Reflect.ownKeys(user);
// console.log(Reflect.ownKeys(user))