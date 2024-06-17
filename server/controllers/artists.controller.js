// controllers/artist.controller.js
import { createUser } from "../models/user.model.js";
import {
  createArtist,
  getAllArtists,
  getArtistById,
} from "../models/artist.model.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export const addArtist = async (req, res) => {
  const {
    artistName,
    username,
    email,
    password,
    bio,
    bandcampLink,
    facebookLink,
    instagramLink,
    soundcloudLink,
    twitterLink,
    youtubeLink,
    spotifyLink,
  } = req.body;

  // Verifica si hay un archivo subido
  const image = req.file ? req.file.path : null;

  if (!artistName || !username || !email || !password) {
    return res.status(400).json({
      message: "artistName, username, email, and password are required",
    });
  }

  try {
    // Crear usuario
    const newUser = await createUser({ username, email, password });

    // Crear artista asociado al usuario
    const newArtist = await createArtist({
      artistName,
      userId: newUser.id,
      email,
      bio,
      image,
      bandcampLink,
      facebookLink,
      instagramLink,
      soundcloudLink,
      twitterLink,
      youtubeLink,
      spotifyLink,
    });

    const token = jwt.sign({ email }, process.env.SECRET, { expiresIn: "12h" });

    res.cookie("token", token, { httpOnly: true });

    console.log("New artist created:", newArtist);

    res.status(201).json(newArtist);
  } catch (error) {
    console.error(`Error adding artist: ${error.message}`, error);
    return res
      .status(500)
      .json({ message: error.message, details: error.stack });
  }
};

export const getArtists = async (req, res) => {
  try {
    const artists = await getAllArtists();
    res.status(200).json(artists);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const fetchArtistById = async (req, res) => {
  const { id } = req.params;

  try {
    const artist = await getArtistById(id);
    if (!artist) {
      return res.status(404).json({ message: "Artist not found" });
    }
    res.status(200).json(artist);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
