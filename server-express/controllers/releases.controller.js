// controllers/releases.controller.js
import releasesData from '../data/releasesData.js';
import Release from '../models/release.model.js';


// Controlador para crear un nuevo lanzamiento
export const createRelease = async (req, res) => {
  try {
    const newRelease = new Release(req.body)
    const savedRelease = await newRelease.save()
    res.status(201).json(savedRelease)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}


// Controlador para actualizar los detalles de un lanzamiento
export const updateRelease = async (req, res) => {
  try {
    const { id } = req.params
    const updatedRelease = await Release.findByIdAndUpdate(id, req.body, {
      new: true
    })
    if (!updatedRelease) {
      return res.status(404).json({ message: 'Release not found' })
    }
    res.status(200).json(updatedRelease)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
// Controlador para eliminar un lanzamiento
export const deleteRelease = async (req, res) => {
  try {
    const { id } = req.params
    const deletedRelease = await Release.findByIdAndDelete(id)
    if (!deletedRelease) {
      return res.status(404).json({ message: 'Release not found' })
    }
    res.status(200).json({ message: 'Release deleted successfully' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getAllReleases = (req, res) => {
    res.json(releasesData);
};

export const getReleaseById = (req, res) => {
    const releaseId = parseInt(req.params.id);
    const release = releasesData.find(release => release.id === releaseId);

    if (!release) {
        res.status(404).json({ error: 'Lanzamiento no encontrado' });
    } else {
        res.json(release);
    }
};
