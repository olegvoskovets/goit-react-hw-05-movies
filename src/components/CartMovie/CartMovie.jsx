import css from './CartMovie.module.css';

const CartMovie = ({ cart }) => {
  console.log('CART:  ', cart);
  return (
    <div className={css.cart}>
      <img
        className={css.Img}
        src={`https://image.tmdb.org/t/p/original/${cart.backdrop_path}`}
        alt={cart.original_title}
      />
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
  );
};

export default CartMovie;
