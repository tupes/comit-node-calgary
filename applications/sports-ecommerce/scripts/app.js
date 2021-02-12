let isSignedIn = false;

const button = document.querySelector("#signup-button");

function handleClick(event) {
  event.preventDefault();
  console.log("Button clicked!");
  //   button.setAttribute("disabled", true);
  console.log(button.disabled);
  button.innerHTML = "Sign Out";
}

button.addEventListener("click", handleClick);
