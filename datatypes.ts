let lname : string;
// lname=10;
lname="Abhishek";
let newname = lname.toUpperCase();
console.log(newname);

let age: number;
age=23

let dob ="25";
let result = parseInt(dob)


let isValid : boolean;
// console.log(isValid); //error on compiling it will give undefine
let issValid : boolean= true;

let empList : string[];

empList =["abhi","BHAi","tou"]

let deepList :Array<number>; //generics

deepList=[1,2,3,4,5]

let newnum = deepList[5]

let results = deepList.filter((num)=> num>2);
let emp = deepList.find((num)=> num===2);
let sum = deepList.reduce((acc,num)=> acc+num );

const enum Color { //if ew add const than we get end result
    Red,
    Green,
    Blue
}
let c:Color = Color.Blue


let swapNumber: [firstNumber:number,secondNumber:number];  //tuppels

function swapNumbers(num1:number, num2:number):[number,number]{
return[num2,num1]
}
swapNumber = swapNumbers(10,20);
swapNumber[0];
// swapNumber[2];

let department:any;

department="abc";
department=12


