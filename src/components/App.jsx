import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
// import { Home } from './Home/Home';
// import { Movies } from './Movies/Movies';
// import { MovieDetails } from './MovieDetails/MovieDetails';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import { lazy } from 'react';

const Home = lazy(() => import('./Home/Home'))
const Movies = lazy(() => import('./Movies/Movies'))
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'))
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="movies" element={<Movies />}></Route>
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
};
