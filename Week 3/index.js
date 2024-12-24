const express = require("express")
const app = express();
const port = 3001;

function headers(name, password){
  if(name !== "Suleman" || password !== "pass"){
    res.status(403).json({
      msg: "User doesn't exist."
    })
    return;
  }
}

function query(kidneyId){
  if(kidneyId != 1 && kidneyId != 2){
    res.status(401).json({
      msg: 'wrong inputs'
    });
    return;
  }
} 

app.get("/health-checkup", (req, res)=>{
  const kidneyId = req.query.kidneyId;
  const name = req.headers.name;
  const password = req.headers.password;

  headers(name, password);
  query(kidneyId);

  res.send("your'e fine.")
})

app.listen(port, ()=>{
  console.log("port is listening at:", port);
})