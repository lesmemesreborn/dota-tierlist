import {configureStore} from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import favHeroSlice from './slices/favHeroSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        favHero: favHeroSlice,
    }
})