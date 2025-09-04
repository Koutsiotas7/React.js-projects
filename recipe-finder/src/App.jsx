import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";
import RecipeDetail from "./components/RecipeDetail";
import searchRecipes from "./api.js";
import "./App.css";

function App() {
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async (query) => {
    const results = await searchRecipes(query);
    setRecipes(results);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>🍲 Recipe Finder</h1>
              <SearchBar onSearch={handleSearch} />
              <RecipeList recipes={recipes} />
            </>
          }
        />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
