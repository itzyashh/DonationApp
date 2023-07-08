import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/fonts/styles/scaling';
const Tab = props => {
  const [width, setWidth] = React.useState(0);
  const textRef = React.useRef(null);
  const paddingHorizontal = 33;
  const tabWidth = {
    width: horizontalScale(paddingHorizontal * 2 + width),
  };

  return (
    <Pressable
      onPress={props.onPress}
      style={[styles.Tab, props.isInactive && styles.inactiveTab, tabWidth]}>
      <Text
        onTextLayout={e => {
          setWidth(e.nativeEvent.lines[0].width);
        }}
        ref={textRef}
        style={[styles.title, props.isInactive && styles.inactiveTitle]}>
        {props.title}
      </Text>
    </Pressable>
  );
};
Tab.defaultProps = {
  title: '',
  isInactive: false,
  onPress: () => {},
};
Tab.propTypes = {
  title: PropTypes.string,
  isInactive: PropTypes.bool,
  onPress: PropTypes.func,
};

const styles = StyleSheet.create({
  Tab: {
    backgroundColor: '#2979F2',
    height: verticalScale(50),
    borderRadius: horizontalScale(100),
    justifyContent: 'center',
  },
  inactiveTab: {
    backgroundColor: '#F3F5F9',
  },
  inactiveTitle: {
    color: '#79869f',
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Inter',
    fontSize: scaleFontSize(14),
    fontWeight: '500',
    letterSpacing: 0.28,
  },
});
export default Tab;
