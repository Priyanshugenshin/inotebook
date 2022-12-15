import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext'

const AddNote = (props) => {
    const context = useContext(noteContext)
    const {addNote} = context
    const [note, setNote] = useState({title: "", description: "", tag: ""})
    const {showAlert} = props

   const handleClick = (e) => {
        e.preventDefault()
        addNote(note.title,note.description,note.tag)
        setNote({title: "", description: "", tag: ""})
        showAlert("Add Note Successfully","success")
    }

    const handleChange = (e) => {
        setNote({...note,[e.target.name]:e.target.value})
    }

  return (
    <div>
      <div className='container my-3'>
      <h2>Add a Note</h2>

      <form>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" className="form-control" id="title" name='title' value={note.title} aria-describedby="emailHelp" onChange={handleChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
    <input type="text" className="form-control" id="description" name='description' value={note.description} onChange={handleChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Tag</label>
    <input type="text" className="form-control" id="tag" name='tag' value={note.tag} onChange={handleChange}/>
  </div>
  <button disabled={note.title.length <=5 || note.description.length <=5} type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
</form>
</div>
    </div>
  )
}

export default AddNote
