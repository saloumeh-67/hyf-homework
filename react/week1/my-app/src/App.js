import react, {useState} from 'react';
import ToDoList from './ToDoList'
function App() {
  return (
    < >
    const [toDos,setToDos]= useState([])
    <ToDoList todos ={todos}/> 
    <input type = "text" >
      <button>Add Todo</button>
      <button>Clear Complete Todo's</button>
      <dive>0 Left To Do</dive>
  </>
  )
}

      {/* let todoList = [
        {
            "Description": "Get out of bed",
            "Deadline": "Wed Sep 13 2017"
        },
        {
            "Description" : "Brush teeth",
            "Deadline": "Thu Sep 14 2017"
        },
        {
            "Description": "Eat breakfast",
            "Deadline": "Fri Sep 15 2017"
        }
    ];  */}

 
export default App;
