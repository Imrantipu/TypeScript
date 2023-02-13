# TypeScript
```sh
##### Install typescript : 
 
    npm install typescript -g


##### Typescript(main.ts) file change to Javascript(main.js) file with this command  
tsc main.ts
##### To monitor changes main.ts to main.js with -w flag in the command  
tsc main.ts -w
##### To avoid crossing(main.ts and main.js) foldering nedded  
Folder name : duild(for index.html, js files ....all build folders)  
Folder name : src(for all raw code like ...ts files)  
##### To maintain automatic changes from .ts(src) to .js(build) two command needed   
1. create tsconfig.json file with this command : tsc --init  
2. make changes in tsconfig.json for root derectory("rootDir": "./src") and output derectory("outDir": "./build/js")
3. To watch all changes with this command :   tsc -w  
##### To restrict .ts to .js files other then src , additional line needed in tsconfig.json file  
"include": ["src"]   
##### To restrict aotocompile in js files from ts file ,if ts file has an error, one change is needed in tsconfig.json file  
1.  "noEmitOnError": true  
2.  Or run command : tsc --noEmitOnError -w  
##### explicitly declare variables  
let myName: string = 'Dave'  
let album: any;  
let re: RegExp = /\w+/g  
##### Union data type  
let postId: string | number  
##### Array example   
1. array of all element string :  let bands: string[] = []  > let bands = ['one', 'hey', 'Dave']
2. all element string or number : let bands: (string | number)[] > let bands = ['State', 'Les Paul', 5150]  
##### Tuple  
let myTuple: [string, number, boolean] = ['Dave', 42, true]  
#### Objects  
1. initialize a type as object >  let myObj: object = {}  
2. object prototype > type can be used instead  of interface  
interface Guitarist {
    name?: string,   
    active: boolean,   
    albums: (string | number)[]   
}   
3. Access the prototype    
let evh: Guitarist = {  
    name: 'Eddie',   
    active: false,   
    albums: [1984, 5150, 'OU812']   
}   
4. Object type as a parameter  
const greetGuitarist = (guitarist: Guitarist) => {  
    if (guitarist.name) {   
        return `Hello ${guitarist.name.toUpperCase()}!`   
    }   
    return 'Hello!'  
}  
console.log(greetGuitarist(evh))    
5.  Enum  will only show index value accordingly   
enum Grade {  
    U = 1,  
    D,  
    C,  
    B,  
    A,  
}
console.log(Grade.U); > Output : 1   
##### Type Aliases   
type stringOrNumber = string | number  
type stringOrNumberArray = (string | number)[]  
type Guitarist = {  
    name?: string,  
    active: boolean,  
    albums: stringOrNumberArray  
}  
type UserId = stringOrNumber  
##### Literal types   
let myName: 'Dave'  
let userName: 'Dave' | 'John' | 'Amy'  
userName = 'Amy'  
##### functions 
const add = (a: number, b: number): number => {  
    return a + b  
}   
##### function does not return any message     
const logMsg = (message: any): void => {   
    console.log(message)    
}   
logMsg('Hello!')   
logMsg(add(2, 3))   
let subtract = function (c: number, d: number): number {  
    return c - d  
}   
type mathFunction = (a: number, b: number) => number   
##### interface function   
interface mathFunction {   
   (a: number, b: number): number     
 }  
let multiply: mathFunction = function (c, d) {  
    return c * d  
}  
logMsg(multiply(2, 2))   
##### optional parameters    
const addAll = (a: number, b: number, c?: number): number => {   
    if (typeof c !== 'undefined') {   
        return a + b + c   
    }   
    return a + b   
}   
##### default param value   
const sumAll = (a: number = 10, b: number, c: number = 2): number => {   
    return a + b + c   
}   
logMsg(addAll(2, 3, 2))   
logMsg(addAll(2, 3))   
logMsg(sumAll(2, 3))   
logMsg(sumAll(undefined, 3))   
##### Rest Parameters    
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
##### custom type guard    
const isNumber = (value: any): boolean => {    
    return typeof value === 'number'   
        ? true : false   
}   
##### use of the never type    
const numberOrString = (value: number | string): string => {   
    if (typeof value === 'string') return 'string'   
    if (isNumber(value)) return 'number'    
    return createError('This should never happen!')   
}   
#### union type   
let age: number | string | boolean | [] = 56;
##### Only value as a type to access only that particular value  
let myName: "Sojib" | "Saiful" = "Sojib";
myName = "Saiful"  
#### Array       
Array of string     
let players: string[] = ["MEESSSI", "Ronaldo"]    
##### union type array  
let players: (string | number | boolean)[];    
players = ["messi", 1234 , true];    
##### union type specific type array only 
let player: string[] | number[] | boolean[];   
player = [12 ,34 ,334];   
##### Tuples for specific combination of data type  
let play: [string, number, boolean, string];   
play = ["tipu", 233, true, "Imran"];   
play[1] = 234;   
##### enum to get fixed property value or getting property name by indexing property value  
enum Friends {   
    Arif = 10,   
    kalam = 15,   
    API_Key = "api_key"   
}   
console.log(Friends.API_Key);   
console.log(Friends[15]);   
##### Functions    
const add = (num1:number, num2:number): number =>{    
    return num1 + num2  
}    
const result = add(12,23);   
##### function with optional value    
const add1 = (num1:number, num2:number, num3?:number): number =>{   
    return num1 + num2+ (num3 || 0);    
}   
const result1 = add1(12,23);   
##### function alternative of optional value      
const add2 = (num1:number, num2:number, num3:number =0): number =>{    
    return num1 + num2+ num3;    
}   
const result2 = add1(12,23);   
##### Rest operator for working with many parameter and use call back function reduce   
const add3 = (...numbers: number[]):number =>{   
    const func = (pre:number,cur:number)=> pre+cur;   
    return numbers.reduce(func,0)   
}    
const result3 = add3(12,23,34,56,78);   
##### Function signature const is not applicable   
let add4: (num1:number ,num2:number , num3?:number) => number;   
add4 = (num1,num2,num3=0)=>{   
  return num1+num2+num3   
}   
##### Function type   
let add5: Function;   
add5 = (num1:number,num2:number,num3=0)=>{   
  return num1+num2+num3;   
}
##### Explore Type Aliases 
##### For array     
type  Myname = "Sojib" | "Saiful";   
let myName:Myname = "Sojib";   
type arr = Myname[];   
const arr: arr = ["Sojib"];   
type football = [string, string ,number,boolean,string];   
let football:football = ["Messi", "Ronaldo", 3456, true, "hello"];   
##### For function with signature   
type Add5 = (num1: number, num2: number, num3?:number) => number;    
let add5:Add5 = (num1,num2,num3=0)=>{    
    return num1+num2+num3    
  };  
##### Explore Type Aliases    
For array      
type  Myname = "Sojib" | "Saiful";   
let myName:Myname = "Sojib";   
type arr = Myname[];    
const arr: arr = ["Sojib"];   
type football = [string, string ,number,boolean,string];   
let football:football = ["Messi", "Ronaldo", 3456, true, "hello"];   
For function with signature   
type Add5 = (num1: number, num2: number, num3?:number) => number;   
let add5:Add5 = (num1,num2,num3=0)=>{   
    return num1+num2+num3   
  };     
For Objects       
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
##### Explore Interfaces And Difference Between Type Alias And Interface   
interface Person {    
    name: string;   
    email: string;   
}   
let person: Person = {   
    name: "john",    
    email: "imran@mail.com"    
}   
interface Auth {   
    isLoggedIn: boolean;   
}   
interface Add5 {   
    (num1: number, num2: number, num3?:number): number;   
}     
const add5 : Add5 = (num1, num2, num3 = 0)=>{      
    return num1+num2+num3;     
  };       
##### extension is possible wth other object interface   
interface Person extends Auth {   
    
}   
##### But type alias uses  & instead of extends(interface)       
type Person = {      
    
} & Auth ;   
##### interface  'implements' used in class      
interface Point {    
    x:number;    
    y:number;    
}      
class SomePoint implements Point{    
    x=1;    
    y=2;    
}     
##### Declaration merging is possible in interface for same  interface name       
interface Point { x: number;}       
interface Point {y: number;}    
const Point: Point = {x:1, y:2};  
##### (null, undefined ,any) type 
interface User {
    name: string;
    email: string;
}
let user: User | null | undefined = null;
##### Type ASSERTIONS(as)
let use1 = {} as User;
#### Literal types (value as type)
let myName: 'Dave'  
let userName: 'Dave' | 'John' | 'Amy'  
userName = 'Amy'

phone: string | string[]; 
if (phone.isArray(phone)){
    person.phone.map((val) => val.toLowerCase())
}else{
    phone.toLowerCase();
}
#### Literal Inference(as const) 
const friends =["Arif", "John"] as const;
interface Description {
    Arif: string;
    John: string;
}
let description: Description = {} as Description;
friends.forEach((it) => {
 description[it] = it + " on fire";
});
##### Explore dom manipulation in Typescript
const submitBtn = document.getElementById("submit-btn");
const input = document.getElementById("input") as HTMLInputElement;

const handleSubmit = (event: MouseEvent) =>{
    const target = event.target as HTMLElement;
    const p = document.createElement("p");
    p.innerHTML = input?.value;
    target?.parentNode?.appendChild(p);
};
submitBtn?.addEventListener("click", handleSubmit);