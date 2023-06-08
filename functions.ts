//functions
function add(num1:number,num2:number):number{
    return num1+num2;
}
console.log(add(2,3));

const sub = (num1:number, num2:number):number =>{
    return num1-num2
}
console.log(sub(2,3));

const mult = function (num1:number, num2:number):number{
    return num1*num2
}


// optional parameter
function adds(num1:number,num2:number, num3?:number):number{
    return num3 ? num1+num2+num3 : num1 +num2;
}
console.log(adds(2,3));


//required parameter
const multi = function (num1:number, num2:number,num3=4):number{
    return num1*num2*num3
}
console.log(multi(2,3,7));


//rest parameter
function add2(num1:number, num2:number, ...num3:number[]): number{
return num1 +num2 + num3.reduce((a,b)=>a+b,0);
}

let numbers = [1,2,3,4,5];
console.log(add2(2,3,...numbers));
console.log(add2(2,3,...[5,6,7]));
console.log(add2(2,3,5,6,7,8));

//generics
function getItems<T>(items: T[]):T[] {     //placeholder <T> <Type>
    return new Array<T>().concat(items);
}

let concatNumber = getItems<number>([1,2,3,4,5])
let concatString = getItems<string>(["a","e","i","o","u"])
