import React, {memo, useContext} from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';
import {colors} from '../colors';
import {GenreContext} from './GenreContext';
import {toggleSelectedGenre} from '../utils';

interface CategoryProps {
  categoryId: number;
  categoryName: string;
  isGenreSelected: boolean;
}

export const Category = memo(
  ({categoryId, categoryName, isGenreSelected}: CategoryProps) => {
    const {setSelectedGenre} = useContext(GenreContext);
    const filterMovieOnBasisOfGenre = () => {
      setSelectedGenre(prevGenre => toggleSelectedGenre(categoryId, prevGenre));
    };

    return (
      <Pressable
        style={styles.categoryContainer}
        onPress={filterMovieOnBasisOfGenre}>
        <Text
          style={[
            styles.categoryText,
            isGenreSelected && styles.selectedGenre,
          ]}>
          {categoryName}
        </Text>
      </Pressable>
    );
  },
);

const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    margin: 5,
  },
  categoryText: {
    padding: 10,
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  selectedGenre: {
    color: colors.secondaryColor,
  },
});
