import React from 'react'
import TrackList from './TrackList'
import AddTrackForm from './AddTrackForm'
import Navbar from '../../organisms/Navbar'
import Title from '../../atoms/Title'
import { useAdminAuth } from '../../../contexts/AdminAuthContext'

const DiscographyPage = ({ children }) => {
  const { isAuthenticated } = useAdminAuth() // Obtén el estado de autenticación del admin

  return (
    <>
      <Navbar />
      <div className='mt-32'>
        <Title>Discography</Title>
        {isAuthenticated && <AddTrackForm />}
        <TrackList />
      </div>
    </>
  )
}

export default DiscographyPage
