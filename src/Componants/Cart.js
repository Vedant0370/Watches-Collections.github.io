


import React from 'react'
import { useCart } from 'react-use-cart'

const Cart = () => {

    const { removeItem, updateItemQuantity, items, totalItems, totalUniqueItems, cartTotal } = useCart();

    return (
        <>

            <div className='container'>
                <h1 className='text-center mt-5 fontfamily3'>Cart Collection</h1>

                <table className='table table-stripe hover mt-5'>
                    <tr>

                        <th className='card-text1'>ID</th>
                        <th className='card-text1'>IMAGE</th>
                        <th className='card-text1'>NAME</th>
                        <th className='card-text1'>PRISE</th>
                        <th className='card-text1'>COLOR</th>
                        <th className='card-text1'>ACTION</th>

                    </tr>


                    {

                        items.map((cval) => {
                            return (
                                <>

                                    <tr>

                                        <td>{cval.id}</td>
                                        <td><img src={cval.cover} style={{ height: "200px", width: "200px" }}></img></td>
                                        <td className='card-text3'>{cval.name}</td>
                                        <td className='card-text3'>{cval.price}</td>
                                        <td className='card-text3'>{cval.color}</td>
                                        <td className='card-text3'>{cval.action}</td>

                                        {/* <td><button onClick={() => updateItemQuantity(cval.id, cval.quantity - 1)}>-</button></td> */}



                                       <td> <i  onClick={() => updateItemQuantity(cval.id, cval.quantity - 1)} class="fa-solid fa-minus" style={{fontSize:"1.5rem"}}></i></td>

                                        <td>{cval.quantity}</td>


                                        {/* <td><button onClick={() => updateItemQuantity(cval.id, cval.quantity + 1)}>+</button></td> */}

                                        <td> <i  onClick={() => updateItemQuantity(cval.id, cval.quantity + 1)} class="fa-solid fa-plus" style={{fontSize:"1.5rem"}}></i></td>

                                        <td><button className='btn btn-danger text-dark  remove-btn' onClick={() => removeItem(cval.id)}>Remove</button></td>
                                    </tr>


                                </>
                            );
                        })






                    }




                    <h3 className='fontfamily3'>Total = {cartTotal}</h3>
                </table>

            </div>


        </>
    )
}

export default Cart