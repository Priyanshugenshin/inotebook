import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../context/notes/noteContext'
import AddNote from './AddNote'
import Noteitem from './Noteitem'

const Note = () => {
  const context = useContext(noteContext)
  const { state, fetchNote, editNote } = context

  useEffect(() => {
    fetchNote()
            // eslint-disable-next-line
  }, [])

  const [note, setNote] = useState({ etitle: "", edescription: "", etag: "" })

  const ref = useRef(null)
  const refClose = useRef(null)

  const updateOnClick = (clickedNote) => {
    console.log("Update on Click")
    ref.current.click()
    setNote({id:clickedNote._id,etitle:clickedNote.title,edescription:clickedNote.description,etag:clickedNote.tag})
  }
  const handleClick = (e) => {
    console.log("Updating the change",note)
    e.preventDefault()
    editNote(note.id,note.etitle,note.edescription,note.etag)
    refClose.current.click()
  }

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }
  return (
    <>

      <AddNote />


<button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form>
  <div className="mb-3">
    <label htmlFor="etitle" className="form-label">Title</label>
    <input type="text" className="form-control" id="etitle" name='etitle' value={note.etitle} aria-describedby="emailHelp" onChange={handleChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
    <input type="text" className="form-control" id="edescription" name='edescription' value={note.edescription} onChange={handleChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Tag</label>
    <input type="text" className="form-control" id="etag" name='etag' value={note.etag} onChange={handleChange}/>
  </div>
</form>
      </div>
      <div className="modal-footer">
        <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" className="btn btn-primary" onClick={handleClick}>Save</button>
      </div>
    </div>
  </div>
</div>
      <div className='row my-3'>
        <h2>Your Notes</h2>
        <div className="container mx-2">{state.length === 0 && "Notes is Empty"}</div>
        
        {state.map((state) => {
          return <Noteitem key={state._id} note={state} updateOnClick = {updateOnClick} />
        })}
      </div>
    </>
  )
}
export default Note