import jwt from 'jsonwebtoken';

// Decoding Jwt Token

// const decodedJwt = (token) => {
//   const result  = jwt.decode(token);

//   if(result == null){
//     return false;
//   }
//   else{
//     return true;
//   }
// }

// const res = decodedJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFiY0BnbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMzQ1NjciLCJpYXQiOjE3NDA2MDEyODJ9.RGh06iYGsQzLapzgVRaJ1_EaAkIfoKYzEkWadTBdQO8");

// console.log(res);


// Verifying Jwt 

const verifyingJwt = (token) => {
    try {
      const result = jwt.verify(token, "suleman");
      console.log(result);
    } catch (error) {
      return false;
    }
}

verifyingJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFiY0BnbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMzQ1NjciLCJpYXQiOjE3NDA2MDEyODJ9.RGh06iYGsQzLapzgVRaJ1_EaAkIfoKYzEkWadTBdQO8");