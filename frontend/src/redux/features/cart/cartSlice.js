import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    selectedItems: 0,
    totalPrice: 0,
    tax: 0, 
    grandTotal: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.products.find(
        (product) => product.id === action.payload.id
      );

      // if (!existingProduct) {
      //   state.products.push({
      //     ...action.payload,
      //     quantity: 1,
      //     image: action.payload.image,
      //     category: action.payload.category,
      //     id: action.payload.id,
      //   }
      // );
      // } 
      
      if (!existingProduct) {
        // Add a size property if the category is "clothes"
        const newProduct = {
          ...action.payload,
          quantity: 1,
          image: action.payload.image,
          category: action.payload.category,
          id: action.payload.id,
        };

        if (action.payload.category === 'clothes') {
          newProduct.size = 'medium'; 
        }
        else if (action.payload.category === 'footwear') {
          newProduct.size = '8'; 
        }
        else if (action.payload.category === 'bags') {
          newProduct.size = '18x14x8 inches'; 
        }

        state.products.push(newProduct);
      }
      else {
        existingProduct.quantity += 1;
        console.log('Items already existed');
      }

      state.selectedItems = setSelectedItems(state);
      state.totalPrice = setTotalPrice(state);
      state.grandTotal = setGrandTotal(state);
    },
    updateQuantity: (state, action) => {
      const products = state.products.map((product) => {
        if (product.id === action.payload.id) {
          if (action.payload.type === 'increment') {
            product.quantity += 1;
          } else if (action.payload.type === 'decrement') {
            if (product.quantity > 1) {
              product.quantity -= 1;
            }
          }
        }
        return product;
      });

      state.selectedItems = setSelectedItems(state);
      state.totalPrice = setTotalPrice(state);
      state.grandTotal = setGrandTotal(state);
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
      state.selectedItems = setSelectedItems(state);
      state.totalPrice = setTotalPrice(state);
      state.grandTotal = setGrandTotal(state);
    },
    clearCart: (state) => {
      state.products = [];
      state.selectedItems = 0;
      state.totalPrice = 0;
      state.tax = 0;
      state.grandTotal = 0;
    },
    applyTaxForCOD: (state) => {
      state.tax = 250; 
      state.grandTotal = state.totalPrice + state.tax;
    },
    removeTax: (state) => {
      state.tax = 0; 
      state.grandTotal = state.totalPrice;
    },
    updateSize: (state, action) => {
      const product = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (product && product.category !== 'accessories') {
        product.size = action.payload.size;
      }
    },
  },
});

// Utility functions
export const setSelectedItems = (state) =>
  state.products.reduce((total, product) => total + product.quantity, 0);

export const setTotalPrice = (state) =>
  state.products.reduce((total, product) => total + product.quantity * product.price, 0);

export const setGrandTotal = (state) => state.totalPrice + state.tax;

export const {
  addToCart,
  updateQuantity,
  removeProduct,
  clearCart,
  applyTaxForCOD,
  removeTax,
  updateSize
} = cartSlice.actions;

export default cartSlice.reducer;