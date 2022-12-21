import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'servises/Api';
import Box from 'components/Box';
export const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    const fetch = async () => {
      const response = await fetchReviews(movieId);
    lo
      setCast(response.cast);
    };
    fetch();
  });

  if (cast === null) {
    return;
  }

  return (
    <Box>
      
    </Box>
  );
};
