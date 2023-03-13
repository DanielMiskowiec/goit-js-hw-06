const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

for (let i = 0; i < ingredients.length; i+= 1) {
  const name = ingredients[i];
  const itemElement = document.createElement("li");
  itemElement.classList.add("item");
  itemElement.textContent = `${ name }`;

  const listElement = document.getElementById("ingredients");
  listElement.append(itemElement);

}



