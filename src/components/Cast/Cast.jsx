import { getMovieIdCredits } from 'api/apiFetch';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';

import CastCart from './CastCart';
import { Loader } from 'components/Loader/Loader';

const Cast = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  const [data, setData] = useState();

  useEffect(() => {
    setIsLoading(true);
    getMovieIdCredits(movieId)
      .then(result => setData(result))
      .catch(err => {
        console.log(err);
      })
      .finally(setIsLoading(false));
  }, [movieId]);

  return isLoading ? (
    <Loader />
  ) : (
    <ul className={css.ulCast}>
      {data?.cast.map(cast => (
        <li key={cast.id}>
          <CastCart cast={cast} />
        </li>
      ))}
    </ul>
  );
};

export default Cast;
