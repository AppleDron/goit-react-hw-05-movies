import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/themoviedbAPI';
import { ListOfActress } from './Cast.styled';
import ActorsItem from 'components/FilmListItem/ActorsItem/ActorsItem';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    if (!cast)
      getMovieCast(movieId)
        .then(response => setCast(response.data))
        .catch(error => {
          console.error('Error fetching trending films:', error);
        });
  }, [cast, movieId]);

  if (cast) {
    return (
      <div>
        <ListOfActress>
          {cast?.cast.map(actor => {
            return <ActorsItem actor={actor} key={actor.id} />;
          })}
        </ListOfActress>
      </div>
    );
  }
};

export default Cast;
