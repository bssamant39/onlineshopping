import React from 'react'

const SinglePageColors = ({ product }) => {
    const { id, colors, stock } = product;

    return (
        <div>
            {/* {colors.map((curElem, index) => {
                return (
                    <button key={index} style={{ backgroundColor: curElem }} >{curElem}</button>
                )
            })} */}


        </div>
    )
}

export default SinglePageColors