// controllers/artist.controller.js

import {
  createArtist,
  getAllArtists,
  getArtistById,
} from "../models/artist.model.js";

export const addArtist = async (req, res) => {
  const {
    artistName,
    userId,
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
  } = req.body;
  if (!artistName) {
    return res.status(400).json({ message: "artistName is required" });
  }
  try {
    const newArtist = await createArtist({
      artistName,
      userId,
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

    res.status(201).json(newArtist);
  } catch (error) {
    console.error(`Error adding artist: ${error.message}`, error);
    res.status(500).json({ message: error.message, details: error.stack });
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
