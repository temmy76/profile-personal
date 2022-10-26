import mongoose from "mongoose"

const profileSchema = mongoose.Schema({
  username:{
    type: String,
    required: true,
    unique: true,
  },
  fullname: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
})

profileSchema.index({ username: "username"})

export default mongoose.model("profile", profileSchema)
