import React from "react";

export default function Example2(){

    //const [what] = React.useState(0); //what은 배열임
    
    const [count, setCount] = React.useState(0);
    
    // const click = () =>{
    //     setCount(count + 1);
    // }
    
    return(
        <div>
            <p>You clicked {count} times</p>
            <button onClick = {click} >Click me</button>
        </div>
    );

    function click(){
        setCount(count + 1);
    }
    
}