
async function searchRecipes(query)
{
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const data = await response.json();
    return data.meals || []; // If empty returns nothing
}

export default searchRecipes;