import React from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {v4 as uuid} from 'uuid';




const CreateTodoField = ({setTodos}) => {
    const [title,setTitle] = useState('');
    const [show, setShow] = useState(false);
    const [ description,setDescription] = useState('');
    const [priority, setPriority] = useState(" ");
   

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    // const TestPriority = (e) => {
    //   console.log(e);
    //   setPriority(e.priority)
    // }
  const small_id = uuid(0.8);
   
    const addTodo = (title, priority, description) => {
      console.log(title,priority, description)
        setTodos(prev =>[
           {
             id: small_id,
            title,
            description,
            priority,
            isCompleted:false,
            isActive: false,
            createdDate: new Date(),
            duration:null,
            completedDate: null,
            activationStartDate: null,
            activationEndDate: null,

        },
            ...prev, 
        ])
        setTitle('');
        setDescription('');
    
       
    } 
  
   
   
 
  return (
    <div 
    // className='flex items-center justify-between mb-20 rounded-2xl
    //  border-zinc-800 border-2 px-5 p-5 py-3 w-full '
     >
        {/* <input
         type="text" 
        onChange={e => setTitle(e.target.value)}
        value={title} 
        // onKeyPress = {e => e.key === 'Enter' && addTodo(title)}
        className = 'bg-transparent w-full border-none outline-none'
        placeholder='Add a task'
        /> */}
        <Button onClick = {handleShow} variant="primary"  className='rounded-2xl 
     bg-gray-700 p-5 text-center  relative left-1/4 ml-72'>Create +</Button>
     
     
     <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        centered = "true"
        keyboard={false}
        className=' items-center justify-between mt-50 rounded-2xl
        border-zinc-800 border-2 px-5 p-5 py-3 w-1/3 ml-96 
         text-white  font-bold '
      >
        <Modal.Header closeButton>
        </Modal.Header>
       
        <Modal.Body>
       <div>
        <form>
        <input
         type="text" 
        onChange={e => setTitle(e.target.value)}
        value={title} 
        className = ' bg-gray-700 h-16  rounded-xl w-96 mb-5 text-center ml-16 text-cyan-200 text-base form-control '
        placeholder='Add a task'
        required
        />
      </form>
        <form action="/action_page.php">
        <input
        required
        type="text" 
        onChange={e => setDescription(e.target.value)}
        value={description} 
        className = ' bg-gray-700 h-16  rounded-xl w-96 mb-5 text-center ml-16 form-control'
        placeholder='Description'
        /> 
        </form>
        {/* <Form.Select aria-label="Default select example" className=' bg-gray-700  rounded-lg h-16 ml-3' >
      <option 
      onChange={value=> setPriority(value)}
      value = { priority}
      
      
       >Priority</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select> */}
    <Form.Group 
    controlId="formBasicSelect" 
     className = ' bg-gray-700 h-16  rounded-xl w-96 text-center ml-16'
     oninvalid="alert('Hey, you missed something on modal!')" required="required">
    <Form.Label>Select Priority</Form.Label>
        <Form.Control
          as="select"
          label = "Select priority"
          value={priority}
          onChange={e => {
            console.log("e.target.value", e.target.value);
            setPriority(e.target.value);
            
          }}
          className = ' bg-gray-700 h-16  rounded-xl w-96 text-gray-500 mb-24 text-center'
        >
          <option value="high">high</option>
          <option value="medium">medium</option>
          <option value="low">low</option>
        </Form.Control>
      </Form.Group>
    </div>
        </Modal.Body>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} 
          className='rounded-2xl 
          bg-gray-700 p-2 w-20 mt-9 ml-56 text-center'>
            Close
          </Button>
          <Button variant="secondary"  disabled={title.length === 0} onClick={e => addTodo(title,priority,description)} 
          className='rounded-2xl 
          bg-gray-700 p-2 w-20 mt-5 ml-56' >
            Add
            
          </Button>
          
        </Modal.Footer>
      </Modal>
      
         </div>
  )
}


export default CreateTodoField