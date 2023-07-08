import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';

import {globalStyle} from '../../assets/fonts/styles/globalStyle';
import Header from '../components/Header';
import Button from '../components/Button';
import Tab from '../components/Tab';
import Badge from '../components/Badge';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import SearchBar from '../components/SearchBar';

const Home = () => {
  const onPress = () => {
    console.log('Button Pressed');
  };
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <SearchBar
        onPress={text => {
          console.log(text);
        }}
      />
    </SafeAreaView>
  );
};

export default Home;
