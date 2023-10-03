
import './App.css'
import { useState } from 'react';
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'
import TodoContext from './Context/TodoContext';
function App() {
  const [list,setList]=useState([
    {id:1, todoData:'todo 1',finished:false},
    {id:2, todoData:'todo 2',finished:true},
  
  ]);

  return (
    <TodoContext.Provider value={{list,setList}}>
    <AddTodo updateList={(todo) => setList([...list,{ id:list.length+1,todoData:todo,finished:false}])}/>
     <TodoList/>
    </TodoContext.Provider>
  )
}

export default App
