import {createContext} from 'react';
import {GenreContextType} from '../interface';

export const GenreContext = createContext<GenreContextType>({
  selectedGenre: [],
  setSelectedGenre: () => {},
});
