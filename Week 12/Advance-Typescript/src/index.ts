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


// it look ugly to write so instead of this we will use record

// type user = {
//   name: string,
//   age: number,
// }

// type User = {
//   [key: string]: user
// }

// const user: User = {
//   "abc@rd1": {name: "ali", age: 21}
// }



// Record API

// type user = {
//   name: string,
//   age: number,
// }

// type enduser = Record<string, user>

// const user: enduser = {
//   "abc@rd1": {name: "ali", age: 21}
// }

// console.log(user["abc@rd1"]);



// It's better to use map instead of objects because then you have to attack type with record api also
// and it looks clean to use map it's also a javascript thing other are just for typescript thing

// interface User {
//   id: string;
//   name: string;
// }

// // Initialize an empty Map with string keys and User values
// const usersMap = new Map<string, User>();

// // Add users to the map using .set
// usersMap.set('abc123', { id: 'abc123', name: 'John Doe' });
// usersMap.set('xyz789', { id: 'xyz789', name: 'Jane Doe' });

// // Accessing a value using .get
// console.log(usersMap.get('abc123')); // Output: { id: 'abc123', name: 'John Doe' }




// Exclude API

// type Events = 'click' | 'scroll' | 'mousemove';

// // Using Exclude to create a new type without 'scroll'
// type ExcludeEvent = Exclude<Events, 'scroll'>; // 'click' | 'mousemove'

// // Function that accepts only 'click' and 'mousemove' events
// const handleEvent = (event: ExcludeEvent) => {
//   console.log(`Handling event: ${event}`);
// };

// handleEvent('click'); // OK
// handleEvent('scroll'); // Error: Argument of type '"scroll"' is not assignable to parameter of type 'ExcludeEvent'.



// Type inference in zod

// import { z } from 'zod';
// import express from "express";

// const app = express();
// app.use(express.json()); // Middleware to parse JSON bodies

// // Define the schema for profile update
// const userProfileSchema = z.object({
//   name: z.string().min(1, { message: "Name cannot be empty" }),
//   email: z.string().email({ message: "Invalid email format" }),
//   age: z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
// });

// app.put("/user", (req, res) => {
//   const result = userProfileSchema.safeParse(req.body);

//   if (!result.success) {
//     res.status(400).json({ error: result.error });
//     return;
//   }

//   // Type of updateBody is inferred from userProfileSchema
//   const updateBody = result.data;

//   // update database here
//   res.json({
//     message: "User updated",
//     updateBody
//   });
// });

// app.listen(3000, () => console.log("Server running on port 3000"));