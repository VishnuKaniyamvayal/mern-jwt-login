import express from "express";
import cors from "cors";
import connectToDb from "./db.js";

const app = express();

//database
connectToDb()

// middlewares
app.use(express.json());
app.use(cors());

const PORT = 5000;

app.listen( PORT , ()=>{
    console.log('Server started');
} )