import {useEffect, useState} from 'react';
import {CategoriesType} from '../interface';
import {getGenresList} from '../networkUtility';

export const useGenreData = () => {
  const [genres, setGenres] = useState<CategoriesType>([]);

  useEffect(() => {
    getGenresList().then(genres => setGenres(genres.genres));
  }, []);
  return genres;
};
