import "./style.css";

// function add(num1: number, num2: number) {
//   return num1 + num2;
// }

// console.log(add(1,2))

// const name: string = "Bob";
// const lastName: string = "Johnson";
// const age: number = 12;
// const isHappy: boolean = true;
// const budget: null = null;
// const status: undefined = undefined;

// type userProfile = {
//   userName: string;
//   age: number;
//   isActive: boolean;
// };

// function displayUserProfile(user: userProfile) {
//   return `user name is ${user.userName}, he is ${user.age} yo, and ${user.isActive} `;
// }

// const user = {
//   userName: "Bob",
//   age: 12,
//   isActive: true,
// };
// console.log(displayUserProfile(user));

// function logName(name:string){
// return name
// }

// console.log(logName("goose"))

// type User = {
//   name: string;
//   age: number;
// };

// function caclTotal(arr: User[]) {
//   // return arr.reduce((acc, el) => acc + el, 0);
// }

// const numArr = [1, 2, 3, 4];

// const users = [
// { name: "Bob", age: 12 },
// { name: "Bob", age: 121 },
// { name: "Bob", age: 122 },
// ];
// console.log(caclTotal(users  ));

// function logData(value: any){
//   console.log(`value ${value}, type ${typeof value}`)
// }

// console.log(logData('gas'))

// enum VehicleType {
//   Car = "Audi",
//   Truck = "Truck",
// }

// function getVehicleType(vehicle: VehicleType): string {
//   return `Vehicle ${vehicle}`;
// }

// console.log(getVehicleType(VehicleType.Car));
// function formatInput(input: string | number){
//   if (typeof input==='number'){
//     return input.toFixed(2)
//   } return input.toUpperCase()
// }

// console.log(formatInput('goose'))

// function lightShower(color: string) {}

// function logName(name: string): string  {
//   return name;
// }

// console.log(logName("goose"));

// function errorHandler(message: string): never {
//   throw new Error(message);
// }

// errorHandler("error");
// interface User {
//   name: string;
//   age: number;
//   lastName?: string;
//   sayHEllo(): string;
//   sayG(): void;
//   showAge(age: number): string;
// }

// const user = {
//   name: "Bob",
//   age: 12,
//   sayHello() {
//     return "Hello";
//   },
//   sayG() {
//     console.log("bye");
//   },
//   showAge(age: number) {
//     return age;
//   },
// };

// function get<T, K extends keyof T>(obj: T, key: K): T[K] {
//   return obj[key];
// }

// const person = {
//   name: "Jonh",
//   age: 30,
//   occupation: "eng",
// };

// const name = get(person, "name");

// console.log(name);

// interface UserProfile {
//   user: string;
//   email: string;
//   age: number;
// }

// const origProf: UserProfile = {
//   user: "gon ",
//   email: "gon@gmail.com",
//   age: 25,
// };

// function upd(profile: UserProfile, updates: Partial<UserProfile>) {
//   return { ...profile, ...updates };
// }

// const newProfile = upd(origProf, { email: "goose", age: 56 });

// console.log(newProfile);

interface User {
  id: number;
  name: string;
}

const user: Readonly<User> = {
  id: 100,
  name: "bob",
};

user.id = 1;
