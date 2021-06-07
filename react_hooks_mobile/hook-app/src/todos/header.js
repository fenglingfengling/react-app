import React, {useState} from 'react';
function Header(props){
  const [todo,setTodo] = useState("");
  let {addTodo} = props;  
  return (<header>
            <h1>Todos</h1>
            <input 
                id="new-todo" 
                type="text" 
                placeholder="What needs to be done?" 
                value={todo}
                onChange = {(e)=>{
                    setTodo(e.target.value);
                }}
                autoComplete = "off"
                onKeyDown={(e)=>{
                    if(e.keyCode == 13){
                        if(!todo.trim()){
                            alert("输入点内容吧");
                            e.target.focus();
                        } else {
                            addTodo(todo);
                            setTodo("")
                        }
                    }
                }}
             />
        </header>);
}


export default Header;
