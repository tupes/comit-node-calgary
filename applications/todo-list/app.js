const addButton = document.querySelector("#add-button");
const form = document.querySelector("form");
const textInput = document.querySelector("#input-description");
const errorOutput = document.querySelector("#error-output");
const activeList = document.querySelector("#active-list");
const completedList = document.querySelector("#completed-list");

form.addEventListener("submit", (event) => {
  event.preventDefault();
});

addButton.addEventListener("click", () => {
  const description = textInput.value.trim();
  if (!description) {
    errorOutput.innerText = "Please provide a description of the to-do item.";
    return;
  }

  const newItem = document.createElement("li");
  newItem.innerText = description;

  textInput.value = "";
  errorOutput.innerText = "";

  const completeButton = document.createElement("button");
  completeButton.innerText = "Complete";
  completeButton.addEventListener("click", function () {
    completedList.appendChild(this.parentElement);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", function () {
    this.parentElement.remove();
  });

  newItem.appendChild(completeButton);
  newItem.appendChild(deleteButton);

  activeList.appendChild(newItem);
});
