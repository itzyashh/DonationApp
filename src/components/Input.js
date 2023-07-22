import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, TextInput, View} from 'react-native';

import {scaleFontSize, verticalScale} from '../../assets/fonts/styles/scaling';

const Input = props => {
  const [value, setValue] = useState('');
  const handleOnChangeText = text => {
    setValue(text);
    props.onChangeText(text);
  };
  return (
    <View>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        autoCorrect={props.autoCorrect}
        autoCapitalize={props.autoCapitalize}
        style={styles.input}
        value={value}
        secureTextEntry={props.secureTextEntry}
        keyboardType={props.keyboardType}
        placeholder={props.placeholder}
        onChangeText={text => handleOnChangeText(text)}
      />
      <View style={styles.br} />
    </View>
  );
};

Input.defaultProps = {
  placeholder: '',
  onChangeText: () => {},
  autCapitalize: 'none',
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
  keyboardType: PropTypes.string,
  secureTextEntry: PropTypes.bool.isRequired,
  autoCapitalize: PropTypes.string,
  autoCorrect: PropTypes.bool,
};

export default Input;

const styles = StyleSheet.create({
  label: {
    color: '#36455A',
    fontFamily: 'Inter',
    fontSize: scaleFontSize(12),
    fontWeight: '400',
  },
  input: {
    marginTop: verticalScale(12),
    color: '#022150',
    fontFamily: 'Inter',
    fontSize: scaleFontSize(16),
    fontWeight: '500',
  },
  br: {
    marginTop: verticalScale(12),
    borderBottomColor: '#A7A7A780',
    borderBottomWidth: 1,
  },
});
