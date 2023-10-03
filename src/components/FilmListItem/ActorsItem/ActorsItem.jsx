import React from 'react';

const ActorsItem = ({ actor }) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/w500';
  const defaultImg =
    'https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg';

  return (
    <li key={actor.id}>
      <img
        src={
          actor.profile_path ? `${BASE_URL}${actor.profile_path}` : defaultImg
        }
        alt={actor.character}
        width="250"
      />
      <h3>{actor.character}</h3>
    </li>
  );
};

export default ActorsItem;
