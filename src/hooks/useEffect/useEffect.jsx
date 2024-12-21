import { useEffect, useState } from "react";

const UseEffectExample = () => {
const [data,setData]=useState([])
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
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
