import React from "react";
import noteContext from '../../Context/Notes/noteContext'
import { useContext, useState  } from 'react';
import "./AddNote.css"

const AddNote = (props) => {

    const context = useContext(noteContext)

    const {addnote} = context;

    const [note, setNote] = useState({title:"",description:"",tag:""})

    const handelClick = (e)=>{
        e.preventDefault();
        addnote(note.title, note.description, note.tag);
        setNote({title:"",description:"",tag:""});

        // It Is show error that , props.showAlert is not a function , when you can not assign props in compomenents in app.js properly.
        props.showAlert("Add New Note Successfully","success");
    }

    const onchange = (e)=>{
        // here we use spread operator and set note state value using event listener object by getting value by target feature of event object which is passed to an function as e

        setNote({...note, [e.target.name]: e.target.value }) 
    }

  return (
    <div className="container">
        <h1 className="heading"> Add a Note </h1>
      <form onSubmit={handelClick} className="form">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            aria-describedby="emailHelp"
            placeholder="Enter Title"
            value={note.title}
            onChange={onchange}
            minLength={5}      
            required      
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
            value={note.description}
            minLength={5}
            required            
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Tag</label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            placeholder="Tag"
            onChange={onchange}
            value={note.tag}
            
          />
        </div>
        
        <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary my-3" >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddNote;
