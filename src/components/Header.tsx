import React, {memo} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../colors';
import {Constants} from '../constants';
import {useRenderCount} from '../hooks/useRenderCount';

export const Header = memo(() => {
  useRenderCount('Header -------->');
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{Constants.MOVIE_NAME}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  header: {
    padding: 20,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    color: colors.secondaryColor,
  },
});
