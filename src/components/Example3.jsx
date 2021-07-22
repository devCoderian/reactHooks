import React from "react";

//usrState => count
//useState =>{ count : 0 }
//state객체가 들어감
export default function Example2(){

    //const [what] = React.useState(0); //what은 배열임
    
    const [state, setState] = React.useState({ count : 0 });
    
    // const click = () =>{
    //     setCount(count + 1);
    // }
    //선언형은 무조건 사용함수 보다 위에 선언 되어 있어야 한다.

    
    return(
        <div>
            <p>You clicked {state.count} times</p>
            <button onClick = {click} >Click me</button>
        </div>
    );

    function click(){
        setState({count: state.count + 1});
    }
    
}