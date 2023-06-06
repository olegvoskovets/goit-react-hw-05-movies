import { useState } from 'react';
import css from './Movies.module.css';
import { getSearchMovie } from 'api/apiFetch';

const Movies = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);

  const handleShange = e => {
    setSearch(e.target.value);
  };
  console.log(search);
  const handleSubmit = e => {
    e.preventDefault();
    getSearchMovie(search).then(res => setData(res));
  };
  console.log('res = ', data);
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
    </div>
  );
};

export default Movies;
