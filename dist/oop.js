class Chai {
    flavour;
    price;
    constructor(flavour, price) {
        this.flavour = flavour;
        this.price = price;
    }
}
const masalChai = new Chai('Ginger', 20);
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
    name;
    pass;
    constructor(name, pass) {
        this.name = name;
        this.pass = pass;
    }
    greet() {
        return `Hello ${this.name}`;
    }
}
class Admin extends User {
    deleteUser() {
        return "user Deleted";
    }
}
const admin = new Admin('Arun', '1333');
console.log(admin.greet());
//Encapsulation
class BankAccount {
    balace = 0;
    depost(ammount) {
        this.balace += ammount;
    }
    getBalance() {
        return this.balace;
    }
}
const bankaccout = new BankAccount();
bankaccout.depost(100);
bankaccout.getBalance();
console.log(bankaccout.getBalance());
//
class Person {
    _age = 0;
    set age(value) {
        if (value > 0)
            this._age = value;
    }
    get age() {
        return this._age;
    }
}
const p = new Person();
p.age = 22;
console.log(p.age);
//abstract class
class Animal {
    move() {
        console.log("moving.....");
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("Bark");
    }
}
const dog = new Dog();
dog.makeSound();
dog.move();
export {};
//# sourceMappingURL=oop.js.map