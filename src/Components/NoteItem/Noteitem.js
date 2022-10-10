import React, { useContext } from "react";
// import './Noteitem.css'

import noteContext from "../../Context/Notes/noteContext";

const Noteitem = (props) => {
  const { note , updateNote , showAlert } = props;

    const Context = useContext(noteContext);


  const { deletenote } = Context;  

  
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">
            {note.description}
          </p>
          <button className="btn btn-primary m-1" type="button" onClick={()=>{ deletenote(note._id); 
            showAlert("Deleted Successfully", "success"); }}> Delete </button>
          <button className="btn btn-primary m-1" type="button" onClick={() =>{ updateNote(note);}}> Edit </button>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
