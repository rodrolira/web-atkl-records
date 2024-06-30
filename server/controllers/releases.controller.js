// controllers/release.controller.js
import Release from "../models/release.model.js";
import ArtistRelease from "../models/artistRelease.model.js";

export const addRelease = async (req, res) => {
  const {
    title,
    releaseDate,
    isExplicit,
    description,
    genre,
    releaseType,
    bandcampLink,
    beatportLink,
    spotifyLink,
    appleMusicLink,
    youtubeLink,
    soundcloudLink,
    artistIds,
  } = req.body;

  // Verifica si hay un archivo subido para la imagen de portada
  const coverImageUrl = req.file ? req.file.path : null;

  // Verifica que los campos obligatorios estén presentes
  if (
    !title ||
    !releaseDate ||
    !genre ||
    !releaseType ||
    !artistIds ||
    artistIds.length === 0
  ) {
    return res.status(400).json({
      message:
        "title, releaseDate, genre, releaseType, and at least one artistId are required",
    });
  }

  try {
    // Crear el release
    const newRelease = await Release.create({
      title,
      releaseDate,
      isExplicit,
      description,
      genre,
      coverImageUrl,
      releaseType,
      bandcampLink,
      beatportLink,
      spotifyLink,
      appleMusicLink,
      youtubeLink,
      soundcloudLink,
    });

    // Crear las asociaciones con Artist a través de ArtistRelease
    const artistReleasePromises = artistIds.map(async (artistId) => {
      await ArtistRelease.create({
        artistId,
        releaseId: newRelease.id,
      });
    });
    await Promise.all(artistReleasePromises);

    res.status(201).json(newRelease);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getReleases = async (req, res) => {
  try {
    const releases = await Release.findAll();
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
    releaseDate,
    isExplicit,
    description,
    genre,
    releaseType,
    coverImageUrl,
    bandcampLink,
    beatportLink,
    spotifyLink,
    appleMusicLink,
    youtubeLink,
    soundcloudLink,
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
        releaseDate,
        isExplicit,
        description,
        genre,
        releaseType,
        coverImageUrl,
        bandcampLink,
        beatportLink,
        spotifyLink,
        appleMusicLink,
        youtubeLink,
        soundcloudLink,
      },
      {
        where: { id },
        returning: true, // Devolver el registro actualizado
      }
    );

    if (!updated) {
      return res.status(404).json({ message: "Release not found" });
    }

    // Buscar y devolver el registro actualizado
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
    const deleted = await Release.destroy({ where: { id } });
    if (!deleted) {
      return res.status(404).json({ message: "Release not found" });
    }
    res.status(200).json({ message: "Release deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
