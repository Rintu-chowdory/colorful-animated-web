import { useState } from "react";

export default function SearchBar({ onSearch, loading }) {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(input);
  };
  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-wrapper">
        <span className="search-icon">⊘</span>
        <input
          type="text"
          className="search-input"
          placeholder="Search city..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={loading}
          autoFocus
        />
        <button type="submit" className="search-btn" disabled={loading || !input.trim()}>
          {loading ? "..." : "Search"}
        </button>
      </div>
    </form>
  );
}
