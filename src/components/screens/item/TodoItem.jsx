import React from 'react'
import Checkbox from './Checkbox'
import cn from 'classnames';
import {BiTrash} from 'react-icons/bi';
import Accordion from 'react-bootstrap/Accordion';

import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
// import SideBar from './info';
// import { useState } from 'react';
import Switch from '@mui/material/Switch';
// import Button from 'react-bootstrap/Button';
// import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
// import Popover from 'react-bootstrap/Popover';

function CustomToggle({ children, eventKey }) {
  console.log(children, eventKey);
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!'),
  );

  return (
    <button
      type="button"
      style={{ backgroundColor: 'pink' }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

const TodoItem = ({todo, changeTodo, removeTodo, activateTodo}) => {

  const handleChange = (event) => {
    activateTodo(todo.id);
  };

  // const popover = (
  //   <Popover id="popover-basic">
  //     <Popover.Header as="h3" className=' bg-slate-400 p-14 text-sky-200 text-xl text-bold rounded-3xl' >
  //       {todo.title},{todo.description},
  //       {todo.priority} 
  //  </Popover.Header>
      
  //   </Popover>
  // );

    const color = () =>  {
        if( todo.priority ==='high'){
       return  <div className='border-2 rounded-lg w-4 h-4 mr-4  via-red-700 bg-red-600'></div>
   } else if (todo.priority === 'medium' ) {
    return <div className='border-2 rounded-lg w-4 h-4 mr-4  bg-orange-500 via-orange-500'></div>
   } else  {
    return <div className='border-2 rounded-lg w-4 h-4 mr-4  bg-lime-700 via-lime-700'></div>
;
   }
    }
  return (
   
    <Card>
       <Card.Header>
    <div 
    className='flex items-center justify-between mb-4 rounded-2xl
     bg-gray-700 p-5 w-full '>
     
      <button className='flex items-center'
      onClick={()=> changeTodo(todo.id)}>
      <Checkbox isCompleted={todo.isCompleted}/>
        <span className={cn({
          'line-through': todo.isCompleted,
        })}
        >
         
          <div className=' font-bold text-teal-100  text-2xl'> {color()} {todo.title} :  {todo.description} </div>
         
        
        </span>
      </button>
      
      <Switch
       checked ={todo.isActive}
  
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
      className=' flex left-96'
      />
 
     
          <CustomToggle eventKey={todo.id}>Click me!</CustomToggle>
        
       
        
    {/* </Card> */}
       
    {/* <OverlayTrigger trigger="click" placement="right" overlay={popover}>
      <Button variant="success" className=' mr-60 p-5 bg-sky-700 rounded-2xl' >Info</Button>
    </OverlayTrigger> */}
  


        <button onClick={()=> removeTodo(todo.id)}>
        <BiTrash size={22} 
        className='text-gray-900  hover:text-red-700 
        transition-colors duration-300 ease-in-out  '/>
         </button>
    
    </div>
    </Card.Header> 
    <Accordion.Collapse eventKey={todo.id}>
          <Card.Body>Hello! I'm the body</Card.Body>
        </Accordion.Collapse>
     </Card>
    
  )
}

export default TodoItem;