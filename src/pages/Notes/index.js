import React, { useState } from "react" 
import { useForm } from "react-hook-form"
import CardOfNotes from "../../components/CardOfNotes"

const Notes = () => {  
  const [showForm, setShowForm] = useState(false)
  
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

  
  return(
    <>
      <button
        className="bg-black text-white p-2 rounded-md m-1"
        onClick={handleClick}
      >
        Add Notes
      </button>

       {/* ******************* FORM *************************** */}
       <form 
          className={`${showForm ? 'flex' : 'hidden'} justify-around bg-slate-800 rounded-md m-2`} 
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
              className="hover:bg-slate-700 cursor-pointer px-2 rounded-md"
              type="submit" 
            />
        </form> 
      
      <div className="flex flex-wrap justify-center gap-2">  

        {/* ******************* CARDS OF NOTES *************************** */}
        {
          addNotes.map((notes, i) => (
            <CardOfNotes 
              key={i}
              front={notes.frontNotes}
              back={notes.backNotes}
            />
          ))
        }
      </div>
    </>
  ) 
}

export default Notes 
