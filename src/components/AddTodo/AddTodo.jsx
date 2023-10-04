 import { useState,useContext } from "react";
import TodoDispatchContext from "../../Context/TodoDispatchContext";
function AddTodo(){
    const [inputText,setInputText] = useState('');
    const {dispatch}= useContext(TodoDispatchContext)
    return (
        <div>
            <input type="text"
            value={inputText}
            onChange={e => setInputText(e.target.value)}
            placeholder='add your next todo..' />

            <button onClick={()=>{
               dispatch({type:'add_todo', payload:{TodoText: inputText}});
                setInputText('');
                }}>Add</button>
        </div>


    )

}

export default AddTodo;