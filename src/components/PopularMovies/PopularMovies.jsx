import React from 'react';
import { Link } from 'react-router-dom';

const PopularMovies = ({ moviews, position = '' }) => {
  return (
    <ul>
      {moviews.map(item => (
        <li key={item.id}>
          <Link to={position ? `movies/${item.id}` : `${item.id}`}>
            {item.original_name ? item.original_name : item.original_title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PopularMovies;
