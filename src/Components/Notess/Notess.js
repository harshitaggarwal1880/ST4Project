import React, { useContext, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import noteContext from "../../Context/Notes/noteContext";
import AddNote from "../AddNotes/AddNote";
import Noteitem from "../NoteItem/Noteitems";
import "./Notess.css";

const Notess = (props) => {
  const context = useContext(noteContext);
  let navigate = useNavigate();
  const { notes, getnotes, editnote, addnote } = context;

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getnotes();
    } else {
      navigate("/login");
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
    // ref.current.click();
    setOperation(1);
    closenote();
    setNote({
      id: currentnote.id,
      etitle: currentnote.title,
      edescription: currentnote.description,
      etag: currentnote.tag,
    });
  };

  const [operation, setOperation] = useState(0)

  const handelupdateClick = (e) => {
    e.preventDefault();
    editnote(note.id, note.etitle, note.edescription, note.etag);
    // refclose.current.click();
    closenote();
    setOperation(0);
    props.showAlert("Updated Successfully", "success");
  };

  const onchange = (e) => {
    // here we use spread operator and set note state value using event listener object by getting value by target feature of event object which is passed to an function as e

    setNote({ ...note, [e.target.name]: e.target.value });
  };

  var container2 = document.getElementsByClassName("container2")[0];
  var container3 = document.getElementsByClassName("container3")[0];
  var checkicon = document.getElementById("check-icon");
  var crossicon = document.getElementById("cross-icon");

  // crossicon.addEventListener("click", function(){
  //   closenote();
  // })

  // checkicon.addEventListener("click", function(){
  //   createnote();
  // })

  function closenote() {
    if (container3.style.display == "none") {
      container3.style.display = "block";
    } else {
      container3.style.display = "none";
    }
    setNote({etitle:"",edescription:"",etag:""});
  }

  // function createnote(){

  // }


  /// Add note 

  // const [note, setNote] = useState({title:"",description:"",tag:""})

  const handeladdClick = (e)=>{
      e.preventDefault();
      addnote(note.etitle, note.edescription, note.etag);
      setNote({etitle:"",edescription:"",etag:""});
      closenote();
      // It Is show error that , props.showAlert is not a function , when you can not assign props in compomenents in app.js properly.
      props.showAlert("Add New Note Successfully","success");
  }




  return (
    <div className="notess-body">
      <div className="main-container-note">
        <div className="container1">
          <button className="btn btn-primary" onClick={closenote}>
            {" "}
            Create a Note
          </button>
        </div>

        <div className="container2">
          <div className="container">
            {notes.length === 0 && "No Notes available"}
          </div>
          {notes.length > 0 && (
            <div className="row">
              {notes.map((note) => {
                return (
                  <Noteitem
                    key={note.id}
                    updateNote={updateNote}
                    note={note}
                    showAlert={props.showAlert}
                  />
                );
              })}
            </div>
          )}
        </div>

        <div className="container3">
          <form>
            <textarea

              placeholder="Write Note..."
              maxLength={96}
              id="edescription"
              name="edescription"
              value={note.edescription}
              onChange={onchange}
            >
              {" "}
            </textarea>
          </form>
          <svg
            id="check-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            class="bi bi-check-circle"
            viewBox="0 0 16 16"
            onClick={ operation==0 ? handeladdClick : handelupdateClick}

          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
          </svg>
          <svg
            id="cross-icon"
            xmlns="http://www.w3.org/2000/svg"
            onClick={closenote}
            width="26"
            height="26"
            fill="currentColor"
            class="bi bi-x-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Notess;
