// Search.js
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function Search() {
  const [results, setResults] = useState([]);
  const { search } = useLocation();
  const query = new URLSearchParams(search).get('query');

  useEffect(() => {
    // Here you would typically fetch search results based on the query
    // For now, we'll just log the query
    console.log('Searching for:', query);
    // Implement your search logic here
    // setResults(fetchedResults);
  }, [query]);

  return (
    <div>
      <h2>Search Results for "{query}"</h2>
      {/* Display results here */}
      {results.map((result) => (
        <div key={result.id}>{/* Display result */}</div>
      ))}
    </div>
  );
}

export default Search;