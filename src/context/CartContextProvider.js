import React, { useReducer, createContext } from 'react';

const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  total: 0,
  checkout: false
};

const sumItems = items => {
  const itemsCounter = items.reduce((total, product) => total + product.quantity, 0);
  const total = items.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
  return { itemsCounter, total };
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      // Check if item already exists
      const itemExists = state.selectedItems.find(item => item.id === action.payload.id);
      if (!itemExists) {
        const updatedItems = [...state.selectedItems, { ...action.payload, quantity: 1 }];
        return {
          ...state,
          selectedItems: updatedItems,
          ...sumItems(updatedItems),
          checkout: false
        };
      }

      return state;
    }
    case "REMOVE_ITEM": {
      const updatedItems = state.selectedItems.filter(item => item.id !== action.payload.id);
      return {
        ...state,
        selectedItems: updatedItems,
        ...sumItems(updatedItems)
      };
    }
    case "INCREASE": {
      const updatedItems = state.selectedItems.map(item =>
        item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      return {
        ...state,
        selectedItems: updatedItems,
        ...sumItems(updatedItems)
      };
    }
    case "DECREASE": {
      const updatedItems = state.selectedItems.map(item =>
        item.id === action.payload.id ? { ...item, quantity: item.quantity - 1 } : item
      );
      return {
        ...state,
        selectedItems: updatedItems,
        ...sumItems(updatedItems)
      };
    }
    case "CHECKOUT":
      return {
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        checkout: true
      };
    case "CLEAR":
      return {
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        checkout: false
      };
    default:
      return state;
  }
};

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
