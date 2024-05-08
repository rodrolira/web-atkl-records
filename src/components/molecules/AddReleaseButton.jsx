import { useState } from 'react'
import Button from '../atoms/Button'
import AddReleaseForm from '../molecules/AddReleaseForm' // Importa el formulario de agregar artista

const AddReleaseButton = () => {
  const [open, openChange] = useState(false)
  const functionOpenPopup = () => {
    openChange(true)
  }
  const closePopup = () => {
    openChange(false)
  }

  return (
    <>
      <Button onClick={functionOpenPopup} color='primary' variant='contained'>
        <AddReleaseForm open={open} closePopup={closePopup} />
      </Button>
    </>
  )
}

export default AddReleaseButton
