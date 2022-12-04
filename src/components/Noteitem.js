import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext'

const Noteitem = (props)=>{
    const {note} = props
    const context = useContext(noteContext)
    const {deleteNote} = context
    const handleDelete = () => {
        deleteNote(note._id)
    }
    return (
        <div className="col-md-4">
            <div className="card my-3">
                <div className="card-body">
                    
                    <h2 className='card-title'>{note.title}</h2>
                    <p className="card-text">{note.description}</p>
                    <i className="fa-solid fa-trash-can" onClick={handleDelete}></i>
                    <i className="fa-solid fa-file-pen mx-3"></i> 
                </div>
            </div>
        </div>
    )
}
export default Noteitem
