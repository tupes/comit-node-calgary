const items = document.querySelector(".items");

items.addEventListener("click", async (event) => {
  if (event.target.type === "submit") {
    console.log("Sending POST request");
    const response = await axios.post("http://localhost:3000/cart", {
      itemId: event.target.id,
    });
    console.log(response.data.cart);
  }
});
