import { useState } from 'react'
import Button from '../atoms/Button'
import AddArtistForm from '../molecules/AddArtistForm' // Importa el formulario de agregar artista

const AddArtistButton = () => {
  const [open, openChange] = useState(false)
  const functionOpenPopup = () => {
    openChange(true)
  }
  const closePopup = () => {
    openChange(false)
  }

  return (
    <>
      <Button onClick={functionOpenPopup} color='primary' variant=''>
        <AddArtistForm open={open} closePopup={closePopup} />
      </Button>
    </>
  )
}

export default AddArtistButton
