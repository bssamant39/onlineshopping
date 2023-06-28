
const CartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, colors, amount, product } = action.payload
    // console.log(product);

    // tackle the existing product

    let existingProducts = state.cart.find((curE) => {
      return curE.id === id + colors
    })
    // console.log(existingProducts);
    if (existingProducts) {
      let updatedProduct = state.cart.map((curE) => {
        if (curE.id === id + colors) {
          let newAmount = curE.amount + amount
          if (newAmount >= curE.max) {
            newAmount = curE.max
          }
          return {
            ...curE,
            amount: newAmount
          }
        }
        else {
          return curE
        }
      })
      return {
        ...state,
        cart: updatedProduct
      }
    }
    else {
      let cartProduct = {
        id: id + colors,
        name: product.name,
        colors,
        amount,
        image: product.image[0].url,
        price: product.price,
        max: product.stock,
      };

      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }

  //DECREMENT
  if (action.type === "SET_DECREMENT") {
    let updatedProduct = state.cart.map((curE) => {
      if (curE.id === action.payload) {
        let decAmount = curE.amount - 1
        if (decAmount <= 1) {
          decAmount = 1;
        }
        return {
          ...curE,
          amount: decAmount
        }
      }
      else {
        return curE
      }
    })
    return {
      ...state,
      cart: updatedProduct
    }

  }
  //Incremenet

  if (action.type === "SET_INCREMENT") {
    let updatedProduct = state.cart.map((curE) => {
      if (curE.id === action.payload) {
        let incAmount = curE.amount + 1
        if (incAmount >= curE.max) {
          incAmount = curE.max;
        }
        return {
          ...curE,
          amount: incAmount
        }
      }
      else {
        return curE
      }
    })
    return {
      ...state,
      cart: updatedProduct
    }

  }
  if (action.type === "SET_INCREMENT") {

  }


  if (action.type === "REMOVE_ITEM") {
    let updatdCart = state.cart.filter((curE) => {
      return curE.id !== action.payload
    })
    return {
      ...state,
      cart: updatdCart
    }
  }
  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    }
  }

  if (action.type === "CART_TOTAL_ITEM") {
    let updatedItemVal = state.cart.reduce((initialVal, curE) => {
      let { amount } = curE
      initialVal = initialVal + amount
      return initialVal

    }, 0)
    return {
      ...state,
      total_item: updatedItemVal
     }
  }

  if (action.type === "CART_TOTAL_PRICE") {
    let total_price = state.cart.reduce((initialVal, curE) => {
      let {price,amount } = curE
      initialVal = initialVal  + price * amount
      return initialVal

    }, 0)
    return {
      ...state,
      total_amount: total_price
     }
  }
  return state
}

export default CartReducer