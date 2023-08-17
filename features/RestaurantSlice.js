import { createSlice } from '@reduxjs/toolkit'

const initialState = {
restaurant:{
    id:null,
    imgUrl:null,
    title:null,
    rating:null,
    genre:null,
    address:null,
    sort_description:null,
    dishes:null,
}
}

export const Restaurantslice = createSlice({
    name: 'restaurant',
    initialState,
    reducers: {
      setRestaurant: (state,action) => {
       
      state.restaurant = action.payload
      },
      
      
    },
  })
  
  // Action creators are generated for each case reducer function
  export const {setRestaurant}= Restaurantslice.actions
  export const selectRestaurantItems =(state)=>state.restaurant.restaurant

  export default Restaurantslice.reducer