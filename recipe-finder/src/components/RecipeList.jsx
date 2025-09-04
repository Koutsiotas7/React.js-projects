import { Link } from "react-router-dom";
function RecipeList({ recipes = []})
{
    if(!recipes || recipes.length === 0)
    {
        return (
            <p>No recipes are there. Keep looking!!!!</p>
        );
    }

    return (
        <ul>
            {recipes.map((meal) => (
                <li key={meal.idMeal}>
                    <h3>{meal.strMeal}</h3>
                    <img src={meal.strMealThumb} alt={meal.strMeal} width="150" />
                    <p><strong>Category:</strong> {meal.strCategory || "-"} </p>
                    <p><strong>Area:</strong> {meal.strArea || "-"} </p>
                    <Link to={`/recipe/${meal.idMeal}`}>View Details</Link>
                </li>
            ))}
        </ul>
    );
}

export default RecipeList;