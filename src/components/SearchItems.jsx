import React from 'react';
import { useParams } from 'react-router-dom';
import { items } from './Data';

export default function SearchItems() {
  const { term } = useParams();
  const results = items.filter((item) =>
    item.title.toLowerCase().includes(term.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h2>Search Results for "{term}"</h2>
      <div className="row">
        {results.length > 0 ? (
          results.map((item) => (
            <div key={item.id} className="col-md-4 mb-4">
              <div className="card h-100">
                <img src={item.imgSrc} className="card-img-top" alt={item.title} />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <p className="card-text fw-bold">₹{item.price}</p>
                  <a href={item.amazonLink} className="btn btn-primary" target="_blank" rel="noreferrer">Buy</a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No matching products found.</p>
        )}
      </div>
    </div>
  );
}
