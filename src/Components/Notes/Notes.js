import React, { useContext,  useState ,useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import noteContext from "../../Context/Notes/noteContext";
import AddNote from "../AddNotes/AddNote";
import Noteitem from "../NoteItem/Noteitem";

const Notes = (props) => {
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
    etitle: "title",
    edescription: "",
    etag: "Personal ",
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
    <div>
      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    aria-describedby="emailHelp"
                    placeholder="Enter Title"
                    value={note.etitle}
                    onChange={onchange}
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    This is the Title of the Note
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Description</label>
                  <textarea
                    style={{ height: "100px" }}
                    type="text"
                    className="form-control"
                    id="edescription"
                    name="edescription"
                    placeholder="Description"
                    value={note.edescription}
                    onChange={onchange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Tag</label>
                  <input
                    type="text"
                    className="form-control"
                    id="etag"
                    name="etag"
                    placeholder="Tag"
                    value={note.etag}
                    onChange={onchange}
                  />
                </div>

              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                ref={refclose}
              >
                Close
              </button>
              <button type="button" onClick={handelClick} className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <AddNote showAlert={props.showAlert} />

        <h1 className="heading"> Notes </h1>
        <div className="container"> 
        { notes.length===0 && "No Notes available" }
        </div>
        { notes.length>0 && <div className="row">
          {notes.map((note) => {
            return (
              <Noteitem key={note.id} updateNote={updateNote} note={note} showAlert={props.showAlert} />
            );
          })}
        </div>}
      </div>
    </div>
  );
};

export default Notes;
