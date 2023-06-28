import React, { useContext } from 'react'
import { FilterContext } from '../Context/FilterContext'

const FilterMenuTop = () => {
    const { setGridView, setListView, filter_products, sorting } = useContext(FilterContext)

    return (

        <div className="col-12 pb-1">
            <div className="d-flex align-items-center justify-content-between mb-4">
                <div>
                    <button className="btn btn-sm btn-light" onClick={setGridView}><i className="fa fa-th-large"></i></button>
                    <button className="btn btn-sm btn-light ml-2" onClick={setListView}><i className="fa fa-bars"></i></button>
                </div>
                <div className="ml-2">
                <form action='#'>
                        <select  className="form-control"name="sort"
                            id="sort"
                            onClick={sorting} >
                            <option value="lowest">Lowest</option>
                            <option value="higest">Higest</option>
                            <option value="a-z">A-Z</option>
                            <option value="z-a">Z-A</option>

                        </select>

                    </form>
                   
                </div>
            </div>
        </div>
    )
}

export default FilterMenuTop