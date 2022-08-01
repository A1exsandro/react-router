import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
      <>
        <nav>
          <div className="itemsMenu">
            <div><Link to="/">Home</Link></div>
            <div><Link to="/users">Users</Link></div>
            <div><Link to="/presence">Presence</Link></div>
            <div><Link to="/tictactoe">Jogo da Velha</Link></div>
          </div>
        </nav>
  
        <Outlet />
      </>
    )
  };
  
  export default Layout;