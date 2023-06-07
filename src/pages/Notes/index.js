import React, { useState } from "react" 
import { useForm } from "react-hook-form"

const Notes = () => { 
  // const [notes, setNotes] = useState() 
  const [showForm, setShowForm] = useState(false)
  const [flipped, setFlipped] = useState(true)
  const [addNotes, setAddNotes] = useState([ ]) 

  const { register, handleSubmit, formState: { errors } } = useForm()
  
  const handleClick = () => {
    setShowForm(true)
  }

  const onSubmit = ( data ) => { 
    console.log(data)
    setAddNotes((prev) => [...prev, data])
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
          onSubmit={handleSubmit(onSubmit)}
        >
            <label className="flex flex-col text-center mb-2">
              Enter your notes 
              <input 
                className="rounded-md mb-2"
                {...register("frontNotes")}
              />
            </label> 

            <label className="flex flex-col text-center mb-2">
              Enter your notes 
              <input 
                className="rounded-md mb-2"
                {...register("backNotes")}
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
                {notes.frontNotes}   
              </div>

              <div className="card-face card-back"> 
                {notes.backNotes} 
              </div>
            </div>
          ))
        }
      </div>
    </>
  ) 
}

export default Notes 
