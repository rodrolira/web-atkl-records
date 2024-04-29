import React, { useState } from 'react'
import './AddArtistModal.css' // Archivo CSS para estilos del modal

const AddArtistForm = () => {
  const [isOpen, setIsOpen] = useState(false) // Estado para controlar si el modal está abierto o cerrado
  const [artistData, setArtistData] = useState({
    name: '',
    genre: '',
    biography: ''
  })

  // Función para abrir el modal
  const openModal = () => {
    setIsOpen(true)
  }

  // Función para cerrar el modal
  const closeModal = () => {
    setIsOpen(false)
  }

  const handleInputChange = event => {
    const { name, value } = event.target
    setArtistData({
      ...artistData,
      [name]: value
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log('Datos del nuevo artista:', artistData)
    setArtistData({
      name: '',
      genre: '',
      biography: ''
    })
    closeModal() // Cierra el modal después de enviar el formulario
  }

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className='modal-content'>
        <span className='close' onClick={closeModal}>
          &times;
        </span>
        <form className='text-black' onSubmit={handleSubmit}>
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
      </div>
    </div>
  )
}

export default AddArtistForm
