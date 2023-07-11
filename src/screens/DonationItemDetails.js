import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';

import {globalStyle} from '../../assets/fonts/styles/globalStyle';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/fonts/styles/scaling';
import BackButton from '../components/BackButton';
import Badge from '../components/Badge';
import Button from '../components/Button';
import Header from '../components/Header';

const DonationItemDetails = ({navigation, route}) => {
  const {badgeTitle} = route.params;
  console.log('badgeTitle', badgeTitle);
  const donationItemDetails = useSelector(
    state => state.donations.selectedDonationInformation,
  );
  console.log('donationItemDetails', donationItemDetails);
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <BackButton onPress={() => navigation.goBack()} />
        <Image source={{uri: donationItemDetails.image}} style={styles.image} />
        <Badge title={badgeTitle} />
        <View style={styles.details}>
          <Header title={donationItemDetails.name} type={1} />
          <Text style={styles.description}>
            {donationItemDetails.description}
          </Text>
        </View>
      </ScrollView>
      <View style={styles.button}>
        <Button onPress={() => null} title={'Donate'} />
      </View>
    </SafeAreaView>
  );
};

export default DonationItemDetails;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: horizontalScale(20),
    marginTop: verticalScale(7),
  },
  image: {
    marginTop: verticalScale(22),
    height: verticalScale(240),
    width: '100%',
    marginBottom: verticalScale(24),
    borderRadius: horizontalScale(5),
  },
  details: {
    marginTop: verticalScale(16),
  },
  description: {
    paddingTop: verticalScale(7),
    paddingLeft: horizontalScale(10),
    color: '#000',
    fontFamily: 'Inter',
    fontSize: scaleFontSize(14),
    fontWeight: '400',
    lineHeight: scaleFontSize(22),
    letterSpacing: 0.28,
    marginBottom: verticalScale(10),
  },
  button: {
    marginHorizontal: horizontalScale(24),
    marginBottom: verticalScale(20),
  },
});
