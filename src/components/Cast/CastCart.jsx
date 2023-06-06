import css from './Cast.module.css';
import defaultImg from '../../data/img/no_cast.jpg';

const CastCart = ({ cast }) => {
  return (
    <div className={css.cast}>
      <img
        className={css.Img}
        src={
          cast.profile_path
            ? `https://image.tmdb.org/t/p/original/${cast.profile_path}`
            : defaultImg
        }
        alt={cast.name}
      />
      <h3>{cast.name}</h3>
      <span>Character: {cast.character}</span>
    </div>
  );
};

export default CastCart;
