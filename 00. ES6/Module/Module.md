# Module

모듈이란, 애플리케이션을 구성하는 개별적 요소로서 `재사용 가능한 코드 조각`을 말합니다. 모듈은 세부 사항을 캡슐화 하고 공개가 필요한 API만을 외부에 노출합니다.

ES6에서는 클라이언트 사이드 자바스크립트에서 동작하는 모듈 기능을 추가하였습니다. 단, 현재 대부분의 브라우저가 ES6의 모듈을 지원하지 않고 있으므로 현재의 브라우저에서 사용하려면 SystemJS, RequireJS 등의 모듈 로더 또는 Webpack 등의 모듈 번들러를 사용해야 합니다.

ES6 모듈은 단 두 개의 키워드 export와 import를 제공합니다.

## export

모듈은 독립적인 파일 스코프를 갖기 대문에 모듈 안에 선언한 모든 것들은 기본적으로 해당 모듈 내부에서만 참조할 수 있습니다. 만약 모듈 안에 선언한 항목을 외부에 공개하여 다른 모듈들이 사용할 수 있게 하고 싶다면 export해야 합니다. 선언된 변수, 함수, 클래스 모두 export할 수 있습니다.

모듈을 공개하려면 선언문 앞에 export 키워드를 사용합니다. 여러 개를 export할 수 있는데 이 때 각각의 export는 이름으로 구별할 수 있습니다.

`현재 대부분 브라우저가 ES6의 모듈을 지원하지 않고, 동작하지 않습니다. 모듈 뿐만 아니라 ES6를 완전하게 지원하지 않습니다. 이 문제에 대해서는 Babel, Webpack을 이용해 해결 가능합니다. 아래에서는 ES6 모듈의 기본 문법에 대해서만 살펴보겠습니다.`

```js
//lib.js
//변수의 공개
export const pi = Math.PI;

//함수의 공개
export function square(x) {
    return x * x;
}

//클래스의 공개
export class Person {
    constructor(name) {
        this.name = name;
    }
}
```
선언문 앞에 매번 export 키워드를 붙이는 것이 싫다면 export 대상을 모아 하나의 객체로 구성하여 한 번에 export 할 수도 있습니다.
```js
//lib.js
const pi = Math.PI;

function square(x) {
    return x * x;
}

class Person {
    constructor(name) {
        this.name = name;
    }
}

//변수, 함수 클래스를 하나의 객체로 구성하여 공개
export {pi, square, Person};
```

---
<br>

## import

export한 모듈을 로드하려면 export한 이름으로 import합니다.
```js
//main.js
//같은 폴더 내의 lib.js 모듈을 로드. 확장자 js는 생략
import {pi, square, Person} from './lib';

console.log(pi);            // 3.14...
console.log(square(10));    // 100
console.log(new Person("Lee")); // Person {name: "Lee"}
```
각각의 이름을 지정하지 않고 하나의 이름으로 한꺼번에 import 할 수도 있습니다.
이 때 import되는 항목은 as 뒤에 지정한 이름의 변수에 할당됩니다.

```js
//main.js
//lib라는 이름으로 import
import * as lib from './lib';

console.log(lib.pi);            // 3.14...
console.log(lib.square(10));    // 100
console.log(new lib.Person("Lee")); // Person {name: "Lee"}
```
이름을 변경해서 import할 수 있습니다.  
```js
//main.js
import {pi as PI, square as sq, Person as P} from './lib';

console.log(PI);            // 3.14...
console.log(sq(2));         // 4
console.log(new P("Lee")); // Person {name: "Lee"}
```
모듈에서 하나만을 export 할 때는 default 키워드를 사용할 수 있습니다. 다만, default를 사용하는 경우, var, let, const는 사용할 수 없습니다.
```js
//lib.js
function(x) {
    return x * x;
}

export default;
```
위 코드와 아래는 동일합니다.
```js
//lib.js
export default function(x) {
    return x * x;
}
```
default 키워드와 함께 export한 모듈은 {} 없이 임의의 이름으로 import 합니다.
```js
//main.js
import square from './lib';

console.log(square(3)); //9
```

## 참고

- [Poiemaweb/es6-module](https://poiemaweb.com/es6-module)
- [모던 자바스크립트(javascript) 개발을 위한 ES6 강좌](https://www.inflearn.com/course/es6-%EA%B0%95%EC%A2%8C-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8/)