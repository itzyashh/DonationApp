import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  firstName: 'Yash',
  lastName: 'Jadhav',
};

const User = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateFirstName: (state, action) => {
      state.firstName = action.payload;
    },
  },
});

export const {updateFirstName} = User.actions;
export default User.reducer;
