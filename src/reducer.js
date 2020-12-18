export const initialState = {
  baseUrl:"http://localhost:5000",
  cart: [],
  user:null
};

export const actionTypes = {
  ITEM_ADD: "ITEM_ADD",
  ITEM_REMOVE: "REMOVE",
  EMPATY_CART:"EMPATY_CART",
  SET_USER:"SET_USER",
  REMOVE_USER:"REMOVE_USER"
};
const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user:action.user
      }
    case actionTypes.REMOVE_USER:
      return {
        ...state,
        user:""
      }
    case actionTypes.ITEM_ADD:
      return {
        ...state,
        cart: [...state.cart, action.cart],
        
      };

    case actionTypes.ITEM_REMOVE:
      let cart1 = state.cart;
     
      let remove = cart1.map((item, index) => {
        if ((item.id = action.id)) {
          return index;
        }
      });
      cart1.splice(remove, 1);

      return {
        ...state,
        cart: cart1,
      };
      case actionTypes.EMPATY_CART:
        console.log("Call the empty cart")
        return {
          ...state,
          cart:[]
        }
  }
};
export default reducer;
