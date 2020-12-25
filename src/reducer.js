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
console.log("new ceck ",state.cart)
        let newarry;
        state.cart.map((item,index)=>{
          if(item.id==action.id){
            newarry=index;
          
          }
        })
        let obj=state.cart;
        console.log("del In",obj[newarry].quantity)

        obj[newarry].quantity=obj[newarry].quantity-1;
        
         console.log(" del qa",obj)
        return {
          ...state,
        
        }
      case actionTypes.INC:

//         let newindex;

        let value=state?.cart?.filter((item,index)=>{
          if(item?.id==action?.id){
            console.log(item.id,action.id)
              item.quantity=item?.quantity+1
            return index
          }})
          console.log("new try",value)
//         })
//         let obj1=[...state?.cart]
//         console.log("obj1 sklfns",obj1[newindex].quantity)
// obj1[newindex].quantity=obj1[newindex].quantity+1

 


//         console.log("obj1",obj1[newindex].quantity)
        // console.log(" inc before qa In",obj1[newindex]?.quantity)
        //  obj1[newindex].quantity=obj1[newindex].quantity+1;
        //  let dup={...obj1}
  //  obj1.splice(newindex,1)
        //  console.log("new arr",newarr2)
        //  obj1.splice(newindex, 0);
        //  console.log("inc qa In",obj1[newindex].quantity)
        // console.log("after obj1",obj1[newindex].quantity) 
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
