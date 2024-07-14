import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../slice/userSlice';
/**
 * Configure et crée le store Redux pour l'application.
 * Utilise le reducer `userReducer` pour gérer l'état de l'utilisateur.
 */
const store = configureStore({
  reducer: {
    user: userReducer,
  },
});


export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
