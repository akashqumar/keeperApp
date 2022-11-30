import react from "react"
import { useState } from "react";

const CreateArea = (props) =>{

    const [note,setNote] = useState({
        title : "",
        content : ""
    })
    const handleChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        //console.log(event.target)
        // const{name,value} = event.target;
        
        setNote((prevNote) =>{
            return {
                ...prevNote,[name] : value
            }
        })
    }
    const submitNote = (event) =>{
        event.preventDefault();
        props.onAdd(note)
        setNote({
            title:"",
            content : ""
        });
    }
    return(
        <div>
            <form>
                <input name="title" onChange={handleChange} value = {note.title} placeholder="Title"/>
                <textarea name="content" onChange={handleChange} value = {note.content} placeholder="Take a Note..." rows='3'/>
                <button className= "button-6" onClick={submitNote}>Add</button>
            </form>
        </div>
    )
}
export default CreateArea;