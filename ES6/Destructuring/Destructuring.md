# Destructuring

디스트럭쳐링은 구조화 된 배열 또는 객체를 비구조화, 파괴(destructuring)하여 개별 변수에 할당하는 것입니다. 배열, 객체리터럴에서 필요한 값만 추출하여 변수에 할당, 반환할 때 유용합니다.  

## Array destructuring
```js
//ES5에서의 배열 디스트럭쳐링
var arr = [1,2,3];
var one, two, three;
one = arr[0];
two = arr[1];
three = arr[2];

console.log(one, two, three);   //1 2 3
```

ES6에서 배열 디스트럭쳐링은 배열의 요소를 배열로부터 추출해서 변수 리스트에 할당합니다.(배열 인덱스 기준)
```js
//ES6
const arr = [1,2,3];
const [one, two, three] = arr;

console.log(one, two, three);   //1 2 3

const arr2 = [4,5,6];
const [four, five, six, seven] = arr2;

console.log(four, five, six, seven);    //4 5 6 undefined
```

아래는 Date객체에서 년,월,일을 추출하는 코드입니다.
```js
const today = new Date();
const formattedDate = today.toISOString().substring(0,10);
const [year, month, day] = formattedDate.split("-");
console.log([year, month, day]);
```

---
<br>

## Object destructuring
ES5에서 객체의 각 프로퍼티를 디스트럭쳐링을 하여 변수에 할당하려면 프로퍼티 이름(key)을 사용하여야 합니다.
```js
//ES5
var obj = { firstName: "EB", lastName: "Lee" };
var firstName = obj.firstName;
var lastName = obj.lastName;

console.log(firstName, lastName);   //EB Lee
```

ES6의 객체 디스트럭처링은 객체의 각 프로퍼티를 객체로부터 추출하여 변수 리스트에 할당합니다. 할당 기준은 프로퍼티 이름(key)입니다.
```js
//ES6
const userInfo = {name: "james", age:19};
const {name: userName, age:userAge} = userInfo;

console.log(userName, userAge); //james 19


//변수명과 프로퍼티 이름을 같게 하면 축약형으로 작성이 가능합니다.
const obj = { firstName: "EB", lastName: "Lee" };
const { firstName, lastName } = obj;

console.log(firstName, lastName);   //EB Lee
```

한가지 주의할 것은 객체를 디스트럭처링해서 선언되지 않은 변수에 할당하는 경우입니다 (let, const, 또는 var를 함께 쓰지 않는 경우입니다).
```js
{ blowUp } = { blowUp: 10 };
// Syntax error
```
이 구문이 에러를 일으키는 이유는 JavaScript 문법에 따라 엔진이 {로 시작하는 모든 구문을 블록(block) 구문으로 해석하기 때문입니다. (예를 들어, { console } 은 유효한 블록 구문입니다). 구문 에러를 해결하는 방법은 문장 전체를 괄호로 감싸는 것입니다.
```js
({safe} = {});
```

## 배열, 객체, 이터러블이 아닌 값 디스트럭쳐링

null, undefined 등의 값은 디스트럭쳐링을 시도하면 에러가 발생하고, boolean, string, number와 같은 프리미티브 값들은 에러는 없지만 undefined가 반환됩니다.  
이는 객체 할당 패턴을 사용할 때, 디스트럭처링의 대상이되는 값은 Object로 변환 가능한 값이어야 하기 때문입니다. 거의 모든 타입이 객체로 변환이 가능하지만 null, undefined는 그렇지 않습니다.  
배열 할당 패턴을 적용할 때, 그 값은 반드시 이터레이터(iterator)를 갖고 있어야 합니다.  
이러한 에러를 대비해서 기본값을 지정해줄 수 있습니다.
```js
const { message: msg = "Something went wrong" } = {};
console.log(msg); // "Something went wrong"
```

---
<br>

## 디스트럭처링의 실용적 응용 사례

### 함수 인자 정의
API를 만들 때, API의 사용자가 API의 인자 순서를 기억해야하는 것은 불편한 일입니다. 대신 여러개의 속성을 가진 객체를 파라메터로 전달 받는 것이 좀 더 나은 접근입니다. 디스트럭처링을 이용하면 API 함수 안에서 파라메터 속성을 참조할 때마다 파라메터 객체를 반복해서 사용하는 것을 피할 수 있습니다.
```js
function removeBreakPoint({url, line, column}) {
    ...
}
//Firefox DevTools JavaScript 디버거의 실제 코드 형태입니다.
```

### JSON parsing
아래 예시는 디스트럭쳐링을 활용해 JSON형태의 데이터에서 원하는 데이터만을 뽑아내는 코드입니다.

```js
let news = [
    {
        title: "sbs",
        imgUrl: "https://sbs.news.co.kr/image/photo12.jpg",
        newList: [
            "sbs news 1",
            "sbs news 2",
            "sbs news 3",
            "sbs news 4",
            "sbs news 5"
        ]
    },
    {
        title: "mbc",
        imgUrl: "https://mbc.news.co.kr/image/photo113.jpg",
        newList: [
            "mbc news 1",
            "mbc news 2",
            "mbc news 3",
            "mbc news 4"
        ]
    }

];

let [, mbcNews] = news; //디스트럭쳐링을 활용해 mbc 뉴스만 뽑아냄.
console.log(mbcNews);
let {title, imgUrl} = mbcNews;
console.log(title, imgUrl);
```

### Event 객체 전달
디스트럭쳐링을 활용하면, HTML 요소의 객체 전부를 인자로 받아서 파싱하지 않고 객체에서 필요한 정보만 인자로 받을 수 있습니다.
```html
...

<body>
<div id="hi">안녕하세요.</div>
</body>

...
```
```js
const hi_div = document.getElementById("hi");
hi_div.addEventListener("click", function(evt) {
    console.log(evt);
});
```
위 코드에서 evt는 MouseEvent 객체 전체입니다. 이를 디스트럭쳐링을 활용하면 필요 정보만 받아올 수 있습니다.
```js
const hi_div = document.getElementById("hi");
hi_div.addEventListener("click", function({target, type}) {
    console.log(target, type);  //<div id="hi">안녕하세요.</div> "click"
});
```

---
<br>

## 참고

- [Poiemaweb/es6-destructuring](https://poiemaweb.com/es6-destructuring)
- [모던 자바스크립트(javascript) 개발을 위한 ES6 강좌](https://www.inflearn.com/course/es6-%EA%B0%95%EC%A2%8C-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8/)
- [ES6 in depth: destructuring](http://hacks.mozilla.or.kr/2015/09/es6-in-depth-destructuring/)