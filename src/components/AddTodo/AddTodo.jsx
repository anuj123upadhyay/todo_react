 import { useState } from "react";
function AddTodo({updateList}){
    const [inputText,setInputText] = useState('');
    return (
        <div>
            <input type="text"
            value={inputText}
            onChange={e => setInputText(e.target.value)}
            placeholder='add your next todo..' />
            <button onClick={()=>{
                updateList(inputText);
                setInputText('');
                }}>Add</button>
        </div>


    )

}

export default AddTodo;