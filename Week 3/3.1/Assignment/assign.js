const express = require("express");
const zod = require("zod");
const app = express();
const port = 3000;

const schema = zod.object({
  email: zod.string(),
  password: zod.string(),
  country: zod.literal("PK").or(zod.literal("PL")),
  kidneys: zod.array(zod.number()),
})

let numberOfRequests = 0;
let totalTime = 0;

function calculateRequest(req,res,next){
  const startTime = Date.now();

  res.on("finish", () => {
    const duration = Date.now() - startTime ;
    totalTime = totalTime + duration;
    numberOfRequests++

    const averageTime = (totalTime / numberOfRequests).toFixed(2);
    console.log(`Request handle in ${duration}ms. Average time is ${averageTime}`, numberOfRequests);
  })
  
  next(); 
}

app.use(express.json());
app.post("/health-checkup", calculateRequest, (req, res)=>{
  const kidneys = req.body;
  const kidneyLength = kidneys.length
  const response = schema.safeParse(kidneys)
  
  console.log(kidneys);
  console.log(kidneyLength);  
  console.log(response);

  if(!response.success){
    res.status(411).json({
      msg: "input is valid"
    })
  }
  res.send("your'e fine." + kidneyLength)
})

app.use((err,req,res,next) => {
  res.status(500).send("An internal error occurred");
})

app.listen(port, ()=>{
  console.log("port is listening at:", port);
})