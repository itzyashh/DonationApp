import auth from '@react-native-firebase/auth';

export const createUser = async (fullName, email, password) => {
  try {
    const user = await auth().createUserWithEmailAndPassword(email, password);
    await user.user.updateProfile({
      displayName: fullName,
    });
    console.log('User account created & signed in!');
    return user;
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      return {error: 'That email address is already in use!'};
    }

    if (error.code === 'auth/invalid-email') {
      return {error: 'Please enter a valid email address!'};
    }

    return {error: 'Something went wrong! Please try again later.'};
  }
};
