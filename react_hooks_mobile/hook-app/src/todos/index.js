import React, {useState } from 'react';
import Header from "./header";
import "./index.css";
import Mian from './main';
import Footer from './footer';
function Todos(){
  const [todos,setTodos] = useState([]); 
  function addTodo(val){
    setTodos([...todos,{
        id: Date.now(),
        val,
        completed: false
    }]);
  } 
  function changeCompleted(id,completed){
    todos.forEach(item=>{
        if(id == item.id){
            item.completed = completed;
        }
    });
    setTodos([...todos]);
  }
  function changeAllCompleted(completed){
    todos.forEach(item=>{
        item.completed = completed;
    });
    setTodos([...todos]);
  }
  function editVal(id,val){
    todos.forEach(item=>{
        if(id == item.id){
            item.val = val;
        }
    });
    setTodos([...todos]);
  }
  function remove(id){
    setTodos(todos.filter(item=>item.id !== id));
  }
  function removeCompleted(){
    setTodos(todos.filter(item=>!item.completed));
  }
  return (<div id="todoapp">
        <Header addTodo = {addTodo} />
        <Mian
           todos = {todos} 
           changeCompleted = {changeCompleted}
           remove = {remove}
           editVal = {editVal}
           changeAllCompleted = {changeAllCompleted}
         />
        <Footer 
          todos = {todos}  
          removeCompleted = {removeCompleted}  
        />
  </div>);
}


export default Todos;
