import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext'
import Noteitem from './Noteitem'

 const Note = ()=> {
    const context = useContext(noteContext)
    const {state} = context
  return (
    <div className='row my-3'>
      <h2>Your Notes</h2>
      {state.map((state)=>{
        return <Noteitem note={state} />
      })}
    </div>
  )
}
export default Note