


import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbarnew = () => {
  return (
    <>

  


                {/* seconf navbar start  */}

      

    <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid">
        <a class="navbar-brand companyname" href="#"  data-aos="flip-right">
          WATCHES COLLECTION <img src='https://cdn-icons-png.flaticon.com/512/4388/4388230.png' height={"55px"}width=
          {"60px"}></img></a>

                    
            <button class="navbar-toggler navbae-icon" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class=" collaps collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav  m-auto  mb-2 mb-lg-0">

                <li class="nav-item">
                {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
                <NavLink className="nav-link active me-5" aria-current="page" to="/">Home</NavLink>
              </li>

              <li class="nav-item">
                {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
                <NavLink className="nav-link active me-5" aria-current="page" to="/">New Watches</NavLink>
              </li>

              <li class="nav-item">
                {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
                <NavLink className="nav-link active me-5" aria-current="page" to="/">Products</NavLink>
              </li>

              <li class="nav-item">
                {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
                <NavLink className="nav-link active me-5" aria-current="page" to="/">Contact</NavLink>
              </li>


                </ul>

                   <form class="d-flex">
              <NavLink to="/cart">

                <button class="btn btn-outline-dark  cartbtn" type="submit"><i class="fa-solid fa-cart-shopping"></i></button>

              </NavLink>
            </form>
            </div>
        </div>
    </nav>
    



{/* seconf navbar start  */}





    </>
  )
}

export default Navbarnew