# TypeScript
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
