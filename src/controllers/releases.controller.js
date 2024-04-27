// controllers/releases.controller.js
import releasesData from '../data/releasesData.js';

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
