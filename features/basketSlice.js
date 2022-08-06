import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}
export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addItemToBasket: (state, action) => {
      // Check if there is any item with the id

      const ob = action.payload

      const index = state.items.findIndex(index => index.id == ob.id)

      if (index >= 0) {
        // Increase the quantity
        const item = state.items[index]
        item.quantity += 1
      } else {
        // Add the quantity to the object
        ob.quantity = 1
        state.items.push(ob)
      }
      // console.log(state.items)
    },
    removeItemFromBasket: (state, action) => {
      const ob = action.payload

      const index = state.items.findIndex(index => index.id == ob.id)

      if (index >= 0) {
        // Desscrese the quantity
        const item = state.items[index]
        item.quantity -= 1
      } else {
        // We dont have this case
        console.error("This item is not exist:", ob.id)
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { addItemToBasket, removeItemFromBasket } = basketSlice.actions

export const selectItemsWithID = (state, id) => state.basket.items.filter(item => item.id == id)
export const selectBasketTotal = (state) => {
  const qa = state.basket.items.length > 0 ? state.basket.items.reduce((acc, obj) => {return acc + obj.quantity}, 0) : 0
  
  const totle = state.basket.items.length > 0 
  ? state.basket.items.reduce((acc, obj) => acc + obj.quantity * obj.price, 0)
  : 0
  console.log(qa)
  return {
    quantity: qa,
    total: totle
  }
}
export const selectBasketItems = (state) => state.basket.items

export default basketSlice.reducer