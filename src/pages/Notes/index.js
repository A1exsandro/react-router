import React, { useState } from "react" 

const Notes = () => { 
  const [notes, setNotes] = useState() 
  const [valor, setValor] = useState()   

  const handleSubmit = (event) => {
    event.preventDefault()

    setValor(notes)
  }

  return(
    <>
      <div>Notes alex</div> 

      <form onSubmit={handleSubmit}>
          <label>Enter your notes.......:
            <input 
              type="text"  
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </label> 
          <input type="submit" />
      </form> 
    </>
  ) 
}

export default Notes 
