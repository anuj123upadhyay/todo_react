import { useContext } from "react";
import TodoContext from "../../Context/TodoContext";
import Todo from "../Todo/Todo";


const{list,setList}=useContext(TodoContext)

function onFinished(todo,isFinished){
    const updatedList = list.map(t=> {
            
        if(t.id == todo.id) {
            todo.finished = isFinished;
        }
        return t;
    });
    setList(updatedList)
}
function onDelete(todo){
    const updatedList = list.filter(t=> t.id !== todo.id)
    setList(updatedList)
}

function onEdit(todo,todoText){
    
        const updatedList = list.map(t=>{
            if(t.id == todo.id){
                todo.todoData = todoText;
            }
            return t;
        });
        setList(updatedList);
    
}


function TodoList(){

return(
    <div>

    {list.length>0 && list.map(todo => <Todo key={todo.id} 
    todoData={todo.todoData}
    isFinished={todo.finished}
    id={todo.id}
    changeFinished={(isFinished)=>onFinished(todo,isFinished)}
    onDelete={()=>onDelete(todo)}
    onEdit={(todoText)=> onEdit(todo,todoText)}

    />)}
    </div>
   
);

}

export default TodoList;