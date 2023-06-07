import React, { useState } from "react" 

const Notes = () => { 
  const [notes, setNotes] = useState() 
  const [valor, setValor] = useState() 
  const [showForm, setShowForm] = useState(false)
  
  const handleClick = () => {
    setShowForm(true)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    setValor(notes)
    setShowForm(false)
  }

  const trocastyle = true

  return(
    <>
      <button
        className="bg-black text-white p-2 rounded-md m-1"
        onClick={handleClick}
      >
        Add Notes
      </button>
      
      <div className="flex justify-center"> 
        <form 
          className={`${showForm ? 'flex flex-col' : 'hidden'} bg-slate-800 p-2 rounded-md text-white m-2`} 
          onSubmit={handleSubmit}
        >
            <label>
              <div className="text-center mb-2">Enter your notes</div>
              <input 
                className="rounded-md mb-2"
                type="text"  
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </label> 
            <input 
              className="hover:bg-slate-700 cursor-pointer rounded-md"
              type="submit" 
            />
        </form> 
      </div>
    </>
  ) 
}

export default Notes 
