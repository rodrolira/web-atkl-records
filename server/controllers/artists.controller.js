// controllers/artist.controller.js
import Artist from "../models/artist.model.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const addArtist = async (req, res) => {
  const {
    artistName,
    email,
    username,
    password,
    bio,
    role,
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

  if (!artistName || !email || !username || !password) {
    return res.status(400).json({
      message: "artistName, username, email, and password are required",
    });
  }

  try {
    // Crear usuario
    const newUser = await User.create({
      username,
      email,
      password: await bcrypt.hash(password, 10),
    });

    // Crear artista asociado al usuario
    const newArtist = await Artist.create({
      artistName,
      userId: newUser.id,
      email,
      role,
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

export const updateArtist = async (req, res) => {
  const { id } = req.params;
  const {
    artistName,
    bio,
    role,
    image,
    twitterLink,
    instagramLink,
    facebookLink,
    soundcloudLink,
    bandcampLink,
  } = req.body;

  try {
    // Validación de campos obligatorios u otros requerimientos necesarios
    if (!artistName) {
      return res
        .status(400)
        .json({ error: "Artist name and role are required" });
    }

    console.log(`Updating artist with ID: ${id}`);
    console.log("Update data:", req.body); // Log para verificar los datos recibidos

    // Lógica de actualización en la base de datos
    const [updatedRowsCount, updatedRows] = await Artist.update(
      {
        artistName,
        bio,
        role,
        image,
        twitterLink,
        instagramLink,
        facebookLink,
        soundcloudLink,
        bandcampLink,
      },
      {
        where: { id },
        returning: true, // Para devolver el registro actualizado
      }
    );

    if (updatedRowsCount === 0) {
      return res.status(404).json({ error: "Artist not found" });
    }

    res.json(updatedRows[0]); // Devuelve el primer registro actualizado
  } catch (error) {
    console.error("Error updating artist:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteArtist = async (req, res) => {
  try {
    const { id } = req.params;
    await Artist.destroy({
      where: {
        id,
      },
    });
    res.status(200).json({ message: "Artist deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
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
