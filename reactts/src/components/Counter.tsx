import { useState } from "react"

export function Couter(){
     const [count,setCount]=useState<number | null>(0);
     return(
         <div>
             <p>Couting:{count} </p>
              <button onClick={()=>setCount((c)=>c+1)}>Counting num</button>
         </div>
     )
}