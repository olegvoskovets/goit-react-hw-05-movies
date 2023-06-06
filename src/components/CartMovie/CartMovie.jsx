import css from './CartMovie.module.css';
import defaultImg from '../../data/img/no_img.png';

const CartMovie = ({ cart }) => {
  // const [isLoading, setIsLoading] = useState(false);
  // useEffect(() => {
  //   setIsLoading(true);
  //   if (cart.backdrop_path) {
  //     setIsLoading(false);
  //   }
  // }, [cart.backdrop_path]);

  return (
    <div className={css.cart}>
      {
        <img
          className={css.Img}
          src={
            cart.backdrop_path
              ? `https://image.tmdb.org/t/p/original/${cart.backdrop_path}`
              : defaultImg
          }
          alt={cart.original_title}
        />
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
