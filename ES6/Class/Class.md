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

## 인스턴스 생성

## constructor

## 클래스 프로퍼티

## 호이스팅

## getter, setter
### getter
### setter

## 정적 메소드

## 클래스 상속
### extends 키워드
### super 키워드
### static 메소드와 prototype 메소드의 상속
