import Header from 'components/Header/Header';
import { Link, Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <nav className={css.navigation}>
          <Link className={css.link} to="/">
            Home
          </Link>
          <Link className={css.link} to="/movies">
            Movies
          </Link>
        </nav>
      </Header>
      <Outlet />
    </>
  );
};

export default SharedLayout;
