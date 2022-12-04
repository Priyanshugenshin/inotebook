import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext'
import AddNote from './AddNote'
import Noteitem from './Noteitem'

 const Note = ()=> {
    const context = useContext(noteContext)
    const {state} = context
  return (
    <div className='row my-3'>
        <AddNote />
      <h2>Your Notes</h2>
      {state.map((state)=>{
        return <Noteitem key={state._id} note={state} />
      })}
    </div>
  ) 
}
export default Note