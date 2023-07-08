import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import {scaleFontSize} from '../../assets/fonts/styles/scaling';

const Header = props => {
  const styleToApply = () => {
    switch (props.type) {
      case 1:
        return styles.title1;
      case 2:
        return styles.title2;
      case 3:
        return styles.title3;
      default:
        return styles.title1;
    }
  };
  return (
    <View>
      <Text style={[styleToApply(), props.color && {color: props.color}]}>
        {props.title}
      </Text>
    </View>
  );
};
Header.defaultProps = {
  title: '',
  type: 1,
  color: '#000',
};
Header.propTypes = {
  title: PropTypes.string,
  type: PropTypes.number,
  color: PropTypes.string,
};

const styles = StyleSheet.create({
  title1: {
    color: '#022150',
    fontFamily: 'Inter',
    fontSize: scaleFontSize(24),
    fontWeight: '600',
    letterSpacing: 0.48,
  },
  title2: {
    color: '#022150',
    fontFamily: 'Inter',
    fontSize: scaleFontSize(18),
    fontWeight: '600',
    letterSpacing: 0.36,
  },
  title3: {
    color: '#022150',
    fontFamily: 'Inter',
    fontSize: scaleFontSize(16),
    fontWeight: '600',
    letterSpacing: 0.32,
  },
});

export default Header;
