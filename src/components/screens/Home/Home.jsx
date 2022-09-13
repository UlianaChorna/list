import React from "react";
import TodoItem from '../item/TodoItem'
import { useState,useEffect} from "react";
import CreateTodoField from '../createTodoField/CreateTododField';
import Accordion from 'react-bootstrap/Accordion';
 

// const data =[
//     {
//         id:'jdfc4234',
//         title: 'finish the essay collaboration ',
//         isCompleted:false,
//     },
//     {
//         id:'jdfc211',
//         title: 'read next charper of the book ',
//         isCompleted:false,
//         description:'',
//         duration:'',
//         priority: '',
//         active:'',
//         creationDate: '',
//         completedDate: '',
//         activationStartDate: '',
//         activationEndtDate: '',

//     },
//     {
//         id:'jdfc21',
//         title: 'send the mesagge',
//         isCompleted:false,
//     }
// ]


const Home = () => {
    const [ todos, setTodos] = useState([]);
    const [filterType, setFilterTask] = useState('all');
    
   
    

useEffect(() => {
        console.log(todos);
        }, [todos]);


const changeTodo = id => {
    const copy = [...todos]
    const current = copy.find(t => t.id === id)
    current.isCompleted = !current.isCompleted
    current.completedDate = new Date();

    setTodos(copy)
}

const activateTodo = id => {
    const copy = [...todos]
    let current = copy.find(t => t.id === id);
    const newValue = !current.isActive;
    console.log(current)
    current.isActive = newValue;
    setTodos(copy)
    console.log(current)
    if (newValue === true) {
        current.activationStartDate = new Date();
    } else {
        current.activationEndDate = new Date();
        var diffMs = (current.activationEndDate - current.activationStartDate); 
        var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes

        current.duration = current.duration + ( diffMins)
    }
    console.log(current)
    
}

const removeTodo = id => {
     setTodos([...todos].filter((todo) => todo.id !== id))
    }
    
   

const doneTask = todos.filter(todo => todo.isCompleted);
const todoTask = todos.filter(t => !t.isCompleted);

   const filteredTask = filterType === 'done' 
   ? [...doneTask] 
   : filterType === 'todo' ? [...todoTask] : [...todos]
//    filterTask ? [...doneTask] : [...todos];
   
    return(
        <div className=  " text-white w-4/5 mx-auto" >
            <div className="text-5xl font-bold text-center mt-20 mb-8"> Todo List
            {/* <img src={Todo} alt="Logo" />; */}
                </div>
            <CreateTodoField setTodos={setTodos}/>
            
            <div className="text-blue-800  text-3xl font-bold mb-5 flex flex-wrap justify-items-center" >
            <button onClick={() => setFilterTask('all')} className= " m-5 pr-10 -mr-10">All  - {todos.length} </button> 
            <button onClick={() => setFilterTask('todo')}  className= " m-5 ml-40 pl-40">Todo -{todoTask.length}</button>
            <button onClick={() => setFilterTask('done')} className= "m-5 ml-40 pl-60"> Completed - {doneTask.length} of  {todos.length}</button>
            </div>
            
            <Accordion defaultActiveKey="0">
            {filteredTask
            .map(todo=>( 
            <TodoItem
             key={todo.id} 
             todo={todo}
             changeTodo={changeTodo}
             removeTodo={removeTodo}
             activateTodo ={activateTodo}
        
             />
            ))}
            </Accordion>
           
        </div>
  )
  }
  
export default Home;