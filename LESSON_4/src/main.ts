// Type Aliases 
type stringOrNumber = string | number

type stringOrNumberArray = (string | number)[]

type Guitarist = {
    name?: string,
    active: boolean,
    albums: stringOrNumberArray
}

type UserId = stringOrNumber

// Literal types
let myName: 'Dave'

let userName: 'Dave' | 'John' | 'Amy'
userName = 'Amy'

// // functions 
// const add = (a: number, b: number): number => {
//     return a + b
// }
//  function does not return any message 
const logMsg = (message: any): void => {
    console.log(message)
}

logMsg('Hello!')
// logMsg(add(2, 3))

let subtract = function (c: number, d: number): number {
    return c - d
}

type mathFunction = (a: number, b: number) => number
// interface mathFunction {
//     (a: number, b: number): number
// }

let multiply: mathFunction = function (c, d) {
    return c * d
}

logMsg(multiply(2, 2))

// optional parameters 
const addAll = (a: number, b: number, c?: number): number => {
    if (typeof c !== 'undefined') {
        return a + b + c
    }
    return a + b
}

// default param value
const sumAll = (a: number = 10, b: number, c: number = 2): number => {
    return a + b + c
}

logMsg(addAll(2, 3, 2))
logMsg(addAll(2, 3))
logMsg(sumAll(2, 3))
logMsg(sumAll(undefined, 3))

// Rest Parameters 
const total = (a: number, ...nums: number[]): number => {
    return a + nums.reduce((prev, curr) => prev + curr)
}

logMsg(total(10, 2, 3))

const createError = (errMsg: string): never => {
    throw new Error(errMsg)
}

const infinite = () => {
    let i: number = 1
    while (true) {
        i++
        if (i > 100) break
    }
}

// custom type guard 
const isNumber = (value: any): boolean => {
    return typeof value === 'number'
        ? true : false
}

// use of the never type 
const numberOrString = (value: number | string): string => {
    if (typeof value === 'string') return 'string'
    if (isNumber(value)) return 'number'
    return createError('This should never happen!')
}

// union type array  
let players: (string | number | boolean)[];
players = ["messi", 1234 , true];
// union type specific type array only 
let player: string[] | number[] | boolean[];
player = [12 ,34 ,334];
// Tuples for specific combination of data type
let play: [string, number, boolean, string];
play = ["tipu", 233, true, "Imran"];
play[1] = 234;

// Objects with optional property and accessing the variable with optional chaining or not nul assertion  control undefined state of the property value
let playerObject: {
    name: string;
    age?: number;
    country: string;
    married: boolean;
    clubs?: string[];
};

playerObject.age = playerObject.age! + 5;
playerObject.clubs = playerObject.clubs?.map()

// enum to get fixed property value or getting property name by indexing property value  
enum Friends {
    Arif = 10,
    kalam = 15,
    API_Key = "api_key"
}
console.log(Friends.API_Key);
console.log(Friends[15]);
// Functions 
const add = (num1:number, num2:number): number =>{
    return num1 + num2
}
const result = add(12,23);
// function with optional value 
const add1 = (num1:number, num2:number, num3?:number): number =>{
    return num1 + num2+ (num3 || 0);
}
const result1 = add1(12,23);
// function alternative of optional value  
const add2 = (num1:number, num2:number, num3:number =0): number =>{
    return num1 + num2+ num3;
}
const result2 = add1(12,23);
//  Rest operator for working with many parameter and use call back function reduce
const add3 = (...numbers: number[]):number =>{
    const func = (pre:number,cur:number)=> pre+cur;
    return numbers.reduce(func,0)
}
const result3 = add3(12,23,34,56,78);

// Function signature const is not applicable
let add4: (num1:number ,num2:number , num3?:number) => number;
add4 = (num1,num2,num3=0)=>{
  return num1+num2+num3
}
// Function type
let add5: Function;
add5 = (num1:number,num2:number,num3=0)=>{
  return num1+num2+num3;
}
// Explore Type Aliases 
// For array  
type  Myname = "Sojib" | "Saiful";
let myName:Myname = "Sojib";
type arr = Myname[];
const arr: arr = ["Sojib"];
type football = [string, string ,number,boolean,string];
let football:football = ["Messi", "Ronaldo", 3456, true, "hello"];
// For function with signature
type Add5 = (num1: number, num2: number, num3?:number) => number;
let add5:Add5 = (num1,num2,num3=0)=>{
    return num1+num2+num3
  };
//For Objects  
type Address = {
    presentAddress: string;
    permanentAddress: string;
};
type Favorite = {
    type: "food" | "player" | "singer" | "actor";
    value: string;
}[];
type Person ={
    name: string;
    age: number;
    email:string;
    phone: string | string[];
    address: Address;
    favorites: Favorite;
};
const person: Person = {
    name: "John",
    age: 33,
    email: "imran@mail.com",
    phone: ["123"],
    address: {
        presentAddress: "example",
        permanentAddress: "example"
    },
    favorites: [
        {
            type: "food",
            value: "Biriyani"
        },
        {
            type: "player",
            value: "Messi"
        }
    ]

}
