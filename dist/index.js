"use strict";
const btn = document.getElementById("btn");
const input = document.getElementById("todoinput");
const form = document.querySelector("form");
const list = document.getElementById("todolist");
const todos = [];
// works also as:
// (<HTMLInputElement>input).value <-- doesn't work with REACT
// btn.addEventListener("click", function () {});
//"?" after the element will notify Js that IF that element exist execute it
// btn.addEventListener("click", function () {
//   alert(input.value);
//   input.value = "";
// });
function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
        text: input.value,
        status: false,
    };
    createTodo(newTodo);
    todos.push(newTodo);
    input.value = "";
}
function createTodo(todo) {
    const newLI = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    newLI.append(checkbox);
    newLI.append(todo.text);
    list.append(newLI);
}
form.addEventListener("submit", handleSubmit);
