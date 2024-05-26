import mongoose from 'mongoose'

const artistSchema = mongoose.Schema(
  {
    artistName: {
      type: String,
      required: true,
      trim: true
    },
    user: {
      // Campo para almacenar el ID del usuario
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Referencia al modelo de User
      required: true
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    bio: {
      type: String
    },
    image: {
      type: String // Almacena la URL o la ruta de la imagen de perfil
    },
    bandcampLink: {
      type: String
    },
    facebookLink: {
      type: String
    },
    instagramLink: {
      type: String
    },
    soundcloudLink: {
      type: String
    },
    twitterLink: {
      type: String
    },
    youtubeLink: {
      type: String
    },
    spotifyLink: {
      type: String
    },
    create: {
      type: Date,
      default: Date.now()
    }
  },
  { timestamps: true }
)

export default mongoose.model.Artist || mongoose.model('Artist', artistSchema)
