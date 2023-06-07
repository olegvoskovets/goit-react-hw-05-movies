import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
//import Home from 'page/Home/Home';

//import Movies from 'page/Movies/Movies';
//import MovieDetails from 'page/MovieDetails/MovieDetails';
//import Cast from './Cast/Cast';
//import Reviews from './Reviews/Reviews';
//import NoPage from './NoPage/NoPage';

const Home = lazy(() => import('../page/Home/Home'));
const Movies = lazy(() => import('../page/Movies/Movies'));
const MovieDetails = lazy(() => import('../page/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const NoPage = lazy(() => import('./NoPage/NoPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
};
