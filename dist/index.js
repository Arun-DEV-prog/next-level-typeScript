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
    register() {
        return `${this.name} is now registered`;
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
console.log();
const names = ["Alice", "Bob", "eve"];
names.forEach(function (s) {
    console.log(s.toLowerCase());
});
names.forEach((s) => {
    console.log(s.toLowerCase());
});
function welcomePeople(x) {
    if (Array.isArray(x)) {
        console.log("Hello, " + x.join(' and '));
    }
    else {
        // Here: 'x' is 'string'
        console.log("Welcome lone traveler " + x);
    }
}
welcomePeople(['aaa', 'bbb', 'aaa']);
const adrakchai = {
    name: 'coffe',
    price: 25,
    ingredients: ['dd', 'g']
};
const placeOrder = (order) => {
    console.log(order);
};
const rating = [1, 2, 3, 4, 5];
const menu = [
    { name: 'Masala', price: 100 },
    { name: 'Masala', price: 100 },
    { name: 'Masala', price: 100 }
];
menu.push();
var CupSize;
(function (CupSize) {
    CupSize[CupSize["small"] = 0] = "small";
    CupSize[CupSize["medium"] = 1] = "medium";
    CupSize[CupSize["large"] = 2] = "large";
})(CupSize || (CupSize = {}));
const s = CupSize.large;
let user;
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Pending"] = "Pending";
    OrderStatus["Shiped"] = "Shiped";
    OrderStatus["Delivered"] = "Delivered";
})(OrderStatus || (OrderStatus = {}));
const order = {
    id: 1,
    status: OrderStatus.Pending
};
export {};
//# sourceMappingURL=index.js.map