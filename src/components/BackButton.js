import React from 'react';
import PropTypes from 'prop-types';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';

import {
  horizontalScale,
  scaleFontSize,
} from '../../assets/fonts/styles/scaling';

const BackButton = props => {
  return (
    <Pressable style={styles.container} onPress={props.onPress}>
      <FontAwesomeIcon color="#022150" icon={faArrowLeft} />
    </Pressable>
  );
};

BackButton.propTypes = {
  onPress: PropTypes.func,
};

export default BackButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAFAFA',
    width: horizontalScale(44),
    height: horizontalScale(44),
    borderRadius: horizontalScale(26),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
