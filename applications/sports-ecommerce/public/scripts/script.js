let items = [];
let category = "all";

const itemsList = document.querySelector(".items");

function generateListItem(item) {
  const listItem = document.createElement("li");
  const p = document.createElement("p");
  p.append(item.description);
  listItem.append(p);
  itemsList.append(listItem);
}

async function loadItems() {
  const response = await axios.get("http://localhost:3000/items");
  items = response.data;
  for (item of items) {
    generateListItem(item);
  }
}

loadItems();
