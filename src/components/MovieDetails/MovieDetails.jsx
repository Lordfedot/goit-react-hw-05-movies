import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchById } from 'servises/Api';
import { Link, Outlet } from 'react-router-dom';
import Box from 'components/Box';
import { Image } from './MovieDetails.styled';

export const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    const fetch = async () => {
      const newMovie = await fetchById(movieId);
      setMovie(newMovie);
    };
    fetch();
  }, [movieId]);
  if (movie === null) {
    return;
  }

  const { vote_average, poster_path, title, original_title, overview, genres } =
    movie;
  const genreNames = genres.map(genre => genre.name);
  const score = 10 * vote_average.toFixed(1);
  return (
    <Box>
      <Box display="flex">
        <Link to="/movies" type="button">
          Go back
        </Link>
        <Image
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
        />
        <Box>
          <h2>{original_title}</h2>
          <p>User score: {score}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genreNames.join(', ')}</p>
        </Box>
      </Box>
      <Box>
        <h2>Additional Information</h2>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </Box>
    </Box>
  );
};
