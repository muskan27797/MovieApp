import React, {memo} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../colors';
import {Constants} from '../constants';

interface MovieYearProps {
  year: string;
}

export const MovieYear = memo((props: MovieYearProps) => {
  return (
    <View style={styles.year}>
      <Text style={styles.yearTypo}>{props.year}</Text>
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
