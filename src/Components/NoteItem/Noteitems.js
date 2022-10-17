import React, { useContext } from "react";
import "./Noteitem.css";

import noteContext from "../../Context/Notes/noteContext";

const Noteitem = (props) => {
  const { note, updateNote, showAlert } = props;

  const Context = useContext(noteContext);

  const { deletenote } = Context;

  const margin = () => {
    const random_margin = ["-5px", "1px", "5px", "10px", "15px", "20px"];

    return random_margin[Math.floor(Math.random() * random_margin.length)];
  };

  const rotate = () => {
    const random_rotate = [
      "rotate(3deg)",
      "rotate(1deg)",
      "rotate(-1deg)",
      "rotate(-3deg)",
      "rotate(-5deg)",
      "rotate(-10deg)",
    ];

    return random_rotate[Math.floor(Math.random() * random_rotate.length)];
  };

  const color = () => {
    const random_color = [
      "#c2ff3d",
      "#ff3de8",
      "#3dc2ff",
      "#04e022",
      "#bc83e6",
      "#ebb328",
    ];

    return random_color[Math.floor(Math.random() * random_color.length)];
  };

  return (
    <div
      className="note-item"
      onMouseEnter={(e)=>{e.target.style.transform="scale(1.1"}}
      onMouseLeave={(e)=>{e.target.style.transform="scale(1)"}}
      onDoubleClick={()=>{updateNote(note);}}
      style={{
        width: "270px",
        margin: `${margin()}`,
        transform: `${rotate()}`,
        backgroundColor: `${color()}`
      }}
    >
      <h1 className="note-desc"> {note.description} </h1>
      {/* <button className="btn btn-primary m-2 position-absolute bottom-0 end-0" type="button" onClick={()=>{ deletenote(note.id); showAlert("Deleted Successfully", "success"); }}> Delete </button> */}

      {/* <i class="bi bi-trash m-2 position-absolute bottom-0 end-0"></i> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        style={{cursor:"pointer"}}
        onClick={()=>{ deletenote(note.id); showAlert("Deleted Successfully", "success"); }}
        fill="currentColor"
        class="bi bi-trash m-3 position-absolute bottom-0 end-0"
        viewBox="0 0 16 16"
      >
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
        <path
          fill-rule="evenodd"
          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
        />
      </svg>
      {/* <button
        className="btn btn-primary m-2 position-absolute bottom-0 start-50"
        type="button"
        onClick={() => {
          updateNote(note);
        }}
      >
        {" "}
        Edit{" "}
      </button> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        fill="currentColor"
        style={{right:"15%", cursor:"pointer"}}
        onClick={() => {
            updateNote(note);
          }}
        class="bi bi-pencil-square m-3 position-absolute bottom-0"
        viewBox="0 0 16 16"
      >
        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
        <path
          fill-rule="evenodd"
          d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
        />
      </svg>
    </div>
  );
};

export default Noteitem;
