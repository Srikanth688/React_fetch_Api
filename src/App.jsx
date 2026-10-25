
import React, { useEffect, useState } from 'react';
import './App.css';
import Loader from './Loader';

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setError('Please try after some time');
        console.log('Error loading data');
      });
  }, []);

  return (
    <div className="product-container">
      <h2 className="title">Product List</h2>

      {loading && <Loader />}

      {error && <h2>{error}</h2>}

      {!loading && !error && (
        <div className="products-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img
                src={product.thumbnail}
                alt={product.title}
              />

              <h3>{product.title}</h3>
              <p>Price: ${product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
