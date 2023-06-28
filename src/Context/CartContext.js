import { createContext, useEffect, useReducer } from "react";
import reducer from "../Reducers/CartReducer"

const CartContext = createContext();

const getLocalCartData=()=>{
    let localCartData=localStorage.getItem("CartStorage")
    if (localCartData===[]){
        return(
            []
        )
    }
    else return(
        JSON.parse(localCartData)
    )
}
const initialState = {
    // cart: [],
    cart:getLocalCartData(),
    total_item: "",
    total_amount: "",
    shipping_fee: 500,
}
const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)
    const addToCart = (id, colors, amount, product) => {
        dispatch({
            type: "ADD_TO_CART",
            payload: {
                id, colors, amount, product
            }
        })
    }
    //Decrease Items
    const setDecrease=(id)=>{
        dispatch({type:"SET_DECREMENT",payload:id})
    }
    //Increase Items
    const setIncrease=(id)=>{
        dispatch({type:"SET_INCREMENT",payload:id})

    }
    const removeItem = (id) => {
        dispatch({
            type: "REMOVE_ITEM",
            payload: id
        })


    }
    const removeAllItems=()=>{
        dispatch({type:"CLEAR_CART"})
    }
    useEffect(()=>{
        dispatch({type:"CART_TOTAL_ITEM"})
        dispatch({type:"CART_TOTAL_PRICE"})
        localStorage.setItem("CartStorage",JSON.stringify(state.cart))
    },[state.cart])
    return (
        <CartContext.Provider value={{ ...state, addToCart, removeItem,removeAllItems,setIncrease,setDecrease }}>
            {children}
        </CartContext.Provider>
    )

}
export { CartContext, CartProvider }