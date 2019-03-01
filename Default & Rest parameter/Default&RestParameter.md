# Default parameter (파라미터 기본값)

## Syntax

Default parameter는 인자의 기본값을 지정하는 것입니다. ES6 이전, Default parameter가 지원되지 않았을 때에는 함수가 파라미터 값을 부족하게 받아왔을 때 아래와 같은 방법 등으로 처리할 수 있었습니다.
```js
function myFunc(x,y,z) {
    x = (x === undefined) ? 1 : x;
    y = (y === undefined) ? 1 : y;
    z = (z === undefined) ? 1 : z;

    console.log(x,y,z);
}

myFunc(4,5);    //4 5 1
```

ES6에서는 아래와 같이 처리할 수 있습니다.
```js
let myFunc = (x = 1, y = 2, z = 3) => {
    console.log(x,y,z);
}

myFunc(undefined, 10);      //1 10 3
```
위 코드와 같이 매개변수를 입력할 때 기본값을 설정해줌으로써, undefined로 넘어오는 매개변수에 저장할 기본값을 설정할 수 있습니다.

기본값 자리에 표현식이나 객체가 들어가도 무방합니다.
```js
let foo = (x = 1, y = x + 1) => {
    console.log(x + y);
}
foo(4, 5);          //9
foo(2);             //5
foo(undefined, 1);  //2
foo();              //3

let bar = (x = 1, y = {val: 3}) => {
    console.log(x + y.val);
}

bar();              //4
bar(4, {val: 2});   //6
```
---
<br>

# Rest parameter (나머지 파라미터)

## Syntax
Rest parameter는 함수의 마지막 Parameter 앞에 "..."을 붙인 것으로, Rest 파라미터를 사용하면 인수의 리스트를 함수 내부에서 배열로 전달받을 수 있습니다.  
```js
let foo = (...rest) => {
    console.log(Array.isArray(rest));
    console.log(rest);
}

foo(1,2,3,4,5);     //true, [1,2,3,4,5]
```

인자는 순차적으로 일반 parameter와 rest parameter에 할당됩니다. rest parameter는 항상 마지막에 위치해야 하며, 지키지 않을 경우 에러가 발생합니다.
```js
let bar = (param1, param2, ...rest) => {
    console.log(param1);
    console.log(param2);
    console.log(rest);
}

bar(1,2,3,4,5,6,7,8,9);   //1, 2, [3,4,5,6,7,8,9] 차례대로 출력

let doe = (...rest, what) => {
    console.log(rest);
    console.log(what);
}

doe(1,2,3,4,5,6,7,8,9);
//Uncaught SyntaxError: Rest parameter must be last formal parameter
```

## arguments & rest parameter

ES6 이전에는 나머지 파라미터와 같은 기능을 arguments 객체를 통해 구현했습니다.  
```js
function myFunc(a, b) {
    var args = Array.prototype.slice.call(arguments, myFunc.length);
    console.log(args);
}

myFunc(1,2,3,4,5);      //3, 4, 5 출력.
```
arguments 객체는 배열이 아닌, 유사배열객체이기 때문에, call 함수를 사용해서 배열 메서드를 사용하므로 rest parameter를 사용하는 것 보다 조금 더 복잡한 코드를 사용하게 됩니다.
`arrow function에는 arguments객체가 없으므로 무조건 나머지 파라미터를 사용하면 됩니다.`  
또한, 나머지 파라미터에서 ...를 사용하긴 하지만 펼침연산자로도 ...가 쓰입니다. 용도에 따라 ...를 펼침연산자(spread) 혹은 나머지 파라미터(rest parameter)라고 부르면 됩니다.


## 참고

- ECMAScript6 길들이기(나라얀 프루스티 지음, 에이콘)
- [모던 자바스크립트(javascript) 개발을 위한 ES6 강좌](https://www.inflearn.com/course/es6-%EA%B0%95%EC%A2%8C-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8/)
