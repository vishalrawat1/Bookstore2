import express, { request } from "express";
import { PORT , mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookmodels.js";
import booksroutes from "./routes/booksroutes.js";
import cors from "cors";

const app = express(); 

app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET' , 'POST' ,'PUT' , 'DELETE'],
    allowedHeaders: ['Content-Type'],
  })
)
//-- post resq 

app.use(express.json());

//-- 
app.get('/' , (req ,res)=>{
    console.log(req);
    res.status(234).send("WELCOME");
})

app.use('/books' , booksroutes);

// ---- db ----------------------
<<<<<<< HEAD
=======

>>>>>>> origin/master
mongoose.connect(mongoDBURL).then(()=>{
console.log("app connected to db");
app.listen(PORT, (req , res) => {
    // res.console("sdfas")
  console.log("Server is running on port " + PORT);
});
}).catch((error)=>{
console.log(error);
})
