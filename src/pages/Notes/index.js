import React, { useState } from "react" 

const Notes = () => { 
  const [notes, setNotes] = useState() 
  const [showForm, setShowForm] = useState(false)
  const [flipped, setFlipped] = useState(true)
  const [addNotes, setAddNotes] = useState([ ]) 
  
  const handleClick = () => {
    setShowForm(true)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    setAddNotes((prev) => [...prev, notes])
    setShowForm(false)
  }

  const handleFlip = () => {
    setFlipped(!flipped)
  } 

  return(
    <>
      <button
        className="bg-black text-white p-2 rounded-md m-1"
        onClick={handleClick}
      >
        Add Notes
      </button>
      
      <div className="flex justify-center"> 

        {/* ******************* FORM *************************** */}
        <form 
          className={`${showForm ? 'flex flex-col' : 'hidden'} bg-slate-800 p-2 rounded-md m-2`} 
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

        {/* ******************* CARDS OF NOTES *************************** */}
        {
          addNotes.map((notes, i) => (
            <div
            key={i}
              className={`card-memory ${flipped ? "" : "flipped"}`} 
              onClick={handleFlip}
            > 
              <div className="card-face card-front">
                {notes}   
              </div>

              <div className="card-face card-back"> 
                back Card
              </div>
            </div>
          ))
        }
      </div>
    </>
  ) 
}

export default Notes 
