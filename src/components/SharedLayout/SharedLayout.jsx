import { Suspense } from 'react';
import Header from 'components/Header/Header';
import { NavLink, Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';
import { Loader } from 'components/Loader/Loader';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <nav className={css.navigation}>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${css.link} ${css.active}` : `${css.link}`
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${css.link} ${css.active}` : `${css.link}`
            }
            to="/movies"
          >
            Movies
          </NavLink>
        </nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
