import React from 'react';

const ReviewsItem = ({ review }) => {
  return (
    <div>
      <h2>{review.author}</h2>
      <p>{review.content}</p>
    </div>
  );
};

export default ReviewsItem;
