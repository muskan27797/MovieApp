import React, {useCallback, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SectionList,
  SectionListRenderItemInfo,
  ActivityIndicator,
  NativeSyntheticEvent,
  NativeScrollEvent,
  SectionListData,
} from 'react-native';
import {Card} from './Card';
import {MovieYear} from './MovieYear';
import {useMovieDetails} from '../hooks/useMovieDetails';
import {CategoriesType, MovieDetails, SectionListDataType} from '../interface';
import {Constants} from '../constants';
import {fetchGenreName} from '../utils';

interface MovieListProps {
  selectedGenre: number[];
  genres: CategoriesType;
}

const LoadingComponent = () => {
  return (
    <View style={styles.loaderContainer}>
      <Text style={styles.loader}>{Constants.LOADING}</Text>
    </View>
  );
};

export const MovieList = ({selectedGenre, genres}: MovieListProps) => {
  const sectionListRef = useRef<SectionList>(null);

  const {isLoading, sectionData, fetchNextPage, fetchPreviousPage, isFetching} =
    useMovieDetails(selectedGenre, sectionListRef);

  const renderItemHandler = useCallback(
    ({item}: SectionListRenderItemInfo<MovieDetails, SectionListDataType>) => {
      const movieGenreName = fetchGenreName(genres, item);
      return (
        <Card
          key={item.id}
          movieImage={item.poster_path}
          movieTitle={item.title}
          movieGenreName={movieGenreName}
          movieDescription={item.overview}
        />
      );
    },
    [genres],
  );

  const onEndReached = useCallback(() => {
    if (!isFetching) {
      fetchNextPage();
    }
  }, [isFetching, fetchNextPage]);

  const loadingComponent = useCallback(() => {
    if (isFetching) {
      return <LoadingComponent />;
    } else {
      return null;
    }
  }, [isFetching]);

  const scrollingOffsetHandler = useCallback(
    (e: NativeSyntheticEvent<NativeScrollEvent>) => {
      if (e.nativeEvent.contentOffset.y === 0 && !isFetching) {
        fetchPreviousPage();
      }
    },
    [isFetching, fetchPreviousPage],
  );

  const sectionHeaderHandler = useCallback(
    ({
      section,
    }: {
      section: SectionListData<MovieDetails, SectionListDataType>;
    }) => <MovieYear year={section.title} />,
    [],
  );

  //Loading State
  if (isLoading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }

  // Error State
  if (!sectionData) {
    return null;
  }

  return (
    <View style={styles.cardView}>
      <SectionList
        sections={sectionData}
        ref={sectionListRef as any}
        getItemLayout={(_, index) => ({
          length: Constants.MOVIE_CARD_HEIGHT + Constants.MOVIE_CARD_MARGIN,
          offset:
            index * Constants.MOVIE_CARD_HEIGHT + Constants.MOVIE_CARD_MARGIN,
          index: index,
        })}
        keyExtractor={item => item.id.toString()}
        onEndReached={onEndReached}
        renderItem={renderItemHandler}
        renderSectionHeader={sectionHeaderHandler}
        showsVerticalScrollIndicator={false}
        onScroll={scrollingOffsetHandler}
        ListFooterComponent={loadingComponent}
        ListHeaderComponent={loadingComponent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    marginHorizontal: 10,
  },

  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  loaderContainer: {
    height: 20,
  },
  loader: {
    textAlign: 'center',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
  },
});
