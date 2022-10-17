import React from 'react'
import "./Alert.css"
import { useLocation } from 'react-router-dom'


function Alert(props) {

  const location = useLocation();


    const capitalise = (word) =>{
        // const lower = word.toLowerCase();
        // return lower.charAt(0).toUpperCase() + lower.slice(1)
        return word;
    }
  
    return ( 
    <div style={{height: "20px", width:"30vw"}} className={`m-3 ${(location.pathname==='/' || location.pathname==='/addnotes' || location.pathname==='/about')?"d-none":""}`}> 
    {/* // here we use js logical operation to check props.alert is nul , then JSX will not evaluate , otherwise it run.  */}
    {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
     <strong> {capitalise(props.alert.type)} </strong> : {props.alert.msg} 
    </div>}
    </div>
  )
}

export default Alert