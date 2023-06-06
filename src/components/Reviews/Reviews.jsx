import { getMovieIdReviews } from 'api/apiFetch';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Review from './Review';

const Reviews = () => {
  const { movieId } = useParams();
  const [data, setData] = useState();
  useEffect(() => {
    getMovieIdReviews(movieId).then(res => setData(res));
  }, [movieId]);

  return (
    <>
      {!data?.results.length ? (
        <p>We don't have ani reviews for this movie</p>
      ) : (
        data.results.map(review => <Review key={review.id} review={review} />)
      )}
    </>
  );
};

export default Reviews;

//
