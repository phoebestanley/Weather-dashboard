import { useState } from "react";

function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      onSearch(input);
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-6">
      <input
        type="text"
        placeholder="Enter city"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="px-4 py-2 rounded-l-lg border-none outline-none text-gray-800"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-r-lg hover:bg-yellow-300"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
