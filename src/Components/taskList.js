import { Link } from "react-router-dom";
import BorderExample from "./taskCard";
import { useEffect, useState } from "react";



const TaskList = ({tasks,markCompleted,deleteTask})=> { 


   
    return (
        <div>
     <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-around"}}>
        
       { tasks.map((item,index)=> {
          return <BorderExample {...item}  markCompleted={markCompleted} deleteTask ={deleteTask} key={index}/>
       })}
       
     </div>
     <div style={{textAlign:"center"}}>
            <Link to="/add">AddTask</Link>
        </div>
        </div>
    )
}
export default TaskList