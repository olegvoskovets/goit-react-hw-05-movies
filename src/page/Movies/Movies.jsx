import { useState } from 'react';
import css from './Movies.module.css';
import { getSearchMovie } from 'api/apiFetch';
import PopularMovies from 'components/PopularMovies/PopularMovies';

const Movies = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);

  const handleShange = e => {
    setSearch(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    getSearchMovie(search)
      .then(res => setData(res.results))
      .catch(error => console.log(error));
    setSearch('');
  };

  // useEffect(() => {
  //   getSearchMovie(search).then(res => setData(res));
  // }, [search]);

  console.log('DATA ', data.results);
  return (
    <div className={css.movies}>
      <form onSubmit={handleSubmit}>
        <input
          name="search"
          type="text"
          value={search}
          onChange={handleShange}
        />
        <button type="submit">Search</button>
      </form>
      {data.length > 0 && <PopularMovies moviews={data} />}
    </div>
  );
};

export default Movies;