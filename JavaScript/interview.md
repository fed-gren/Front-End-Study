## 1. 배열 arr이 있을때, [...arr, newData] 와 arr.push(newData) 의 차이점?

`...`는 spread operator로 iterable object를 개별 요소로 분리해준다.

arr이 [1, 2, 3]이고, newData가 4라고 가정한다면 [...arr, newData]는 [1, 2, 3, 4]이다.

arr.push(newData)에서 push는 Array에 내장되어 있는 함수이다. push 함수는 arr 배열 맨 마지막 원소로 newData를 추가해준다.

arr.push(newData)의 결과도 [1, 2, 3, 4]가 된다.
결과는 같아보이지만 [...arr, newData]는 arr을 펼치고 그 뒤에 newData를 붙여서 새로운 배열을 생성한 것이고 arr.push(newData)는 기존 arr 배열에 newData를 붙여준 것이다.

```js
const arr = [1, 2, 3];
let newData = 4;
const newArr = [...arr, newData];

arr.push(newData); //[1,2,3,4]
arr === newArr; //false
```

## 2. prototype chain이란?

자바스크립트에서 특정 객체의 프로퍼티나 메서드에 접근하려고 할 때, 해당 객체에 접근하려는 프로퍼티 또는 메서드가 업삳면 `[[Prototype]] 링크`를 따라 자신의 부모 역할을 하는 프로토타입 객체의 프로퍼티를 차례대로 검색한다. 이를 `프로토타입 체이닝`이라고 한다.

```js
const myObj = {
  name: "john",
  sayName: function() {
    console.log(`My name is ${this.name}`);
  }
};

myObj.sayName(); //My name is john
console.log(myObj.hasOwnProperty("name")); //true
myObj.sayAge(); //Error
```

위 코드에서 myObj.sayName을 실행했을 땐 myObj가 메서드로 sayName을 가지고 있으므로 접근하여 실행했다.

마지막줄에 sayAge를 실행하면 sayAge는 함수가 아니라는 에러가 발생한다. 이는 myObj에 sayAge라는 프로퍼티 혹은 메서드가 존재하지 않기 때문이다.

하지만 myObj가 hasOwnProperty라는 메서드를 가지고 있지 않으면서 실행이 가능하다. 이는 `프로토타입 체이닝`을 통해 Object가 가지고 있던 메소드인 hasOwnProperty에 접근했기 때문이다.

## 참고

- 인사이드 자바스크립트(송형주, 고현준 지음, 한빛미디어)
