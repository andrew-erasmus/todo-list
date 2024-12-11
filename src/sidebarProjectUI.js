let createNewProject = function (projectName) {
  // Create the anchor element
  const anchor = document.createElement("a");
  anchor.className = "project-button";
  anchor.href = ""; // Set the desired href value

  // Create the h4 element
  const heading = document.createElement("h4");
  heading.textContent = projectName;

  // Append the heading to the anchor
  anchor.appendChild(heading);

  return anchor;
};
