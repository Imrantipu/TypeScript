// Explore Interfaces And Difference Between Type Alias And Interface
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
// extension is possible wth other object interface
interface Person extends Auth {

}
// But type alias uses  & instead of extends(interface)   
type Person = {

} & Auth ;
// interface  'implements' used in class  
interface Point {
    x:number;
    y:number;
}  
class SomePoint implements Point{
    x=1;
    y=2;
} 
// Declaration merging is possible in interface for same  interface name  
interface Point { x: number;}  
interface Point {y: number;}
const Point: Point = {x:1, y:2};