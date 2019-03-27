# Class

## Class 정의

자바스크립트에선 Class의 개념이 없었지만, ES6에서 Class라는 키워드가 생겼습니다. 그 전엔 아래와 같은 방법으로 Class를 구현해서 사용했습니다.
```js
//ES5
function Student(name) {
    this.name = name;
}

Student.prototype.getStudentName = function() {
    return this.name;
}

var james = new Student("james");
console.log(james.getStudentName());
```

위 방식은 Student라는 함수의 프로토타입에서 함수(getStudentName())를 등록해놓고, Student를 생성자 함수로 사용해 객체를 생성하면, 해당 객체가 등록한 함수(getStudentName())를 사용할 수 있게 만든 방식입니다.

ES6에서는 새로 생긴 class 키워드를 사용해 클래스 기능을 사용할 수 있습니다.
```js
class Student {
    constructor(name, No, address) {
        this.name = name;
        this.No = No;
        this.address = address;
    }

    getName() {
        return this.name;
    }

    getNo() {
        return this.No;
    }

    getAddress() {
        return this.address;
    }
}

const doe = new Student("doe", 351544, "seoul");
console.log(doe.getName());
console.log(doe.getNo());
console.log(doe.getAddress());
```

class도 함수표현식 처럼 작성할 수 있습니다. 즉, 클래스명을 가질 수도 있고 안가질수도 있습니다. 만약 클래스명을 기재하고, 함수표현식처럼 다른 변수에 할당해 클래스를 생성한다면, 기재한 클래스명으로 클래스를 생성할 수 없습니다.
```js
const Person = class MyClass {
    constructor(name) {
        this._name = name;
    }

    sayHi() {
        console.log(`Hi! ${this._name}`);
    }
}

const james = new Person("james");
james.sayHi();  //Hi! james
const sam = new MyClass("sam");
sam.sayHi();    //MyClass is not defined.
```

---
<br>

## 인스턴스 생성
클래스의 인스턴스를 생성하려면 new 연산자와 함께 constructor를 호출합니다.
```js
class Foo {}

const foo = new Foo();
console.log(Foo === Foo.prototype.constructor); //true
```
위 코드에서 new 연산자와 함께 호출한 Foo는 클래스의 이름이 아닌, constructor입니다. 표현식이 아닌 선언식으로 정의한 클래스의 이름은 constructor와 동일합니다.

constructor는 new 연산자 없이 호출할 수 없습니다.
```js
class Foo {}
const foo = Foo();  //Type error
```

---
<br>

## constructor

constructor는 인스턴스를 생성하고 클래스 프로퍼티를 초기화하기 위한 특수한 메소드입니다. constructor는 클래스 내에 한 개만 존재할 수 있으며 만약 클래스가 2개 이상의 constructor를 포함하면 문법 에러(SyntaxError)가 발생합니다. 인스턴스를 생성할 때 new 연산자와 함께 호출한 것이 바로 constructor이며 constructor의 파라미터에 전달한 값은 클래스 프로퍼티에 할당합니다.

constructor는 생략할 수 있습니다. constructor를 생략하면 클래스에 constructor() {}를 포함한 것과 동일하게 동작합니다. 즉, 빈 객체를 생성합니다. 따라서 클래스 프로퍼티를 선언하려면 인스턴스를 생성한 이후, 클래스 프로퍼티를 동적 할당해야 합니다.

```js
class Foo { }

const foo = new Foo();
console.log(foo); // Foo {}

// 클래스 프로퍼티의 동적 할당 및 초기화
foo.num = 1;
console.log(foo); // Foo&nbsp;{ num: 1 }
```

constructor는 인스턴스의 생성과 동시에 클래스 프로퍼티의 생성과 초기화를 실행한다.
```js
class Foo {
  // constructor는 인스턴스의 생성과 동시에 클래스 프로퍼티의 생성과 초기화를 실행한다.
  constructor(num) {
    this.num = num;
  }
}

const foo = new Foo(1);

console.log(foo); // Foo { num: 1 }
```

---
<br>

## 클래스 프로퍼티

클래스 몸체(body)에는 메소드만 선언할 수 있습니다. 클래스 바디에 클래스 프로퍼티(인스턴스 필드, 멤버 변수)를 선언하면 문법 에러가 발생합니다.
```js
class Foo {
    name = '';  //syntax error.???
    constructor() {}
}
```

---
<br>

## 호이스팅
클래스는 let, const와 같이 호이스팅 되지 않는 것처럼 동작합니다. 즉, class 선언문 이전에 클래스를 참조하면 Reference error가 발생합니다.  
```js
const foo = new Foo();  //Foo is not defined.
class Foo  {}
```
자바스크립트는 ES6의 클래스를 포함하여 모든 선언(var, let, const, function, function*, class)을 호이스팅합니다. 하지만 클래스는 스코프의 선두에서 선언문에 도달할 때까지 일시적 사각지대(TDZ)에 빠집니다. 따라서 class 선언문 이전에 class를 참조하게되면 참조에러가 발생합니다.
ES6의 클래스도 사실은 함수입니다. 다만, 함수선언식과 같은 방식으로 호이스팅되지 않고 let, const에 함수를 할당하는 함수표현식의 호이스팅 방식을 따릅니다.

---
<br>

## getter, setter
### getter
getter는 클래스 프로퍼티에 접근할 때마다 클래스 프로퍼티의 값을 조작하는 행위가 필요할 때 사용합니다. getter는 메소드 이름앞에 get을 붙여서 정의합니다. 이때 메소드 이름은 클래스 프로퍼티 이름처럼 사용됩니다. 다시 말해 getter는 호출하는 것이 아니라, 프로퍼티처럼 참조하는 형식으로 사용하며 참조 시에 메소드가 호출됩니다. getter는 이름 그대로 무언가를 취득할 때 사용하므로 반드시 무언가를 반환해야 합니다.
```js
class Foo {
    constructor(arr = []) {
        this._arr = arr;
    }

    //getter: get 키워드 뒤에 오는 메소드 이름 firstElem은 프로퍼티 이름처럼 사용됩니다.
    get firstElem() {
        //getter는 반드시 무언가를 반환합니다.
        return this._arr.length ? this._arr[0] : null;
    }
}

const foo = new Foo([1,2]);
//프로퍼티 firstElem에 접근하면 getter가 호출됩니다.
console.log(foo.firstElem); //1
```

### setter
setter는 클래스 프로퍼티에 값을 할당할 때 마다 클래스 프로퍼티의 값을 조작하는 행위가 필요할 때 사용합니다. setter는 메소드 이름 앞에 set 키워드를 사용해 정의합니다. 이 때 메소드 이름은 클래스 프로퍼티 이름처럼 사용됩니다. setter는 호출하는 것이 아니라 프로퍼티처럼 값을 할당하는 형식으로 사용하며 할당 시에 메소드가 호출됩니다.
```js
class Foo {
    constructor(arr = []) {
        this._arr = arr;
    }

    get firstElem() {
        return this._arr.length ? this._arr[0] : null;
    }

    set firstElem(elem) {
        // ..this._arr은 this._arr를 개별 요소로 분리합니다.
        this._arr = [elem, ...this._arr];
    }
}

const foo = new Foo([1,2]);

//프로퍼티 firstElem에 접근하면 getter가 호출됩니다.
console.log(foo.firstElem);     //1
//프로퍼티 firstElem에 값을 할당하면 setter가 호출됩니다.
foo.firstElem = 0;
console.log(foo.firstElem);     //0
```

---
<br>

## 정적 메소드
클래스의 정적(static) 메소드를 정의할 때 static 키워드를 사용합니다. 정적 메소드는 클래스의 인스턴스가 아닌 클래스 이름으로 호출합니다. 따라서 클래스의 인스턴스를 생성하지 않아도 호출할 수 있습니다.
```js
class Foo {
    constructor(prop) {
        this.prop = prop;
    }

    static staticMethod() {
        /*
        정적 메소드는 this를 사용할 수 없습니다.
        정적 메소드 내부에서 this는 클래스의 인스턴스가 아닌 클래스 자신을 가리킵니다.
        */
        return 'staticMethod';
    }

    prototypeMethod() {
        return this.prop;
    }
}

//정적 메소드는 클래스 이름으로 호출합니다.
console.log(Foo.staticMethod());    //staticMethod

const foo = new Foo(123);
//정적 메소드는 인스턴스로 호출할 수 없습니다.
console.log(foo.staticMethod());    //foo.staticMethod is not a function.
```
클래스의 정적 메소드는 인스턴스로 호출할 수 없습니다. 이것은 정적 메소드는 this를 사용할 수 없다는 것을 의미합니다. 일반 메소드 내부에서 this는 클래스의 인스턴스를 가리키며, 메소드 내부에서 this를 사용한다는 것은 클래스의 인스턴스의 생성을 전제로 하는 것입니다.

정적 메소드는 클래스 이름으로 호출하기 때문에 클래스의 인스턴스를 생성하지 않아도 사용할 수 있습니다. 단, 정적 메소드는 this를 사용할 수 없습니다. 달리 말하면 메소드 내부에서 this를 사용할 필요가 없는 메소드는 정적메소드로 만들 수 있습니다. `정적 메소드는 Math 객체의 메소드처럼 애플리케이션 전역에서 사용할 유틸리티 함수를 생성할 때 주로 사용합니다.`

---
<br>

## 클래스 상속

클래스 상속(Class inheritance)은 코드 재사용 관점에서 매우 유용합니다. 새롭게 정의할 클래스가 기존에 있는 클래스와 매우 유사하다면, 상속을 통해 다른 점만 구현하면 됩니다. 코드 재사용은 개발 비용을 현저히 줄일 수 있는 잠재력이 있으므로 매우 중요합니다.
### extends 키워드
extends 키워드는 부모 클래스(base class)를 상속받는 자식 클래스(sub class)를 정의할 때 사용합니다.
```js
//부모 클래스
class Circle {
    constructor(radius) {
        this.radius = radius;   //반지름
    }

    //원의 지름
    getDiameter() {
        return 2 * this.radius;
    }

    //원의 둘레
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }

    //원의 넓이
    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

//자식 클래스
class Cylinder extends Circle {
    constructor(radius, height) {
        super(radius);
        this.height = height;
    }

    //원통의 넓이: 부모 클래스의 getArea 메소드를 오버라이딩
    getArea() {
        //(원통의 높이 * 원통의 둘레) + (2 * 원의 넓이)
        return (this.height * super.getPerimeter()) + (2 * super.getArea());
    }

    //원통의 부피
    getVolume() {
        return super.getArea() * this.height;
    }
}

//반지름이 2, 높이가 10인 원통
const cylinder = new Cylinder(2, 10);

//원의 지름
console.log(cylinder.getDiameter());    //4
//원의 둘레
console.log(cylinder.getPerimeter());   //12.5663...
//원통의 넓이
console.log(cylinder.getArea());        //150.7964...
//원통의 부피
console.log(cylinder.getVolume());      //125.6637...

//cylinder는 Cylinder 클래스의 인스턴스입니다.
console.log(cylinder instanceof Cylinder);  //true
//cylinder는 Circle 클래스의 인스턴스 입니다.
console.log(cylinder instanceof Circle);    //true
```
### super 키워드
super 키워드는 부모 클래스를 참조할 때 또는 부모 클래스의 constructor를 호출할 때 사용합니다.
위 extends 키워드 예시를 보면 super가 메소드로 사용될 때, 객체로 사용될 때 다르게 동작하는 것을 알 수 있습니다.
```js
//부모 클래스
class Circle {
    constructor(radius) {
        this.radius = radius;   //반지름
    }

    //원의 지름
    getDiameter() {
        return 2 * this.radius;
    }

    //원의 둘레
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }

    //원의 넓이
    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

class Cylinder extends Circle {
  constructor(radius, height) {
    // ① super 메소드는 부모 클래스의 인스턴스를 생성
    super(radius);
    this.height = height;
  }

  // 원통의 넓이: 부모 클래스의 getArea 메소드를 오버라이딩하였다.
  getArea() {
    // (원통의 높이 * 원의 둘레) + (2 * 원의 넓이)
    // ② super 키워드는 부모 클래스(Base Class)에 대한 참조
    return (this.height * super.getPerimeter()) + (2 * super.getArea());
  }

  // 원통의 부피
  getVolume() {
    // ② super 키워드는 부모 클래스(Base Class)에 대한 참조
    return super.getArea() * this.height;
  }
}

// 반지름이 2, 높이가 10인 원통
const cylinder = new Cylinder(2, 10);
```

① super 메소드는 자식 class의 constructor 내부에서 부모클래스의 constructor(super-constructor)를 호출합니다. 즉, 부모 클래스의 인스턴스를 생성합니다. `자식 클래스의 constructor에서 super()를 호출하지 않으면 this에 대한 참조 에러가 발생합니다.`
```js
class Parent {}
class Child extends Parent {
    constructor() {}    //reference error : this is not defined
}

const child = new Child();
```
이것은 super 메소드를 호출하기 이전에는 this를 참조할 수 없음을 의미합니다.

② super 키워드는 부모 클래스(Base Class)에 대한 참조입니다. 부모 클래스의 프로퍼티 또는 메소드를 참조하기 위해 사용합니다.

### static 메소드와 prototype 메소드의 상속

프로토타입 관점에서 바라보면 자식 클래스의 [[Prototype]] 프로퍼티가 가리키는 프로토타입 객체는 부모 클래스입니다.
```js
class Parent {}

class Child extends Parent {}

console.log(Child.__proto__ === Parent);    //true
console.log(Child.prototype.__proto__ === Parent.prototype);    //true
```

자식 클래스 Child의 프로토타입 객체는 부모 클래스 Parent입니다.
이것은 Prototype chain에 의해 부모 클래스의 정적 메소드도 상속됨을 의미합니다.

```js
class Parent {
    static staticMethod() {
        return 'staticMethod';
    }
}

class Child extends Parent {}

console.log(Parent.staticMethod()); //'staticMethod'
console.log(Child.staticMethod());  //'staticMethod'
```
자식 클래스의 정적 메소드 내부에서도 super 키워드를 사용하여 부모 클래스의 정적 메소드를 호출할 수 있습니다. 자식 클래스는 프로토타입 체인에 의해 부모 클래스의 정적 메소드를 참조할 수 있기 때문입니다.

하지만 자식 클래스의 일반 메소드(프로토타입 메소드) 내부에서는 super 키워드를 사용하여 부모 클래스의 정적 메소드를 호출할 수 없습니다. 자식 클래스의 인스턴스는 프로토타입 체인에 의해 부모 클래스의 정적 메소드를 참조할 수 없기 때문입니다.
```js
class Parent {
    static staticMethod() {
        return 'Hello';
    }
}

class Child extends Parent {
    static staticMethod() {
        return `${super.staticMethod()} world`;
    }

    prototypeMethod() {
        return `${super.staticMethod()} world`;
    }
}

console.log(Parent.staticMethod());     //Hello
console.log(Child.staticMethod());      //Hello world.
console.log(new Child().prototypeMethod()); //Uncaught TypeError.
```
---
<br>

## 참고
- [Poiemaweb/es6-class](https://poiemaweb.com/es6-class)
- [모던 자바스크립트(javascript) 개발을 위한 ES6 강좌](https://www.inflearn.com/course/es6-%EA%B0%95%EC%A2%8C-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8/)