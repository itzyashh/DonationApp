import {View, Text, TextInput, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/fonts/styles/scaling';
import PropTypes from 'prop-types';
const SearchBar = props => {
  const textInputRef = React.useRef(null);
  const [search, setSearch] = React.useState('');
  const handleSearch = text => {
    setSearch(text);
    props.onPress(text);
  };
  return (
    <Pressable
      onPress={() => textInputRef.current.focus()}
      style={styles.searchBar}>
      <FontAwesomeIcon
        size={scaleFontSize(22)}
        style={styles.searchIcon}
        icon={faSearch}
      />
      <TextInput
        onChangeText={handleSearch}
        value={search}
        ref={textInputRef}
        style={styles.searchInput}
        placeholderTextColor={'#686C7A'}
        placeholder="Search"
      />
    </Pressable>
  );
};
SearchBar.defaultProps = {
  onPress: () => {},
};
SearchBar.propTypes = {
  onPress: PropTypes.func,
};

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    height: verticalScale(50),
    alignItems: 'center',
    borderRadius: horizontalScale(15),
    backgroundColor: '#F3F5F9',
    gap: horizontalScale(6),
    paddingHorizontal: horizontalScale(16),
  },
  searchInput: {
    flex: 1,
    color: '#686C7A',
    fontSize: scaleFontSize(14),
    fontFamily: 'Inter',
    fontWeight: '400',
    letterSpacing: 0.28,
    height: '100%',
  },
  searchIcon: {
    color: '#25C0FF',
  },
});

export default SearchBar;
