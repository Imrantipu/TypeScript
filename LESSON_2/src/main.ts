// explicitly declare variable with data type string
let myName: string = 'Dave'
let meaningOfLife: number;
let isLoading: boolean;
let album: any;

myName = 'John'
meaningOfLife = 42
isLoading = true
album = 5150

const sum = (a: number, b: string) => {
    return a + b
}
//  union data type
let postId: string | number
let isActive: number | boolean

let re: RegExp = /\w+/g