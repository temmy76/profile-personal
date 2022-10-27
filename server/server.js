import express from "express";
import mongoose from "mongoose";
import profileRoute from "./route/profile.js"
import cors from "cors";
import path from 'path';

const app = express()

mongoose.connect(`mongodb://localhost/personalProfile`).then(() => {
  console.log("Connected to database")
}).catch((err) => {
  console.log("Cannot Connect to Database " + err)  
  process.exit()
})

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended : true}))

app.use("/api/profiles", profileRoute )

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> {
  console.log(`Server is running on port ${PORT}`)
})
