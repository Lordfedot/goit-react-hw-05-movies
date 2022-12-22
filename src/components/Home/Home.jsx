import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { fetchTrendingMovies } from 'servises/Api';

const Home = () => {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const data = await fetchTrendingMovies();
      setFilms(data.results)
      return data.results;
    };
    fetch()
  },[]);

  return (
    <>
      <h1>Trending Movies</h1>
      <ul>
        {films.map(({title,id}) => <Link to={`movies/${id}`} key={id}><p>{title}</p></Link>)}
      </ul>
    </>
  );
};

export default Home
