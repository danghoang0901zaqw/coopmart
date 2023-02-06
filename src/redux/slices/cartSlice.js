import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProducts: [],
  totalAmount: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const newProduct = action.payload;
      const existingProduct = state.cartProducts.find(
        (x) => x.id === newProduct.id
      );
      if (!existingProduct) {
        state.cartProducts = [
          ...state.cartProducts,
          {
            id: newProduct.id,
            productName: newProduct.productName,
            price: newProduct.price,
            imgUrl: newProduct.imgUrl,
            quantity: 1,
            totalPrice: 0,
          },
        ];
        state.totalQuantity++;
      } else {
        existingProduct.quantity++;
        existingProduct.totalPrice += existingProduct.quantity * existingProduct.price
          +existingProduct.totalPrice + +existingProduct.price;
      }
      state.totalAmount = state.cartProducts.reduce(
        (total, item) => (total += +(item.price * item.quantity)),
        0
      );
      console.log(state.cartProducts);
    },
    deleteProduct: (state, action) => {
      const newProduct = [...state.cartProducts];
      const idxPro = newProduct.findIndex((x) => x.id === action.payload);
      newProduct.splice(state.cartProducts[idxPro], 1);
      state.cartProducts = newProduct;

      state.totalQuantity = newProduct.length;

      state.totalAmount = state.cartProducts.reduce(
        (total, item) => (total += +(item.price * item.quantity)),
        0
      );
      console.log(state.totalAmount)
    },
  },
});

export const { addProduct, deleteProduct } = cartSlice.actions;
export const selectQuantiy = (state) => state.cart.totalQuantity;
export const selectProduct = (state) => state.cart.cartProducts;
export const selectAmount = (state) => state.cart.totalAmount;

export default cartSlice.reducer;
