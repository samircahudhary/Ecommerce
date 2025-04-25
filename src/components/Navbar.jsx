import React from 'react';


const Navbar = () => {
    return (
      <>
      <header >
        <div className='navbar'>
        <div className='brand'>E-cart</div>
        <div className='searchbar'>
            <input type="text" placeholder='Search for products' className='searchinput' />
            <button className='searchbutton'>Search</button>
        </div>
        <div className='cart'>Cart</div>
        </div>
      </header>
      <header>
        <div className='navbar2'>
            <div className="items">Filter by :</div>
            <div className="items">No Filter</div>
            <div className="items">Mobiles</div>
            <div className="items">Laptops</div>
            <div className="items">Tabalets</div>
            <div className="items"> less than Rs999</div>
            <div className="items"> greater than Rs 999999</div>
            <div className="items"> between Rs9000-99999</div>
            <div className="items"> Offers</div>
        </div>
      </header>
      </>
    );
};

export default Navbar;