import axios from 'axios';
import type { AxiosResponse } from 'axios';

interface Todo{
     userId:number;
     id:number;
     title:string;
     complete:boolean;
}

const fetchData=async()=>{
    try{
      const response:AxiosResponse<Todo>=await axios.get("https://jsonplaceholder.typicode.com/todos");
       console.log("todo",response.data)
    }catch(error:any)
    {
         if(axios.isAxiosError(error)){
             console.log("Axios Error",error.message)
         }
        console.log(error.message)
    }
}

fetchData()