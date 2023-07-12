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

export const signInUser = async (email, password) => {
  try {
    const response = await auth().signInWithEmailAndPassword(email, password);
    const token = await response.user.getIdToken();
    return {
      status: true,
      data: {
        displayName: response.user.displayName,
        email: response.user.email,
        token,
      },
    };
  } catch (error) {
    if (error.code === 'auth/invalid-email') {
      return {
        status: false,
        error: 'Please enter a valid email address!',
      };
    }
    if (error.code === 'auth/user-not-found') {
      return {
        status: false,
        error: 'This email address is not registered!',
      };
    }
    if (error.code === 'auth/wrong-password') {
      return {
        status: false,
        error: 'This password is invalid!',
      };
    }

    return {
      status: false,
      error: error.message,
    };
  }
};
