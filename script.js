let countId = 1;

function init() {
  const addButton = document.getElementById("add-button");
  addButton.addEventListener("click", addItemHandler);
}

function addItemHandler() {
  const todoInput = document.getElementById("todo-input");
  addTodoToDom(todoInput.value);
}

function addTodoToDom(value) {

  const list = document.getElementById("list");

  const container = document.createElement("div");
  container.classList.add("item");
  container.id = countId;

  const itemCheckbox = document.createElement("input");
  itemCheckbox.type = "checkbox";
  itemCheckbox.addEventListener('click', itemCompleted)

  const itemLabel = document.createElement("label");
  const labelText = document.createTextNode(value);
  itemLabel.appendChild(labelText);

  const itemDeleteBtn = document.createElement("button");
  const deleteText = document.createTextNode("X");
  itemDeleteBtn.append(deleteText);
  itemDeleteBtn.addEventListener('click', removeItem);
  itemDeleteBtn.id = countId;

  container.append(itemCheckbox);
  container.append(itemLabel);
  container.append(itemDeleteBtn);

  list.append(container);

  countId++;
}

function removeItem(event) {
  const items = document.querySelectorAll(".item");

  items.forEach(item => {
    if (event.target.id === item.id) {
      item.parentElement.removeChild(item);
    }
  })
}

function itemCompleted(event) {
  const isChecked = event.target.checked;

  const container = event.target.parentElement;
  const label = container.childNodes[1];
  console.log(label)

  if (isChecked)
    container.childNodes[1].style.textDecoration = "line-through";
    else 
    container.childNodes[1].style.textDecoration = "none";

}

init();