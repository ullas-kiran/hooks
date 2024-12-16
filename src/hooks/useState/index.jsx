import { useState } from "react"


const UseStateExample = () => {
  const [count,setCount]=useState(0);

  const increaseCount=()=>{
  //  setCount((prev)=>prev+1);//1
  //  setCount((prev)=>prev+1);//1
   setCount(count+1)
   setCount(count+2)
  }

  return (
    <div>
        {count}
        <h1>useState</h1>
        <button onClick={increaseCount}>Increase Counter</button>
    </div>
  )
}

export {UseStateExample}