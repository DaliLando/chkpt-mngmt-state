import Card from 'react-bootstrap/Card';
import CloseButton from 'react-bootstrap/CloseButton';
import { Button } from 'react-bootstrap';
import { FaCheckSquare } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';



function BorderExample({id,taskName,taskDesc,taskState,markCompleted,deleteTask}) {
 let color={
  width:"18rem",
  borderColor:"",
  margin:"20px"
 }

 if(taskState){
  color.borderColor ="green"
 }else{
  color.borderColor="red"
 }
 const navigate = useNavigate()


const action = ()=> {
  let validation = window.confirm(" Are you sure ?")
  if (validation) {
    deleteTask(id)
  }
}
  return (
    <>
      
<Card  style={color}>
        <Card.Header style={{display:"flex",justifyContent:'space-between'}}>
          
          {taskName} 
        <CloseButton onClick={()=>action()}/>

        </Card.Header>

        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>
              {taskDesc}
          </Card.Text>
          <div style={{display:"flex", justifyContent:"space-between"}}>
          <Button variant="outline-secondary" onClick={()=> navigate(`/${id}`)}>Edit</Button>{' '}

          <FaCheckSquare onClick={()=>{markCompleted(id)}} />
          </div>        </Card.Body>
      </Card>
       
          <br/>
    </>
  );
}

export default BorderExample;