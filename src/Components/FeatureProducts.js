import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import FormatPrice from '../Helper/FormatPrice';
import {NavLink} from "react-router-dom"

const FeatureProducts = () => {
    const {featureProducts}=useContext(AppContext)
    // console.log(featureProducts);
    return (
        <div className="container-fluid pt-5 pb-3">
            <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Featured Products</span></h2>
            <div className="row px-xl-5">
            {featureProducts.map((curElem)=>{
                const {id,name,company, price,discription,image}=curElem
                return(
                    
                    <div className="col-lg-4 col-md-4 col-sm-6 pb-1">
                    <div className="product-item bg-light mb-4">
                        <div className="product-img position-relative overflow-hidden">
                        <img className="img-fluid w-100" src={image} alt="" /> 
                            <div className="product-action">
                                <NavLink className="btn btn-outline-dark btn-square" to="/shopingcart"  ><i className="fa fa-shopping-cart"></i></NavLink>
                                <a className="btn btn-outline-dark btn-square" href=""><i className="far fa-heart"></i></a>
                                <NavLink className="btn btn-outline-dark btn-square" to= {`/singlepage/${id}`}><i className="fa fa-sync-alt"></i></NavLink>
                                <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-search"></i></a>
                            </div>
                        </div>
                        <div className="text-center py-4">
                            <a className="h6 text-decoration-none text-truncate" href="">{name}</a>
                            <div className="d-flex align-items-center justify-content-center mt-2">
                                <h5><FormatPrice price={price}/></h5><h6 className="text-muted ml-2"><del><FormatPrice price={price+2000}  /></del></h6>
                            </div>
                            
                        </div>
                    </div>  
                </div> 
                
                )
            })}
                
                
                
                
                
                
            </div>
        </div>
    )
}

export default FeatureProducts