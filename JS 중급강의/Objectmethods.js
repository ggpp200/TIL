//Object.assign(
//객체 복제
const user = {
  name : 'MIKE',
  age : 30 //age
}


// 주소 값 가져오기
// user에는 참조주소가 저장되어 있기 때문에 cloneUser와 user는 같은 주소값
// 결국 user[name]을 수정할 시 cloneUser[name]도 수정됨
const cloneUser = user;
user.name = 'sj'
// console.log(cloneUser)


// 객체 복제 assign()
// assign(초기값, 초기값에 추가값1, 추가값 2 ...)
const newUser = Object.assign({sj:'sj'}, user);
newUser.name = 'sj2'
// console.log(user)
// console.log(newUser)


// 키값 배열 반환 keys()
const user2 = {
  name: 'MIKE',
  age: 30,
  gender: 'male',
}
const O_key = Object.keys(user2);
// console.log(O_key)


//값 배열 반환 valuse()
const O_value = Object.values(user2);
// console.log(O_value)


//[키, 값] 배열 반환 entries()
const O_entries = Object.entries(user2);
// console.log(O_entries)

//[키, 값] 배열로 객체 만들기 fromEntries()
// entries()와 fromEntries()합쳐서 객체 복제가능
const arr =
 [
  ['name', 'cc'],
  ['age', 20],
 ];
const newCC = Object.fromEntries(arr)
const newUser2 = Object.fromEntries(O_entries)
newUser2.name = 'ssj'
user2.name ='sjj'
console.log(newCC)
console.log(user2)
console.log(newUser2)
