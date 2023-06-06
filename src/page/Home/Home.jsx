import React, { useEffect, useState } from 'react';
import { getTrendingAll } from 'api/apiFetch';

import PopularMovies from 'components/PopularMovies/PopularMovies';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getTrendingAll()
      .then(res => setData(res.results))
      .catch(error => console.error(error));
  }, []);

  return <PopularMovies moviews={data} position={1} />;
};

export default Home;
