import { useState } from "react";
import { useNavigate } from "react-router-dom";



const Add = ({addNewTask})=> {
const [title,setTitle]=useState("")
const [desc,setDesc]=useState("");
const navigate = useNavigate();

const handelClick =()=>{
    if (title && desc) {
        let newTask = {id: Date.now() , taskName:title , taskDesc:desc , taskState: false}
        addNewTask(newTask);
        let items = JSON.parse(localStorage.getItem('users'));
        items.push(newTask);
        localStorage.setItem("users",JSON.stringify(items))
        navigate('/')
    } else {
        alert("fields required")
    }
    
}
    return (
        <div>
        <div>
         <input type="text" onChange={(e)=> setTitle(e.target.value)} placeholder="Add Title"/>
         <input type="text" onChange={(e)=> setDesc(e.target.value)} placeholder="Add Descrption"/>
        </div>
        <div>
            <button onClick={()=>handelClick()}> add</button>
        </div>
        </div>
    )
}

export default Add;