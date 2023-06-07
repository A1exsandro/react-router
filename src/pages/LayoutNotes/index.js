import React, { useState } from "react"
import { Outlet, Link } from "react-router-dom"

const LayoutNotes = () => { 
  const [none, setNone] = useState(false)

  const toggleMenu = () => {
    setNone(!none)
  }

  return(
    <>
      <nav className="bg-black text-white p-1">
        <div className=" " onClick={toggleMenu}>Menu</div>
      </nav> 

      <Outlet /> 
    </>
  );
}

export default LayoutNotes;