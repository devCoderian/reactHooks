import React, { useState, useEffect } from 'react';
export default function useWindowWidth(){
    const [ width, setWidth ] = useState(window.innerWidth);

   useEffect(() =>{

    const fResize = () =>{
        setWidth(window.innerWidth);
    }
        //리사이즈 이벤트가 일어난다면
       window.addEventListener('resize', fResize);
    
       return () =>{
        window.removeEventListener('resize', fResize);
       }
    }, []);
    
    return width;
}

