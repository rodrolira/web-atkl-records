// controllers/artists.controller.js
import artistsData from '../data/artistsData.js';

export const getAllArtists = (req, res) => {
    res.json(artistsData);
};

export const getArtistById = (req, res) => {
    const artistId = parseInt(req.params.id);
    const artist = artistsData.find(artist => artist.id === artistId);

    if (!artist) {
        res.status(404).json({ error: 'Artista no encontrado' });
    } else {
        res.json(artist);
    }
};
