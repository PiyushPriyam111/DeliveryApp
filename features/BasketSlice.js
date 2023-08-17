import { createSlice } from '@reduxjs/toolkit'

const initialState = {
items:[],
}

export const basketslice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state,action) => {
     
      state.items =[...state.items,action.payload]
    },
    removeFromBasket: (state,action) => {
     const index = state.items.findIndex((item)=>item.id===action.payload.id)
     let newBasket=[...state.items]

     if(index>=0){
      newBasket.splice(index,1)
     }else{
        console.log("kuchh ADD to kr ")
     }
     state.items = newBasket
    }
    
  },
})

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket}= basketslice.actions
export const selectBasketItems =(state)=>state.basket.items
export const selectBasketItemsWithId = (state,id)=>state.basket.items.filter((item)=>item.id==id)
export const selecBasketTotal = (state)=>
(state.basket.items.reduce((total,item)=>(total=total+item.price),0))

export default basketslice.reducer