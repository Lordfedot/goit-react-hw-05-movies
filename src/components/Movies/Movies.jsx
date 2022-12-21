import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Searchbar } from './Searchbar';
import { fetchMovies } from 'servises/Api';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const fetch = async () => {
      if (input === '') {
        return;
      }
      const response = await fetchMovies(input);
      const serchMovies = response.results;
      setMovies(serchMovies);
    };
    fetch();
  }, [input]);

  const handleSubmit = value => {
    setInput(value);
  };

  if (movies === []) {
    return;
  }

  return (
    <>
      <Searchbar onSubmit={handleSubmit} />
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
      <Outlet/>
    </>
  );
};
