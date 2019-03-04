# Spread operator (펼침 연산자)

Spread operator는 피연산자를 개별 요소로 분리합니다. 이 때, 피연산자는 `이터러블`이어야 합니다.  
`이터러블` : ES6 이터러블 규약에 따라 값을 여럿 가지며 개별 값을 순회 가능한 객체. 배열이 대표적인 이터러블 객체입니다.  
Spread operator는 함수 인자나 원소(배열 리터럴)가 여럿 나오는 곳이면 어디라도 쓸 수 있습니다.  


## Spread operator 활용

### 배열의 복사

```js
let pre = ["apple", "orange", 100];
let newData = [...pre];
console.log(pre, newData);   //"apple", "orange", 100  "apple", "orange", 100
console.log(pre === newData) //결과는?
```

### 배열을 다른 배열의 일부로 만들기

```js
let pre = [100, 200, "hello", null];
let newData = [0, 1, 2, 3, ...pre, 4];
console.log(newData);

let sum = (a,b,c) => (a+b+c);
let foo = [100,200,300];
console.log(sum.apply(null, foo));  //spread operator 사용 x
console.log(sum(...foo));   //spread operator 사용 o
```

### 배열을 다른 배열에 밀어넣기(push)

```js
let foo = [1,2,3];
let bar = [4,5,6];

foo.push(...bar);
console.log(foo);   //1, 2, 3, 4, 5, 6
```

### 배열 splice

```js
let foo = [1,2,5,6];
let bar = [3,4];

foo.splice(2, 0, ...bar);
console.log(foo);
```

### 배열 복사하기

```js
let foo = [1,3,5,7,9];
let bar = [...foo];

bar.push(11);

console.log(foo);
console.log(bar);
```

### 유사배열객체 >> 배열 변환
마지막으로 Spread operator를 사용하면 유사배열객체를 배열로 쉽게 변환할 수 있습니다.
```js
const htmlCollection = document.getElementByTagName('li');

//유사배열객체인 htmlCollection을 배열로 변환합니다.
const newArray = [...htmlCollection];
```

---
<br>

## Spread operator와 Rest parameter

펼침연산자와 나머지 파라미터 모두 `...`를 사용하므로 혼동에 주의하여야 합니다.

```js
let print = (...message) => {   //rest parameter
    let len = message.length;
    for(let i = 0; i < len; i+=1) {
        setTimeout(()=> {
            console.log(message[i]);
        }, i * 1000);
    }
}

let arr = [3,2,1];

print(...arr, "start!");    //operator spread
```

---
<br>

## 참고

- ECMAScript6 길들이기(나라얀 프루스티 지음, 에이콘)
- [모던 자바스크립트(javascript) 개발을 위한 ES6 강좌](https://www.inflearn.com/course/es6-%EA%B0%95%EC%A2%8C-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8/)
- [Poiemaweb/es6-template-literals](https://poiemaweb.com/es6-template-literals)