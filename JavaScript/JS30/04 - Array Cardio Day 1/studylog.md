# Array Cardio

[JavaScript30](https://javascript30.com/)에서 Array Cardio part1을 따라하며 공부했다. 여기에 더해 다른 사이트들을 참고하며 공부한 기록을 남긴다.  
Cardio는 흉부, 심장이라는 뜻을 가지고 있는데, 이는 아마 배열의 핵심 기능들을 배운다는 의미인 것 같다.
part1에서는 아래 기능들을 실습했다.

1. filter
2. map
3. sort
4. reduce


## 1. filter

MDN web docs에 나온 설명은 아래와 같다.  
filter() 메서드는 주어진 판별 함수를 통과하는 요소를 모아 새로운 배열로 만들어 반환합니다....?
그냥 쭉 읽으니 이해가 안간다.~~(이해력 부족..)~~  
풀어쓰자면 filter에 인자로 함수가 들어가고 각 배열의 요소가 해당 함수의 인자로 들어간다. 그리고 이 인자들이 해당 함수내의 어떤 조건을 만족하여 true를 리턴하면 함수를 통과한거고 조건을 만족하지못해 false를 리턴하면 함수를 통과하지 못한 것이다. 그리고 통과한 요소들만 가지고 배열을 만든다는 의미이다. 테스트를 해보자.

```js
const pokemons = [
    {name: "이상해씨", gen: 1}, //gen은 몇 세대 인지를 의미한다.
    {name: "파이리", gen: 1},
    {name: "꼬부기", gen: 1},
    {name: "치코리타", gen: 2},
    {name: "브케인", gen: 2},
    {name: "리아코", gen: 2},
    {name: "나무지기", gen: 3},
    {name: "아차모", gen: 3},
    {name: "물짱이", gen: 3},
];
```

위와 같이 데이터가 있을 때, 각 세대별로 배열을 새로 만들고 싶다면 아래처럼 filter 메소드를 활용할 수 있다.
```js
const gen1Pokemons = pokemons.filter(pokemon => pokemon.gen === 1);
const gen2Pokemons = pokemons.filter(pokemon => pokemon.gen === 2);
const gen3Pokemons = pokemons.filter(pokemon => pokemon.gen === 3);

console.table(gen1Pokemons);
console.table(gen2Pokemons);
console.table(gen3Pokemons);
```
크롬 console에서 테스트 해보면, 원하는대로 데이터가 나오는 것을 확인 할 수 있다. filter 메소드를 활용해서 원하는 조건의 데이터만 배열에서 뽑아 다른 배열로 쉽게 만들 수 있다.

---
<br>

## 2. map

map() 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환한다.
예를 들어 어떤 배열 내 모든 값을 제곱하고 싶다면, 아래 처럼 작성하면 된다.
```js
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrPow = arr.map(val => val * val);

console.log(arrPow);
//1, 4, 9, 16, 25, 36, 49, 64, 81, 100
```

또 다른 활용으로 데이터를 원하는 대로 편집할 수 있다. filter에서 사용했던 포켓몬 배열을 이용해 새로운 배열로 만들어보자.
```js
const pokemons = [
    {name: "이상해씨", gen: 1}, //gen은 몇 세대 인지를 의미한다.
    {name: "파이리", gen: 1},
    {name: "꼬부기", gen: 1},
    {name: "치코리타", gen: 2},
    {name: "브케인", gen: 2},
    {name: "리아코", gen: 2},
    {name: "나무지기", gen: 3},
    {name: "아차모", gen: 3},
    {name: "물짱이", gen: 3},
];

const pokemonIntroduce = pokemons.map(pokemon => `${pokemon.gen}세대 포켓몬 ${pokemon.name}`);
console.log(pokemonIntroduce);
```
위 코드를 실행하면 pokemonIntroduce에는 `x세대 포켓몬 ooo`와 같은 형식의 문자열 데이터로 이루어진 배열이 반환된다.

---
<br>

## 3. sort

sort() 메소드는 배열의 요소를 적절한 위치에 정렬 한 후, 그 배열을 반환한다. 기본 정렬 순서는 문자열의 유니코드 코드 포인트를 따른다.  

```js
const orderedDesc = pokemons.sort((a, b) => {
    return b.gen - a.gen;   //내림차순 정렬
});

console.table(orderedDesc);
```
sort() 메소드 내 비교를 위한 함수는 선택사항(Optional)이다. 
위 예시에서는 내부 gen 데이터를 기준으로 내림차순으로 정렬하고자 비교 함수를 작성했다.

---
<br>

## 4. reduce

reduce() 메소드는 배열의 각 요소에 대해 주어진 리듀서 함수를 실행하고, 하나의 결과값을 반환한다.
여기서 리듀서 함수는 사용자가 정의할 수 있고, 총 네 개의 인자를 가질 수 있다.

1. 누산기(acc) => 연산 결과 값을 일시적으로 보관.
2. 현재 값(cur) => 현재 배열 요소값
3. 현재 인덱스(idx)
4. 원본 배열(src)

아래 예시는 장바구니에 들어있는 물품 가격의 총 합을 구하는 예시이다.

```js
const myCart = [
    {ㅍ
        item: 'water',
        price: 3000
    },
    {
        item: 'apple',
        price: 2000
    },
    {
        item: 'USB',
        price: 30000
    },
    {
        item: 'book',
        price: 24000
    }
];

const totalPrice = myCart.reduce((total, myCart) => total + myCart.price, 0);       //currentIndex로 값을 주지 않으면 1부터 시작한다.
console.table(totalPrice);  //59000
```

---
<br>

## 끝!!

다음 파트엔 어떤 메소드로 어떤 활용을 하게 될지 궁금하다. 그리고 배열 내장 메소드가 생각보다 너무 많아서 놀랐다. 편리한 JS!

## 참고

- [JavaScript 30](https://javascript30.com/)
- [MDN web docs - Array](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array)