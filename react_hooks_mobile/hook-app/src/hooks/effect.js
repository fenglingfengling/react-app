import React, {useState, useEffect } from 'react';

function Txt(props){
    let {text,setEdit} = props;
    return (
        <div>{text}<a onClick={()=>{
            setEdit(true);
        }}>编辑</a></div>
    );
}
function Edit(props){
    const {text,setText,setEdit} = props; 
    function toScroll(){
        let txt = document.querySelector("#txt");
        let y = window.scrollY;
        txt.style.transform = `translateY(${y}px)`;
        console.log(y);
    }
    useEffect(()=>{
        window.addEventListener("scroll",toScroll);
        return ()=>{
            window.removeEventListener("scroll",toScroll);
        }
    },[])
    return (<input 
        type="text"
        value = {text}
        id = "txt"
        onChange = {
            (e)=>{
                setText(e.target.value);
            }
        }
        onBlur = {
            ()=>{
                setEdit(false)
            }
        }
    />)
}
function Effect(){
    const [text,setText] = useState("这是今天的课程");
    const [edit,setEdit] = useState(false);
    // 只监听 edit 发生改变
    useEffect(()=>{
        console.log("组件更新了");
    },[]);
    return (<div>
        {edit?
            <Edit 
                text = {text}  
                setText = {setText}
                setEdit = {setEdit}
            />
            :
            <Txt text={text} setEdit={setEdit} />
        }   
        {[...(".".repeat(100))].map((item,index)=>{
            return <div key={index}>页面内容填充</div>
        })}
  </div>);
}


export default Effect;
