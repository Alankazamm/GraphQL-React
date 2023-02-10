import { gql, useQuery } from '@apollo/client'
import React from 'react'

const SongList = () => {
  const { loading, error, data } = useQuery(query);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  return (
    <>
      <div>SongList</div>
      {
        data.songs.map((song) => (
          <li key={song.id}>{song.title}</li>
        ))
      }
    </>

  )
}

export default SongList

const query = gql`
  {
    songs{
      title
      id
    }
  }
`