import React, {useState} from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {createUser} from '../../api/user';
import {globalStyle} from '../../assets/fonts/styles/globalStyle';
import {
  horizontalScale,
  verticalScale,
} from '../../assets/fonts/styles/scaling';
import BackButton from '../components/BackButton';
import Button from '../components/Button';
import Header from '../components/Header';
import Input from '../components/Input';

const Register = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(false);

  const resetError = () => {
    setError('');
    setSuccess('');
  };

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <View style={styles.backButton}>
        <BackButton onPress={() => navigation.goBack()} />
      </View>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}>
        <Header title="Hello and Welcome !" type={1} />
        <View style={styles.fullName}>
          <Input
            autoCorrect={false}
            placeholder={'Enter your full name'}
            label="First & Last Name"
            onChangeText={val => setFullName(val)}
            secureTextEntry={false}
          />
        </View>
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
        {success.length > 0 && <Text style={styles.success}>{success}</Text>}
        <View style={styles.button}>
          <Button
            isDisabled={
              fullName.length < 3 ||
              email.length < 5 ||
              password.length < 4 ||
              btnDisabled
            }
            title={'Register'}
            onPress={async () => {
              resetError();
              let user = await createUser(fullName, email, password);
              if (user.error) {
                setError(user.error);
              } else {
                setError('');
                setSuccess('You have successfully registered!');
                setBtnDisabled(true);
                setTimeout(() => navigation.navigate('Login'), 3000);
              }
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  backButton: {
    marginTop: verticalScale(7),
    marginLeft: horizontalScale(14),
  },
  container: {
    paddingHorizontal: horizontalScale(24),
    justifyContent: 'center',
    marginTop: verticalScale(102),
  },
  fullName: {
    marginTop: verticalScale(24),
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
  success: {
    marginTop: verticalScale(24),
    color: 'green',
    fontSize: 16,
    textAlign: 'center',
  },
});
