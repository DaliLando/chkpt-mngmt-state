import { useEffect, useState } from 'react';
import { data } from './data';
import TaskList from './Components/taskList';
import Add from './Components/addTask';
import { Route, Routes } from 'react-router-dom';
import Edit from './Components/edit';

function App() {

  const [tasks,setTasks]=useState(data);
  
  const [values, setValues] = useState(tasks)
  const addNewTask =(newTask)=>{

   setTasks([...tasks , newTask])
   
  }

  useEffect(()=>{
    
    let local = JSON.parse(localStorage.getItem("users"))
    if(!local){
      localStorage.setItem("users",JSON.stringify(values))
    }
    if(local){
      setValues(JSON.parse(localStorage.getItem('users')))
    }
   
},[tasks])

  const markCompleted =(ID)=> {
    setTasks(tasks.map((item)=>{
      if(item.id === ID){
        return {...item , taskState : true}
       
      }else{
       return item
      }
    }))
  }

  /// modifier une task
 const editState = (titre,description,ID)=> {
 setTasks (tasks.map((item)=> {
  if (item.id === ID) {
    return {...item, taskName:titre, taskDesc:description}
  }else{
    return item
  }
 }))
 }

 /// supprimer une task 
 const deleteTask =(ID)=> {
  let items =[]
   items =JSON.parse(localStorage.getItem('users'));

  setValues (values.filter((item)=>{
    return item.id !== ID
  }))
  let result =  items.find((el)=> el.id === ID);

  const index = items.indexOf(result);
  if (index > -1) { // only splice array when item is found
    items.splice(index, 1); // 2nd parameter means remove one item only
  }
  localStorage.setItem('users',JSON.stringify(items))
 }

 
  return (
    <div>
      <Routes>
        <Route path="/" element={<TaskList tasks={values} markCompleted={markCompleted} deleteTask ={deleteTask}/>}/>
       
    
        <Route path="/:id" element= {<Edit tasks={tasks} editState ={editState}/>}/>
        <Route path='/add' element={<Add addNewTask={addNewTask}/> }/>

      </Routes>
      
     
    </div>
    
  );
}

export default App;
