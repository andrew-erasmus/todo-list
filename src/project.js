let createProject = function (idIn, titleIn, descrIn) {
  let id = idIn;
  let title = titleIn;
  let description = descrIn;
  let todos = [];
  let todoId = 0;

  return { id, title, description, todos, todoId };
};

export { createProject };
