import { useState } from "react";    
import { useNavigate, useParams } from "react-router-dom";

const Edit =({tasks,editState})=> {
    const [title,setTitle]=useState("")
    const [desc,setDesc]=useState("");
    const {id} = useParams()
    const navigate = useNavigate();
    const exist = tasks.find((item)=>{
      return  item.id === Number(id)
    })

const handleEdit = ()=> {
    editState(title, desc ,Number(id));
    navigate ("/")
}


    return (
        <div> 
        <input type="text" onChange={(e)=> setTitle(e.target.value)} placeholder={exist.taskName}/>
        <input type="text" onChange={(e)=> setDesc(e.target.value)} placeholder={exist.taskDesc}/>
        <button onClick= {handleEdit}>confirm</button>
        </div>
    )
}
export default Edit 