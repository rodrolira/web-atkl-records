import React from 'react'
import TrackList from './TrackList'
import AddTrackForm from './AddTrackForm'
import Navbar from '../../organisms/Navbar'
import Title from '../../atoms/Title'

const DiscographyPage = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className='mt-32'>
        <Title>Discography</Title>
        <AddTrackForm />
        <TrackList />
      </div>
    </>
  )
}

export default DiscographyPage
