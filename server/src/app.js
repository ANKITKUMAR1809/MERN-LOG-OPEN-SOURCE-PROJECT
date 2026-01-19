import express from 'express';

const app = express();

app.get("/",(req,res)=>{
   res.send("Server Active")
})

export default app;