import ArtistsSection from '../organisms/ArtistsSection'
function ArtistsPage ({ artistsData }) {
  return (
    <div>
      <ArtistsSection artistsData={artistsData} />
    </div>
  )
}

export default ArtistsPage
