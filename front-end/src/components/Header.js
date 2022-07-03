import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Header() {
  return (
    <div className="header">
      <img
        className = "header__logo"
        src="https://cdn.dribbble.com/users/5973612/screenshots/15562505/media/09b4b643795255603029f9140aa4602a.jpg?compress=1&resize=400x300&vertical=top"
        alt="home logo"
      />

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon"/>
      </div>

      <div className="header__nav">
          <div className="header__option">
              <span className="header__optionLineOne">Hello</span>
              <span className = "header__optionLineTwo">Sign in</span>
          </div>
          <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className = "header__optionLineTwo">Orders</span>
          </div>
          <div className="header__optionBasket">
              <ShoppingCartIcon/>
              <span className="header__optionLineTwo header__basketCount">0</span>
          </div>
      </div>
    </div>
  );
}

export default Header;
