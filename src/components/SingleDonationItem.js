import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import {
  horizontalScale,
  verticalScale,
} from '../../assets/fonts/styles/scaling';
import Badge from './Badge';
import Header from './Header';
const SingleDonationItem = props => {
  let price = props.price.toFixed(2);
  return (
    <View>
      <View>
        <View style={styles.badge}>
          <Badge title={props.BadgeTitle} />
        </View>
        <Image source={{uri: props.uri}} style={styles.image} />
      </View>
      <View style={styles.donationDetails}>
        <Header title={props.title} type={3} />
        <Header title={'$' + price} color={'#156CF7'} type={3} />
      </View>
    </View>
  );
};
SingleDonationItem.propTypes = {
  BadgeTitle: PropTypes.string.isRequired,
  uri: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default SingleDonationItem;

const styles = StyleSheet.create({
  image: {
    width: horizontalScale(155),
    height: verticalScale(170),
    borderRadius: horizontalScale(20),
  },
  badge: {
    position: 'absolute',
    top: verticalScale(13),
    left: horizontalScale(10),
    zIndex: 1,
  },
  donationDetails: {
    marginTop: verticalScale(16),
    gap: verticalScale(5),
  },
});
