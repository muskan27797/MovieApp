import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {Category} from './Category';
import {CategoriesType} from '../interface';
import {useRenderCount} from '../hooks/useRenderCount';

interface CategoriesProps {
  categories: CategoriesType;
}

export const Categories = ({categories}: CategoriesProps) => {
  useRenderCount('Categories -------->');
  return (
    <ScrollView
      style={styles.displayCategory}
      horizontal={true}
      showsHorizontalScrollIndicator={false}>
      {categories.map(category => (
        <Category
          key={category.id}
          categoryId={category.id}
          categoryName={category.name}
        />
      ))}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  displayCategory: {
    margin: 10,
    maxHeight: 50,
    marginHorizontal: 20,
  },
});
