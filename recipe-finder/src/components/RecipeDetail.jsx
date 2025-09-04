import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function RecipeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    async function fetchRecipe() {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const data = await res.json();
      setRecipe(data.meals ? data.meals[0] : null);
    }
    fetchRecipe();
  }, [id]);

  if (!recipe) {
    return <p>Waiting for a recipe.......</p>;
  }

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if (ingredient) {
      ingredients.push(`${ingredient} - ${measure}`);
    }
  }

  return (
    <div>
      <h2>{recipe.strMeal}</h2>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} width="300" />
      <p><strong>Category:</strong> {recipe.strCategory}</p>
      <p><strong>Area:</strong> {recipe.strArea}</p>

      <h3>Ingredients</h3>
      <ul>
        {ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h3>Instructions</h3>
      <p>{recipe.strInstructions}</p>

      <button onClick={() => navigate("/")}>⬅ Back to Search</button>
    </div>
  );
}

export default RecipeDetail;
