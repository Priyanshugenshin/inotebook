import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const s1 = {
        "name": "Childe",
        "organization":"11th Fatui Harbenger"
    }
    const [state,setState] = useState(s1)
    const update=()=>{
        setTimeout(()=>{
            setState({
                "name":"Tartagila",
                "organization":"Toy seller"
            })
        },3000)
    }
    return (
        <noteContext.Provider value={{state,update}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState