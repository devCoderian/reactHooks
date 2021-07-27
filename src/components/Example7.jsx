import { useEffect, useState, useMemo, useCallback} from "react";

function sum(persons){
    console.log('sum...')
    return persons.map(person => person.age).reduce((l, r) => l + r, 0)
}

export default function Example7(){

    const [value, setValue] = useState('');
    
    //타이핑할때마다 카운트 올려보기
    // const [count, setCount] = useState(''); 

    // useEffect(() =>{
    //     setCount(count+1);
    // }, [value]);

    const [persons] = useState([
        { name: 'Mark', age: 39 },
        { name: 'Hanna', age: 28 }
    ]);

    //persons가 변한적이 없는데도 계속 sum을 반환함
    //typing만 하면 반환
    //const count = sum(persons);
 
    //sum을 persons에 의존적으로 사용하겠다는 의미로 useMemo사용
    const count = useMemo(() =>{
        return sum(persons);
    }, [persons]); //두번째 인자 디펜던시 리스트
    //value만 변경돼도 안돈다.
    // 하위 컴포넌트는 props로 넘겨 받는 인자가 하나라도 변경될 때마다 렌더링되는데, props.a 만 변경 되었을 때 이전과 같은 값인 props.b도 다시 함수를 호출해서 재계산해야 할까? 그냥 이전에 계산된 값을 쓰면 되는데!

    // const click = useCallback(()=>{
    //     console.log(value);
    //     // 이전 값을 가지고 싶을때 이전 함수를 가지고 있음
    //     //언제 함수를 셋팅할 건지에 대한 역할
    // })

    
    const click = useCallback(()=>{
        console.log(value);
        // 이전 값을 가지고 싶을때 이전 함수를 가지고 있음
        //언제 함수를 셋팅할 건지에 대한 역할
    })
    return (
        <div>
            <input value = {value} onChange = {change} />
            <p>{count}</p>
            <button onClick = {click}>click</button>
        </div>
    );

    //타이핑 할 때 렌더가 다시된다.
    function change(e) {
        setValue(e.target.value);
    }


}