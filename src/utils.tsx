import {Constants} from './constants';
import {CategoriesType, MovieDetails, SectionListDataType} from './interface';

export const calculateScrollOffset = (movieDataLength: number) => {
  const TOTAL_NUMBER_OF_ROWS = movieDataLength;
  const CARD_LENGTH = TOTAL_NUMBER_OF_ROWS * Constants.MOVIE_CARD_HEIGHT;
  const MOVIE_YEAR_HEIGHT = Constants.MOVIE_YEAR_HEIGHT;
  const YEAR_MARGINS =
    Constants.MOVIE_CARD_MARGIN * TOTAL_NUMBER_OF_ROWS + MOVIE_YEAR_HEIGHT;
  const OFFSET = 20;
  const total = CARD_LENGTH + YEAR_MARGINS - OFFSET;
  return total;
};

export const toggleSelectedGenre = (
  selectedGenre: number,
  genres: number[],
) => {
  if (genres.includes(selectedGenre)) {
    return genres.filter(genre => genre !== selectedGenre);
  } else {
    return [...genres, selectedGenre];
  }
};

export const fetchGenreName = (genres: CategoriesType, item: MovieDetails) => {
  return genres
    .filter(genre => {
      if (item.genre_ids.includes(genre.id)) return true;
      return false;
    })
    .map(genre => genre.name);
};

export const filterMoviesBasedOnSelectedGenre = (
  movieDetail: SectionListDataType,
  selectedGenre: number[],
) => {
  return movieDetail.data.filter(movie => {
    return movie.genre_ids.some(id => selectedGenre.includes(id));
  });
};

export const optimizeCardLoad = (
  prevMovieGenreName: string[],
  nextMovieGenreName: string[],
) => {
  if (prevMovieGenreName.length !== nextMovieGenreName.length) {
    return false;
  }

  for (let i = 0; i < prevMovieGenreName.length; i++) {
    if (prevMovieGenreName[i] !== nextMovieGenreName[i]) {
      return false;
    }
  }
  return true;
};

export const filterMoviesBasedOnSearchedValue = (
  movieDetail: SectionListDataType,
  userSearch: string,
) => {
  return movieDetail.data.filter(movie => {
    return movie.title.includes(userSearch);
  });
};
