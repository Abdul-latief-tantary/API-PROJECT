import React from 'react';
import useFetch from './useFetch';
import './Photos.css'; 

function Photos() {
  const { data, loading, error } = useFetch('https://api.escuelajs.co/api/v1/products');

  if (loading) {
    return <div className="loading">Loading...</div>; // Placeholder UI while data is being fetched
  }

  if (error) {
    return <div className="error">Error: {error.message}</div>; // Display error message if any
  }

  return (
    <div className="photos">
      <h1>Photos and Names</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <img src={item.images[0]} alt={item.title} />
            <p>{item.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Photos ;
