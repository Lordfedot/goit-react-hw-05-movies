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
      setReviews(response.results);
    };
    fetch();
  }, [movieId]);
  console.log(reviews);

  if (reviews === null) {
    return;
  }
  if (reviews.length === 0) {
    return <h1>There is no reviews</h1>;
  }

  if (reviews.length > 0) {
    return (
      <Box>
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h2>Author: {author}</h2>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      </Box>
    );
  }
};
