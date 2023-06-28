import React, { useContext, useState } from 'react'
import CartAmountToggle from './CartAmountToggle'
import { NavLink } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';

const AddToCart = ({ product }) => {
    const { addToCart } = useContext(CartContext);
    const [amount, setAmount] = useState(1);
    const { id, stock, colors } = product
    const setDecrease = () => {
        amount > 1 ? setAmount(amount - 1) : setAmount(1)
    }
    const setIncrease = () => {
        amount < stock ? setAmount(amount + 1) : setAmount(stock)

    }
    return (


        <div className="d-flex align-items-center mb-4 pt-2">
            <div className="input-group quantity mr-3" style={{ width: "130px" }}>
                <div className="input-group-btn">
                    <button className="btn btn-primary btn-minus" onClick={() => setDecrease()}>
                        <i className="fa fa-minus"></i>
                    </button>
                </div>
                <input type="text" className="form-control bg-secondary border-0 text-center" value={amount} />
                <div className="input-group-btn">
                    <button className="btn btn-primary btn-plus" onClick={() => setIncrease()}>
                        <i className="fa fa-plus"></i>
                    </button>
                </div>
            </div>
            <NavLink to="/shopingcart" onClick={() => addToCart(id, colors, amount, product)}>
                <button className="btn btn-primary px-3"><i className="fa fa-shopping-cart mr-1"></i> Add To
                    Cart
                </button>
            </NavLink>
        </div>







    )
}

export default AddToCart