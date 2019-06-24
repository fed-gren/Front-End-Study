# 02. Promise

## Promise pattern

프로미스 패턴은 자바스크립트에서 비동기 코드를 실행시키기 위해 더욱 추상화 시킨 패턴이라고 할 수 있습니다.

이 패턴은 비동기 코드에서의 callback 패턴이 계속 반복되면서 `callback hell`에 빠지는 것을 방지하기 위한 패턴입니다.

프로미스 패턴을 보기 전에 callback hell에 빠진 코드를 확인해보겠습니다.
```js
const delay = (sec, callback) => {
  setTimeout(() => {
    callback();
  }, sec * 1000);
}

const now = (v) => console.log(v, new Date().toISOString());

delay(1, () => {
  delay(1, () => {
    now(2);
    delay(1, () => {
      delay(1, () => {
        now(4);
        delay(1, () => {
          delay(1, () => {
            now(6);
          });
          now(5);
        });
      });
      now(3);
    });
  });
  now(1);
});
```

일부러 더욱 복잡하게 작성했지만 위 코드를 실행하면 1초마다 1부터 6까지 차례대로 출력합니다. 위 처럼 콜백 함수를 중복 실행하는 코드를 짜면 가독성이 떨어지고 유지 보수가 어려운 코드가 됩니다.

Promise pattern을 사용하면 코드를 좀 더 깔끔하게 작성할 수 있습니다.

```js
function promiseDelay(sec) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(new Date().toISOString());
    }, sec * 1000);
  });
}

const now = (v) => console.log(v, new Date().toISOString());

promiseDelay(1).then(result => {
  now(1);
  return promiseDelay(1);
}).then(result => {
  now(2);
  return promiseDelay(1);
}).then(result => {
  now(3);
  return promiseDelay(1);
}).then(result => {
  now(4);
  return promiseDelay(1);
}).then(result => {
  now(5);
  return promiseDelay(1);
}).then(result => {
  now(6);
  return promiseDelay(1);
}).catch(err => {
  console.log(err);
});
```

Promise 패턴에서는 resolve, reject가 존재합니다. resolve는 요청이 성공했을 때, reject는 실패했을 때 프로미스를 실행하는 함수입니다.

`then`에서 다시 promise를 리턴하기 때문에 체이닝이 가능합니다. 이러한 형태로 코드를 작성하면 비동기로 실행하더라도 동기적으로 코드의 흐름을 작성할 수 있고 가독성 면에서도 좀 더 낫습니다.


## 참고

- [코드종님 Youtube - 자바스크립트 promise? 나도 써보자, 기본 개념부터~](https://www.youtube.com/watch?v=CA5EDD4Hjz4)