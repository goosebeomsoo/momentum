const API_KEY = "12c0a775415382ccb1ac7a2e242ac2d3";

function onGeoOk(position) {
    const lat = position.coords.latitude; // 위도
    const long = position.coords.longitude; // 경도
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const city = document.querySelector("#weather .city");
            const status = document.querySelector("#weather .status");
            const temp = document.querySelector("#weather .temp")
            city.innerText = data.name;
            status.innerText = `${data.weather[0].main}`;
            temp.innerText = `${Math.round(data.main.temp)}°C`;
        }); // fetch = promise
}

function onGeoError() {
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
/*
navigator.geolocation.getCurrentPosition() : user의 위치를 줌
getCurrentPosition은 2개의 인자를 필요로 함.
하나는 모든게 잘 됬을 때 실행 될 함수
하나는 에러가 발생했을 때 실행될 함수
*/