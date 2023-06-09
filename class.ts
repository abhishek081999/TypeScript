import { Login, User } from "./interface";

// import * as UserLogin from './interface';



interface Address {
    street: string;
    city: string;
    state: string;
    pin: string;
  } 


class Employee {
  //    id!: number;
  //    name!:string;
  //    address!:string;
  // private  id: number;
  //   #id: number;

  #id: number;
  protected  name: string;
//   address: string;
address:Address
  // constructor(){}     //either default or parameterised constructor
  
  //getter & Setters
  get empId(): number {
    return this.#id;
  }

  set empId(id: number) {
    this.#id = id;
  }


  static getEmployeeCount():  number{
    return 50;
  }
  constructor(id: number, name: string, address: Address) {
    this.#id = id;
    this.name = name;
    this.address = address;
  }
  getNameWithAddress(): string {
    return `${this.name} stays at ${this.address}`;
  }
}



let john = new Employee(1, "john",  {
    street: "ABC",
    city: "Bangalore",
    state: "Karnataka",
    pin: "560076",
  });
// let address = john.getNameWithAddress();

john.empId = 100;//private value get set

console.log(john.empId);
Employee.getEmployeeCount(); //static methods available with class name
// john.id = 1;
// john.name ='john';
// john.address = 'Highway 71'

// john.  // not accesible if protected
class Manager extends Employee {
  constructor(id: number, name: string, address: Address) {
    super(id, name, address);
  }

  getNameWithAddress(): string {
    return `${this.name} is a manager at ${this.address}`;
  }
}
let address = john.getNameWithAddress();
console.log(john);
let mike = new Manager(2, "Mike", {
    street: "ABC",
    city: "Bangalore",
    state: "Karnataka",
    pin: "560076",
  });
console.log(mike.getNameWithAddress());
// 


// interfaces


class Employees implements Login {
    #id: number;
  
    protected name: string;
  
    address: Address;
  
    get empId(): number {
      return this.#id;
    }
  
    set empId(id: number) {
      this.#id = id;
    }
  
    static getEmployeeCount(): number {
      return 50;
    }
  
    constructor(id: number, name: string, address: Address) {
      this.address = address;
      this.#id = id;
      this.name = name;
    }
    login(): User {
      return { name: "John", id: 1, email: "" };
    }//
  
    getNameWithAddress(): string {
      return `${this.name} stays at ${this.address}`;
    }
  }