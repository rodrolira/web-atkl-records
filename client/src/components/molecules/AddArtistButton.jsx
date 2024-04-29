import React, { useState } from 'react'
import Button from '../atoms/Button'
import AddArtistForm from './AddArtistForm';

const AddArtistButton = () => {
  const [isFormOpen, setIsFormOpen] = useState(false) // Estado para controlar la visibilidad del formulario

  const handleButtonClick = () => {
    setIsFormOpen(true) // Cuando se hace clic en el botón, abre el formulario
  }

  return (
    <div>
      <Button className='btn-add' onClick={handleButtonClick}>
        Add Artist
      </Button>
      {isFormOpen && <AddArtistForm />}{' '}
      {/* Renderiza el formulario solo si isFormOpen es true */}
    </div>
  )
}

export default AddArtistButton
