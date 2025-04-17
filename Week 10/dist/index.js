"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { PrismaClient } from "./generated/prisma/client";
// import { PrismaClient } from "./generated/prisma";
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
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
function getUser(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.findFirst({ where: { email } });
        console.log(res);
    });
}
getUser("suleman@gmail.com");
