
// new 없이 객체를 만들 때는 this 대신 사용할 객체를 생성하여 그곳에 데이터를 넣고 리턴
function Item(title, price) {
  const i = {};
  i.title = title;
  i.price = price;
  i.showPrice = function() {
    console.log(`가격은 ${price}원 입니다.`);
  }
  return i
}
const item1 = Item('인형', 300);
const item2 = Item('가방', 4000);
const item3 = Item('지갑', 900);


///////////////////////////////////////////////////////////

// 생성자 함수 new 사용 시
function Jtem(title, price) {
  this.title = title;
  this.price = price;
  this.showPrice = function () {
    console.log(`가격은 ${price}원 입니다.`);
  };
}
const jtem1 = new Jtem('인형1', 2);
const jtem2 = new Jtem('가방1', 3);
const jtem3 = new Jtem('지갑1', 4);
console.log(jtem1, jtem2, jtem3);