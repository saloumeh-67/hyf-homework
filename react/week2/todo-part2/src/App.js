import React, { useState, useEffect } from "react";
import ToDos from "./ToDos";

const Header = () => {
  return <h1> Todo List</h1>;
};

const Timer = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount((timer) => timer + 1);
    }, 1000);
  });
  return <h3>You have used {count} seconds on this website</h3>;
};
// component to check the todo array when it is empty render a message
const CheckTodoArray = (props) => {
  if (props.todoArray.length === 0) {
    return <div> No Items </div>;
  } else {
    return null;
  }
};
// the main component for add and delete todo item
const ListedTodo = () => {
  const [todoArray, setToDoArray] = useState(ToDos);
  console.log(todoArray);
  //add todo function to execute modifying on todo array by useState
  const addTodo = () => {
    setToDoArray((prev) => {
      return [
        ...prev,
        { id: Date.now(), description: "Random text", done: false },
      ];
    });
  };

  // delete function execute filter toDos array
  const deleteTodo = (props) => {
    setToDoArray((ToDos) => {
      return ToDos.filter((todo) => {
        return todo.id !== props.todoItems.id;
      });
    });
  };
  // add todo button component execute creat new todo item by button
  const AddTodoButton = () => {
    return (
      <div>
        <button onClick={addTodo}>Add Todo</button>
        <CheckTodoArray todoArray={todoArray} />
      </div>
    );
  };
  // Render toDos tasks it will render all tasks in toDos array and check toDos status  if it's done or not
  const RenderTodoTasks = (props) => {
    const [status, setStatus] = useState(false);
    const [todoArray, setToDoArray] = useState(ToDos);
    console.log(todoArray);
    // checkbox function to check if it is checked it will change status
    //and make through line and change done state of checked todo
    const changeTodoStatus = (props) => {
      setStatus(!status);
      setToDoArray((ToDos) => {
        ToDos.map((todo) => {
          if (todo.id === props.todoItems.id) {
            return (todo.done = !status);
          }
        });
      });
    };
    return (
      <div>
        <li>
          <label
            htmlFor="todoItem"
            style={{ textDecoration: status ? "line-through" : "none" }}
          >
            {props.todoItems.description}
            <input
              type="checkbox"
              id="todoItem"
              onChange={() => {
                changeTodoStatus(props);
              }}
              key={props.id}
            />
            <button
              onClick={() => {
                deleteTodo(props);
              }}
            >
              Delete
            </button>
          </label>
        </li>
      </div>
    );
  };

  return (
    <div>
      <AddTodoButton />
      {todoArray.map((todo) => {
        return (
          <div key={todo.id}>
            <RenderTodoTasks todoItems={todo} />
          </div>
        );
      })}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Header />
      <Timer />
      <ToDos />
      <ListedTodo />
      <todoArray />
    </div>
  );
}

export default App;
