import express from "express";
import mongoose from "mongoose";
import profileRoute from "./route/profile.js"

const app = express()

mongoose.connect(`mongodb://localhost/personalProfile`).then(() => {
  console.log("Connected to database")
}).catch((err) => {
  console.log("Cannot Connect to Database " + err)  
  process.exit()
})

app.use(express.json());
app.use(express.urlencoded({extended : true}))
app.use(express.static("public"))

app.use("/api/profile", profileRoute )


app.listen(3000, ()=> {
  console.log(`Server is running in http://localhost:3000`)
})
