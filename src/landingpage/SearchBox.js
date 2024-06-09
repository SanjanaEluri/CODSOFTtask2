import React, { useState } from 'react';
import './searchbox.css'; // Add a separate CSS file for styling

const SearchBox = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);

    // Fetch suggestions based on newQuery
    fetchSuggestions(newQuery);
  };

  const fetchSuggestions = (query) => {
    // Reset suggestions if query is empty
    if (!query) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    // Mock API call to fetch suggestions
    // Replace this with your actual API call
    const suggestions = [
      'Mumbai, Maharashtra',
      'Madurai, Tamil Nadu',
      'Manali, Himachal Pradesh',
      'Mysore, Karnataka',
      'Mount Abu, Rajasthan',
      'charminar,Hyderabad',
      // Add more suggestions as needed
    ];

    // Filter suggestions based on the query
    const filteredSuggestions = suggestions.filter((suggestion) =>
      suggestion.toLowerCase().startsWith(query.toLowerCase())
    );

    setSuggestions(filteredSuggestions);
    setShowSuggestions(true); // Show suggestions after fetching
  };

  const handleFocus = () => {
    setShowSuggestions(true);
  };

  const handleBlur = () => {
    setShowSuggestions(false);
  };

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {showSuggestions && (
        <ul className="suggestions-list">
          {suggestions.map((suggestion, index) => (
            <li key={index} className="suggestion-item">
              <span className="suggestion-text">{suggestion}</span>
              <span className="suggestion-icon">&#10003;</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBox;