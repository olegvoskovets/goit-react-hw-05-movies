import css from './Cast.module.css';

const CastCart = ({ cast }) => {
  return (
    <div className={css.cast}>
      <img
        className={css.Img}
        src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`}
        alt={cast.name}
      />
      <h3>{cast.name}</h3>
      <span>Character: {cast.character}</span>
    </div>
  );
};

export default CastCart;
