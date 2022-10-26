import express from "express";
import mongoose from "mongoose";
import profileRoute from "./route/profile.js"
import cors from "cors";

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


app.listen(3000, ()=> {
  console.log(`Server is running in http://localhost:3000`)
})
