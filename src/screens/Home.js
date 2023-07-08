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
import SingleDonationItem from '../components/SingleDonationItem';

const Home = () => {
  const onPress = () => {
    console.log('Button Pressed');
  };
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <SingleDonationItem
        BadgeTitle="Environment"
        uri={
          'https://img.pixers.pics/pho_wat(s3:700/FO/44/24/64/31/700_FO44246431_ab024cd8251bff09ce9ae6ecd05ec4a8.jpg,525,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,305,650,jpg)/stickers-cactus-cartoon-illustration.jpg.jpg'
        }
        title="Tree Cactus"
        price={44}
      />
    </SafeAreaView>
  );
};

export default Home;
