import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const PopularMovies = ({ moviews }) => {
  const location = useLocation();

  return (
    <ul>
      {moviews.map(item => (
        <li key={item.id}>
          <Link to={`/movies/${item.id}`} state={{ from: location }}>
            {item.original_name ? item.original_name : item.original_title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PopularMovies;
