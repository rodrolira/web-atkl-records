import { createContext, useContext, useState } from 'react'
// import { createArtistRequest } from '../api/artists'
const ArtistContext = createContext()

export const useArtists = () => {
  const context = useContext(ArtistContext)

  if (!context) {
    throw new Error('useArtist must be used within an ArtistProvider')
  }
  return context
}

export function ArtistProvider ({ children }) {
  const [artists, setArtists] = useState([]) // Estado para almacenar la lista de artistas

//   const createArtist = async artist => {
//   const res=  await createArtistRequest(artist)
//     console.log(res)
// }

  return (
    <ArtistContext.Provider value={{ artists }}>
      {children}
    </ArtistContext.Provider>
  )
}
