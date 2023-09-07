// "const btn = document.getElementById("btn")!;" <-- quaranteed that it's not gonna be null
const btn = document.getElementById("btn")! as HTMLButtonElement;
const input = document.getElementById("todoinput")! as HTMLInputElement;
const form = document.querySelector("form")!;
const list = document.getElementById("todolist")!;

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
  const newToDoText = input.value;
  const newLI = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  newLI.append(checkbox);
  newLI.append(newToDoText);
  list.append(newLI);
  input.value = "";
}

form.addEventListener("submit", handleSubmit);
