


import React from 'react'
import PData from './ProductData';
import { useParams } from 'react-router-dom'

const ProductInfo = () => {

    const { id } = useParams();
    console.log(id)
    

    return (
        <>
                <h1 className='text-center text-info my-5'>Product Info</h1>
            {

                PData.map((cval) => {

                    if (id == cval.id) {

                        return (
                            <>
                                <div className='container'>

                                    <div className='row'>

                                        <div className='col-md-5'>

                                            <img src={cval.cover} height={"400"}width={"400"} alt="Add to cart image"/>

                                        </div>

                                        <div className='col-md-7 mt-5'>

                                           <h1>Name : {cval.name}</h1>
                                           <h3>Prise : {cval.prise}</h3>
                                           <p class="badge bg-warning text-dark">Color : {cval.color}</p>
                                           <p>{cval.description}</p>
                                           <button className='btn btn-dark'>Add To Cart</button>

                                        </div>

                                    </div>
                                </div>


                            </>
                        )
                    }
                })

            }


        </>
    )
}

export default ProductInfo;