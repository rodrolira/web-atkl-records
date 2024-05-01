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
      profileImage,
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

    // Guardar al artista asociado al nuevo usuario
    const newArtist = new Artist({
      artistName,
      bio,
      profileImage,
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

    // Ahora, puedes guardar al artista después de registrar al usuario si es necesario
    // y luego enviar la respuesta al cliente.
  } catch (error) {
    console.error('Error al agregar el artista:', error)
    res.status(500).json({ error: 'Error interno del servidor.' })
  }
}

export const getAllArtists = async (req, res) => {
  try {
    const artists = await Artist.find()
    res.json(artists)
  } catch (error) {
    res.status(500).json({ error: 'Error fetching artists' })
  }
}


export const getArtistById = (req, res) => {
  const artistId = parseInt(req.params.id)
  const artist = artistsData.find(artist => artist.id === artistId)

  if (!artist) {
    res.status(404).json({ error: 'Artista no encontrado' })
  } else {
    res.json(artist)
  }
}
