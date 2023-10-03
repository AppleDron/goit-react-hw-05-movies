import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/themoviedbAPI';
import {
  MovieDetailsContainer,
  MovieDetailsPageContainer,
} from './MovieDetailsPage.styled';
import Notiflix from 'notiflix';

const MovieDetailsPage = () => {
  const [film, setFilm] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const BASE_URL = 'https://image.tmdb.org/t/p/w500/';
  const ref = useRef(backLinkHref);

  useEffect(() => {
    getMovieDetails(movieId)
      .then(({ data }) => {
        setFilm(data);
      })
      .catch(error => {
        Notiflix.Notify.failure(error);
      });
  }, [movieId]);

  if (!film) {
    return <div>Loading...</div>;
  }

  if (film)
    return (
      <MovieDetailsPageContainer>
        <Link to={ref.current}>Back</Link>
        <MovieDetailsContainer>
          <img
            srcSet={`${BASE_URL}${film.poster_path}`}
            width={250}
            alt="poster"
          />
          <div>
            <h1>{film.title}</h1>
            <p>User score: {film.vote_count}</p>
            <h2>Overview</h2>
            <p>{film.overview}</p>
            <h3>Genres</h3>
            {film.genres?.map(genre => (
              <span key={genre.id}>{genre.name} </span>
            ))}
          </div>
        </MovieDetailsContainer>
        <div>
          <h3>Additional information</h3>
          <ul>
            <li>
              <Link to={`/movies/${movieId}/cast`}>Cast</Link>
            </li>
            <li>
              <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
            </li>
          </ul>
        </div>
        <Suspense fallback={<div>Loading info...</div>}>
          <Outlet />
        </Suspense>
      </MovieDetailsPageContainer>
    );
};

export default MovieDetailsPage;
