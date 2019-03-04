# Rest / Spread properties

Object Rest/Spread Property는 객체 리터럴을 분해하고 병합하는 편리한 기능을 제공합니다.  
Spread 연산자의 피연산자는 이터러블이어야 합니다. Rest/Spread 프로퍼티는 일반 객체에 Spread 연산자의 사용을 허용합니다.

## Spread properties
```js
let obj = {x:1, y:2, ...{a:3, b:4}};
console.log(obj);   //{x:1, y:2, a:3, b:4}
```

## Rest properties
```js
let obj = {x:1, y:2, ...{a:3, b:4}};
console.log(obj);   //{x:1, y:2, a:3, b:4}

let {x, y, ...z} = obj;
console.log(x, y, z);   //1, 2, {a:3, b:4}
```

## 사용예시
```js
//객체 병합
const objA = {x: 1, y: 2};
const objB = {y: 10, z: 100};
const mergedObj = {...objA, ...objB};
console.log(mergedObj); //{x:1, y:10, z:100}

//특정 프로퍼티 변경
const objBefore = {
    name: "Lee",
    age: 28,
    phone: "01011112222"
};
const objAfter = {...objBefore, ...{phone: "01033334444"}};
console.log(objAfter);  
//{name: "Lee", age: 28, phone: "01033334444"}


//프로퍼티 추가
const added = {...objAfter, ...{country: 'korea', gender: 'male'}};
console.log(added); 
//{name: "Lee", age: 28, phone: "01033334444", country: "korea", gender: "male"}
```