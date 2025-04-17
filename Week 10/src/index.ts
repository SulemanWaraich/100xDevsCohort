// import { PrismaClient } from "./generated/prisma/client";
// import { PrismaClient } from "./generated/prisma";
import { PrismaClient } from "@prisma/client";
import { log } from "console";

const prisma = new PrismaClient();

// async function insertUser(email: string, password: string, firstName: string, lastName: string){
//   const res = await prisma.user.create({
//     data: {
//       email,
//       password,
//       firstName,
//       lastName
//     },
//     select: {
//       id: true,
//       password: true
//     }
//   })
//   console.log(res);
// }

// insertUser("suleman@gmail.com", "12345", "Haider", "Ali");

// interface UpdateParam {
//   firstName: string
//   lastName: string
// }

// async function updateUser(email: string, {firstName, lastName}: UpdateParam){
//   const res = await prisma.user.update({where: {email}, data:{firstName, lastName}})
//   console.log(res);
// }

// updateUser('suleman@gmail.com', {firstName: "Ashfaque", lastName: "Waraich"});

async function getUser(email: string){
  const res = await prisma.user.findFirst({where: {email}});
  console.log(res);
}

getUser("suleman@gmail.com");