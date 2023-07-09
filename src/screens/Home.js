import React from 'react';
import {
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Image,
  Pressable,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {globalStyle} from '../../assets/fonts/styles/globalStyle';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/fonts/styles/scaling';
import Header from '../components/Header';
import HighlightedImage from '../components/HighlightedImage';
import SearchBar from '../components/SearchBar';

const Home = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  console.log(user);
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView>
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hello,</Text>
            <Header
              key={1}
              title={
                user.firstName +
                ' ' +
                user.lastName.slice(0, 1).concat('.') +
                '👋'
              }
            />
          </View>

          <Image
            resizeMode="contain"
            source={{uri: user.profilePicture}}
            style={styles.image}
          />
        </View>
        <View style={styles.searchBarContainer}>
          <SearchBar
            placeholder={'Search'}
            onPress={value => console.log(value)}
          />
        </View>
        <View style={styles.highlightedImageContainer}>
          <HighlightedImage onPress={() => console.log('pressed')} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(24),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greetingContainer: {},
  greeting: {
    color: '#636776',
    fontFamily: 'Inter',
    fontSize: scaleFontSize(16),
    fontWeight: '400',
    letterSpacing: 0.32,
    marginBottom: verticalScale(5),
  },
  image: {
    width: horizontalScale(50),
    height: verticalScale(50),
  },
  searchBarContainer: {
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(24),
  },
  highlightedImageContainer: {
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(24),
    maxHeight: verticalScale(160),
  },
});

export default Home;
