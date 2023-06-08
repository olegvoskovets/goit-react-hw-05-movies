import PropTypes from 'prop-types';
import defaultImg from '../../data/img/no_img.png';
import { Link, useLocation } from 'react-router-dom';
import { useRef } from 'react';
import css from './CartMovie.module.css';

const CartMovie = ({ cart }) => {
  const location = useLocation();

  const { current } = useRef(location.state?.from);

  return (
    <div className={css.cart}>
      {
        <div>
          <Link to={current ?? '/'}> Повернутись</Link>
          <img
            className={css.Img}
            src={
              cart.backdrop_path
                ? `https://image.tmdb.org/t/p/original/${cart.backdrop_path}`
                : defaultImg
            }
            alt={cart.original_title}
          />
        </div>
      }

      <div className={css.cartInfo}>
        <h3>{cart.original_title}</h3>

        <div>
          <h4>Overview</h4>
          <p>{cart.overview}</p>
        </div>
        <div>
          <h4>Genres</h4>
          <ul className={css.genres}>
            {cart.genres?.map((genre, ind) => (
              <span key={ind}>{genre.name}</span>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CartMovie;

CartMovie.propTypes = {
  cart: PropTypes.shape({
    backdrop_path: PropTypes.string,
    original_title: PropTypes.string,
    overview: PropTypes.string,
    genres: PropTypes.array,
  }),
};
