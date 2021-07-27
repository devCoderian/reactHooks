import { useReducer } from "react";
export default function Example6(){

    const reducer = (state, action)=>{
        if(action.type === 'PLUS'){
            return{
                count: state.count +1, 
            }
        }
        return state;
    }
    
 
    const [state, dispatch ] = useReducer(reducer, {count : 0})
    return(
        <div>
            <p>You clicked {state.count} times</p>
            <button onClick = {click}> Click Me</button>
        </div>
    )

    function click(){
        dispatch({ type: 'PLUS'});
    }
}