// 변수를 넣기가능
let a = 'age';
const user = {
  name : 'MIKE',
  [a] : 30 //age
}


// 어떤 키가 생성될지 모를때 property에 key를 할당 받을 수 있음
function makeObj(key, val) {
  return {
    [key]:val,
  };
}
const obj = makeObj('성별', 'male')
console.log(obj);