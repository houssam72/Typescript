"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var isBeginner = true;
var tota = 0;
var name = "Vishwas";
//In typeScript we can use template string and template string we can use
//multiple lines and have embeddes expressions
var sentence = "Muy name is ".concat(name, "\ni am a beginner in Typescript");
console.log(sentence);
// there are two important thigs of using types ==>
//  the first one is type checking Example:
//name =true  don't work because name is a string
//The second one is Intelligence
//name.  so when we write name. we can see all the properties
//and methods applicape to my type in my exaple is a string
{
    /*We have two more types null and undefined*/
}
var n = null;
var u;
//undefined and null are classiffed as subtypes of all other types that mean
var isNewx = null;
var muName = undefined;
//Building on these basic tYpes and the SubTypes we can declare an Array of values
//using the aray type
var List1 = [1, 2, 3];
var list2 = [1, 2, 3];
//Mix type array it's possible but:
// (the number of element are fixed and the order of values has to match the order of types)
var person1 = ["Chris", 22];
//the Enum type
//Is a way of giving more friendly names to a set of numeric values
//Decalring an Enum
var Color0;
(function (Color0) {
    Color0[Color0["Red"] = 0] = "Red";
    Color0[Color0["Green"] = 1] = "Green";
    Color0[Color0["Blue"] = 2] = "Blue";
})(Color0 || (Color0 = {}));
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 5] = "Red";
    Color1[Color1["Green"] = 6] = "Green";
    Color1[Color1["Blue"] = 7] = "Blue";
})(Color1 || (Color1 = {}));
var c0 = Color0.Green;
var c1 = Color1.Green;
console.log(c0, c1); //1,6
//the any type
//we we know that the value is dynamic(the type change (user input))
//helpful wen we are just migrating from JS to TS
//helps to assign different types of values
var randomValue = 10;
randomValue = true;
randomValue = "Houssam";
//AnyTyoe don't verify anithing
// console.log(randomValue.name);
// randomValue();
// randomValue.toUpperCase();
//unKnow Type
//is very simmillar to the any type but we can't acces any propereties of an
//unknown type nor can we call or contruect them
var randomValue1 = 10;
randomValue1 = true;
randomValue1 = "Houssam";
function hasName(obj) {
    return !!obj && typeof obj === "object" && "name" in obj;
}
if (hasName(randomValue1)) {
    console.log(randomValue1.name);
}
// we nedd to use a type assertion to convert the type sysytem that we know
randomValue1.toUpperCase();
{ /* Two concept that revolve around types in typeScript*/ }
{ /*Type inference*/ }
var a;
a = 10;
a = true;
var b = 20;
// b=true error because b is a number that is a type inference
{ /*Union of types */ }
//ability to specify a union of types for the same variable
var multiType;
multiType = 20;
multiType = true;
{ /*  Functions */ }
//In TypeScript we can specify types for function parameters
function add(num1, num2) {
    return num1 + num2;
}
add(5, 10);
// add(5,'10') dn't work
//optonal parameter
//we just add ? to the end of the parameter
function add1(num1, num2) {
    if (!num2) {
        return num1;
    }
    else {
        return num1 + num2;
    }
}
add1(5);
//default parametre
function add2(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    return num1 + num2;
}
add2(5, 15);
add2(5);
{ /* Interfaces*/ }
var MyPoint = /** @class */ (function () {
    function MyPoint(x, y) {
        this.x = x;
        this.y = y;
    }
    return MyPoint;
}());
function fullName(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
var p = {
    firstName: 'Bruce',
    lastName: 'wayne',
    test: 'test'
};
fullName(p);
{ /*Classes ans Acces Modifiers */ }
// helps us to build application using the object-oriented class-based
//the syntax is familliar to java   
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning ".concat(this.employeeName));
    };
    return Employee;
}());
var emp1 = new Employee('Vishwaas');
emp1.greet();
// Inhertince classes
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks");
    };
    return Manager;
}(Employee));
var m1 = new Manager('Bruc');
m1.greet();
m1.delegateWork();
//Access modifiers
//Acces modifiers are basically keywords that set the accessibility of
//properties and methods in a class 
//JavaScript does not have built-in acces modifiers (such as private, protected, and public)
// By default each class member is public
//Private it cannot be acces from outside of its containning class
//Private it cannot be acces even in the derived class
var Employee1 = /** @class */ (function () {
    function Employee1(name) {
        this.employeeName = name;
    }
    Employee1.prototype.greet = function () {
        console.log("Good Morning ".concat(this.employeeName));
    };
    return Employee1;
}());
var Manager1 = /** @class */ (function (_super) {
    __extends(Manager1, _super);
    function Manager1(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager1.prototype.delegateWork = function () {
        // console.log(`Manager delegating tasks ${this.employeeName}`)
        //impossible because employeeName is private
    };
    return Manager1;
}(Employee1));
var emp2 = new Employee1('Vishwaas');
// console.log(emp2.employeeName) don't work because employeeName is private
//We can use the protected modifiers to acces to the derived class
var Employee2 = /** @class */ (function () {
    function Employee2(name) {
        this.employeeName = name;
    }
    Employee2.prototype.greet = function () {
        console.log("Good Morning ".concat(this.employeeName));
    };
    return Employee2;
}());
var Manager2 = /** @class */ (function (_super) {
    __extends(Manager2, _super);
    function Manager2(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager2.prototype.delegateWork = function () {
        console.log("Manager delegating tasks ".concat(this.employeeName));
    };
    return Manager2;
}(Employee2));
var emp3 = new Employee2('Vishwaas');
// console.log(emp3.employeeName) don't work because employeeName is protected
//Public for free accessibilitty
// Private accessibilittt within the class
// Protected accessibilittt within the class the classes derived fron it
