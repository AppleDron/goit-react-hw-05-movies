import React, { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { searchMovie } from 'services/themoviedbAPI';

const MoviesPage = () => {
  const [filmList, setFilmList] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query');
    if (query) {
      searchMovie(query)
        .then(response => {
          setFilmList(response.data.results);
        })
        .catch(error => {
          console.error('Error fetching movie results:', error);
        });
    }
  }, [searchParams]);

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchQuery"
          onChange={e => setSearchParams({ query: e.target.value })}
        />
      </form>

      <ul>
        {filmList?.map(film => (
          <li key={film.id}>
            <Link to={`/movies/${film.id}`} state={{ from: location }}>
              {film.original_title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesPage;
