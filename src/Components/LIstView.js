import React from 'react'
import FormatPrice from '../Helper/FormatPrice'
import { NavLink } from 'react-router-dom'

const ListView = ({ products }) => {
    // console.log(products);
    return (
        <div classNameName='container'>
            {products.map((curElem) => {
                const { id, name, image, description, price } = curElem
                return (
                    <div className="card mb-3" key={id}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={image} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{name}</h5>
                                    <p className="card-text">{description.slice(0, 50)}</p>
                                    <p className="card-text"><small className="text-muted"><FormatPrice price={price} /></small></p>
                                    <NavLink to={`/singleitem/${id}`}>
                                        <button className='btn btn-success'>add to cart</button>
                                    </NavLink>
                                </div>

                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ListView