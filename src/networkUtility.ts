import {CategoriesQueryTypes, MovieListTypes} from './interface';

const API_KEY = '2dca580c2a14b55200e784d157207b4d';
const GENRE_URL = 'https://api.themoviedb.org/3/genre/movie';
const DISCOVER_URL = 'https://api.themoviedb.org/3/discover/movie';

export async function getGenresList(): Promise<CategoriesQueryTypes> {
  const data = await fetch(`${GENRE_URL}/list?language=en&api_key=${API_KEY}`);
  const genres = await data.json();
  return genres;
}

export async function getMovieDetails(
  year: number,
  pageNumber: number = 1,
  vote_count: number = 100,
): Promise<MovieListTypes> {
  const data = await fetch(
    `${DISCOVER_URL}?api_key=${API_KEY}&sort_by=popularity.desc&primary_release_year=${year}&page=${pageNumber}&vote_count.gte=${vote_count}`,
  );
  const movieList = await data.json();
  return movieList;
}
