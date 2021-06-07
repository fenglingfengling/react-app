import React, { Component, useState } from 'react';

// class State extends Component{
//    state = {
//         name: "leo",
//         age: 18   
//    }
//    setAge=()=>{
//        let {age} = this.state;
//        this.setState({
//            age: ++age
//        }) 
//    }
//    render(){
//       let {name,age} = this.state;
//       return (<div>
//             姓名:{name},<br/>
//             年龄:{age},<br/>
//             <button onClick={this.setAge}>长大一岁</button>
//       </div>);
//   }
// }

function State() {
    // console.log(useState({
    //     name:"leo",
    //     age: 18
    // }));
    // const [state,setAge] = useState({
    //     name:"leo",
    //     age: 18
    // });
    // let {name,age} = state;
    // function setage(){
    //     setAge(age+1);
    // }
    const [name,setName] = useState("leo");
    const [age,setAge] = useState(18) 
    return (<div>
        姓名:{name},<br />
        年龄:{age},<br />
        <button onClick={()=>{
            // setAge({
            //     ...state,
            //     age: age + 1
            // });
            setAge(age+1);
        }}>长大一岁</button>
    </div>);
}

export default State;
