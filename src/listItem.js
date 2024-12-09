const todo = function (titleIn, descrIn, dueIn, priorityIn, notesIn) {
  let title = titleIn;
  let description = descrIn;
  let dueDate = dueIn;
  let priority = priorityIn;
  let notes = notesIn;
  let isChecked = false;

  return {
    title,
    description,
    dueDate,
    priority,
    notes,
    isChecked,
  };
};

export { todo };
