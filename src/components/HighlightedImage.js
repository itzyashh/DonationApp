import React from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/fonts/styles/scaling';

const HighlightedImage = props => {
  return (
    <View>
      <Image
        style={styles.highlightedImage}
        resizeMode="stretch"
        source={require('../../assets/images/image94.png')}
      />
      <Text style={styles.highlightedImageText}>
        New Arrival change your lifestyle.
      </Text>
      <Pressable onPress={props.onPress} style={styles.highlightedImageButton}>
        <Text style={styles.highlightedImageButtonText}>Check Now</Text>
        <Image
          style={styles.arrow}
          source={require('../../assets/images/arrow.png')}
        />
      </Pressable>
      <Image
        style={styles.design}
        source={require('../../assets/images/design.png')}
      />
    </View>
  );
};

HighlightedImage.propTypes = {
  onPress: PropTypes.func,
};

export default HighlightedImage;

const styles = StyleSheet.create({
  highlightedImage: {
    width: '100%',
    height: '100%',
    borderRadius: horizontalScale(20),
  },
  highlightedImageText: {
    width: horizontalScale(180),
    position: 'absolute',
    top: verticalScale(32),
    left: horizontalScale(20),
    color: '#FFFFFF',
    fontFamily: 'Inter',
    fontSize: scaleFontSize(20),
    fontWeight: '600',
    letterSpacing: 0.4,
    lineHeight: scaleFontSize(28),
  },
  highlightedImageButton: {
    position: 'absolute',
    top: verticalScale(108),
    left: horizontalScale(20),
    flexDirection: 'row',
    width: horizontalScale(108),
    gap: horizontalScale(10),
  },
  highlightedImageButtonText: {
    color: '#FFFFFF',
    fontFamily: 'Inter',
    fontSize: scaleFontSize(14),
    fontWeight: '600',
    letterSpacing: 0.28,
    textDecorationLine: 'underline',
  },
  arrow: {
    alignSelf: 'center',
    marginTop: verticalScale(4),
  },
  design: {
    position: 'absolute',
    bottom: verticalScale(0),
    right: horizontalScale(0),
  },
});
