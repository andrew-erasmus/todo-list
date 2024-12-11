import "./styles.css";
import { createProject } from "./project.js";
import { createTodo } from "./listItem.js";
import { generateTodoCard } from "./todoItemUI.js";
import { contentGenerator } from "./projectContentUI.js";

let projectList = [];
let projectId = 0;
let contentContainer = document.getElementById("content");

addProject(projectId, "Home", "All to do's");
addTodo(projectList[0], "test", "test", "test", "test", "test");
addTodo(projectList[0], "test", "test", "test", "test", "test");
addTodo(projectList[0], "test", "test", "test", "test", "test");
addTodo(projectList[0], "test", "test", "test", "test", "test");
addTodo(projectList[0], "test", "test", "test", "test", "test");

addProject(projectId, "Test", "All to do's");
addTodo(projectList[1], "test", "test", "test", "test", "test");
addTodo(projectList[1], "test", "test", "test", "test", "test");
addTodo(projectList[1], "test", "test", "test", "test", "test");
addTodo(projectList[1], "test", "test", "test", "test", "test");
addTodo(projectList[1], "test", "test", "test", "test", "test");

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

  let todoCard = generateTodoCard(
    todoItem.title,
    todoItem.description,
    todoItem.priority,
    todoItem.dueDate,
    todoItem.isChecked
  );
  let todoContainer = document.getElementById("todo-container");
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
    contentContainer.appendChild(contentObject.headerBar);
    contentContainer.appendChild(contentObject.todoContainer);

    let id = element.className.split(" ")[1];
    console.log(id);
    changeContentDisplayed(id);
  });
});

function changeContentDisplayed(id) {
  projectList[id].todos.forEach((todo) => {
    let todoCard = generateTodoCard(
      todo.title,
      todo.description,
      todo.priority,
      todo.dueDate,
      todo.isChecked
    );
    let todoContainer = document.getElementById("todo-container");
    todoContainer.appendChild(todoCard);
  });
}
