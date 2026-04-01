import type { Chai } from "../types"
import { Aruncard } from "./aruncard"

interface ChaiListProps{
     items:Chai[]
}

export default function Chailist({items}:ChaiListProps) {
  return (
    <div>
       <h1>Chailist</h1>
       {items.map((chai)=>(
         <Aruncard key={chai.id} 
         name={chai.name}
         price={chai.price}
         />
       ))}
    </div>
  )
}
