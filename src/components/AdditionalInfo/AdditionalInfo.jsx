import { Link } from 'react-router-dom';
import css from './AdditionalInfo.module.css';

const AdditionalInfo = () => {
  return (
    <div className={css.additionalInfo}>
      <p>Additional information</p>
      <nav className={css.link}>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </nav>
    </div>
  );
};
//state={{ from: location.state.from?.search }}

export default AdditionalInfo;
