import Header from 'components/Header/Header';
import { Link, Outlet } from 'react-router-dom';

import(Outlet);

const SharedLayout = () => {
  return (
    <>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Outlet />
    </>
  );
};

export default SharedLayout;
