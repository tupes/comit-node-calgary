async function loadItems() {
  const response = await axios.get("http://localhost:3000/items");
  const items = response.data;
  console.log(items);
}

loadItems();
