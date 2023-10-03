import React, { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { searchMovie } from 'services/themoviedbAPI';
import Notiflix from 'notiflix';

const MoviesPage = () => {
  const [filmList, setFilmList] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';
  const [searchQuery, setSearchQuery] = useState(movieName ? movieName : '');

  useEffect(() => {
    if (searchQuery) {
      searchMovie(searchQuery)
        .then(response => {
          if (!searchQuery) {
            return;
          }
          setFilmList(response.data.results);
        })
        .catch(error => {
          Notiflix.Notify.failure(error);
        });
    }
  }, [searchQuery]);

  const handleSubmit = e => {
    e.preventDefault();
    let formValue = e.target.searchQuery.value;
    if (formValue === '') return;
    setSearchQuery(formValue);
    e.target.searchQuery.value = '';
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchQuery"
          onChange={e => setSearchParams({ query: e.target.value })}
        />
        <button type="submit">Search</button>
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
