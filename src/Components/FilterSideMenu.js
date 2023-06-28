import React, { useContext } from 'react'
import { FilterContext } from '../Context/FilterContext'


const FilterSideMenu = () => {
    const {
        filters: { text, category, color },
        updateFilterValue, all_products, clearFilters } = useContext(FilterContext);

    // const getCategoryData=(data)=>{
    //   let newValue=data.map((curE)=>{
    //     return curE.category
    //   })
    //   newValue= [...new Set(newValue)]
    //   console.log(newValue);
    // }
    // const  categoryData=getCategoryData(all_products); ye wala b kr sakte the but baki sabke sath krna h to 


    const getCategoryData = (data, property) => {
        let newValue = data.map((curE) => {
            return curE[property]
        })

        if (property === "colors") {
            return (newValue = ["all", ...new Set([].concat(...newValue))])
            // newValue=newValue.flat();ye b use kr sakte h else part remove krna padega
        }
        else {
            return (newValue = ["all", ...new Set(newValue)])
        }
    }
    const categoryData = getCategoryData(all_products, "category");
    const companyData = getCategoryData(all_products, "company");
    const colorsData = getCategoryData(all_products, "colors");

    return (
        <div className="col-lg-3 col-md-4">
            <div className="bg-light p-4 mb-30">
                <form onSubmit={(e) => e.preventDefault()}>
                    <input className="form-control"
                        type='text'
                        placeholder='Search'
                        name='text'
                        value={text}
                        onChange={updateFilterValue}
                    />
                </form>
            </div>
            <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Filter by Category</span></h5>
            <div className="bg-light p-4 mb-30">
                {categoryData.map((curE, index) => {
                    return (
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3" key={index}>
                            <input type="radio" className="custom-control-input" id={index} 
                                value={curE}
                                name='category'
                                onClick={updateFilterValue} />
                            <label className="custom-control-label" for={index}>{curE}</label>
                            <span className="badge border font-weight-normal"></span>
                        </div>
                    )
                })}
            </div>
            <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Filter by Company</span></h5>
            <div className="bg-light p-4 mb-30">
                <div className='row'>
                    <select className='form-control' name='company' id='company' onClick={updateFilterValue}>
                        {companyData.map((curE, index) => {

                            return (
                                <option value={curE} name="company" key={index}>{curE}</option>
                            )
                        })}
                    </select>
                </div>
            </div>
            <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Clear Filters</span></h5>
            <div className="bg-light p-4 mb-30">
                <div className='row'>
                <button onClick={clearFilters}>Clear Filters</button>
                </div>
            </div>
        </div>

    )
}

export default FilterSideMenu