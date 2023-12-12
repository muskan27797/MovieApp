export interface CategoriesQueryTypes {
  genres: {
    id: number;
    name: string;
  }[];
}

export type CategoriesType = CategoriesQueryTypes['genres'];

export interface MovieDetails {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MovieListTypes {
  page: number;
  results: MovieDetails[];
  total_pages: number;
  total_results: number;
}

export interface SectionListDataType {
  title: string;
  data: MovieDetails[];
}

export interface GenreContextType {
  selectedGenre: number[];
  setSelectedGenre: React.Dispatch<React.SetStateAction<number[]>>;
}
