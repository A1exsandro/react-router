import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
      <>
        <nav>
          <div className="itemsMenu">
            <div><Link to="/">Home</Link></div>
            <div><Link to="/blogs">Blogs</Link></div>
            <div><Link to="/contact">Contact</Link></div>
            <div><Link to="/tictactoe">Jogo da Velha</Link></div>
          </div>
        </nav>
  
        <Outlet />
      </>
    )
  };
  
  export default Layout;