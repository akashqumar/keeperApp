import react from "react"

const Note = (props) =>{

    const handleClick = () =>{
        props.deleteItem(props.id);
    }
    return (
        <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button  className="button-8"onClick={handleClick} >del</button>
        </div>
    )
}
export default Note;


  
  
  