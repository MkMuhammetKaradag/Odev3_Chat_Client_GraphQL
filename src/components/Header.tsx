import React from "react";
import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div id="sidebar">
        {/* other elements */}

        <nav>
          <ul>
            <li>
              <Link to={`/`}>home</Link>
            </li>
            <li>
              <Link to={`chat/1`}>chat</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
