let id: number = 5;
let person: [number, string, boolean] = [1, 'ss', true];

let employee: [number, string,][]

employee = [
     [1, 'bb'],
     [2, 'ccc'],
     [2, 'ddd']
]


type user = {
     id: string,
     name: string
}

const User: user = {
     id: 'aa',
     name: 'john'
}

console.log(User);

function addNum(x: number, y: number): number {
     return x + y;
}

console.log(addNum(20, 30));

function log(message: string | number): void {
     console.log(message);
}

log('hello')
log(30)


interface UserInterface {
     id: number,
     name: string,
     college: string
}


class Person {
     id: number;
     name: string

     constructor(id: number, name: string) {
          this.id = id;
          this.name = name;
     }

     register(): string {
          return `${this.name} is now registered`;
     }
}
const brad = new Person(33, 'qlu');

console.log(brad);


class Employee extends Person {
     position: string;

     constructor(id: number, name: string, positon: string) {
          super(id, name)
          this.position = positon
     }
}

const emp = new Employee(2, 'ss', 'sss')

console.log(emp.name)
console.log()


const names = ["Alice", "Bob", "eve"];

names.forEach(function (s) {
     console.log(s.toLowerCase());
})

names.forEach((s) => {
     console.log(s.toLowerCase());
})


function welcomePeople(x: string[] | string) {
     if (Array.isArray(x)) {
          console.log("Hello, " + x.join(' and '))
     }
     else {
          // Here: 'x' is 'string'
          console.log("Welcome lone traveler " + x);
     }
}

welcomePeople(['aaa', 'bbb', 'aaa'])

type Tea={
     name:string;
     price:number;
     ingredients:string[]
}

const adrakchai:Tea={
      name:'coffe',
      price:25,
      ingredients:['dd','g']
}

type chaiOrder={
      name?:string;
      quantity?:number
}

const placeOrder=(order:Required<chaiOrder>)=>{
        console.log(order)
}



const rating:Array<number>=[1,2,3,4,5]


type nun={
      name:string;
      price:number
}

const menu: nun[]=[
      { name: 'Masala', price:100},
      { name: 'Masala', price:100},
      { name: 'Masala', price:100}
]
menu.push()




enum CupSize{
     small,
     medium,
     large
}


const s=CupSize.large;


let user:[string, number,boolean]

enum OrderStatus{
     Pending="Pending",
     Shiped="Shiped",
     Delivered="Delivered"
}


const order={
     id:1,
     status:OrderStatus.Pending
}

