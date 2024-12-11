import "./styles.css";
import { createProject } from "./project.js";
import { createTodo } from "./listItem.js";
import { generateTodoCard } from "./todoItemUI.js";
import { contentGenerator } from "./projectContentUI.js";

let projectList = [];
let projectId = 0;
let todoContainer = document.getElementById("todo-container");
let contentContainer = document.getElementById("content");

addProject(projectId, "Home", "All to do's");

function addProject(id, title, description) {
  let projectNew = createProject(id, title, description);
  projectList.push(projectNew);
}

function removeProject(id) {
  projectList.splice(id, 1);
}

function addTodo(project, title, description, dueDate, priority, notes) {
  let todoItem = createTodo(
    project.todoId,
    title,
    description,
    dueDate,
    priority,
    notes
  );

  console.log(todoItem);
  let todoCard = generateTodoCard(
    todoItem.title,
    todoItem.description,
    todoItem.priority,
    todoItem.dueDate,
    todoItem.isChecked
  );

  todoContainer.appendChild(todoCard);
  project.todos.push(todoItem);
  project.todoId++;
}

function removeTodo(todoId, project) {
  project.todos.splice(todoId, 1);
}

// Event handling and UI control
let newTodoButton = document.getElementById("new-todo");
newTodoButton.addEventListener("click", () => {
  console.log("clicked");
  addTodo(
    projectList[0],
    "Home",
    "Test",
    "Description",
    "12 Dec",
    "Urgent",
    ""
  );
});

let projectButtons = document.querySelectorAll(".project-button");
projectButtons.forEach((element) => {
  element.addEventListener("click", () => {
    contentContainer.innerHTML = "";
    let contentObject = contentGenerator("HomeTest", "Descr Test");
    console.log(contentContainer);
    console.log(contentObject);
    contentContainer.appendChild(contentObject.headerBar);
    contentContainer.appendChild(contentObject.todoContainer);
  });
});

function changeContentDisplayed() {}
