import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Searchbar } from './Searchbar';

import { fetchMovies } from 'servises/Api';
 const Movies = () => {
   const [searchParams] = useSearchParams();
  const params = searchParams.get('filter') ?? ''
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetch = async () => {
      if (params === '') {
        setMovies([])
        return;
      }
      const response = await fetchMovies(params);
      const serchMovies = response.results;
      setMovies(serchMovies);
    };
    fetch();
  }, [params]);

  if (movies === null) {
    return;
  }

  return (
    <>
      <Searchbar/>
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
};

export default Movies
