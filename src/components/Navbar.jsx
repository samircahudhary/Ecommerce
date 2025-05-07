import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { items } from './Data';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ setData }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  
  const filterByCategory = (category) => {
    const filtered = items.filter((product) => product.category === category);
    setData(filtered);
  };

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/search/${searchTerm}`);
    }
  };

  return (
    <>
      <header className='sticky-top'>
        <div className='navbar d-flex justify-content-between align-items-center p-3'>
          <Link to='/' className='brand'>E-cart</Link>
          <div className='searchbar d-none d-md-flex'>
            <input
              type="text"
              placeholder='Search for products'
              className='searchinput form-control me-2'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch} className='searchbutton btn btn-primary'>Search</button>
          </div>
          <Link to={'/cart'} className='cart'>Cart</Link>
          <button className='navbar-toggler d-md-none' type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu"></button>
        </div>
        <div className="collapse navbar-collapse" id="navbarMenu">
          <div className='searchbar d-flex d-md-none'>
            <input
              type="text"
              placeholder='Search for products'
              className='searchinput form-control me-2'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch} className='searchbutton btn btn-primary'>Search</button>
          </div>
        </div>
      </header>

      <header>
        <div className='navbar2 d-flex flex-wrap justify-content-center p-3'>
          <button className='navbar-toggler d-md-none' type="button" data-bs-toggle="collapse" data-bs-target="#navbar2Menu">
            <span className="navbar-toggler-icon">☰</span>
          </button>
          <div className="collapse d-md-flex" id="navbar2Menu">
            <div className="items px-2 mx-3">Filter by :</div>
            <div className="items px-2 mx-3" onClick={() => setData(items)}>No Filter</div>
            <div className="items px-2 mx-3" onClick={() => filterByCategory('mobiles')}>Mobiles</div>
            <div className="items px-2 mx-3" onClick={() => filterByCategory('laptops')}>Laptops</div>
            <div className="items px-2 mx-3" onClick={() => filterByCategory('tablets')}>Tablets</div>
            <div className="items px-2 mx-3" onClick={() => setData(items.filter(item => parseInt(item.price) < 999))}>less than Rs999</div>
            <div className="items px-2 mx-3" onClick={() => setData(items.filter(item => parseInt(item.price) > 999999))}>greater than Rs999999</div>
            <div className="items px-2 mx-3" onClick={() => setData(items.filter(item => parseInt(item.price) >= 9000 && parseInt(item.price) <= 99999))}>between Rs9000-99999</div>
            <div className="items px-2 mx-3">Offers</div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
