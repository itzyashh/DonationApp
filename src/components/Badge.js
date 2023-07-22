import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet, Pressable} from 'react-native';

import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/fonts/styles/scaling';

const Badge = props => {
  const [width, setWidth] = React.useState(0);
  const textRef = React.useRef(null);
  const paddingHorizontal = 10;
  const BadgeWidth = {
    width: horizontalScale(paddingHorizontal * 2 + width),
  };

  return (
    <View onPress={props.onPress} style={[styles.Badge, BadgeWidth]}>
      <Text
        numberOfLines={1}
        onTextLayout={e => {
          setWidth(e.nativeEvent.lines[0].width);
        }}
        ref={textRef}
        style={styles.title}>
        {props.title}
      </Text>
    </View>
  );
};
Badge.defaultProps = {
  title: '',
};
Badge.propTypes = {
  title: PropTypes.string,
};

const styles = StyleSheet.create({
  Badge: {
    backgroundColor: '#145855',
    paddingVertical: verticalScale(5),
    paddingHorizontal: horizontalScale(10),
    borderRadius: horizontalScale(50),
    justifyContent: 'center',
    maxWidth: horizontalScale(130),
  },

  title: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Inter',
    fontSize: scaleFontSize(10),
    fontWeight: '600',
    letterSpacing: 0.2,
  },
});
export default Badge;
