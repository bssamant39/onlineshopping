import { createContext, useEffect, useReducer } from "react";
import reducer from '../Reducers/Reducer';
export const API = "https://api.pujakaitem.com/api/products"
const AppContext = createContext();
const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isSingleLoading: false,
    singleProduct: {},

}
const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    //1st API CALL 
    const getItem = async (API) => {
        dispatch({ type: "SET_LOADING" })
        try {
            const res = await fetch(API)
            const data = await res.json();
            // console.log(data);
            dispatch({
                type: "SET_API_DATA",
                payload: data,
            })
        } catch (error) {
            dispatch({ type: "API_ERROR" })
        }

    }
    //2nd API CA
    const getSingleProduct = async (API) => {
        dispatch({ type: "SET_SINGLE_LOADING" });
        try {
            const res = await fetch(API);
            const singleProduct = await res.json();
            // console.log(singleProduct);
            dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
        } catch (error) {
            dispatch({ type: "SET_SINGLE_ERROR" });
        }
    };

    useEffect(() => {
        getItem(API);
    }, [])
    return (
        <AppContext.Provider value={{ ...state, getSingleProduct }}>
            {children}
        </AppContext.Provider>
    )

}

export { AppContext, AppProvider }