import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'servises/Api';
import Box from 'components/Box';
import defaultImage from '../../images/defaultImage.png';
export const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    const fetch = async () => {
      const response = await fetchCast(movieId);
      setCast(response.cast);
    };
    fetch();
  });

  if (cast === null) {
    return;
  }

  return (
    <Box>
      <ul>
        {cast.map(({ character, name, profile_path, id }) => (
          <li key={id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : defaultImage
              }
              alt={name}
            />
            <p>Name: {name}</p>
            <p>Charecter: {character}</p>
          </li>
        ))}
      </ul>
    </Box>
  );
};
