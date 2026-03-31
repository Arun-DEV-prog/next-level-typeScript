class Chai{
    public flavour:string;
    price:number;

     constructor(flavour:string,price:number){
         this.flavour=flavour
         this.price=price
     }
}


const masalChai=new Chai('Ginger',20)



//Acces modifier
//class User{
//     public name: string;
//     private password:string;
//     protected role:string;

//     constructor(name:string, password:string, role:string){
//         this.name=name;
//         this.password=password;
//         this.role=role;
//     }

//     getPassword(){
//         return this.password;
//     }
//}


class User {
     constructor(
         public name: string,
         private pass: string
     ){}


     greet(){
         return `Hello ${this.name}`;
     }
}
class Admin extends User{
     deleteUser(){
         return "user Deleted"
     }
}

const admin= new Admin('Arun','1333')
console.log(admin.greet());

//Encapsulation

class BankAccount{
    private balace: number=0;

    depost(ammount:number){
         this.balace+=ammount;
    }

    getBalance(){
         return this.balace;
    }
}


const bankaccout=new BankAccount();
bankaccout.depost(100);
bankaccout.getBalance();
console.log(bankaccout.getBalance());


//
class Person{
     private _age: number=0;

     set age(value: number){
         if(value>0) this._age=value;
     }

     get age(){
         return this._age;
     }
}

const p=new Person();
p.age=22;
console.log(p.age)

//abstract class

abstract class Animal{
     abstract makeSound():void;

     move(){
         console.log("moving.....");
     }
  

}

  class Dog extends Animal{
         makeSound(): void {
             console.log("Bark")
         }
    }

    const dog=new Dog();
    dog.makeSound();
    dog.move();