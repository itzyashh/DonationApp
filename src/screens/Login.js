import React, {useState} from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {signInUser} from '../../api/user';
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
  const [error, setError] = useState('');

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}>
        <Header title="Welcome Back" type={1} />
        <View style={styles.email}>
          <Input
            autoCapitalize="none"
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

        {error.length > 0 && <Text style={styles.error}>{error}</Text>}
        <View style={styles.button}>
          <Button
            isDisabled={email === '' || password === '' ? true : false}
            onPress={async () => {
              let user = await signInUser(email, password);
              if (!user.status) {
                setError(user.error);
              } else {
                setError('');
                navigation.navigate(Routes.home);
              }
            }}
            title={'Login'}
          />
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
  error: {
    marginTop: verticalScale(24),
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
  },
});
