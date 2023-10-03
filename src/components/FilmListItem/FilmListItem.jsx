import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const FilmListItem = ({ film }) => {
  const location = useLocation();

  return (
    <li>
      <Link to={`/movies/${film.id}`} state={location}>
        {film.title}
      </Link>
    </li>
  );
};

export default FilmListItem;
