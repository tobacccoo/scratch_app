import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);
      if (itemIndex >= 0) {
        state.items[itemIndex].quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    incrementItem: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) item.quantity += 1;
    },
    decrementItem: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity -= 1;
        if (item.quantity === 0) {
          state.items = state.items.filter((i) => i.id !== action.payload.id);
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, incrementItem, decrementItem, clearCart } = itemSlice.actions;
export default itemSlice.reducer;
