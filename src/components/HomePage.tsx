import React, {useState, useMemo} from 'react';
import {View, StyleSheet} from 'react-native';
import {Header} from './Header';
import {Categories} from './Categories';
import {colors} from '../colors';
import {MovieList} from './MovieList';
import {GenreContext} from './GenreContext';
import {useGenreData} from '../hooks/useGenreData';

/**
 * Initial Route
 */
export const HomePage = () => {
  // genres state to store all possible genre filters available
  const genres = useGenreData();

  // selectedGenre state to store current selected genre Ids
  const [selectedGenre, setSelectedGenre] = useState<number[]>([]);

  const genreDataValue = useMemo(
    () => ({selectedGenre, setSelectedGenre}),
    [selectedGenre, setSelectedGenre],
  );
  return (
    <View style={styles.root}>
      <View style={styles.card}>
        <Header />
        <GenreContext.Provider value={genreDataValue}>
          <Categories categories={genres} />
        </GenreContext.Provider>
      </View>
      <MovieList genres={genres} selectedGenre={selectedGenre} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  card: {
    backgroundColor: colors.blue,
  },
});
