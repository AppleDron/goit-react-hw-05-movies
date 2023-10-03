import ReviewsItem from 'components/ReviewsItem/ReviewsItem';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/themoviedbAPI';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!reviews.length) {
      getMovieReviews(movieId)
        .then(response => setReviews(response.data.results))
        .catch(error => {
          console.error('Error fetching movie reviews:', error);
        });
    }
  }, [movieId, reviews]);

  if (!reviews.length) return <p>We don't have any reviews for this movie</p>;

  return (
    <div>
      {reviews.map(review => (
        <ReviewsItem review={review} key={review.id} />
      ))}
    </div>
  );
};

export default Reviews;
