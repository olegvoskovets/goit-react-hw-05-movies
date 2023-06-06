import { Outlet, useParams } from 'react-router-dom';
import css from './MovieDetails.module.css';
import { useEffect, useState } from 'react';
import { getMovieId } from 'api/apiFetch';
import CartMovie from 'components/CartMovie/CartMovie';
import AdditionalInfo from 'components/AdditionalInfo/AdditionalInfo';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    getMovieId(movieId)
      .then(res => setData(res))
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <div className={css.movieDetals}>
      <CartMovie cart={data} />
      <AdditionalInfo />

      <Outlet />
    </div>
  );
};

export default MovieDetails;
