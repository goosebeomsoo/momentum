const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date(); // 시간 생성
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerHTML = `${hours}:${minutes}:${seconds}`;
}

getClock()
setInterval(getClock, 1000);

// "string".padStart(string length, "content") -> 스트링 길이 만큼 "string"앞을 "콘텐츠"로 채워라
// "string".padEnd(string length, "content") -> 스트링 길이 만큼 "string"뒤를 "콘텐츠"로 채워라
// parseInt() -> String을 Number로 변환
// String() -> Number를 String으로 변환