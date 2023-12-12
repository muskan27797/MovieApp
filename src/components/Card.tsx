import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {colors} from '../colors';
import {Constants} from '../constants';
import {useRenderCount} from '../hooks/useRenderCount';

interface CardProps {
  movieImage: string;
  movieTitle: string;
  movieDescription: string;
  movieGenreName: string[];
  popularity: number;
  index: number;
}

const Genre = ({name}: {name: string}) => {
  return <Text style={styles.genre}>{name}</Text>;
};

export const Card = ({
  index,
  movieImage,
  movieTitle,
  movieDescription,
  movieGenreName,
}: CardProps) => {
  useRenderCount(`Card ${movieTitle}_${index} -------->`);
  return (
    <View style={styles.card}>
      <View style={styles.movieInfoDetails}>
        <Text style={styles.title}>{movieTitle}</Text>
        <View style={styles.genreContainer}>
          {movieGenreName.map((movieItem, index) => (
            <Genre name={movieItem} key={index} />
          ))}
        </View>
        <Text
          ellipsizeMode="tail"
          numberOfLines={12}
          style={styles.description}>
          {movieDescription}
        </Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={{height: 230, width: 160}}
          source={{uri: `${Constants.IMAGE_URL}${movieImage}`}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: Constants.MOVIE_CARD_HEIGHT,
    borderRadius: 4,
    marginLeft: 8,
    marginBottom: Constants.MOVIE_CARD_MARGIN,
    borderWidth: 1,
  },
  imageContainer: {
    height: 230,
    width: 160,
    alignItems: 'flex-end',
    marginRight: 8,
  },
  genreContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  genre: {
    backgroundColor: colors.blue,
    color: colors.white,
    marginRight: 2,
    borderRadius: 3,
    padding: 4,
    marginTop: 2,
    fontSize: 12,
  },
  movieInfoDetails: {
    flex: 1,
    height: 250,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: 10,
    paddingTop: 10,
    marginBottom: 10,
    marginRight: 10,
    overflow: 'hidden',
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.blue,
  },
  cast: {
    fontSize: 12,
  },
  director: {
    fontSize: 12,
  },
  description: {
    marginTop: 8,
    fontSize: 12,
  },
});
