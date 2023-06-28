import React, { useState } from 'react'

const SinglePageImages = ({ imgs = [{ url: "" }] }) => {
    const[mainImage,setMainImage]=useState(imgs[0])

    return (
        <div className="carousel slide" >
            <div className='row'>
                <div className='col-4'>
                    {imgs.map((curElem, index) => {
                        return (
                            <div key={index}>
                                <img  src={curElem.url} style={{ height: "90px", width: "120px", padding: "2px" }} 
                                    onClick={()=>setMainImage(curElem)}
                                />
                            </div>
                        )
                    })}
                </div>
                <div className='col-8'>
                    <img src={mainImage.url} alt="sdf" style={{ height: "280px", width: "300px", marginTop:"30px" }} />
                </div>

            </div>

        </div>
           
    )
}

export default SinglePageImages