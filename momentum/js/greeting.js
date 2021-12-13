const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const warning = document.querySelector("#warning");

const HIDDEN_CLASSNAME = "hidden"; // 반복되는 String은 변수로, Javascript가 오류 감지 가능
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault(); // 기본 실행 이벤트 취소
    const username = loginInput.value; // 로그인 인풋에 작성한 String 변수로 저장
    localStorage.setItem(USERNAME_KEY, username); // Local Storage에 username 저장
    paintGreetings(username);
}

function checkText(str) {
    const checkNum = /[0-9]/;
    const checkSpc = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/ ]/g;
    
    if (checkSpc.test(str) || checkNum.test(str) === true) {
    warning.classList.remove(HIDDEN_CLASSNAME);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    greeting.classList.add(HIDDEN_CLASSNAME);
    } else {
    warning.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.classList.remove(HIDDEN_CLASSNAME);
    };
}

function paintGreetings(user) {
    // H1태그에 Input value를 표시하는 결과값 텍스트로 삽입하고 H1 클래스리스트에서 hidden 삭제하는 function
    greeting.innerText = `Hello ${user}`;
    checkText(user);
    /*
    greeting.classList.remove(HIDDEN_CLASSNAME);
    loginForm.classList.add(HIDDEN_CLASSNAME); // 로그인 인풋에 hidden 클래스 추가해서 display:none*/
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
    // show the greetings
}
