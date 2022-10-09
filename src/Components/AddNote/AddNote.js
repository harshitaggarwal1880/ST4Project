import React from "react";
import noteContext from '../../Context/Notes/noteContext'
import { useContext, useState  } from 'react';


const AddNote = () => {

    const context = useContext(noteContext)

    const {addnote} = context;

    const [note, setNote] = useState({title:"",description:"",tag:"Default"})

    const handelClick = (e)=>{
        e.preventDefault();
        addnote(note.title, note.description, note.tag);
    }

    const onchange = (e)=>{
        // here we use spread operator and set note state value using event listener object by getting value by target feature of event object which is passed to an function as e

        setNote({...note, [e.target.name]: e.target.value })
    }

  return (
    <div className="container">
        <h1 className="heading"> Add a Note </h1>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            aria-describedby="emailHelp"
            placeholder="Enter Title"
            onChange={onchange}
            
          />
          <small id="emailHelp" className="form-text text-muted">
            This is the Title of the Note
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Description</label>
          <textarea
            style={{height:"100px"}}
            type="text"
            className="form-control"
            id="description"
            name="description"
            placeholder="Description"
            onChange={onchange}
            
          />
        </div>
        
        <button type="submit" className="btn btn-primary my-3" onClick={handelClick}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddNote;
