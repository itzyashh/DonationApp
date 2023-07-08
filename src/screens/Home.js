import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';

import {globalStyle} from '../../assets/fonts/styles/globalStyle';
import Header from '../components/Header';
import Button from '../components/Button';
import Tab from '../components/Tab';
import Badge from '../components/Badge';

const Home = () => {
  const onPress = () => {
    console.log('Button Pressed');
  };
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <Header title={'Azzahri A.'} type={1} />
      {/* <Button onPress={onPress} title={'Donate'} /> */}
      <Tab onPress={onPress} title={'Highlight'} />
      <Tab onPress={onPress} isInactive title={'Donate'} />
      <Badge title={'Environment'} />
    </SafeAreaView>
  );
};

export default Home;
