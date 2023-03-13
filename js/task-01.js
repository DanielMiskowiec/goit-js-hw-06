const itemElement = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemElement.length} `);
itemElement.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});