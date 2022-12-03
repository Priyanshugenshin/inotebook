import React from 'react'

const Noteitem = (props)=>{
    const {note} = props
    return (
        <div className="col-md-4">
            <div className="card my-3">
                <div className="card-body">
                    <h2 className='card-title'>{note.title}</h2>
                    <p className="card-text">{note.description}</p>
                </div>
            </div>
        </div>
    )
}
export default Noteitem
