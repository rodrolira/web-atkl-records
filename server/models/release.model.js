// releaseModel.js
import mongoose from "mongoose";

const releaseSchema = mongoose.Schema({
  title: { type: String, required: true, trim: true },
  releaseYear: {
    type: Number,
    required: true,
    default: new Date()
   },
  bandacampLink: { type: String }, // Enlace de Bandcamp
  beatportLink: { type: String }, // Enlace de Beatport
  spotifyLink: { type: String }, // Enlace de Spotify
  appleMusicLink: { type: String }, // Enlace de Apple Music
  youtubeLink: { type: String }, // Enlace de YouTube
  soundcloudLink: { type: String }, // Enlace de SoundCloud
  create: {
    type: Date,
    default: Date.now()
  }
},
  { timestamps: true }
);

export default mongoose.model.Release ||
  mongoose.model("Release", releaseSchema);
