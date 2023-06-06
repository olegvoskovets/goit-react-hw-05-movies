import React, { useEffect, useState } from 'react';
import { getTrendingAll } from 'api/apiFetch';
import { Link } from 'react-router-dom';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getTrendingAll()
      .then(res => setData(res.results))
      .catch(error => console.error(error));
  }, []);

  return (
    <ul>
      {data.map(item => (
        <li key={item.id}>
          <Link to={`movies/${item.id}`}>
            {item.original_name ? item.original_name : item.original_title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Home;
