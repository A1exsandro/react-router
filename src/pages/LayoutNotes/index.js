import React, { useState } from "react"
import { Outlet, Link } from "react-router-dom"

const LayoutNotes = () => { 
  const [none, setNone] = useState(false)

  const toggleMenu = () => {
    setNone(!none)
  }

  return(
    <>
      <nav>
        <div className="menu" onClick={toggleMenu}>Menu</div>
      </nav> 

      <Outlet /> 
    </>
  );
}

export default LayoutNotes;