const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientList = document.querySelector('#ingredients');

const ingredientElements = ingredients.map(ingredient => {
  const li = document.createElement('li');
  li.textContent = ingredient;
  li.classList.add('item');
  return li;
});

ingredientList.append(...ingredientElements);

console.log(ingredientList.innerHTML);