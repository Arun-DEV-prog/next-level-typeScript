let id:number=5;
let person : [number,string,boolean]=[1,'ss',true];

let employee:[number,string,][]

employee=[
    [1,'bb'],
    [2,'ccc'],
    [2,'ddd']
]


type user={
    id:string,
    name:string
}

const User:user={
     id:'aa',
     name:'john'
}

console.log(User);

function addNum(x:number,y:number):number{
     return x+y;
}

console.log(addNum(20,30));

function log(message: string | number):void{
     console.log(message);
}

log('hello')
log(30)


interface UserInterface{
    id:number,
    name:string,
    college:string
}


class Person{
    id:number;
    name:string

    constructor(id:number,name:string){
      this.id=id;
      this.name=name;
    }

    register():string{
         return `${this.name} is now registered`;
    }
}
const brad=new Person(33,'qlu');

console.log(brad);


class Employee extends Person{
     position:string;

     constructor(id:number,name:string,positon:string){
        super(id,name)
        this.position=positon
     }
}

const emp=new Employee(2,'ss','sss')

console.log(emp.name)
console.log()