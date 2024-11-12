// 실시간 환율 API 요청
async function fetchExchangeRate() {
  try {
    const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
    if (!response.ok) throw new Error("환율 데이터를 가져올 수 없습니다.");

    const data = await response.json();
    const rate = data.rates.KRW;
    document.getElementById('rate').innerText = `1 USD = ${rate.toFixed(2)} KRW`;
  } catch (error) {
    document.getElementById('rate').innerText = '환율 정보를 가져올 수 없습니다.';
  }
}

// 명언 목록에서 무작위 명언 선택
function displayRandomQuote() {
  const quotes = [
    "행동하는 것이 가장 중요한 것이다. 용기를 가져라.",
    "어제는 역사이고, 내일은 미스터리이며, 오늘은 선물이다.",
    "도전하지 않는 것은 아무것도 얻지 못하는 것과 같다.",
    "성공은 끝이 아니라 과정이며, 실패는 치명적인 것이 아니다.",
    "작은 시작이 큰 변화를 만든다.",
    "지금 해야 할 일을 내일로 미루지 마라.",
    "하루에 1%씩 나아지면 1년 후엔 37배 성장한다.",
    "지금의 고통은 앞으로의 행복을 위한 준비다.",
    "최선을 다한 오늘이 모여 미래를 만든다.",
    "믿음이 있는 곳에 길이 있다.",
    "성공은 준비가 기회를 만났을 때 온다.",
    "진정한 승리는 스스로에 대한 승리다.",
    "포기하는 순간, 게임은 끝난다.",
    "노력하는 사람에게 행운도 따른다.",
    "매일 조금씩 꾸준히 나아가라."
  ];

  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById('quote').innerText = quotes[randomIndex];
}

// 페이지 로드 시 데이터 가져오기
window.onload = () => {
  fetchExchangeRate();
  displayRandomQuote();
};
