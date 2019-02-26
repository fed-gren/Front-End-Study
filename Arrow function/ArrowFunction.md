# Arrow function

## 사용법
ES6에서 => 연산자를 사용하여 함수를 생성하는 Arrow function(화살표 함수)가 생겼습니다. 보다 간결하게 구문을 작성할 수 있는 익명 함수입니다.
```js
//ES6 이전.
setTimeout(function() {
    console.log("1");
}, 1000);

//ES6 이후.
setTimeout(() => {
    console.log("2");
}, 2000);
```
콜백함수의 단점 중 하나로 인자로 들어가는 함수 내용이 들어가면서 코드가 지저분해진 다는 단점이 있습니다. arrow function은 이러한 단점을 해소시켜줍니다. 아래에 비슷한 예시를 보겠습니다.
```js
//ES6 이전.
var arr1 = [1,2,3,4,5,6].map(function(val) {
    return val * 2;
})
console.log(arr1);  //2,4,6,8,10,12

//ES6 이후.
let arr2 = [1,2,3,4,5,6].map((val) => val * 2);
console.log(arr2);  //2,4,6,8,10,12
```
위 예시에서 보았듯이, return과 함께 적었던 반환문을 arrow function을 사용하면 아주 간결하게 표현할 수 있습니다.  
즉, brace가 없으면 => 연산자 뒤에있는 값을 그대로 반환하는 것이다.  
return을 의미하는 ()로 감싸주어도 똑같은 결과가 나옵니다.`(val) => (val) * 2`  


---
<br>

## this context

arrow function에서의 this는 해당 스코프(화살표 함수를 정의한 지점을 둘러싼 전역/함수의 스코프)의 this값과 같습니다. 일반 함수에서의 this하고는 바인딩이 다릅니다. 차이를 아래 코드를 통해 비교해보겠습니다.  
```js
//ES6 이전.
var obj = {
    name: 'obj',
    func: function() {
        console.log(this);      //Object
        console.log(this.name); //obj
        setTimeout(function() {
            console.log(this === window);   //true
        },200);
    }
}

obj.func();
```
위 예제 코드에서 첫 번째 this는 자신을 호출하는 객체에 바인딩됩니다. 따라서 this.name을 출력하면 obj가 제대로 출력됩니다.  
setTimeout의 콜백함수의 this는 전역객체에 바인딩되므로 window와 비교시 true가 출력됩니다.  
그럼 위 예제의 콜백함수를 arrow function으로 고치면 어떤 결과가 나오는지 보겠습니다.  
```js
let obj = {
    name: 'obj',
    func: function() {
        setTimeout(() => {
            console.log(this === window);   //false
            console.log(this);      //obj 객체에 바인딩.
        },200);
    }
}

obj.func();
```
콜백함수, 즉 func의 내부함수를 arrow function으로 작셩하면 this가 전역객체에 바인딩되지 않고, 자신을 감싸는 함수의 this에 바인딩 되는 것을 확인 할 수 있습니다.  


---
<br>

## 참고
- ECMAScript6 길들이기(나라얀 프루스티 지음, 에이콘)
- [모던 자바스크립트(javascript) 개발을 위한 ES6 강좌](https://www.inflearn.com/course/es6-%EA%B0%95%EC%A2%8C-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8/)
