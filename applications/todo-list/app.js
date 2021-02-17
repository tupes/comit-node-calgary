const addButton = document.querySelector("#add-button");
const textInput = document.querySelector("#input-description");
const activeList = document.querySelector("#active-list");
const completedList = document.querySelector("#completed-list");

addButton.addEventListener("click", () => {
  const description = textInput.value.trim();
  console.log(`Clicked Add To-Do button with a description of ${description}.`);

  const newItem = document.createElement("li");
  newItem.innerText = description;

  const completeButton = document.createElement("button");
  completeButton.innerText = "Complete";
  completeButton.id = 1;
  completeButton.addEventListener("click", function () {
    console.log(this.id);
    completedList.appendChild(this.parentElement);
  });

  newItem.appendChild(completeButton);

  activeList.appendChild(newItem);
});
