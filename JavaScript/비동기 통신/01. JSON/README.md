# 비동기 통신 - JSON

서버와 클라이언트 간 데이터 통신을 할 때, 정해진 포맷을 주고 받습니다. 보통 `xml`과 `JSON`을 주고 받는데, JSON이 거의 표준처럼 사용되고 있습니다.

JSON의 특징은 다음과 같습니다.

- 가볍다.
- 사람이 읽고 쓰기가 용이하다.
- 다양한 데이터 타입 사용이 가능하다.

JSON 기본 구조는 다음과 같습니다.

- key/value 쌍
- list 형태

```json
{
  "name":"John",
  "age":30,
  "car":null
}
```

XML은 마크업 언어이기 때문에 JSON에 비해 데이터 양이 많다.(무겁다.)
```xml
<note>
  <to>Tove</to>
  <from>Jani</from>
  <heading>Reminder</heading>
  <body>Don't forget me this weekend!</body>
</note>
```