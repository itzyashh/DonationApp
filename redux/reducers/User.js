const {createSlice} = require('@reduxjs/toolkit');

const initialState = {
  firstName: 'Yash',
  lastName: 'Jadhav',
  userId: 1,
  profilePicture:
    'https://cdn.dribbble.com/users/1577045/screenshots/4914645/media/028d394ffb00cb7a4b2ef9915a384fd9.png?compress=1&resize=400x300&vertical=top',
};

const User = createSlice({
  name: 'User',
  initialState: initialState,
  reducers: {
    setFirstName: (state, action) => {
      state.firstName = action.payload.firstName;
    },
    reset: () => initialState,
  },
});

export const {setFirstName, reset} = User.actions;
export default User.reducer;
