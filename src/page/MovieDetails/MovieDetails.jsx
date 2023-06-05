import { Link, Outlet } from 'react-router-dom';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  return (
    <div>
      <div> Cart movie</div>
      <nav>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
