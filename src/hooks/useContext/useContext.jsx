import { createContext, useState } from 'react'


const GlobalStateContext=createContext(null)

const useContextExample = () => {
    const [isToggle,setIsToggle]=useState(false)
  return (
    <div>
        <h1>Parent Component</h1>
        <ChildToggle setIsToggle={setIsToggle}/>
        <ChildDisplay isToggle={isToggle}/>
    </div>
  )
}

const ChildToggle=({setIsToggle})=>{
    return(
        <div>
            <button onClick={()=>setIsToggle((prev)=>!prev)}>Toggle State</button>
        </div>
    )
}

const ChildDisplay=({isToggle})=>{
   return (
    <div>
        <p>currentState:{isToggle?"On":"Off"}</p>
    </div>
   )
}

export default useContextExample