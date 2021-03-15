const items = document.querySelector(".items");

items.addEventListener("click", async (event) => {
  console.log(event.target.id);
  const result = await axios.post("http://localhost:3000/cart", {
    itemId: event.target.id,
  });
  console.log(result.data.itemCount);
});
