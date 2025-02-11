// 가위 버튼에 적용할 click handler

const SCISSORS = '가위';
const ROCK = '바위';
const PAPER = '보';

function onScissorsClick() {
  // 버튼 클릭 -> userInput prompt 필요 x
  let comInput; // 즉, 지역 변수로 처리를 하는 중
  let randomNum = Math.random();

  if (randomNum < 0.33) comInput = SCISSORS;
  else if (randomNum < 0.66) comInput = ROCK;
  else comInput = PAPER;

  if (comInput === SCISSORS) {
    alert(`컴퓨터 : ${comInput} - 컴퓨터와 비겼습니다.`);
  } else if (comInput === ROCK) {
    alert(`컴퓨터 : ${comInput} - 컴퓨터가 이겼습니다.`);
  } else {
    alert(`컴퓨터 : ${comInput} - 컴퓨터를 이겼습니다`);
  }
}
function onRockClick() {
  let comInput;
  let randomNum = Math.random();

  if (randomNum < 0.33) comInput = SCISSORS;
  else if (randomNum < 0.66) comInput = ROCK;
  else comInput = PAPER;

  if (comInput === SCISSORS) {
    alert(`컴퓨터 : ${comInput} - 컴퓨터를 이겼습니다.`);
  } else if (comInput === ROCK) {
    alert(`컴퓨터 : ${comInput} - 컴퓨터와 비겼습니다.`);
  } else {
    alert(`컴퓨터 : ${comInput} - 컴퓨터가 이겼습니다`);
  }
}
function onPaperClick() {
  let comInput;
  let randomNum = Math.random();

  if (randomNum < 0.33) comInput = SCISSORS;
  else if (randomNum < 0.66) comInput = ROCK;
  else comInput = PAPER;

  if (comInput === SCISSORS) {
    alert(`컴퓨터 : ${comInput} - 컴퓨터가 이겼습니다.`);
  } else if (comInput === ROCK) {
    alert(`컴퓨터 : ${comInput} - 컴퓨터를 이겼습니다.`);
  } else {
    alert(`컴퓨터 : ${comInput} - 컴퓨터와 비겼습니다`);
  }
}

function onButtonClick(userInput) {
  let comInput;
  let randomNum = Math.random();

  if (randomNum < 0.33) comInput = SCISSORS;
  else if (randomNum < 0.66) comInput = ROCK;
  else comInput = PAPER;

  // 출력문 리팩토링 파트
  let result = `컴퓨터 : ${comInput}`;

  console.log(userInput);
  console.log(comInput);

  if (userInput === SCISSORS) {
    if (comInput === SCISSORS) {
      result += ` - 비겼습니다`;
    } else if (comInput === ROCK) {
      result += ` - 졌습니다`;
    } else {
      result += ` - 이겼습니다`;
    }
  } else if (userInput === ROCK) {
    if (comInput === SCISSORS) {
      result += ` - 이겼습니다`;
    } else if (comInput === ROCK) {
      result += ` - 비겼습니다`;
    } else {
      result += ` - 졌습니다`;
    }
  } else {
    if (comInput === SCISSORS) {
      result += ` - 졌습니다`;
    } else if (comInput === ROCK) {
      result += ` - 이겼습니다`;
    } else {
      result += ` - 비겼습니다`;
    }
  }
}
