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

---

<br/>

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

### 참고

- 인사이드 자바스크립트(송형주, 고현준 지음, 한빛미디어)

---

<br/>

## 3. 비동기의 장점?

요약

- 싱글 스레드로 동작하는 자바스크립트에서 오래걸리는 작업을 스레드의 중단 없이 수행할 수 있다.

자바스크립트는 싱글 스레드 프로그래밍 언어이다. 이는 한 번에 한 가지 일만 발생한다는 것을 의미한다.

싱글 스레드의 장점은 동시성 문제(concurrency inssues)들을 고려하지 않아도 된다는 점이다. 하지만 동시에 네트워크 접근과 같은 수행이 오래걸리는 작업에서 문제를 발생시킬 수 있다.

API서버에 데이터를 요청했을 때 상황에 따라 시간이 오래걸려 웹 페이지가 응답하지 않는 경우가 발생할 수도 있다.

비동기 처리의 장점은 메인 스레드를 차단하지 않고 네트워크 요청 등의 오래 걸리는 작업들을 수행할 수 있다.

자바스크립트의 callback, promise, async/await 등이 비동기 관련 키워드들이다.

### 참고

- [Understanding Asynchronous JavaScript](https://blog.bitsrc.io/understanding-asynchronous-javascript-the-event-loop-74cd408419ff)
