import React, { useContext,  useState ,useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import noteContext from "../../Context/Notes/noteContext";
import AddNote from "../AddNotes/AddNote";
import Noteitem from "../NoteItem/Noteitem";

const AddNotes = (props) => {
  const context = useContext(noteContext);
  let navigate = useNavigate();
  const { notes, getnotes , editnote} = context;

  useEffect(() => {

    if(localStorage.getItem('token')){
      getnotes();
    }
    else{
      navigate("/login")
    }

  }, []);
  
  const ref = useRef(null);
  const refclose = useRef(null);

  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });


  const updateNote = (currentnote) => {
    console.log("first");
    ref.current.click();
    setNote({id: currentnote.id,etitle: currentnote.title, edescription: currentnote.description, etag: currentnote.tag});

  };


  const handelClick = (e) => {
    e.preventDefault();
    editnote(note.id,note.etitle, note.edescription, note.etag);
    refclose.current.click();
    props.showAlert("Updated Successfully", "success")
  };

  const onchange = (e) => {
    // here we use spread operator and set note state value using event listener object by getting value by target feature of event object which is passed to an function as e

    setNote({ ...note, [e.target.name]: e.target.value });


  };

  return (
    <div className="main-container"> Hello </div> 
    
  );
};

export default AddNotes;
