import {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {getMovieDetails} from '../networkUtility';
import {MovieListTypes, SectionListDataType} from '../interface';
import {DefaultSectionT, SectionList} from 'react-native';
import {
  calculateScrollOffset,
  filterMoviesBasedOnSelectedGenre,
} from '../utils';
import {Default_List} from '../constants';
import {log} from 'console';

/**
 * Custom hook to handle infinte scrolling
 * @param selectedGenre prop to filter data according to user selected genre
 * @param sectionListRef SectionList ref to handle offset
 * @returns
 */
export const useMovieDetails = (
  selectedGenre: number[],
  sectionListRef: React.RefObject<SectionList<any, DefaultSectionT>>,
) => {
  const [movieDetails, setMovieDetails] = useState<
    SectionListDataType[] | undefined
  >(undefined);

  // Flag to check whether pagination is in progress or not
  const [isFetching, setIsFetching] = useState<boolean>(false);

  // Flag to maintain loading state of initial data
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // TO keep track of next year
  const currYearRef = useRef<number>(2012);

  // TO keep track of previous year
  const oldPageYear = useRef<number>(2012);

  // Flag to check whether top pagination state
  const isTopPaginating = useRef<boolean>(false);

  const scrollHandler = useCallback((yOffset: number) => {
    sectionListRef.current
      ?.getScrollResponder()
      ?.scrollTo({x: 0, y: yOffset, animated: false});
  }, []);

  /**
   * To fetch data based on year
   * @param year fetch data of provided year
   * @param isTopPage boolean to check where to append data
   */
  const fetchData = useCallback(
    (year: number, isTopPage?: boolean) => {
      getMovieDetails(year).then(movieList => {
        const currMovieData: SectionListDataType = {
          title: year.toString(),
          data: movieList.results.sort((a, b) => b.popularity - a.popularity),
        };

        setMovieDetails(prevMovieDetails => {
          if (!prevMovieDetails) {
            return [currMovieData];
          }
          if (isTopPage) {
            return [currMovieData, ...prevMovieDetails];
          }
          return [...prevMovieDetails, currMovieData];
        });
        setIsLoading(false);
        setIsFetching(false);
      });
    },
    [getMovieDetails, setMovieDetails, setIsLoading, setIsFetching],
  );

  /**
   * To fetch next page data
   */
  const fetchNextPage = useCallback(() => {
    currYearRef.current = currYearRef.current + 1;
    setIsFetching(true);
    fetchData(currYearRef.current);
  }, [setIsFetching, fetchData]);

  /**
   * To fetch previous page data
   */
  const fetchPreviousPage = useCallback(() => {
    oldPageYear.current = oldPageYear.current - 1;
    isTopPaginating.current = true;
    setIsFetching(true);
    fetchData(oldPageYear.current, true);
  }, [setIsFetching, fetchData]);

  // To be called onMount only to fetch Initial Data
  useEffect(() => {
    setIsLoading(true);
    fetchData(currYearRef.current);
  }, []);

  const filteredMovieDetail = useMemo<SectionListDataType[]>(() => {
    if (!movieDetails) {
      return [Default_List];
    }

    if (selectedGenre.length == 0) {
      if (isTopPaginating.current) {
        const offset = calculateScrollOffset(
          movieDetails.length ? movieDetails[0].data.length : 0,
        );
        scrollHandler(offset);
        isTopPaginating.current = false;
      }
      return movieDetails;
    }
    const filteredData = movieDetails.map(movieDetail => {
      return {
        ...movieDetail,
        data: filterMoviesBasedOnSelectedGenre(movieDetail, selectedGenre),
      };
    });
    if (isTopPaginating.current) {
      const offset = calculateScrollOffset(
        filteredData.length > 0 ? filteredData[0].data.length : 0,
      );
      scrollHandler(offset);
      isTopPaginating.current = false;
    }
    return filteredData;
  }, [selectedGenre, movieDetails]);

  return {
    sectionData: filteredMovieDetail,
    fetchNextPage,
    isFetching,
    fetchPreviousPage,
    isLoading,
  };
};
