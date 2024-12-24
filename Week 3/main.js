const express = require("express")
const app = express();
const port = 3001;

function userMiddleware(req, res, next){
  if(req.headers.name !== "Suleman" || req.headers.password !== "pass"){
    res.status(403).json({
      msg: "User doesn't exist."
    })
    return;
  }else{
    next();
  }
}

function kidneyMiddleware(req, res, next){
  if(req.query.kidneyId != 1 && req.query.kidneyId != 2){
    res.status(401).json({
      msg: 'wrong inputs'
    });
    return;
  }else{
    next();
  }
} 

app.get("/health-checkup", userMiddleware, kidneyMiddleware, (req, res)=>{

  res.send("your'e fine.")
})

app.listen(port, ()=>{
  console.log("port is listening at:", port);
})