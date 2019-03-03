# Spread operator (펼침 연산자)

Spread operator는 피연산자를 개별 요소로 분리합니다. 이 때, 피연산자는 이터러블(순회가능)이어야 합니다.

배열의 복사.

```js
let pre = ["apple", "orange", 100];
let newData = [...pre];
console.log(pre, newData);   //"apple", "orange", 100  "apple", "orange", 100
console.log(pre === newData) //결과는?
```

몇 가지 활용.
배열 붙이기.
```js
let pre = [100, 200, "hello", null];
let newData = [0, 1, 2, 3, ...pre, 4];
console.log(newData);

let sum = (a,b,c) => (a+b+c);
let foo = [100,200,300];
console.log(sum.apply(null, foo));  //spread operator 사용 x
console.log(sum(...foo));   //spread operator 사용 o
```

배열 push
```js
let foo = [1,2,3];
let bar = [4,5,6];

foo.push(...bar);
console.log(foo);   //1, 2, 3, 4, 5, 6
```

배열 splice
```js
let foo = [1,2,5,6];
let bar = [3,4];

foo.splice(2, 0, ...bar);
console.log(foo);
```

배열 copy
```js
let foo = [1,3,5,7,9];
let bar = [...foo];

bar.push(11);

console.log(foo);
console.log(bar);
```

Spread operator를 사용하면 유사배열객체를 배열로 쉽게 변환할 수 있습니다.
```js
const htmlCollection = document.getElementByTagName('li');

//유사배열객체인 htmlCollection을 배열로 변환합니다.
const newArray = [...htmlCollection];
```