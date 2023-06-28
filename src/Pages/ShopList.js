import React from 'react'
import GridView from '../Components/GridView'
import FilterSideMenu from '../Components/FilterSideMenu'
import FilterMenuTop from '../Components/FilterMenuTop'
import ProductList from '../Components/ProductList'

const ShopList = () => {
    return (
        <div className="container-fluid">
            <div className="row px-xl-5">
                <FilterSideMenu />
                <div className="col-lg-9 col-md-8">
                    <div className="row pb-3">
                        <FilterMenuTop />
                        <ProductList />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopList