import React from 'react'
import { Link } from 'react-router-dom';

function StudentDetails(props) {
    return (
        <div className='details'>
         <div>{props.name}</div> 
         <div>{props.age}</div>  
         <div>{props.course}</div>  
         <div>{props.batch}</div>  
         <div><Link to={""}>{props.edit}</Link></div>  
        </div>
    )
}

export default StudentDetails;
