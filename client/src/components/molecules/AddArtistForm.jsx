import React, { useState } from 'react'

const AddArtistForm = () => {
  // Estado para almacenar los datos del nuevo artista
  const [artistData, setArtistData] = useState({
    name: '',
    genre: '',
    biography: ''
  })

  // Función para manejar cambios en los campos del formulario
  const handleInputChange = event => {
    const { name, value } = event.target
    setArtistData({
      ...artistData,
      [name]: value
    })
  }

  // Función para manejar el envío del formulario
  const handleSubmit = event => {
    event.preventDefault()
    // Aquí puedes enviar artistData al backend para agregar el artista
    // Por ahora, solo mostraremos los datos en la consola
    console.log('Datos del nuevo artista:', artistData)
    // Limpia el formulario después de enviar los datos
    setArtistData({
      name: '',
      genre: '',
      biography: ''
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='name'>Nombre:</label>
        <input
          type='text'
          id='name'
          name='name'
          value={artistData.name}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor='genre'>Género Musical:</label>
        <input
          type='text'
          id='genre'
          name='genre'
          value={artistData.genre}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor='biography'>Biografía:</label>
        <textarea
          id='biography'
          name='biography'
          value={artistData.biography}
          onChange={handleInputChange}
          required
        />
      </div>
      <button type='submit'>Agregar Artista</button>
    </form>
  )
}

export default AddArtistForm
