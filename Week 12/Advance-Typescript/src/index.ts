// interface User {
//   name: string;
//   age: number;
// }

// function sumOfAge(user1: User, user2: User) {
//   return user1.age + user2.age;
// }

// const age = sumOfAge({ name: "suleman", age: 20 }, { name: "usama", age: 30 });
// console.log(age);





// Pick API

// interface User {
//   name: string;
//   age: number;
//   email: string,
//   password: string,
// }

// type updatedProps = Pick<User, 'name' | 'age'>
  

// function sumOfAge(user1: updatedProps) {
//   console.log(user1.name, user1.age);
// }

// sumOfAge({name: "Suleman", age: 21});





// Partial API

// interface User {
//   name: string;
//   age: number;
//   email: string,
//   password: string,
// }

// type updatedProps = Pick<User, 'name' | 'age'>
  
// type updatedPropsOptional = Partial<updatedProps>;

// function sumOfAge(user1: updatedPropsOptional) {
//   console.log(user1.name, user1.age);
// }

// sumOfAge({name: "Suleman"});





// ReadOnly 

// interface Config {
//   endpoint: string;
//   apiKey: string;
// }

// // or we can write this

// interface Config2 {
//   readonly endpoint: string;
//   readonly apiKey: string;
// }


// const config: Readonly<Config> = {
//   endpoint: '<https://api.example.com>',
//   apiKey: 'abcdef123456',
// };

// config.endpoint = "Asdasd";
// Attempting to modify the object will result in a TypeScript error
// config.apiKey = 'newkey'; // Error: Cannot assign to 'apiKey' because it is a read-only property.

