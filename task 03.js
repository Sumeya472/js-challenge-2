const recipes = [
  { name: "pancakes", ingredients: "flour,milk,egg" },
  { name: "omelette", ingredients: "egg,cheese,milk" },
  { name: "toast", ingredients: "bread,butter" },
];
const format = ({ name, ingredients }) => {
  return `${name.toUpperCase()}:${ingredients.split(",").join(", ")}`;
};
const formattedrecipes = recipes.map(format);
for (const recipe of formattedrecipes) {
  console.log(recipe);
}
const totalingredients = recipes.reduce((sum, recipe) => {
  return sum + recipe.ingredients.split(",").length;
}, 0);

console.log(`Total ingredients used: ${totalingredients}`);

const eggRecipes = recipes.filter((recipe) => {
  return recipe.ingredients.includes("egg");
});

console.log(`Recipes with egg: ${eggRecipes.length}`);

const mostIngredients = recipes.reduce((best, current) => {
  return (
      current.ingredients.split(",").length > best.ingredients.split(",").length
    ) ?
      current
    : best;
});

const ingredientCount = mostIngredients.ingredients.split(",").length;

console.log(`Most ingredients: ${mostIngredients.name} (${ingredientCount})`);
