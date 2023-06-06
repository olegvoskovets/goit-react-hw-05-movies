import { Link } from 'react-router-dom';
import css from './AdditionalInfo.module.css';

const AdditionalInfo = () => {
  return (
    <div className={css.additionalInfo}>
      <p>Additional information</p>
      <nav>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </nav>
    </div>
  );
};

export default AdditionalInfo;
