import { useEffect, useState } from "react";

const UseEffectExample = () => {
const [data,setData]=useState([]);
const [toggle,setToggle]=useState(false);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, []);


  useEffect(()=>{
  console.log("run side effect")
  },[toggle])
 
  return (
    <div>
      <button onClick={()=>setToggle((prev)=>!prev)}>Toggle</button>
      <h1>Posts</h1>
      <ul>
        {data.map((item,index)=>{
          return(
            <li key={item.id}>
              {item.title}
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default UseEffectExample;
