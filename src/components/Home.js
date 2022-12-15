import React from 'react'
import Note from './Note'

export default function Home(props) {
  const {showAlert} = props
  return (
    <div>
<div className="container my-3">
<Note showAlert={showAlert}/>
</div>
    </div>

  )
}
