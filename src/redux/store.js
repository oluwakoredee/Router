import { configureStore } from '@reduxjs/toolkit'
import  careerReducer  from "./slice/careerSlice"
import contactSlice from './slice/contactSlice';
import partnerSlice from './slice/partnerslice';

const store = configureStore({
    reducer: {
        career: careerReducer,
        contact: contactSlice,
        partner: partnerSlice,
    }
});

export default store