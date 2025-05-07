import React from 'react';
import { Link } from 'react-router-dom'; // Added missing import
import { items } from './Data';

function Product() {
  return (
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
              <button className="btn btn-warning">Add to Cart</button> {/* Fixed button */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
