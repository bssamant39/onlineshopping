import React from 'react'
import SideBar from './SideBar'
import TopBar from './TopBar'
import Cart from './Cart'

const Shop = () => {
    return (
        <div className="container-fluid">
            <div className="row px-xl-5">
                <SideBar />
                <div className="col-lg-9 col-md-8">
                    <div className="row pb-3">
                        <TopBar />
                        <Cart />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop