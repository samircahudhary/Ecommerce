import React from 'react';
import { Link } from 'react-router-dom'; // Added missing import
import { items } from './Data';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';


function Product ({items,cart,setCart}) {
  const addToCart = (id,price ,title,description,imgSrc) => {
    const obj={id,price,title,description,imgSrc}
    setCart ([...cart,obj])
    console.log(cart)
    toast.success('your item is added in Cart', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
      });
  }
  return (
    <>
    <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
transition={Bounce}

/>
    <div className="container my-5">
      
      <div className="row">
        {items.map((product) => (
          <div className="card m-2" style={{ width: '22rem' }} key={product.id}>
            <Link
              to={`/product/${product.id}`} // Fixed dynamic route
              style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
              <img src={product.imgSrc} className="card-img-top" alt={product.title} />
            </Link>
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.description}</p>
              <button className="btn btn-primary mx-2">{product.price} ₹</button>
              <button
              onClick={() => addToCart(product.id,product.price,product.title,product.description,product.imgSrc)}
               className="btn btn-warning">Add to Cart</button> {/* Fixed button */}
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Product;
