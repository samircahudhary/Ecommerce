import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { items } from './Data';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Navbar = ({ setData,cart }) => {
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
    <ToastContainer
  position="top-right"
  autoClose={2000} // Automatically close the toast after 2000ms (2 seconds)
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick={false}
  rtl={false}
  pauseOnFocusLoss
  draggable
  theme="dark"
  transition={Bounce}
/>

<header className='sticky-top'>
  <div className='navbar d-flex justify-content-between align-items-center p-3'>
    <Link to='/' className='brand' 
    onClick={() => toast.success('🏠 Navigated to Home', { autoClose: 2000 })}
    >E-cart</Link>
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
    <Link to={'/cart'} className='cart'>
      <button type="button" className="btn btn-primary position-relative">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-cart-check-fill" viewBox="0 0 16 16"></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart-check-fill" viewBox="0 0 16 16">
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708"/>
</svg>
  Cart
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {cart.length}
    <span class="visually-hidden">unread messages</span>
  </span>
</button>
        </Link>
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
            <div  className="items px-2 mx-3" onClick={() => setData(items)}>No Filter
              
            </div>
            <div className="items px-2 mx-3"  onClick={() =>{ filterByCategory('mobiles')
              toast.info('Filter By MOBILES'),{ autoClose: 2000, closeOnClick: true };}
            }>Mobiles</div>
            <div className="items px-2 mx-3" onClick={() => {filterByCategory('laptops')
            toast.info('Filter By LAPTOPS');}
            }>Laptops</div>
            <div className="items px-2 mx-3" onClick={() => {filterByCategory('tablets')
            toast.info('Filter By TABLETS');}
            }>Tablets</div>
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
