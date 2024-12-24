const express = require("express");
const app = express();
const port = 3000;


app.use(express.json());
app.post("/health-checkup", (req, res)=>{
  const kidneys = req.body.kidneys;
  const kidneyLength = kidneys.length

  console.log(kidneys);
  console.log(kidneyLength);
  
  res.send("your'e fine." + kidneyLength)
})

app.use((err,req,res,next) => {
  res.status(500).send("An internal error occurred");
})

app.listen(port, ()=>{
  console.log("port is listening at:", port);
})