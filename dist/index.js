"use strict";
const btn = document.getElementById("btn");
const input = document.getElementById("todoinput");
const form = document.querySelector("form");
const list = document.getElementById("todolist");
const todos = readTodos();
todos.forEach(createTodo);
// works also as:
// (<HTMLInputElement>input).value <-- doesn't work with REACT
// btn.addEventListener("click", function () {});
//"?" after the element will notify Js that IF that element exist execute it
// btn.addEventListener("click", function () {
//   alert(input.value);
//   input.value = "";
// });
function readTodos() {
    const todosJSON = localStorage.getItem("todos");
    if (todosJSON === null)
        return [];
    return JSON.parse(todosJSON);
}
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}
function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
        text: input.value,
        status: false,
    };
    createTodo(newTodo);
    todos.push(newTodo);
    saveTodos();
    input.value = "";
}
function createTodo(todo) {
    const newLI = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.status;
    checkbox.addEventListener("change", function () {
        todo.status = checkbox.checked;
        saveTodos();
    });
    newLI.append(checkbox);
    newLI.append(todo.text);
    list.append(newLI);
}
form.addEventListener("submit", handleSubmit);
