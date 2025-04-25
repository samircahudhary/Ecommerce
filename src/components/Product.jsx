import React from 'react';
import { items } from './Data';
function Product() {
  


  return (
    <div className="container my-5">
      <div className="row">
        {items.map((product) => (
          <div className="card m-2" style={{ width: '22rem' }} key={product.id}>
            <img src={product.imgSrc} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product. description}</p>
              <button className='btn btn-primary mx-2'>{product.price} </button>
              <a href="amazonLink" className="btn btn-warning">
                Add to Cart
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
