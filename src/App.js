import React, { useState } from 'react';
import './App.css';

function Delete(index){


}


function App() {

  const [todo, setTodo] = useState({desc: '', date:''});
  const [todos, setTodos] = useState([]);


  const addTodo = (event) =>{
    event.preventDefault();
    setTodos([...todos, todo]);
  }

  const inputChanged = (event) =>{
    setTodo({...todo, [event.target.name]: event.target.value});
  }

  const deleteTodo = (index) =>{

    var newTodos = todos; 
    newTodos.splice(index,1);
    setTodos([...newTodos]); 



  }
  

  return (
    <div className="App">
     <form onSubmit={addTodo}>
      <label for="date">Date: </label>
        <input type="date" name="date" value={todo.date} onChange={inputChanged}/>
        <label for="desc">Description: </label>
        <input type="text" name="desc" value={todo.desc} onChange={inputChanged}/>
        <input type="submit" value="Add" />

     </form>
    <table>
      <tbody>
        <h1>Simple Todolist</h1>
        <tr><th>Date</th><th>Description</th>
        </tr>
    {
      todos.map((todo, index) =>
        <tr key={index}>
            
            <td>{todo.date}</td>
            <td>{todo.desc}</td>
            <button onClick={()=>deleteTodo(index)}>Delete</button>
        </tr>

      )
    }



      </tbody>
    </table>

    </div>
  );
}

export default App;