/**
 * ? 예시코드
 * ? ES6에서 객체 생성 시, 프로퍼티값을 변수명으로 사용하는 경우, 키를 생략가능
 */

 const createPlayer = (name) => {
  const playerName = name;
  const printPlayerName = () => {
    console.log(playerName);
  }
  let maxHp = 50;
  let hp = 50;
  let mp = 30;
  let stamina = 20;

  const printHp = () => {
    console.log(`체력 : ${hp}`);
  }

  const printMp = () => {
    console.log(`마나 : ${mp}`);
  }

  return {
    printPlayerName,
    printHp,
    printMp
  }
 }

const myCharacter = createPlayer("X");

myCharacter.printPlayerName();
myCharacter.printHp();
myCharacter.printMp();