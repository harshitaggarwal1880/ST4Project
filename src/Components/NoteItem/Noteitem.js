import React, { useContext } from "react";

import noteContext from "../../Context/Notes/noteContext";

const Noteitem = (props) => {
  const { title, description, id } = props;

    const Context = useContext(noteContext);


  const { deletenote } = Context;  

  
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {description}
          </p>
          <button className="btn btn-primary mx-1" type="button" onClick={()=>{deletenote(id)}}> Delete </button>
          <button className="btn btn-primary mx-1" type="button"> Edit </button>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
