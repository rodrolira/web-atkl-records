// server/controllers/artists.controller.js
import Artist from '../models/artist.model.js'
import Release from '../models/release.model.js'
import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export const addArtist = async (req, res) => {
  const {
    artist_name,
    email,
    username,
    password,
    bio,
    role,
    bandcamp_link,
    facebook_link,
    instagram_link,
    soundcloud_link,
    twitter_link,
    youtube_link,
    spotify_link,
    apple_music_link,
    beatport_link,
  } = req.body
  // Verifica si hay un archivo subido
  const image = req.file ? req.file.path : null

  if (!artist_name || !email || !username || !password) {
    return res.status(400).json({
      message: 'artist_name, username, email, and password are required',
    })
  }

  try {
        // Verificar si el correo electrónico ya está en uso
    const existingUser = await User.findOne({ where: { email } })
    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use' })
    }

    // Crear usuario
    const newUser = await User.create({
      username,
      email,
      password: await bcrypt.hash(password, 10),
    })

        // Formatear roles seleccionados con "/"
        const formattedRoles = Array.isArray(role) ? role.join(' / ') : role

    // Crear artista asociado al usuario
    const newArtist = await Artist.create({
      artist_name,
      user_id: newUser.id,
      email,
      role: formattedRoles,
      bio,
      image,
      bandcamp_link,
      facebook_link,
      instagram_link,
      soundcloud_link,
      twitter_link,
      youtube_link,
      spotify_link,
      apple_music_link,
      beatport_link,
    })

    const token = jwt.sign({ email }, process.env.SECRET, { expiresIn: '12h' })

    res.cookie('token', token, { httpOnly: true })

    console.log('New artist created:', newArtist)

    res.status(201).json(newArtist)
  } catch (error) {
    console.error(`Error adding artist: ${error.message}`, error)
    return res
      .status(500)
      .json({ message: error.message, details: error.stack })
  }
}

export const updateArtist = async (req, res) => {
  const { id } = req.params
  const {
    artist_name,
    bio,
    role,
    image,
    twitter_link,
    instagram_link,
    facebook_link,
    soundcloud_link,
    bandcamp_link,
    youtube_link,
    spotify_link,
    apple_music_link,
    beatport_link,
  } = req.body

  try {
    // Validación de campos obligatorios u otros requerimientos necesarios
    if (!artist_name || !role) {
      return res
        .status(400)
        .json({ error: 'Artist name and role are required' })
    }

    console.log(`Updating artist with ID: ${id}`)
    console.log('Update data:', req.body) // Log para verificar los datos recibidos

    // Formatear roles seleccionados con "/"
    const formattedRoles = Array.isArray(role) ? role.join(' / ') : role

    // Lógica de actualización en la base de datos
    const [updatedRowsCount, updatedRows] = await Artist.update(
      {
        artist_name,
        bio,
        role: formattedRoles,
        image,
        twitter_link,
        instagram_link,
        facebook_link,
        soundcloud_link,
        bandcamp_link,
        youtube_link,
        spotify_link,
        apple_music_link,
        beatport_link,
      },
      {
        where: { id },
        returning: true, // Para devolver el registro actualizado
      }
    )

    if (updatedRowsCount === 0) {
      return res.status(404).json({ error: 'Artist not found' })
    }

    res.json(updatedRows[0]) // Devuelve el primer registro actualizado
  } catch (error) {
    console.error('Error updating artist:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

export const deleteArtist = async (req, res) => {
  try {
    const { id } = req.params
    const artist = await Artist.findByPk(id)
    if (!artist) {
      return res.status(404).json({ message: 'Artist not found' })
    }
    // Delete artist
    await Artist.destroy({
      where: {
        id,
      },
    })

    // Delete user account
    await User.destroy({
      where: {
        id: artist.user_id,
      },
    })
    res
      .status(200)
      .json({ message: 'Artist and user account deleted successfully' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getArtists = async (req, res) => {
  try {
    const artists = await Artist.findAll()
    res.status(200).json(artists)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getArtistById = async (req, res) => {
  const { id } = req.params

  try {
    const artist = await Artist.findByPk(id)
    if (!artist) {
      return res.status(404).json({ message: 'Artist not found' })
    }
    res.status(200).json(artist)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getArtistReleases = async (req, res) => {
  const { id } = req.params

  try {
    const artist = await Artist.findByPk(id, {
      include: {
        model: Release,
        as: 'releases',
      } // Incluye los lanzamientos asociados al artista
    })

    if (!artist) {
      return res.status(404).json({ message: 'Artist not found' })
    }

    res.status(200).json(artist.releases) // Devuelve los lanzamientos del artista
  } catch (error) {
    console.error('Error fetching artist releases:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
}
