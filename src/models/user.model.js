import mongoose from 'mongoose'

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    image: {
      type: String
    },
    create: {
      type: Date,
      default: Date.now()
    }
  },
  { timestamps: true }
)

export default mongoose.model('User', userSchema)
