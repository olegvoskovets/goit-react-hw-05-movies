import React, { useEffect, useState } from 'react';
import { getTrendingAll } from 'api/apiFetch';
import css from './Home.module.css';

import PopularMovies from 'components/PopularMovies/PopularMovies';
import { Loader } from 'components/Loader/Loader';

const Home = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTrendingAll()
      .then(res => setData(res.results))
      .catch(error => console.error(error))
      .finally(() => setIsLoading(false));
  }, []);
  //if (!data) return;

  return isLoading ? (
    <Loader />
  ) : (
    <div className={css.home}>
      <h3>Trending today</h3>
      <PopularMovies moviews={data} />
    </div>
  );
};

export default Home;
