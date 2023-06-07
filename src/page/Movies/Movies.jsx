import { useEffect, useState } from 'react';
import css from './Movies.module.css';
import { getSearchMovie } from 'api/apiFetch';
import PopularMovies from 'components/PopularMovies/PopularMovies';
import { useSearchParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';

const Movies = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const handleShange = e => {
    setSearch(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!search) return;
    setSearchParams({ search });
    setSearch('');
  };

  useEffect(() => {
    const result = searchParams.get('search');
    if (!result) return;

    setIsLoading(true);
    getSearchMovie(result)
      .then(res => setData(res.results))
      .finally(() => setIsLoading(false));
  }, [searchParams]);

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

      {isLoading ? (
        <Loader />
      ) : (
        data.length > 0 && <PopularMovies moviews={data} />
      )}
    </div>
  );
};

export default Movies;
