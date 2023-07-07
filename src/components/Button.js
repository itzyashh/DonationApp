import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import {
  horizontalScale,
  verticalScale,
} from '../../assets/fonts/styles/scaling';
const Button = props => {
  return (
    <Pressable
      onPress={props.onPress}
      style={[styles.button, props.isDisabled && styles.disabled]}>
      <Text style={styles.title}>{props.title}</Text>
    </Pressable>
  );
};
Button.defaultProps = {
  title: '',
  isDisabled: false,
  onPress: () => {},
};
Button.propTypes = {
  title: PropTypes.string,
  isDisabled: PropTypes.bool,
  onPress: PropTypes.func,
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2979F2',
    height: verticalScale(55),
    borderRadius: horizontalScale(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabled: {
    opacity: 0.5,
  },
  title: {
    color: '#fff',
    fontFamily: 'Inter',
    fontSize: verticalScale(16),
    fontWeight: '500',
    letterSpacing: 0.32,
  },
});
export default Button;
