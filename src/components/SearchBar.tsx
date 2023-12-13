import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {colors} from '../colors';
import {Constants} from '../constants';

interface SearchBarProps {
  userSearch: string;
  setUserSearch: React.Dispatch<React.SetStateAction<string>>;
}
export const SearchBar = ({userSearch, setUserSearch}: SearchBarProps) => {
  const handleChangedValue = (value: string) => {
    setUserSearch(value);
  };
  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.textInput}
        onChangeText={handleChangedValue}
        value={userSearch}
        placeholder={Constants.PLACEHOLDER}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  textInput: {
    height: 40,
    marginHorizontal: 50,
    marginVertical: 20,
    width: '72%',
    borderRadius: 4,
    padding: 10,
    color: colors.blue,
    backgroundColor: colors.white,
  },
  searchContainer: {flexDirection: 'row'},
});
