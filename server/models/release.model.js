// models/release.model.js

import pool from '../db/db.js';

export const createRelease = async ({
  title,
  releaseYear,
  bandcampLink,
  beatportLink,
  spotifyLink,
  appleMusicLink,
  youtubeLink,
  soundcloudLink,
}) => {
  const query = {
    text: `INSERT INTO releases(title, release_year, bandcamp_link, beatport_link, spotify_link, apple_music_link,
      youtube_link, soundcloud_link)
      VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
    values: [
      title,
      releaseYear,
      bandcampLink,
      beatportLink,
      spotifyLink,
      appleMusicLink,
      youtubeLink,
      soundcloudLink,
    ],
  };

  try {
    const result = await pool.query(query);
    return result.rows[0];
  } catch (error) {
    throw new Error(`Error creating release: ${error.message}`);
  }
};

export const getAllReleases = async () => {
  const query = {
    text: 'SELECT * FROM releases',
  };

  try {
    const result = await pool.query(query);
    return result.rows;
  } catch (error) {
    throw new Error(`Error fetching releases: ${error.message}`);
  }
};

export const getReleaseById = async (id) => {
  const query = {
    text: 'SELECT * FROM releases WHERE id = $1',
    values: [id],
  };

  try {
    const result = await pool.query(query);
    return result.rows[0];
  } catch (error) {
    throw new Error(`Error fetching release by ID: ${error.message}`);
}
};

export const updateRelease = async (id, { title, releaseYear, bandcampLink, beatportLink, spotifyLink, appleMusicLink, youtubeLink, soundcloudLink }) => {
const query = {
text: 'UPDATE releases SET title = $1, release_year = $2, bandcamp_link = $3, beatport_link = $4, spotify_link = $5, apple_music_link = $6, youtube_link = $7, soundcloud_link = $8 WHERE id = $9 RETURNING *',
values: [title, releaseYear, bandcampLink, beatportLink, spotifyLink, appleMusicLink, youtubeLink, soundcloudLink, id],
};

try {
const result = await pool.query(query);
return result.rows[0];
} catch (error) {
throw new Error(`Error updating release: ${error.message}`);
}
};

export const deleteRelease = async (id) => {
const query = {
text: 'DELETE FROM releases WHERE id = $1',
values: [id],
};

try {
const result = await pool.query(query);
return result.rowCount;
} catch (error) {
throw new Error(`Error deleting release: ${error.message}`);
}
};


