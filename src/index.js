import { createProject } from "./project.js";
import { createTodo } from "./listItem.js";

let projectList = [];
let projectId = 0;

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
  project.todos.push(todoItem);
  project.todoId++;
}

function removeTodo(todoId, project) {
  project.todos.splice(todoId, 1);
}
