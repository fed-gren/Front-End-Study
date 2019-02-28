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