import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';

import {globalStyle} from '../../assets/fonts/styles/globalStyle';
import {
  horizontalScale,
  verticalScale,
} from '../../assets/fonts/styles/scaling';
import BackButton from '../components/BackButton';

const DonationItemDetails = ({navigation}) => {
  const donationItemDetails = useSelector(
    state => state.donations.selectedDonationInformation,
  );
  console.log('donationItemDetails', donationItemDetails);
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <BackButton onPress={() => navigation.goBack()} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default DonationItemDetails;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: horizontalScale(20),
    marginTop: verticalScale(7),
  },
});
