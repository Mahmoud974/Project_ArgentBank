import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  email: string;
  password: string;
  token: string | null;
  firstName: string;
  lastName: string;
}

const initialState: UserState = {
  email: '',
  password: '',
  token: null,
  firstName: '',
  lastName: '',
};

/**
 * Slice Redux pour gérer l'état de l'utilisateur.
 */
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    /**
     * Action pour définir les informations de l'utilisateur dans l'état Redux.
     * @param {UserState} state - État actuel de l'utilisateur.
     * @param {PayloadAction<UserState>} action - Action contenant les nouvelles informations de l'utilisateur.
     */
    setUser(state, action: PayloadAction<UserState>) {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.token = action.payload.token;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },

   
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
