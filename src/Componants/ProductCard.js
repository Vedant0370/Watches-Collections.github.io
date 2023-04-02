
import React from 'react'
import { NavLink } from 'react-router-dom'
import { useCart } from 'react-use-cart';



const ProductCard = (props) => {

    const {addItem} = useCart();
    return (
        <>


            <div className='col-md-4 mb-4 'data-aos="zoom-in-up">
                <div class="card">
                    <img class="card-img-top" src={props.cover} alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title text-center card-text1">{props.name}</h5>
                        <h5 class="card-title text-center card-text2">Price : {props.price}</h5>
                        <h5 class="card-title text-center card-star"><i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>{props.rating}</h5>
                        {/* <h5 class="card-title text-center">{props.color}</h5> */}  
                       
                          <NavLink to={`/productinfo/${props.id}`}>
                             <button class="btn btn-success float-end">Know More</button><br/>
                          </NavLink> 

                          <NavLink to={"/cart"}>
                             {/* <button class="btn btn-danger" title={`product${props.id}`} onClick={()=>addItem(props.item)}>Add To Cart</button> */}

                             {/* <button className='btn btn-success' onClick={() => addItem(props.item)}>Click me to add</button> */}
                          </NavLink> 

                        <div class="card-cart">
                            {/* <NavLink to={"/cart"}> */}

                           {/* <button className='btn btn-primary' onClick={() => addItem(props.item)}>Add TO Cart</button> */}
                           <i class="fa-solid fa-cart-shopping"  onClick={() => addItem(props.item)}></i>
                            {/* </NavLink> */}

                        </div>
                        <div class="card-cart2">
                            <i class="fa-solid fa-heart"></i>
                        </div>
                        <div class="card-cart3">
                            <i class="fa-solid fa-eye"></i>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default ProductCard