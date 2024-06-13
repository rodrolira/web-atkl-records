// controllers/artists.controller.js
import artistsData from '../data/artistsData.js'
import Artist from '../models/artist.model.js'
import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import { createAccessToken } from '../libs/jwt.js'

export const addArtist = async (req, res) => {
  try {
    const {
      artistName,
      username,
      email,
      password,
      bio,
      image,
      bandcampLink,
      facebookLink,
      instagramLink,
      soundcloudLink,
      twitterLink,
      youtubeLink,
      spotifyLink
    } = req.body

    // Verificar si el usuario ya existe
    const userFound = await User.findOne({ email })

    if (userFound) {
      return res.status(400).json(['User already exists'])
    }

    // Hash de la contraseña
    const passwordHash = await bcrypt.hash(password, 10)

    // Crear nuevo usuario
    const newUser = new User({
      username,
      email,
      password: passwordHash
    })

    // Guardar nuevo usuario en la base de datos
    const userSaved = await newUser.save()

    // Generar token de acceso
    const token = await createAccessToken({ id: userSaved._id })

    // Crear nuevo artista asociado al usuario
    const newArtist = new Artist({
      artistName,
      bio,
      image,
      bandcampLink,
      facebookLink,
      instagramLink,
      soundcloudLink,
      twitterLink,
      youtubeLink,
      spotifyLink,
      user: userSaved._id // Asignar el ID del usuario al campo 'user' del artista
    })

    // Guardar el nuevo artista en la base de datos
    await newArtist.save()

    // Enviar respuesta al cliente con el token y la información del usuario
    res.cookie('token', token)
    res.status(201).json({
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email
    })
  } catch (error) {
    console.error('Error al agregar el artista:', error)
    res.status(500).json({ error: 'Error interno del servidor.' })
  }
}

export const getAllArtists = async (req, res) => {
  try {
    const artists = await Artist.find() // Obtener todos los artistas de la base de datos
    res.json(artists) // Devolver los artistas como respuesta JSON
  } catch (error) {
    console.error('Error fetching artists:', error)
    res.status(500).json({ error: 'Error fetching artists' })
  }
}

export const getArtistById = async (req, res) => {
  try {
    const artist = await Artist.findById(req.params.id) // Buscar el artista por su ID
    if (!artist) {
      res.status(404).json({ error: 'Artista no encontrado' })
    } else {
      res.json(artist) // Devolver el artista como respuesta JSON
    }
  } catch (error) {
    console.error('Error fetching artist by ID:', error)
    res.status(500).json({ error: 'Error fetching artist by ID' })
  }
}
