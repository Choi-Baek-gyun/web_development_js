function onComputerShot() {
  // 삼항연산자 - Math.random()을 응용
  let shootType = Math.random < 0.5 ? 2 : 3;

  let comScoreElement = document.getElementById('computer-score');
  let textElement = document.getElementById('text');

  // 점수 총합을 대입할 변수 선언
  let comScore = 0;

  if (shootType === 2) {
    if (Math.random() < 0.5) {
      // 2점슛 1/2 확률로 성공
      textElement.innerHTML = '컴퓨터가 2점슛을 성공했했습니다.';

      comScore += 2;

      comScoreElement.innerHTML = comScore;
    } else {
      // 실패했을 때
      textElement.innerHTML = '컴퓨터가 2점슛을 실패했습니다.';
    }
  } else {
    if (Math.random() < 0.33) {
      // 3점슛 1/3 확률로 성공
      textElement.innerHTML = '컴퓨터가 3점슛을 성공했습니다.ㅜ';
      comScore += 3;

      comScoreElement.innerHTML = comScore;
    } else {
      // 실패했을 때
      textElement.innerHTML = '컴퓨터가 3점슛을 실패했습니다.';
    }
  }
}

function onUserShoot(shootType) {
  let textElement = document.getElementById('text'); // onComputerShoot()에서도 지역 변수로 선언했고, 여기서도 동일합니다

  let userScoreElement = document.getElementById('user-score');

  if (shootType === 2) {
    if (Math.random() < 0.5) {
      // 2점슛 1/2 확률로 성공
      textElement.innerHTML = '2점슛을 성공했했습니다.';

      userScore += 2;

      userScoreElement.innerHTML = userScore;
    } else {
      // 실패했을 때
      textElement.innerHTML = '2점슛을 실패했습니다.';
    }
  } else {
    if (Math.random() < 0.33) {
      // 3점슛 1/3 확률로 성공
      textElement.innerHTML = '3점슛을 성공했습니다.';
      userScore += 3;

      userScoreElement.innerHTML = userScore;
    } else {
      // 실패했을 때
      textElement.innerHTML = '3점슛을 실패했습니다.';
    }
  }
}
