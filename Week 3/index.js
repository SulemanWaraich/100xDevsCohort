const express = require("express")
const app = express();
const port = 3001;


app.get("/health-checkup", (req, res)=>{
  const kidneyId = req.query.kidneyId;
  const name = req.headers.name;
  const password = req.headers.password;

  console.log(name, kidneyId);
  console.log(password);

  if(name !== "Suleman" || password !== "pass"){
    res.status(403).json({
      msg: "User doesn't exist."
    })
    return;
  }

  if(kidneyId != 1 && kidneyId != 2){
    res.status(401).json({
      msg: 'wrong inputs'
    });
    return;
  }

  res.send("your'e fine.")
})

app.listen(port, ()=>{
  console.log("port is listening at:", port);
})