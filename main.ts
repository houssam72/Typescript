export {};
let isBeginner: boolean = true;
let tota: number = 0;
let name: string = "Vishwas";

//In typeScript we can use template string and template string we can use
//multiple lines and have embeddes expressions
let sentence: string = `Muy name is ${name}
i am a beginner in Typescript`;
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
let n: null = null;
let u: undefined;

//undefined and null are classiffed as subtypes of all other types that mean
let isNewx: number = null;
let muName: string = undefined;

//Building on these basic tYpes and the SubTypes we can declare an Array of values
//using the aray type
let List1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

//Mix type array it's possible but:
// (the number of element are fixed and the order of values has to match the order of types)
let person1: [string, number] = ["Chris", 22];

//the Enum type
//Is a way of giving more friendly names to a set of numeric values
//Decalring an Enum
enum Color0 {
  Red,
  Green,
  Blue,
}
enum Color1 {
  Red = 5,
  Green,
  Blue,
}
let c0: Color0 = Color0.Green;
let c1: Color1 = Color1.Green;
console.log(c0, c1); //1,6

//the any type
//we we know that the value is dynamic(the type change (user input))
//helpful wen we are just migrating from JS to TS
//helps to assign different types of values
let randomValue: any = 10;
randomValue = true;
randomValue = "Houssam";
//AnyTyoe don't verify anithing
// console.log(randomValue.name);
// randomValue();
// randomValue.toUpperCase();

//unKnow Type
//is very simmillar to the any type but we can't acces any propereties of an
//unknown type nor can we call or contruect them
let randomValue1: unknown = 10;
randomValue1 = true;
randomValue1 = "Houssam";

function hasName(obj: any): obj is { name: string } {
  return !!obj && typeof obj === "object" && "name" in obj;
}

if (hasName(randomValue1)) {
  console.log(randomValue1.name);
}
// we nedd to use a type assertion to convert the type sysytem that we know
(randomValue1 as string).toUpperCase();

{/* Two concept that revolve around types in typeScript*/}
{/*Type inference*/}

let a
a=10
a=true

let b=20
// b=true error because b is a number that is a type inference
{/*Union of types */}
//ability to specify a union of types for the same variable
let multiType : number | boolean
multiType=20
multiType=true


  
{/*  Functions */}
//In TypeScript we can specify types for function parameters
function add(num1:number,num2:number):number{
    return num1+num2
}
add(5,10)
// add(5,'10') dn't work

//optonal parameter
//we just add ? to the end of the parameter
function add1(num1:number,num2?:number):number{
    if(!num2){
        return num1
    }
    else{
    return num1+num2
    }
}

add1(5)

//default parametre
function add2(num1:number,num2:number=10):number{
   return num1+num2
}

add2(5,15)
add2(5)

{/* Interfaces*/}
// In TypeScript, an interface defines a contract for the shape of an object. It specifies the properties and methods that an object must have, but does not provide an implementation for them. Interfaces are used to define a structure for objects, classes, and other types, and can be used for type checking at compile-time.

// Here is an example of an interface definition in TypeScript:

// Copy code
interface Point {
    x: number;
    y: number;
}
// In this example, the Point interface defines two properties, x and y, both of which are numbers. Any object that implements this interface must have these two properties with the specified types.

// You can also use interfaces to define the shape of function types. Here is an example:

// Copy code
interface SearchFunc {
    (source: string, subString: string): boolean;
}
// In this example, the SearchFunc interface defines a single method, which takes two strings as arguments and returns a boolean. Any function that implements this interface must have the same signature.

// You can use interfaces to create a class.

// Copy code
interface Point {
    x: number;
    y: number;
}
class MyPoint implements Point {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}
// In this example, MyPoint is a class that implements the Point interface. It must have two properties x and y of type number.

interface Person{
      firstName:string
      lastName:string
      age?:number//optional
}

function fullName(person: Person){
    console.log(`${person.firstName} ${person.lastName}`)
}
let p={
    firstName:'Bruce',
    lastName:'wayne',
    test:'test'
}
fullName(p)

{/*Classes ans Acces Modifiers */}
// helps us to build application using the object-oriented class-based
//the syntax is familliar to java   

class Employee {
    employeeName:string;

    constructor(name:string){
        this.employeeName=name
    }
    greet(){
        console.log(`Good Morning ${this.employeeName}`)
    }
}

let emp1=new Employee('Vishwaas')
emp1.greet()

// Inhertince classes

class Manager extends Employee{
    constructor(managerName:string){
        super(managerName)
    }
    delegateWork(){
        console.log(`Manager delegating tasks`)
    }
}

let m1=new Manager('Bruc')
m1.greet()
m1.delegateWork()


//Access modifiers
//Acces modifiers are basically keywords that set the accessibility of
//properties and methods in a class 
//JavaScript does not have built-in acces modifiers (such as private, protected, and public)

// By default each class member is public
//Private it cannot be acces from outside of its containning class
//Private it cannot be acces even in the derived class
class Employee1 {
    private employeeName:string;

    constructor(name:string){
        this.employeeName=name
    }
    greet(){
        console.log(`Good Morning ${this.employeeName}`)
    }
}
class Manager1 extends Employee1{
    constructor(managerName:string){
        super(managerName)
    }
    delegateWork(){
        // console.log(`Manager delegating tasks ${this.employeeName}`)
        //impossible because employeeName is private
    }
}
let emp2=new Employee1('Vishwaas')
// console.log(emp2.employeeName) don't work because employeeName is private

//We can use the protected modifiers to acces to the derived class
class Employee2 {
    protected employeeName:string;

    constructor(name:string){
        this.employeeName=name
    }
    greet(){
        console.log(`Good Morning ${this.employeeName}`)
    }
}
class Manager2 extends Employee2{
    constructor(managerName:string){
        super(managerName)
    }
    delegateWork(){
        console.log(`Manager delegating tasks ${this.employeeName}`)
    }
}
let emp3=new Employee2('Vishwaas')
// console.log(emp3.employeeName) don't work because employeeName is protected

//Public for free accessibilitty
// Private accessibilittt within the class
// Protected accessibilittt within the class the classes derived fron it