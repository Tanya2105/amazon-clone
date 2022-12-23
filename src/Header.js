import React from 'react';
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from "react-router-dom";


function Header() {
  
  return (
    <div className='header'>
      <Link to ="/">
      <img 
            className="header_logo"
            src= "https://ecellmlnc.com/wp-content/uploads/2021/04/AMAZON.jpg" alt=" 9"
        />
      </Link>
        
        <div
        className="header__search">
            <input
            className="header__searchInput"type ="text"/>
            <SearchIcon
            className='header__searchIcon'/>
            {/* logo*/}
        </div>
        
        <div className="header__nav">
          <div className='header__option'>
            <span
              className='header__optionLine1'>Hello Guest</span>
            <span
              className='header__optionLine2'>Sign In</span>

          </div>
          <div className='header__option'>
            <span
              className='header__optionLine1'>Returns</span>
            <span
              className='header__optionLine2'>& Orders</span>

          </div>
          <div className='header__option'>
          <span
              className='header__optionLine1'>Your</span>
            <span
              className='header__optionLine2'>Prime</span>

          </div>
          <Link to="/checkout">
          <div className='header__optionBasket'>
            <ShoppingCartIcon/>
            <span className='header__optionLine2 header__basketCount'>0</span>
          </div>
          </Link>

        </div>
      
    </div>
  )
}

export default Header
