// server/controllers/releases.controller.js
import Artist from "../models/artist.model.js";
import Release from "../models/release.model.js";

export const addRelease = async (req, res) => {
  const {
    title,
    release_date,
    is_explicit,
    description,
    genre_id,
    release_type,
    artistIds,
  } = req.body;

  // Verifica que los campos obligatorios estén presentes
  if (
    !title ||
    !release_date ||
    !genre_id ||
    !release_type ||
    !artistIds ||
    artistIds.length === 0
  ) {
    return res.status(400).json({
      message:
        "title, release_date, genre_id, release_type, and at least one ArtistIds are required",
    });
  }

  try {
    // Verifica si hay un archivo subido para la imagen de portada
    const cover_image_url = req.file ? req.file.path : null;

    // Crear el release
    const newRelease = await Release.create({
      title,
      release_date,
      is_explicit,
      description,
      genre_id,
      cover_image_url,
      release_type,
    });

    // Añadir asociaciones con artistas
    await newRelease.addArtists(artistIds);

    res.status(201).json(newRelease);
  } catch (error) {
    // Handle errors
    console.error("Error adding release:", error);
    res.status(500).json({ message: "Failed to add release" });
  }
};

export const getReleases = async (req, res) => {
  try {
    const releases = await Release.findAll({ include: Artist });
    res.status(200).json(releases);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const fetchReleaseById = async (req, res) => {
  const { id } = req.params;

  try {
    const release = await Release.findByPk(id);
    if (!release) {
      return res.status(404).json({ message: "Release not found" });
    }

    res.status(200).json(release);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateRelease = async (req, res) => {
  const { id } = req.params;
  const {
    title,
    release_date,
    is_explicit,
    description,
    genre_id,
    release_type,
    cover_image_url,
    bandcamp_link,
    beatport_link,
    spotify_link,
    apple_music_link,
    youtube_link,
    soundcloud_link,
  } = req.body;

  try {
    // Validar que el título y otros campos necesarios estén presentes
    if (!title) {
      return res.status(400).json({ error: "Title is required" });
    }

    // Actualizar el release en la base de datos
    const [updated] = await Release.update(
      {
        title,
        release_date,
        is_explicit,
        description,
        genre_id,
        release_type,
        cover_image_url,
        bandcamp_link,
        beatport_link,
        spotify_link,
        apple_music_link,
        youtube_link,
        soundcloud_link,
      },
      {
        where: { id },
        returning: true, // Devolver el registro actualizado
      }
    );

    if (!updated) {
      return res.status(404).json({ message: "Release not found" });
    }

    // Busca y devuelve el registro actualizado
    const updatedRelease = await Release.findByPk(id);
    res.status(200).json(updatedRelease);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteRelease = async (req, res) => {
  const { id } = req.params;

  try {
    // Eliminar el release de la base de datos
    await Release.destroy({ where: { id } });

    res.status(200).json({ message: "Release deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
