const createTodo = function (
  idIn,
  titleIn,
  descrIn,
  dueIn,
  priorityIn,
  notesIn
) {
  let id = idIn;
  let title = titleIn;
  let description = descrIn;
  let dueDate = dueIn;
  let priority = priorityIn;
  let notes = notesIn;
  let isChecked = false;

  return {
    id,
    title,
    description,
    dueDate,
    priority,
    notes,
    isChecked,
  };
};

export { createTodo };
