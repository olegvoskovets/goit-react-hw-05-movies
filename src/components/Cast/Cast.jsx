import { getMovieIdCredits } from 'api/apiFetch';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';
import CastCart from './CastCart';

const Cast = () => {
  const { movieId } = useParams();
  console.log('movieId', movieId);
  const [data, setData] = useState();

  useEffect(() => {
    getMovieIdCredits(movieId)
      .then(result => setData(result))
      .catch(err => {
        console.log(err);
      });
  }, [movieId]);

  return (
    <ul>
      {data?.cast.map(cast => (
        <li key={cast.id}>
          <CastCart cast={cast} />
        </li>
      ))}
    </ul>
  );
};

export default Cast;
