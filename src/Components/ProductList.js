import React from 'react'
import GridView from './GridView';
import ListView from './LIstView';
import { useContext } from 'react';
import { FilterContext } from '../Context/FilterContext';

const ProductList = () => {
    const {filter_products, grid_view}=useContext(FilterContext)
    // console.log(filter_products);

    if (grid_view===true){
        return(
            <GridView products={filter_products}/>
        )
    }
    if (grid_view===false){
        return(
            <ListView products={filter_products}/>
        )
    }
   
  
}

export default ProductList