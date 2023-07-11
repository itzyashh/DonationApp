import React, {useState} from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {globalStyle} from '../../assets/fonts/styles/globalStyle';
import {
  horizontalScale,
  verticalScale,
} from '../../assets/fonts/styles/scaling';
import Button from '../components/Button';
import Header from '../components/Header';
import Input from '../components/Input';
import {Routes} from '../navigation/Routes';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log('email', email);
  console.log('password', password);
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}>
        <Header title="Welcome Back" type={1} />
        <View style={styles.email}>
          <Input
            placeholder={'Enter your email'}
            label="Email"
            onChangeText={val => setEmail(val)}
            keyboardType="email-address"
            secureTextEntry={false}
          />
        </View>
        <Input
          placeholder={'Enter your password'}
          label="Password"
          onChangeText={val => setPassword(val)}
          secureTextEntry={true}
        />
        <View style={styles.button}>
          <Button onPress={() => console.log('Pressed')} title={'Login'} />
        </View>
        <Pressable
          onPress={() => navigation.navigate(Routes.register)}
          style={styles.registrationButton}>
          <Header color={'#156CF7'} title="Don't have an account?" type={3} />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: horizontalScale(24),
    justifyContent: 'center',
    marginTop: verticalScale(163),
  },
  email: {
    marginVertical: verticalScale(24),
  },
  button: {
    marginTop: verticalScale(37),
    marginBottom: verticalScale(24),
  },
  registrationButton: {
    alignItems: 'center',
  },
});
