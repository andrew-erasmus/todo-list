const contentGenerator = function () {
  // Create the content-header-bar div
  const headerBar = document.createElement("div");
  headerBar.id = "content-header-bar";

  // Create the h1 element
  const headerTitle = document.createElement("h1");
  headerTitle.id = "content-header-bar-title";
  headerTitle.textContent = "Home";

  // Append the h1 to the headerBar
  headerBar.appendChild(headerTitle);

  // Create the todo-container div
  const todoContainer = document.createElement("div");
  todoContainer.id = "todo-container";

  // Return both elements as an object
  return { headerBar, todoContainer };
};

export { contentGenerator };