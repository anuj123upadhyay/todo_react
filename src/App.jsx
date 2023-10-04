
import './App.css'
import { useReducer } from 'react';
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'
import TodoContext from './Context/TodoContext';
import TodoDispatchContext from './Context/TodoDispatchContext';
import todoReducer from './REducers/todoReducer';
function App() {
  // const [list,setList]=useState([
  //   {id:1, todoData:'todo 1',finished:false},
  //   {id:2, todoData:'todo 2',finished:true},
  
  // ]);

  const [list,dispatch] = useReducer(todoReducer,[]);///(reducer method, initial state==empty array)//usereducer reducermethod aur initiale state ko leta hai ==> aur state object(list ) and dispatch method ko deta hai


  return (
    <TodoContext.Provider value={{list}}>
      <TodoDispatchContext.Provider value={{dispatch}}>
    <AddTodo />
    <TodoList/>
     </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  )
}

export default App
