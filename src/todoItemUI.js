let generateTodoCard = function (
  title,
  description,
  priority,
  dueDate,
  isChecked
) {
  // Create the main container div
  const todoCard = document.createElement("div");
  todoCard.className = "todo-card";

  // Checkbox input
  const checkbox = document.createElement("input");
  checkbox.className = "completed";
  checkbox.type = "checkbox";
  todoCard.appendChild(checkbox);

  // Title
  const titleElement = document.createElement("h3");
  titleElement.className = "todo-title";
  titleElement.textContent = title;
  todoCard.appendChild(titleElement);

  // Description
  const descriptionElement = document.createElement("div");
  descriptionElement.className = "todo-description";
  descriptionElement.textContent = description;
  todoCard.appendChild(descriptionElement);

  // Priority
  const priorityElement = document.createElement("div");
  priorityElement.className = "todo-priority";
  priorityElement.textContent = priority;
  todoCard.appendChild(priorityElement);

  // Due Date
  const dueDateElement = document.createElement("div");
  dueDateElement.className = "todo-due-date";
  dueDateElement.textContent = dueDate;
  todoCard.appendChild(dueDateElement);

  // Edit Button
  const editButton = document.createElement("div");
  editButton.className = "todo-edit-button";
  editButton.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="20px" height="20px">
        <path d="M 22.828125 3 C 22.316375 3 21.804562 3.1954375 21.414062 3.5859375 L 19 6 L 24 11 L 26.414062 8.5859375 C 27.195062 7.8049375 27.195062 6.5388125 26.414062 5.7578125 L 24.242188 3.5859375 C 23.851688 3.1954375 23.339875 3 22.828125 3 z M 17 8 L 5.2597656 19.740234 C 5.2597656 19.740234 6.1775313 19.658 6.5195312 20 C 6.8615312 20.342 6.58 22.58 7 23 C 7.42 23.42 9.6438906 23.124359 9.9628906 23.443359 C 10.281891 23.762359 10.259766 24.740234 10.259766 24.740234 L 22 13 L 17 8 z M 4 23 L 3.0566406 25.671875 A 1 1 0 0 0 3 26 A 1 1 0 0 0 4 27 A 1 1 0 0 0 4.328125 26.943359 A 1 1 0 0 0 4.3378906 26.939453 L 4.3632812 26.931641 A 1 1 0 0 0 4.3691406 26.927734 L 7 26 L 5.5 24.5 L 4 23 z"/>
      </svg>`;
  todoCard.appendChild(editButton);

  // Delete Button
  const deleteButton = document.createElement("div");
  deleteButton.className = "todo-delete-button";
  deleteButton.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="25px" height="25px">
        <path d="M 28 11 C 26.895 11 26 11.895 26 13 L 26 14 L 13 14 C 11.896 14 11 14.896 11 16 C 11 17.104 11.896 18 13 18 L 14.160156 18 L 16.701172 48.498047 C 16.957172 51.583047 19.585641 54 22.681641 54 L 41.318359 54 C 44.414359 54 47.041828 51.583047 47.298828 48.498047 L 49.839844 18 L 51 18 C 52.104 18 53 17.104 53 16 C 53 14.896 52.104 14 51 14 L 38 14 L 38 13 C 38 11.895 37.105 11 36 11 L 28 11 z M 18.173828 18 L 45.828125 18 L 43.3125 48.166016 C 43.2265 49.194016 42.352313 50 41.320312 50 L 22.681641 50 C 21.648641 50 20.7725 49.194016 20.6875 48.166016 L 18.173828 18 z"/>
      </svg>`;
  todoCard.appendChild(deleteButton);

  return todoCard;
};

export { generateTodoCard };
