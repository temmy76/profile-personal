import mongoose from "mongoose"

const profileSchema = mongoose.Schema({
  username:{
    type: String,
    required: true,
    unique: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname:{
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
})

profileSchema.index({ username: "username"})

export default mongoose.model("profile", profileSchema)
