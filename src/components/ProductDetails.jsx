import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { items } from './Data';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);

  useEffect(() => {
    const foundProduct = items.find((p) => p.id === Number(id));
    setProduct(foundProduct || null);

    if (foundProduct) {
      const relatedProducts = items.filter(
        (p) => p.category === foundProduct.category && p.id !== foundProduct.id
      );
      setSimilarProducts(relatedProducts);
    } else {
      setSimilarProducts([]);
    }
  }, [id]);

  return (
    <div className='containers'>
      {product ? (
        <>
          <div className="product-details">
            <div className="imgmain">
              <img src={product.imgSrc} alt={product.title} />
            </div>
            <div className="detail">
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <h3>Price: {product.price} ₹</h3>
              <a href={product.amazonLink} target="_blank" rel="noopener noreferrer">
                <button className='btn btn-primary'>Buy Now</button>
              </a>
            </div>
          </div>

          {/* Similar Products Section */}
          {similarProducts.length > 0 && (
            <div className="similar-products">
              <h3>Similar Products</h3>
              <div className="product-list">
                {similarProducts.map((similarProduct) => (
                  <div key={similarProduct.id} className="product-card">
                    <img src={similarProduct.imgSrc} alt={similarProduct.title} />
                    <h4>{similarProduct.title}</h4>
                    <p>Price: {similarProduct.price} ₹</p>
                    <a href={`/product/${similarProduct.id}`}>
                      <button className='btn btn-secondary'>View Details</button>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      ) : (
        <p>Loading product...</p>
      )}
    </div>
  );
};

export default ProductDetails;
