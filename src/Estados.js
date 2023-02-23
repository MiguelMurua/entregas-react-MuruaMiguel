import React, {useState} from "react";

const Estados = ()=>{

    const [count, setCount] = useState(1);

    const handlerAdd = ()=>{
        setCount(count +1)
    }

    const handlerRest = ()=>{
        setCount(count -1)
    }

    const handlerReset = ()=>{
        setCount(0)
    }


    return (

        <>
            <p>{count}</p>
            <button onClick={handlerAdd}>Sumar</button>
            <button onClick={handlerRest}>Restar</button>
            <button onClick={handlerReset}>Resetear</button>
        </>

    )


}

export default Estados