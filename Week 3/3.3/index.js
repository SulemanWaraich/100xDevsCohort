// const jwt = require('jsonwebtoken');
import jwt from 'jsonwebtoken';
import {z} from 'zod';
const mail = "@gmail.com";

const mySchema = z.object({
  email: z.string().email({message: "write a valid email"}),
  password: z.union([z.string().min(6, {message: "password should be at least 6 characters long"}), z.number().min(6, {message: "password should be at least 6 digit long"})]),
})

function jwtTokenGenerator(email, password){

  // Method 1 without using zod

    // if(!email.includes(mail)){
    //     console.log("please write a valid email");
    //     return null;
    // }
    // if(password.length < 6){
    //     console.log("write a password with a length greater than 6");
    //     return null;
    // }

  // Method 2

    const result = mySchema.safeParse(email,password);
    if(!result.success){
      console.log("Validation Failed: ", result.error.format());
      return null;
    }

    const jwt_token = jwt.sign(email, 'suleman');
    return jwt_token;
}

const Token = jwtTokenGenerator({email: "abc@gmail.com",password: "1234567"});
console.log(Token);
