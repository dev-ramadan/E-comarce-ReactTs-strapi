import { configureStore } from '@reduxjs/toolkit';
// import loginSlice  from './features/loginSlice';
import shpingCartSlice from './features/ShopinCartSlice'
import golbaleSlice from './features/golbaleSlice'

import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    cart : shpingCartSlice,
    // login: loginSlice,
    cartDrawer: golbaleSlice
    
  },
});

// تحديد الأنواع
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// تعريف hook مخصص لاستخدام dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
