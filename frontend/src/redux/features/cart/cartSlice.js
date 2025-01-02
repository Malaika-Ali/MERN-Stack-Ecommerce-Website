import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    selectedItems: 0,
    totalPrice: 0,
    tax: 0,
    taxRate: 0.05,
    grandTotal: 0
  },
  reducers: {
    addToCart: (state, action)=>{
        const existingProduct=state.products.find((product)=>product.id===action.payload.id)

        if(!existingProduct){
            state.products.push({...action.payload, quantity: 1})
        }else{
            existingProduct.quantity+=1
            console.log("Items is already existed")
        }
        state.selectedItems=setSelectedItems(state)
        state.totalPrice=setTotalPrice(state)
        state.tax=setTax(state)
        state.grandTotal=setGrandTotal(state)

    },
    updateQuantity: (state, action)=>{
      const products=state.products.map((product)=>{
        if(product.id==action.payload.id){
          if(action.payload.type==="increment"){
            product.quantity+=1
          }else if(action.payload.type==='decrement'){
            if(product.quantity>1){
              product.quantity-=1
            }
          }
        }
        return product
      })
      state.selectedItems=setSelectedItems(state)
      state.selectedItems=setSelectedItems(state)
      state.totalPrice=setTotalPrice(state)
      state.tax=setTax(state)
      state.grandTotal=setGrandTotal(state)
    },
    removeProduct: (state, action)=>{
      state.products=state.products.filter((product)=>product.id!==action.payload.id)
      state.selectedItems=setSelectedItems(state)
        state.totalPrice=setTotalPrice(state)
        state.tax=setTax(state)
        state.grandTotal=setGrandTotal(state)
    },
    clearCart: (state)=>{
      state.products=[]
      state.selectedItems=[]
        state.totalPrice=0
        state.tax=0
        state.grandTotal=0
    }
  },
})


// utility functions
export const setSelectedItems=(state)=> state.products.reduce((total, product)=> total+product.quantity, 0)

export const setTotalPrice = (state) =>
  state.products.reduce((total, product) => total + product.quantity * product.price, 0);

export const setTax=(state)=>setTotalPrice(state) * state.taxRate

export const setGrandTotal=(state)=>setTotalPrice(state) + setTax(state)
    


// Action creators are generated for each case reducer function
export const { addToCart, updateQuantity, removeProduct, clearCart} = cartSlice.actions

export default cartSlice.reducer