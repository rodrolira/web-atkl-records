// controllers/artist.controller.js
import Artist from "../models/artist.model.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import  jwt  from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const addArtist = async (req, res) => {
  const {
    artistName,
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

  if (!artistName  || !email || !password) {
    return res.status(400).json({
      message: "artistName, username, email, and password are required",
    });
  }

  try {
    // Crear usuario
    const newUser = await User.create({
      username: email,
      email,
      password: await bcrypt.hash(password, 10),
    });

    // Crear artista asociado al usuario
    const newArtist = await Artist.create({
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
    const artists = await Artist.findAll();
    res.status(200).json(artists);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const fetchArtistById = async (req, res) => {
  const { id } = req.params;

  try {
    const artist = await Artist.findByPk(id);
    if (!artist) {
      return res.status(404).json({ message: "Artist not found" });
    }
    res.status(200).json(artist);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
