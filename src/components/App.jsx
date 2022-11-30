import react from "react"
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import notes from "../notes.js";
import CreateArea from "./CreateArea";
import { useState } from "react";

const createNotes = (noteItem) =>{
    return(
        <Note
            key = {noteItem.key}
            title = {noteItem.title}
            content = {noteItem.content}
        />
    );
} 



const App = () =>{

    const[notes,setNotes] = useState([]);

    const addNote = (note) =>{
        console.log(note);
        setNotes((prevNotes) => {
            return [...prevNotes,note];
        })
    }
    const onDelete = (id) =>{
        setNotes((prevNotes) =>{
            return prevNotes.filter((noteitem,index) => {
                return index !== id;
            })
        })
    }
    return (
        <div>
        <Header/>
        <CreateArea onAdd={addNote}/>
        {notes.map((noteItem,index) =>{
            return(
                <Note
                    id = {index}
                    key = {noteItem.key}
                    title = {noteItem.title}
                    content = {noteItem.content}
                    deleteItem = {onDelete}
                />
            );
        } )}
        <Footer/>
        </div>
    )
}

export default App;