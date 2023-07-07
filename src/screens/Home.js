import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';

import {globalStyle} from '../../assets/fonts/styles/globalStyle';
import Header from '../components/Header';
import Button from '../components/Button';

const Home = () => {
  const onPress = () => {
    console.log('Button Pressed');
  };
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <Header title={'Azzahri A.'} type={1} />
      <Button onPress={onPress} title={'Donate'} />
    </SafeAreaView>
  );
};

export default Home;
