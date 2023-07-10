import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

const DonationItemDetails = () => {
  const donationItemDetails = useSelector(
    state => state.donations.selectedDonationInformation,
  );
  console.log('donationItemDetails', donationItemDetails);
  return (
    <View>
      <Text>DonationItemDetails</Text>
    </View>
  );
};

export default DonationItemDetails;

const styles = StyleSheet.create({});
