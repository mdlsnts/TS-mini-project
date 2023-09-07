// "const btn = document.getElementById("btn")!;" <-- quaranteed that it's not gonna be null
interface Todo {
  text: string;
  status: boolean;
}

const btn = document.getElementById("btn")! as HTMLButtonElement;
const input = document.getElementById("todoinput")! as HTMLInputElement;
const form = document.querySelector("form")!;
const list = document.getElementById("todolist")!;
const todos: Todo[] = [];

// works also as:
// (<HTMLInputElement>input).value <-- doesn't work with REACT

// btn.addEventListener("click", function () {});
//"?" after the element will notify Js that IF that element exist execute it
// btn.addEventListener("click", function () {
//   alert(input.value);
//   input.value = "";
// });

function handleSubmit(e: SubmitEvent) {
  e.preventDefault();
  const newTodo: Todo = {
    text: input.value,
    status: false,
  };
  createTodo(newTodo);
  todos.push(newTodo);
  input.value = "";
}

function createTodo(todo: Todo) {
  const newLI = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  newLI.append(checkbox);
  newLI.append(todo.text);
  list.append(newLI);
}

form.addEventListener("submit", handleSubmit);
