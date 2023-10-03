import { useCustomContext } from 'components/Context/Context';
import FilmListItem from 'components/FilmListItem/FilmListItem';
import React, { useEffect } from 'react';
import { getTrendingFilms } from 'services/themoviedbAPI';

const HomePage = () => {
  const { films, setFilms } = useCustomContext(null);

  useEffect(() => {
    if (!films) {
      getTrendingFilms()
        .then(response => {
          setFilms(response.data.results);
        })
        .catch(error => {
          console.error('Error fetching trending films:', error);
        });
    }
  }, [films, setFilms]);

  return (
    <div>
      <ul>
        {films?.map(film => (
          <FilmListItem film={film} key={film.id} />
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
