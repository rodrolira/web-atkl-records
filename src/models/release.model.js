// releaseModel.js
import mongoose from 'mongoose'

const { Schema, model } = mongoose

const releaseSchema = new Schema({
  title: { type: String, required: true },
  releaseYear: { type: Number },
  artist: { type: mongoose.Schema.Types.ObjectId, ref: 'Artist' }, // Referencia al artista
  spotifyLink: { type: String } // Enlace de Spotify u otro servicio de streaming
  

  // Otros campos como lista de canciones, enlaces, etc.
})

export default mongoose.model('Release', releaseSchema)
