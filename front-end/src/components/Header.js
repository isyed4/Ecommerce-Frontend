import React from "react";

function Header() {
  return (
    <div className="header">
      <img
        className = "header__logo"
        src="https://cdn.dribbble.com/users/5973612/screenshots/15562505/media/09b4b643795255603029f9140aa4602a.jpg?compress=1&resize=400x300&vertical=top"
        alt="home logo"
      />

      <div className="header__search">
        <input type="text" className="header_searchInput" />
      </div>

      <div className="header_nav">
          <div className="header_option">
              <span className="header_optionLineOne">Hello</span>
              <span className = "header_optionLineTwo">Sign in</span>
          </div>
          <div className="header_option">
              <span className="header_optionLineOne">Returns</span>
              <span className = "header_optionLineTwo">Orders</span>
          </div>
          <div className="header_option">
              <span className="header_optionLineOne">Returns</span>
              <span className = "header_optionLineTwo">Orders</span>
          </div>
          <div className="header_option">
              <span className="header_optionLineOne">Review</span>
              <span className = "header_optionLineTwo">Shopping Cart</span>
          </div>
      </div>
    </div>
  );
}

export default Header;
