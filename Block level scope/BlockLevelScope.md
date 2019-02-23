# Block level scope (블록 단위 유효범위)

**블록 단위의 유효범위**에 대해 알아보고 블록 단위의 유효범위를 갖는, ES6(ECMAScript2015)에서 새로 등장한 변수 선언 키워드인 **let, const**에 대해 알아보겠습니다.

ES6 이전까진 자바스크립트에는 **var**라는 변수 키워드밖에 없었습니다.  
그래서 현재는 var, let, const 이 세 가지를 변수 선언 키워드로 사용할 수 있습니다.  
세 가지를 비교해보면서 블록 레벨 스코프에 대해 알아보겠습니다.  

-| var | let | const
--|----|-------|-----
scope | function level | block level | block level
재선언  |  O | X | X
재할당 |  O | O | X
 ---
 <br>

## Function level scope?

제일 먼저 있었던 var 키워드는 함수 스코프 변수를 선언할 때 사용합니다.  
함수 밖에서 선언한 함수 스코프 변수는 전역 범위를 가지고, 함수 안에서 사용하면 함수 밖을 제외한 내부 어디서든 접근이 가능합니다.
 ```js
 var a = "I'm a";
 function foo() {
     var b = "I'm b";
     console.log(a);        //I'm a - 전역변수. 출력가능.
     if(true) {
         var c = "I'm c";
         console.log(b);    //I'm b - 해당 함수 내 선언한 변수. 출력 가능.
     }
     console.log(c);        //I'm c - 해당 함수 내 선언한 변수. 출력 가능.
 }
foo();
 function bar() {
     var d = "I'm d";
     console.log(d);    //I'm d - 해당 함수 내 선언한 변수. 출력 가능.
     console.log(a);    //전역변수. 출력가능.
     console.log(b);    //해당 함수 내 선언한 변수가 아님. Error
     console.log(c);    //해당 함수 내 선언한 변수가 아님. Error
 }
 bar();
 ```
 이러한 함수 스코프 레벨 변수는 **메모리 누수**, **디버깅이 어렵고 가독성이 떨어진다**는 문제점이 있습니다.  
 이러한 문제점을 피하고자 블록 스코프 변수를 생성하기 위한 let, const 키워드가 탄생했습니다.  
 
 ---
 <br>

## Block level?

블록은 0개 이상의 구문(statement)을 묶기위해 사용하고, 중괄호{}로 경계를 구분합니다.  
블록 스코프 변수는 함수 밖에서 선언하면 함수 스코프 변수처럼 전역 접근할 수 있습니다. 블록 안에서 선언하면 자신을 정의한 블록과 하위 블록에서만 접근이 가능합니다.

```js
let foo = "I'm foo";
if(true) {
    let bar = "I'm bar";
    console.log(foo);   //I'm foo
    console.log(bar);   //I'm bar
}

console.log(foo);   //I'm foo
console.log(bar);   //Uncaught ReferenceError: bar is not defined.
```
 ---
 <br>

## 변수 재선언

var 키워드로 선언된 변수는 **재선언이 가능**합니다.
```js
var a = 0;
var a = 1;
console.log(a); //1
function foo() {
    var b = 2;
    var b = 3;  //3
    console.log(b);
}
```

하지만 let 키워드로 선언된 변수는 **재선언이 불가능** 합니다.
```js
let a = 0;
let a = 1;      //error

if(true) {
    let b = 2;
    let b = 3;      //error
    console.log(b);
}
```

변수 재선언이 가능한 경우, 자신 혹은 다른 개발자가 실수로 이미 사용한 변수명을 다시 선언하면서 다른 값을 할당한다면 이는 문제가 됩니다.  
아래 코드에선 어떻게 출력이 될지 예상해봅시다.
```js
var a = 1;
let b = 2;

function foo() {
    var a = 3;
    let b = 4;
    if(true) {
        var a = 5;
        let b = 6;
        console.log(a);
        console.log(b);
    }
    console.log(a);
    console.log(b);
}
foo();
console.log(a);
console.log(b);
```
 ---
 <br>
const 키워드는 읽기 전용 변수, 즉 값을 재할당 할 수 없는 상수를 선언할 경우에 사용합니다.    
const도 블록 레벨 스코프를 가지기 때문에 let과 동일한 결과가 나오지만, 주의할 점이 있습니다.  
상수이기 때문에 재할당이 불가능 하며, 선언 시에 초기화를 하지 않으면 에러가 발생합니다.

```js
const a = 12;
function foo() {
    console.log(a); //12
    const b = 13;

    if(true) {
        const c = 14;
        console.log(b);
    }
    console.log(c); //error
}
foo();

const d;    //error
```
---
<br>

## 참고
- [MDN JavaScript guide](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Values,_variables,_and_literals#Declarations)  

- ECMAScript6 길들이기(나라얀 프루스티 지음, 에이콘)