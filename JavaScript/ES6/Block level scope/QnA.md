# Block level scope Q&A

### 1. 
함수 레벨 스코프를 갖는 var로 인해 메모리 누수, 가독성 떨어짐, 디버깅 어려움 등의 문제가 발생한다고 한다. 메모리 누수의 문제는 해당 블록을 벗어나도 함수내에서 계속 변수가 메모리에 잡혀있는 것을 의미하는 것인가? 아니라면 어떤 경우인지?

### 2.
```js
var x = 'global';
let y = 'global';
console.log(this.x); //"global" 전역 객체의 속성 x를 생성
console.log(this.y); //undefined 전역 객체의 속성 y를 생성하지 않음
```
- 위를 보면 let으로 선언한 y는 전역객체에 프로퍼티를 생성하지 않는데, 왜 그런가?  
이것도 블록 레벨 스코프와 관련이 있나? 아니면 다른 이유? -> 렉시컬 스코프에 대해 알아보자.(https://stackoverflow.com/questions/39414692/a-javascript-let-global-variable-is-not-a-property-of-window-unlike-a-global)

- 결론에서 리액트를 사용하려면 불변성을 지켜야해서 대부분 const 사용한다는데 정확한 의미를 모르겠음.

### 3. 
```
let키워드는 호스팅이 되지 않으므로 변수 사용전 반드시 먼저 선언해야한다.
```
let 키워드로 선언된 변수는 호이스팅 되지 않는 것이 아니라, 되긴 하지만 TDZ에 의해 변수 선언 및 초기화 이전에 부를 수 없는 것이라고 공부함.(참고 : https://medium.com/korbit-engineering/let%EA%B3%BC-const%EB%8A%94-%ED%98%B8%EC%9D%B4%EC%8A%A4%ED%8C%85-%EB%90%A0%EA%B9%8C-72fcf2fac365)


```
한편, var로 선언되기 전 변수를 사용할 때 분명한 에러지만 자바해석기가 알아서 자동적으로 호스팅이라는 방법으로 선언을 해주면서 오류가 없도록 해준다.
```
뉘앙스의 차이? 자바스크립트 실행 원리를 보면 실행 컨텍스트가 생성되는 과정에서 변수객체에 변수들을 미리 담아놓기 때문에 변수를 사용할 수 있는 것으로 알고 있는데, 이러한 실행 원리가 에러를 없애려고일까??