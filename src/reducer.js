export const initialState = {
  baseUrl:"https://sp18-bse-026backend.herokuapp.com",
  cart: [],
  user:null
};

export const actionTypes = {
  ITEM_ADD: "ITEM_ADD",
  ITEM_REMOVE: "REMOVE",
  EMPATY_CART:"EMPATY_CART",
  SET_USER:"SET_USER",
  REMOVE_USER:"REMOVE_USER",
  INC:"INC",
  DEC:"DEC"
};
const reducer = (state, action) => {
  console.log("value of state",state)
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
      case actionTypes.DEC:
        state?.cart?.filter((item,index)=>{
          if(item?.id==action?.id){
            if(item?.quantity>1)
           { console.log(item.id,action.id)
              item.quantity=item?.quantity-1
            return index}
          }})
        return {
          ...state,
        
        }
      case actionTypes.INC:

//         let newindex;

        state?.cart?.filter((item,index)=>{
          if(item?.id==action?.id){
            
            console.log(item.id,action.id)
              item.quantity=item?.quantity+1
            return index
          }})
        return {
          ...state,
        }
        

    case actionTypes.ITEM_ADD:
    console.log("add cart",state.cart)  
    return {
        ...state,
        cart: [...state.cart,action.cart],
        
      };

    case actionTypes.ITEM_REMOVE:
      let cart1 = state.cart;
     
      let newarr=state?.cart?.filter(item=>(item.id!==action.id))
      console.log(newarr)
      return {
        ...state,
        cart: newarr,
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
