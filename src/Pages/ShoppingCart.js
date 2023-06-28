import React, { useContext } from 'react'
import { NavLink } from "react-router-dom"
import { CartContext } from "../Context/CartContext"
import FormatPrice from "../Helper/FormatPrice"

const ShoppingCart = () => {
    const { cart, colors } = useContext(CartContext);
    const { removeItem, removeAllItems,setIncrease ,setDecrease,total_amount,shipping_fee} = useContext(CartContext);
    
    // console.log(cart, colors);
    return (
        <div className="container-fluid">
            <div className="row px-xl-5">
                <div className="col-lg-8 table-responsive mb-5">
                    <table className="table table-light table-borderless table-hover text-center mb-0">
                        <thead className="thead-dark">
                            <tr>
                                <th>Products</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody className="align-middle">
                            {
                                cart.map((curE) => {
                                    const { id, name, image, price, amount } = curE

                                    return (
                                        <tr>
                                            <td className="align-middle"><img src={image} alt="imag" style={{ width: "50px" }} /> {name}</td>
                                            <td className="align-middle"><FormatPrice price= {price}/></td>
                                            <td className="align-middle">
                                                <div className="input-group quantity mx-auto" style={{ width: "100px" }}>
                                                    <div className="input-group-btn">
                                                        <button className="btn btn-sm btn-primary btn-minus" onClick={() => setDecrease(id)}>
                                                            <i className="fa fa-minus"></i>
                                                        </button>
                                                    </div>
                                                    <input type="text" className="form-control form-control-sm bg-secondary border-0 text-center" value={amount} />
                                                    <div className="input-group-btn">
                                                        <button className="btn btn-sm btn-primary btn-plus" onClick={() => setIncrease(id)}>
                                                            <i className="fa fa-plus"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="align-middle"><FormatPrice price={price * amount}/></td>
                                            <td className="align-middle"><button className="btn btn-sm btn-danger" onClick={()=>removeItem(id)}><i className="fa fa-times"></i></button></td>
                                        </tr>
                                    )
                                })
                            }


                        </tbody>
                    </table>
                </div>
                <div className="col-lg-4">
                    <form className="mb-30" action="">
                        <div className="input-group">
                            <input type="text" className="form-control border-0 p-4" placeholder="Coupon Code" />
                            <div className="input-group-append">
                                <button className="btn btn-primary">Apply Coupon</button>
                            </div>
                        </div>
                    </form>
                    <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Cart Summary</span></h5>
                    <div className="bg-light p-30 mb-5">
                        <div className="border-bottom pb-2">
                            <div className="d-flex justify-content-between mb-3">
                                <h6>Subtotal</h6>
                                <h6><FormatPrice price={total_amount}/></h6>
                            </div>
                            <div className="d-flex justify-content-between">
                                <h6 className="font-weight-medium">Shipping</h6>
                                <h6 className="font-weight-medium"><FormatPrice price={shipping_fee}/></h6>
                            </div>
                        </div>
                        <div className="pt-2">
                            <div className="d-flex justify-content-between mt-2">
                                <h5>Total</h5>
                                <h5><FormatPrice price={total_amount+shipping_fee}/></h5>
                            </div>
                            <NavLink to="/checkout"><button className="btn btn-block btn-primary font-weight-bold my-3 py-3">Proceed To Checkout</button></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCart