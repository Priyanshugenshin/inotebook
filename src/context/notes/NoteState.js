import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const notesInitial = []
    const host = `http://localhost:3001`

      const [state,setState] = useState(notesInitial)


      const fetchNote = async ()=>{
        // TODO: API Call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
          method: 'GET', 
          headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token'),
          },
          });
          const json = await response.json();
          console.log(json)
          setState(json)
      }

      // Add a Note
      const addNote =async (title,description,tag)=>{
        // TODO: API Call
        const response = await fetch(`${host}/api/notes/addnote`, {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token'),
          },
          
          body: JSON.stringify({title,description,tag})
        });
        // const json = response.json();
        // setState(json)

        console.log("Adding a new note")
        const note = await response.json()
        setState(state.concat(note)) 
      }

      // Delete a Note
      const deleteNote = async(id)=>{
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
          method: 'DELETE', 
          headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token'),
          },
          
        });
                

        const json = response.json() 
        console.log(`deleting this ${id}`)
        const newNote = state.filter((state)=>{return state._id !== id})
        setState(newNote)
        console.log(json)
      }
      // Edit a Note
      const editNote = async(id,title,description,tag)=>{
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
          method: 'PUT', 
          headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token'),
          },
          
          body: JSON.stringify({title,description,tag})
        });

        const json = await response.json();
        let newNote = JSON.parse(JSON.stringify(state))
        for (let index = 0; index < newNote.length; index++) {
          const element = newNote[index];
          if (element._id === id) {
            newNote[index].title = title;
            newNote[index].description = description;
            newNote[index].tag = tag;
            break
          }}
          setState(newNote)
        console.log(json)
      }

  
    return (
        <noteContext.Provider value={{state,addNote,editNote,deleteNote,fetchNote}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState