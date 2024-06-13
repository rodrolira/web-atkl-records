// models/artist.model.js

import pool from "../db/db.js";

export const createArtist = async ({
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
}) => {
  const query = {
    text: `INSERT INTO artists(artist_name, user_id, email, bio, image, bandcamp_link, facebook_link,
      instagram_link, soundcloud_link, twitter_link, youtube_link, spotify_link)
      VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *`,
    values: [
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
    ],
  };

  try {
    const result = await pool.query(query);
    return result.rows[0];
  } catch (error) {
    console.error(`Error creating artist: ${error.message}`, error);
    throw new Error(`Error creating artist: ${error.message}`);
  }
};

export const getAllArtists = async () => {
  const query = {
    text: "SELECT * FROM artists",
  };

  try {
    const result = await pool.query(query);
    return result.rows;
  } catch (error) {
    throw new Error(`Error fetching artists: ${error.message}`);
  }
};

export const getArtistById = async (id) => {
  const query = {
    text: "SELECT * FROM artists WHERE id = $1",
    values: [id],
  };

  try {
    const result = await pool.query(query);
    return result.rows[0];
  } catch (error) {
    throw new Error(`Error fetching artist by ID: ${error.message}`);
  }
};
