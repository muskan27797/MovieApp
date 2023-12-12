import React, {useContext} from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';
import {colors} from '../colors';
import {GenreContext} from './GenreContext';
import {toggleSelectedGenre} from '../utils';
import {useRenderCount} from '../hooks/useRenderCount';

interface CategoryProps {
  categoryId: number;
  categoryName: string;
}

export const Category = ({categoryId, categoryName}: CategoryProps) => {
  const {selectedGenre, setSelectedGenre} = useContext(GenreContext);

  const filterMovieOnBasisOfGenre = () => {
    setSelectedGenre(prevGenre => toggleSelectedGenre(categoryId, prevGenre));
  };

  const isGenreSelected = selectedGenre.includes(categoryId);

  useRenderCount(`Category ${categoryName}-------->`);

  return (
    <Pressable
      style={styles.categoryContainer}
      onPress={filterMovieOnBasisOfGenre}>
      <Text
        style={[
          styles.categoryText,
          isGenreSelected && styles.selectedGenre,
        ]}>{`${categoryName}_${categoryId}`}</Text>
    </Pressable>
  );
};

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
