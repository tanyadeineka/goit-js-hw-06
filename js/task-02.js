const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulList = document.querySelector("#ingredients");

const liArray = ingredients.map((ingredient) => {
  const liItem = document.createElement("li");
  liItem.classList.add("item");
  liItem.textContent = ingredient;
  return liItem;
});
ulList.append(...liArray);