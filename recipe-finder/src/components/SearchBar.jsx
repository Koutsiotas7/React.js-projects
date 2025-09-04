import { useState } from "react";

function SearchBar({ onSearch })
{
    const [query, setQuery] = useState("");

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        if(query.trim())
        {
            onSearch(query);
        }
    
    };

return (
    <form onSubmit={handleSubmit}>
        <input
        type="text"
        value={query}
        placeholder="Search for a recipe..."
        onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search Recipe</button>
    </form>
      );   
}

export default SearchBar;