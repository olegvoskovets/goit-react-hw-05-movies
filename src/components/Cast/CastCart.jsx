import css from './Cast.module.css';

const CastCart = ({ cast }) => {
  return (
    <div className={css.cast}>
      <img className={css.Img} src={css.profile_path} alt={cast.name} />
      <h3>{cast.name}</h3>
      <span>Character: {cast.character}</span>
    </div>
  );
};

export default CastCart;
