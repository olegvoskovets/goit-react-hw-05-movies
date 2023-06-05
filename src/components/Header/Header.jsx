import css from './Header.module.css';

const Header = ({ children }) => {
  return <div className={css.header}>{children}</div>;
};

export default Header;
