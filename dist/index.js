"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let id = 5;
let person = [1, 'ss', true];
let employee;
employee = [
    [1, 'bb'],
    [2, 'ccc'],
    [2, 'ddd']
];
const User = {
    id: 'aa',
    name: 'john'
};
console.log(User);
function addNum(x, y) {
    return x + y;
}
console.log(addNum(20, 30));
function log(message) {
    console.log(message);
}
log('hello');
log(30);
class Person {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
const brad = new Person(33, 'qlu');
console.log(brad);
class Employee extends Person {
    position;
    constructor(id, name, positon) {
        super(id, name);
        this.position = positon;
    }
}
const emp = new Employee(2, 'ss', 'sss');
console.log(emp.name);
//# sourceMappingURL=index.js.map