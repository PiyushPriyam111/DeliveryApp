import {configureStore} from '@reduxjs/toolkit'
import basketReducer from './features/BasketSlice'
import restaurantSlice from './features/RestaurantSlice'

export const store =configureStore({
    reducer:{
        basket:basketReducer,
        restaurant:restaurantSlice
       
    }
})