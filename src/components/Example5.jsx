import React from "react";

export default function Example5(){
    
    const [count, setCount] = React.useState(0);
      
    // React.useEffect(() =>{
    //     console.log('componentDidMount & componentDidUpdate', count);
    // }) 
    //명시하지않으면 무조건 실행됨

    React.useEffect(() =>{
        console.log('componentDidMount');

        //componentWillUnMount역할을 하려면 새로운 함수를 리턴하도록 해야한다.
        

        return () =>{
            //cleanup 공간
            //다음 디펜던시에 의해서 시행될 때 (= 다음 렌더)
            //그 직전에 현재 클린업 공간 먼저 실행하고 console.log('componentDidMount'); 를 찍는다.
            //최초에만 실행되고 클린업이 일어나려면 Example5가 사라질 때 말고는 없음
            //componentWillUnMount 역할
        }
    }, []);

    React.useEffect(() =>{
        console.log('componentDidMount', count);
    }, []); 
    //노란색 lint 에러가 뜨는 이유 값(count)이 있는데 빈배열이라서 보통 실무에서는 빈 배열말고 어떤 처리를 해줌 
    //디펜던시에 영향을 주는 아이를 사용하지 않았기 때문
    //두번째 인자 useEffect 실행되는 타이밍을 조절할 때 사용
    //배열안에 있는 값이 변해서 렌더(리턴)될 때, useEffect를 실행하라는 의미
    //명시하지않으면 무조건 실행됨
    //빈 배열을 넣으면 최초에만 실행됨

    React.useEffect(() =>{
        console.log('componentDidMount & componentDidUpdate by count', count);
    
        // return을 넣을 경우 실행이전의 카운트값이 나온다.
        // next ComponentDidUpdate가 되기 직전에 정리하고 떠나는 곳 
        // return () =>{
        //     console.log("clean up by count", count)
        // }
    
    }, [count]) //렌더와 디펜던시에 어레이와 연관이 있다. //생성주기와 약간 다름

    //useEffect 순차적 실행 가능

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