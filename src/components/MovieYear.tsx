import React, {memo, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../colors';
import {Constants} from '../constants';
import {useRenderCount} from '../hooks/useRenderCount';

interface MovieYearProps {
  year: string;
  count?: number;
}

export const MovieYear = memo((props: MovieYearProps) => {
  useRenderCount(`MovieYear -------->${props.year}`);
  return (
    <View style={styles.year}>
      <Text
        style={styles.yearTypo}>{`${props.year} Count: ${props.count}`}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  year: {
    height: Constants.MOVIE_YEAR_HEIGHT,
    justifyContent: 'center',
    marginLeft: 8,
  },
  yearTypo: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.secondaryColor,
  },
});
