import css from './CartMovie.module.css';

const CartMovie = ({ cart }) => {
  console.log(cart);
  return (
    <div className={css.cart}>
      <img
        className={css.Img}
        src={cart.backdrop_path}
        alt={cart.original_title}
      />
      <h3>{cart.original_title}</h3>

      <div>
        <h4>Overview</h4>
        <p>{cart.overview}</p>
      </div>
      <div>
        <h4>Genres</h4>
        {cart.genres?.map((genre, ind) => (
          <span key={ind}>{genre.name}</span>
        ))}
      </div>
    </div>
  );
};

export default CartMovie;
