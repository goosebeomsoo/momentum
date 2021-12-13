const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newList) {
    const li = document.createElement("li");
    li.id = newList.id;
    const para = document.createElement("p");
    para.innerText = newList.text;
    const button = document.createElement("button");
    button.innerText = "Clear";
    button.addEventListener("click", deleteToDo);
    li.appendChild(para);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text : newToDo,
        id : Date.now(),
    }
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
//JSON.stringify("content") "content"를 string으로 변환
//JSON.parse("content") "content"를 array로 변환

function sayHello() {
    console.log("hello");
}

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}


//forEach : array에 사용할 수 있음. array에 있는 각각에 아이템에 function을 실행시킬 수 있음
//forEach((e) => console.log(e)) : 함수를 따로 작성하지 않고 함수 안에서 인자를 받아서 함수롤 또 작동시킬 수 있음 / arrow function
/*
[1,2,3,4].filter(function) : function을 4번 출력, true를 return해야
출력됨.
function(1) = 1
function(2) = 2
function(3) = 3
function(4) = 4
*/