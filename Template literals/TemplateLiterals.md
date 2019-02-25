# Template literals

`템플릿 리터럴`은 내장된 표현식을 허용하는 문자열 리터럴입니다.  
템플릿 리터럴은 **표현식/문자열 삽입, 여러 줄 문자열, 문자열 형식화, 문자열 태깅** 등 다양한 기능을 제공합니다.  
ES2015 사양명세서에선 `template strings`라고 불렸습니다.  
템플릿 리터럴은 **런타임 시점**에 일반 자바스크립트 문자열로 처리/변환됩니다.   

## Syntax
```js
`string text`
`string text line 1
 string text line 2`

`string text ${expression} string text`

tag `string text ${expression} string text`
```
템플릿 리터럴은 작은따옴표(')나 큰따옴표(") 대신 백틱(`)(grave accent)로 감싸줍니다.  
위 예시에서 템플릿 리터럴에서 제공하는 기능들을 사용해봤는데 하나하나 알아보도록 하겠습니다.

---
<br>

## Expression interpolation (표현식 삽입법)
ES6 이전엔 표현식을 다음과 같이 일반 문자열 안에 집어넣었습니다.
```js
var a = 20;
var b = 8;
var c = "자바스크립트";
var str = "저는 " + (a + b) + "살이고 " + c + "를 좋아합니다.";
console.log(str);   //저는 28살이고 자바스크립트를 좋아합니다.
```

템플릿 리터럴에서는 아래와 같이 $와 중괄호{}를 사용하여 표현식을 표기할 수 있습니다.  
```js
let a = 20;
let b = 8;
let c = "자바스크립트";
let str = `저는 ${a+b}살이고 ${c}를 좋아합니다.`;
console.log(str);   //저는 28살이고 자바스크립트를 좋아합니다.
```
위 처럼 + 연산자로 문자열을 연결해주는 것보다 가독성이 더 좋습니다.  


---
<br>

## Taged templates

템플릿 리터럴의 발전된 형태의 하나로 태그드 템플릿이 있습니다. 태그를 사용하여 템플릿 리터럴을 함수로 파싱할 수 있습니다.  
아래 코드는 기본 함수와 동일한 태그 함수입니다.
```js
let person = 'Lee';
let age = 28;

let tag = function(strings, personExp, ageExp) {    //함수 이름은 원하는 대로 가능!
    let str0 = strings[0];
    let str1 = strings[1];
    console.log("str0 : " + str0);  //strings는 
    console.log("str1 : " + str1);

    let ageStr;
    if(ageExp > 99) ageStr = 'centenaian';
    else ageStr = 'youngster';

    return str0 + personExp + str1 + ageStr;    //이 함수 내에서 template literal 반환 가능
};
let output = tag`that ${person} is a ${age}`;
console.log(output);    //that Lee is a youngster
```
태그 함수의 첫 번째 인수는 문자열 값의 배열을 포함합니다. 나머지 인수는 표현식과 관련됩니다.  
이 첫 번째 인수, 즉 문자열 값의 배열은 표현식을 기준으로 split됩니다.
```js
let myTag = function(strings, a, b, c) {
    console.log(`문자열 배열 길이 : ${strings.length}`);    //4, 마지막 템플릿 뒤에 빈 문자열
    for(let i = 0; i < strings.length; i+=1) {
        console.log(`문자열 요소 [${i}]: ${strings[i]}`);
    }
    console.log(a);
    console.log(b);
    console.log(c);
}
let html = 5;
let css = 3;
let js = 'es10';
let string = myTag`HTML${html}, CSS${css}, JavaScript ${js}`;
```
---
<br>

## Multi-line strings

템플릿 리터럴을 사용하면 여러 줄의 문자열도 나눠서 작성할 필요가 없습니다.
비교를 위해 먼저 일반 string 리터럴을 사용하여 문자열을 여러 줄 작성해보겠습니다.
```js
console.log("string text line 1\n" + "string text line 2");
//string text line 1
//string text line 2
```

템플릿 리터럴은 리터럴 안에서 개행을 해주면 됩니다.
```js
//템플릿 리터럴
console.log(`string text line 1
string text line 2`);
```
각 상황에 따라서 편한 방식으로 사용하면 될 것 같습니다.

---
<br>

## Nesting templates (중첩 템플릿)

특정 조건을 만족하는 경우마다 다른 문자열을 변수에 저장하고 싶을 때, 템플릿을 중첩해서 작성하는 것이 가독성이 더 좋을 때가 있습니다. 아래 예시 코드들로 비교해 보겠습니다.  
```js
//ES5
var classes = 'header'
classes += (isLargeScreen() ? 
            '' : item.isCollapsed ? 
            ' icon-expander' : ' icon-collapser);
```
```js
//ES6, Not use nesting templates
const classes = `header ${ isLargeScreen() ? '' :
                (item.isCollapesd ? 'icon-expander' : 'icon-collapser')}`;
```
```js
//ES6, Used nesting templates
const classes = `header ${ isLargeScreen() ? '' :
                `icon-${item.isCollapsed ? 'expander' : 'collapser'}` }`;

```
~~다 복잡하긴 하다..~~

---

<br>

## Raw strings (원래 문자열)

Raw string은 이스케이프 문자를 해석하지 않은 일반 문자열입니다.  
String.raw 태그함수를 사용하면 템플릿 문자열을 입력한 대로 출력할 수 있습니다.  
```js
let s = String.raw`xy\n${1+1}z`;
console.log(s);     //xy\n2z
```
태그 함수를 만들어 원래의 문자열을 반환하려면 첫 번째 인자의 raw 프로퍼티를 사용하면 됩니다.
```js
let tag = function(strings) {
    return strings.raw[0];
}

let str = tag`Hello\nWorld.`;
console.log(str);       //Hello\nWorld.
```


---
<br>

## 참고
- [MDN JavaScript Reference](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals)
- ECMAScript6 길들이기(나라얀 프루스티 지음, 에이콘)
- [Poiemaweb/es6-template-literals](https://poiemaweb.com/es6-template-literals)