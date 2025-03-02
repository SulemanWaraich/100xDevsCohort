import express from "express";
const app = express();

let i = 1;

function noOfReq(req, res, next){
  // console.log(i++);
  res.json({numberOfRequests: i++})
  next();
}

app.get('/ride1', noOfReq, (req, res) => {
});

app.listen(3000);