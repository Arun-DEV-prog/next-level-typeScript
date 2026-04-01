import { useState } from 'react'

import './App.css'
import { Aruncard } from './components/aruncard.tsx'
import { Couter } from './components/Counter.tsx'
import type { Chai } from './types.ts'
import Chailist from './components/Chailist.tsx'

const menu:Chai[]=[
  {id:1,name:"masala",price: 24},
  {id:2,name:"masala",price: 24},
  {id:3,name:"masala",price: 24}
]


function App() {
 

  return (
    <>
        <div>
           <h1>Vite + React </h1>
           <Aruncard name="Headphones" price={44}/>
           <Couter />
           <div>
            <Chailist items={menu}></Chailist>
           </div>
        </div>
    </>
  )
}

export default App
