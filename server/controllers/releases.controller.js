import Release from "../models/release.model.js";

export const addRelease = async (req, res) => {
  const {
    title,
    releaseYear,
    bandcampLink,
    beatportLink,
    spotifyLink,
    appleMusicLink,
    youtubeLink,
    soundcloudLink,
  } = req.body;

  try {
    const newRelease = await Release.create({
      title,
      releaseYear,
      bandcampLink,
      beatportLink,
      spotifyLink,
      appleMusicLink,
      youtubeLink,
      soundcloudLink,
    });

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

export const modifyRelease = async (req, res) => {
  const { id } = req.params;
  const {
    title,
    releaseYear,
    bandcampLink,
    beatportLink,
    spotifyLink,
    appleMusicLink,
    youtubeLink,
    soundcloudLink,
  } = req.body;

  try {
    const [updated] = await Release.update(
      {
        title,
        releaseYear,
        bandcampLink,
        beatportLink,
        spotifyLink,
        appleMusicLink,
        youtubeLink,
        soundcloudLink,
      },
      {
        where: { id },
      }
    );

    if (!updated) {
      return res.status(404).json({ message: "Release not found" });
    }
    const updatedRelease = await Release.findByPk(id);
    res.status(200).json(updatedRelease);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const removeRelease = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await Release.destroy({ where: { id } });
    if (!deleted) {
      return res.status(404).json({ message: "Release not found" });
    }
    res.status(200).json({ message: "Release deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
