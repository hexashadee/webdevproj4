import { useState } from "react";

export default function SearchBar({ setSelectedBreed }) {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSelectedBreed(query);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search breed ID..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit"><span>Search</span></button>
    </form>
  );
}
