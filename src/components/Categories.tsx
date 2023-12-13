import React, {memo, useContext} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {Category} from './Category';
import {CategoriesType} from '../interface';
import {GenreContext} from './GenreContext';

interface CategoriesProps {
  categories: CategoriesType;
}

export const Categories = memo(({categories}: CategoriesProps) => {
  const {selectedGenre} = useContext(GenreContext);

  return (
    <ScrollView
      style={styles.displayCategory}
      horizontal={true}
      showsHorizontalScrollIndicator={false}>
      {categories.map(category => (
        <Category
          key={category.id}
          categoryId={category.id}
          isGenreSelected={selectedGenre.includes(category.id)}
          categoryName={category.name}
        />
      ))}
    </ScrollView>
  );
});
const styles = StyleSheet.create({
  displayCategory: {
    marginVertical: 5,
    maxHeight: 50,
    marginHorizontal: 20,
  },
});
